const express = require('express');
const crypto = require('crypto');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const APP_VERSION = 'v83';
const ADMIN_USER = String(process.env.HOF_ADMIN_USER || 'Admin').trim() || 'Admin';
const ADMIN_PASSWORD = String(process.env.HOF_ADMIN_PASSWORD || 'admin123');
const DB_PATH = process.env.HOF_DB_PATH || path.join(__dirname, 'hoefe.db');


app.disable('x-powered-by');
// Lokaler Test: Die HTML-Datei kann auch direkt per file:// geöffnet werden.
// Dafür erlauben wir nur die Browser-Origins, die für den lokalen Test benötigt werden.
app.use((req,res,next)=>{
  const origin=req.get('origin')||'';
  if(!origin || origin==='null' || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')){
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Vary','Origin');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,OPTIONS');
  }
  if(req.method==='OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json({ limit: '20mb' }));

// Website direkt über das Backend ausliefern.
// Dadurch öffnet http://localhost:3000/ die Höfe-der-Illwang-Webseite
// statt mit "Cannot GET /" zu antworten.
const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));
app.get('/', (_req,res)=>res.sendFile(path.join(PUBLIC_DIR, 'index.html')));

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS app_state (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    state_json TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);
db.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);
db.prepare("UPDATE admin_users SET role='admin' WHERE role='viewer'").run();
db.exec(`CREATE TABLE IF NOT EXISTS user_accounts (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL UNIQUE COLLATE NOCASE, password_hash TEXT NOT NULL, favorites_json TEXT NOT NULL DEFAULT '[]', compare_json TEXT NOT NULL DEFAULT '[]', created_at TEXT NOT NULL, updated_at TEXT NOT NULL);`);

// webhook_url/enabled bleiben nur als Altspalten für bestehende Datenbanken erhalten; der Bot nutzt sie nicht mehr.
db.exec(`CREATE TABLE IF NOT EXISTS discord_settings (
  id INTEGER PRIMARY KEY CHECK (id=1),
  webhook_url TEXT NOT NULL DEFAULT '',
  enabled INTEGER NOT NULL DEFAULT 0,
  bot_token_enc TEXT NOT NULL DEFAULT '',
  bot_enabled INTEGER NOT NULL DEFAULT 0,
  application_channel_id TEXT NOT NULL DEFAULT '1547013483046899754',
  updates_channel_id TEXT NOT NULL DEFAULT '1547013483046899755',
  updated_at TEXT NOT NULL
);`);
for(const col of [
  "bot_token_enc TEXT NOT NULL DEFAULT ''",
  "bot_enabled INTEGER NOT NULL DEFAULT 0",
  "application_channel_id TEXT NOT NULL DEFAULT '1547013483046899754'",
  "updates_channel_id TEXT NOT NULL DEFAULT '1547013483046899755'"
]){
  try{ db.exec(`ALTER TABLE discord_settings ADD COLUMN ${col}`); }catch{}
}
db.exec(`CREATE TABLE IF NOT EXISTS discord_application_messages (
  application_id TEXT PRIMARY KEY,
  channel_id TEXT NOT NULL,
  message_id TEXT NOT NULL,
  updated_at TEXT NOT NULL
);`);

db.exec(`CREATE TABLE IF NOT EXISTS admin_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_username TEXT NOT NULL,
  action TEXT NOT NULL,
  details TEXT NOT NULL,
  created_at TEXT NOT NULL
);`);

db.exec(`CREATE TABLE IF NOT EXISTS businesses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE COLLATE NOCASE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);`);
const DEFAULT_BUSINESSES=[
  'Fahrzeughändler','Viehhandel','Landhandel','Lohnunternehmen','Lennard & Alex','Agrarbetrieb Illschwang','Bergwiesenhof','Hof Kirchberger','Weingut Werner','Gemeinde'
];
(function ensureDefaultBusinesses(){
  const now=new Date().toISOString();
  const stmt=db.prepare('INSERT OR IGNORE INTO businesses(name,created_at,updated_at) VALUES(?,?,?)');
  const tx=db.transaction(()=>DEFAULT_BUSINESSES.forEach(name=>stmt.run(name,now,now)));
  tx();
})();

const VALID_ROLES = new Set(['superadmin','admin','editor','sales']);
function hashPassword(password){
  const salt=crypto.randomBytes(16).toString('hex');
  const hash=crypto.scryptSync(String(password),salt,64).toString('hex');
  return `scrypt$${salt}$${hash}`;
}
function verifyPassword(password,stored){
  try{
    const parts=String(stored).split('$');
    if(parts.length!==3 || parts[0]!=='scrypt') return false;
    const expected=Buffer.from(parts[2],'hex');
    const actual=crypto.scryptSync(String(password),parts[1],expected.length);
    return expected.length===actual.length && crypto.timingSafeEqual(expected,actual);
  }catch{return false;}
}
function ensureInitialAdmin(){
  const count=db.prepare('SELECT COUNT(*) AS count FROM admin_users').get().count;
  if(count>0) return;
  const username=ADMIN_USER;
  const password=ADMIN_PASSWORD;
  const now=new Date().toISOString();
  db.prepare('INSERT INTO admin_users(username,password_hash,role,created_at,updated_at) VALUES(?,?,?,?,?)').run(username,hashPassword(password),'superadmin',now,now);
}
ensureInitialAdmin();

const sessions = new Map();
function token(){ return crypto.randomBytes(32).toString('hex'); }
function auth(req,res,next){
  const value=req.get('authorization')||'';
  const t=value.startsWith('Bearer ')?value.slice(7):'';
  const session=sessions.get(t);
  if(!session || session.kind!=='admin') return res.status(401).json({message:'Admin-Anmeldung erforderlich.'});
  req.sessionToken=t; req.admin=session; next();
}
function requireRole(role){
  return (req,res,next)=>{
    if(!req.admin) return res.status(401).json({message:'Nicht angemeldet.'});
    if(req.admin.role!=='superadmin' && req.admin.role!==role) return res.status(403).json({message:'Keine Berechtigung.'});
    next();
  };
}
function requireAnyRole(...roles){
  return (req,res,next)=>{
    if(!req.admin) return res.status(401).json({message:'Nicht angemeldet.'});
    if(req.admin.role!=='superadmin' && !roles.includes(req.admin.role)) return res.status(403).json({message:'Keine Berechtigung.'});
    next();
  };
}
function sanitizeAdmin(row){ return {id:String(row.id),username:row.username,role:row.role}; }

app.get('/api/health', (_req,res)=>res.json({ok:true,service:'hoefe-der-illwang',version:APP_VERSION,time:new Date().toISOString()}));

app.post('/api/auth/login',(req,res)=>{
  const {username,password}=req.body||{};
  const user=db.prepare('SELECT id,username,password_hash,role FROM admin_users WHERE username=? COLLATE NOCASE').get(String(username||'').trim());
  if(!user || !verifyPassword(password,user.password_hash)) return res.status(401).json({message:'Benutzername oder Passwort falsch.'});
  const t=token();
  sessions.set(t,{kind:'admin',id:user.id,username:user.username,role:user.role,createdAt:new Date().toISOString()});
  res.json({token:t,admin:sanitizeAdmin(user)});
});

app.post('/api/auth/logout',auth,(req,res)=>{ sessions.delete(req.sessionToken); res.json({ok:true}); });
function userAuth(req,res,next){ const value=req.get('authorization')||''; const t=value.startsWith('Bearer ')?value.slice(7):''; const session=sessions.get(t); if(!session||session.kind!=='user') return res.status(401).json({message:'Nicht angemeldet.'}); req.sessionToken=t; req.user=session; next(); }
function sanitizeUser(row){return {id:String(row.id),username:row.username};}
app.post('/api/user/register',(req,res)=>{ const username=String(req.body?.username||'').trim(); const password=String(req.body?.password||''); if(username.length<2)return res.status(400).json({message:'Benutzername muss mindestens 2 Zeichen lang sein.'}); if(password.length<8)return res.status(400).json({message:'Passwort muss mindestens 8 Zeichen lang sein.'}); try{const now=new Date().toISOString(); const info=db.prepare('INSERT INTO user_accounts(username,password_hash,created_at,updated_at) VALUES(?,?,?,?)').run(username,hashPassword(password),now,now); const user=db.prepare('SELECT id,username,favorites_json,compare_json FROM user_accounts WHERE id=?').get(info.lastInsertRowid); const t=token(); sessions.set(t,{kind:'user',id:user.id,username:user.username,createdAt:now}); res.status(201).json({token:t,user:sanitizeUser(user),favorites:JSON.parse(user.favorites_json),compare:JSON.parse(user.compare_json)});}catch(e){if(String(e.message).includes('UNIQUE'))return res.status(409).json({message:'Dieser Benutzername ist bereits vergeben.'});throw e;}});
app.post('/api/user/login',(req,res)=>{const username=String(req.body?.username||'').trim();const password=String(req.body?.password||'');const user=db.prepare('SELECT id,username,password_hash,favorites_json,compare_json FROM user_accounts WHERE username=? COLLATE NOCASE').get(username);if(!user||!verifyPassword(password,user.password_hash))return res.status(401).json({message:'Benutzername oder Passwort falsch.'});const t=token();sessions.set(t,{kind:'user',id:user.id,username:user.username,createdAt:new Date().toISOString()});res.json({token:t,user:sanitizeUser(user),favorites:JSON.parse(user.favorites_json),compare:JSON.parse(user.compare_json)});});
app.post('/api/user/logout',userAuth,(req,res)=>{sessions.delete(req.sessionToken);res.json({ok:true});});
app.get('/api/user/session',userAuth,(req,res)=>{const user=db.prepare('SELECT id,username FROM user_accounts WHERE id=?').get(req.user.id);if(!user)return res.status(401).json({message:'Konto nicht gefunden.'});res.json({authenticated:true,user:sanitizeUser(user)});});
app.put('/api/user/preferences',userAuth,(req,res)=>{const favorites=Array.isArray(req.body?.favorites)?req.body.favorites.slice(0,100):[];const compare=Array.isArray(req.body?.compare)?req.body.compare.slice(0,3):[];const now=new Date().toISOString();db.prepare('UPDATE user_accounts SET favorites_json=?,compare_json=?,updated_at=? WHERE id=?').run(JSON.stringify(favorites),JSON.stringify(compare),now,req.user.id);res.json({ok:true,favorites,compare});});
app.get('/api/user/applications',userAuth,(req,res)=>{const row=db.prepare('SELECT state_json FROM app_state WHERE id=1').get();if(!row)return res.json({applications:[]});let state;try{state=JSON.parse(row.state_json);}catch{return res.status(500).json({message:'Gespeicherter Zustand ist beschädigt.'});}const applications=(Array.isArray(state.applications)?state.applications:[]).filter(a=>Number(a.accountId)===Number(req.user.id));res.json({applications});});
app.get('/api/user/profile',userAuth,(req,res)=>{const user=db.prepare('SELECT id,username,favorites_json,compare_json,created_at FROM user_accounts WHERE id=?').get(req.user.id);if(!user)return res.status(404).json({message:'Konto nicht gefunden.'});res.json({user:sanitizeUser(user),favorites:JSON.parse(user.favorites_json),compare:JSON.parse(user.compare_json),createdAt:user.created_at});});


app.get('/api/auth/session',auth,(req,res)=>res.json({authenticated:true,admin:{id:String(req.admin.id),username:req.admin.username,role:req.admin.role}}));

app.get('/api/admin/users',auth,requireRole('superadmin'),(_req,res)=>{
  const users=db.prepare('SELECT id,username,role FROM admin_users ORDER BY username COLLATE NOCASE').all();
  res.json({users:users.map(sanitizeAdmin)});
});

app.post('/api/admin/users',auth,requireRole('superadmin'),(req,res)=>{
  const username=String(req.body?.username||'').trim();
  const password=String(req.body?.password||'');
  const role=String(req.body?.role||'admin');
  if(username.length<2) return res.status(400).json({message:'Benutzername muss mindestens 2 Zeichen lang sein.'});
  if(password.length<8) return res.status(400).json({message:'Passwort muss mindestens 8 Zeichen lang sein.'});
  if(!VALID_ROLES.has(role)) return res.status(400).json({message:'Ungültige Rolle.'});
  try{
    const now=new Date().toISOString();
    const info=db.prepare('INSERT INTO admin_users(username,password_hash,role,created_at,updated_at) VALUES(?,?,?,?,?)').run(username,hashPassword(password),role,now,now);
    const user=db.prepare('SELECT id,username,role FROM admin_users WHERE id=?').get(info.lastInsertRowid);
    res.status(201).json({user:sanitizeAdmin(user)});
  }catch(e){
    if(String(e.message).includes('UNIQUE')) return res.status(409).json({message:'Dieser Benutzername ist bereits vergeben.'});
    throw e;
  }
});

app.put('/api/admin/users/:id',auth,(req,res)=>{
  const id=Number(req.params.id);
  const current=db.prepare('SELECT id,username,password_hash,role FROM admin_users WHERE id=?').get(id);
  if(!current) return res.status(404).json({message:'Admin-Profil nicht gefunden.'});
  const isSuperadmin=req.admin.role==='superadmin';
  const isOwnProfile=Number(req.admin.id)===id;
  if(!isSuperadmin && !isOwnProfile) return res.status(403).json({message:'Keine Berechtigung.'});
  const username=String(req.body?.username ?? current.username).trim();
  const password=req.body?.password==null ? '' : String(req.body.password);
  const role=isSuperadmin ? String(req.body?.role ?? current.role) : current.role;
  if(username.length<2) return res.status(400).json({message:'Benutzername muss mindestens 2 Zeichen lang sein.'});
  if(!VALID_ROLES.has(role)) return res.status(400).json({message:'Ungültige Rolle.'});
  if(password && password.length<8) return res.status(400).json({message:'Passwort muss mindestens 8 Zeichen lang sein.'});
  try{
    const now=new Date().toISOString();
    if(password) db.prepare('UPDATE admin_users SET username=?,password_hash=?,role=?,updated_at=? WHERE id=?').run(username,hashPassword(password),role,now,id);
    else db.prepare('UPDATE admin_users SET username=?,role=?,updated_at=? WHERE id=?').run(username,role,now,id);
    const user=db.prepare('SELECT id,username,role FROM admin_users WHERE id=?').get(id);
    // Bestehende Sessions desselben Benutzers übernehmen die neue Rolle/Identität.
    for(const [t,session] of sessions){ if(Number(session.id)===id){ session.username=user.username; session.role=user.role; } }
    res.json({user:sanitizeAdmin(user)});
  }catch(e){
    if(String(e.message).includes('UNIQUE')) return res.status(409).json({message:'Dieser Benutzername ist bereits vergeben.'});
    throw e;
  }
});

app.delete('/api/admin/users/:id',auth,requireRole('superadmin'),(req,res)=>{
  const id=Number(req.params.id);
  if(id===Number(req.admin.id)) return res.status(400).json({message:'Das aktuell angemeldete Admin-Profil kann nicht gelöscht werden.'});
  const count=db.prepare('SELECT COUNT(*) AS count FROM admin_users').get().count;
  if(count<=1) return res.status(400).json({message:'Mindestens ein Admin-Profil muss vorhanden sein.'});
  const info=db.prepare('DELETE FROM admin_users WHERE id=?').run(id);
  if(!info.changes) return res.status(404).json({message:'Admin-Profil nicht gefunden.'});
  for(const [t,session] of sessions){ if(Number(session.id)===id) sessions.delete(t); }
  res.json({ok:true});
});

function readAppState(res){
  const row=db.prepare('SELECT state_json, updated_at FROM app_state WHERE id=1').get();
  if(!row) return res.json({version:1,state:null,updatedAt:null});
  let state; try{state=JSON.parse(row.state_json);}catch{return res.status(500).json({message:'Gespeicherter Zustand ist beschädigt.'});}
  return res.json({version:1,state,updatedAt:row.updated_at});
}
// Öffentlicher Read-only Zustand: kein Login nötig.
app.get('/api/public/state',(_req,res)=>{ res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate'); res.setHeader('Pragma','no-cache'); res.setHeader('Expires','0'); readAppState(res); });
app.get('/api/state',auth,(req,res)=>readAppState(res));


// --- Zentrale Hof-Mutationen ---
app.get('/api/admin/logs',auth,requireAnyRole('admin','editor','sales','viewer'),(_req,res)=>{
  const logs=db.prepare('SELECT id,admin_username AS username,action,details,created_at AS time FROM admin_logs ORDER BY id DESC LIMIT 200').all();
  res.json({logs});
});
app.post('/api/admin/logs',auth,requireAnyRole('admin','editor','sales'),(req,res)=>{
  const action=cleanPublicText(req.body?.action,160);
  const details=cleanPublicText(req.body?.details,1000);
  if(!action || !details) return res.status(400).json({message:'Aktion und Details sind erforderlich.'});
  const now=new Date().toISOString();
  const info=db.prepare('INSERT INTO admin_logs(admin_username,action,details,created_at) VALUES(?,?,?,?)').run(req.admin.username,action,details,now);
  res.status(201).json({log:{id:info.lastInsertRowid,username:req.admin.username,action,details,time:now}});
});
app.delete('/api/admin/logs',auth,requireRole('superadmin'),(_req,res)=>{
  db.prepare('DELETE FROM admin_logs').run();
  res.json({ok:true});
});
app.put('/api/admin/farms/:id/status',auth,requireAnyRole('admin','editor','sales'),(req,res)=>{
  const id=Number(req.params.id); const status=String(req.body?.status||'');
  if(!Number.isFinite(id) || !['zu-verkaufen','verkauft'].includes(status)) return res.status(400).json({message:'Ungültiger Hofstatus.'});
  const state=readCurrentState(); if(!state || !Array.isArray(state.hoefe)) return res.status(503).json({message:'Hofdaten fehlen.'});
  const hof=state.hoefe.find(h=>Number(h.id)===id); if(!hof) return res.status(404).json({message:'Hof nicht gefunden.'});
  state.status=state.status&&typeof state.status==='object'&&!Array.isArray(state.status)?state.status:{};
  state.kaeufer=state.kaeufer&&typeof state.kaeufer==='object'&&!Array.isArray(state.kaeufer)?state.kaeufer:{};
  state.status[id]=status;
  if(status==='verkauft') state.kaeufer[id]=cleanPublicText(req.body?.buyer,180)||'Unbekannt'; else delete state.kaeufer[id];
  const updatedAt=writeCurrentState(state);
  res.json({ok:true,updatedAt,hof:{id:hof.id,name:hof.name,status:state.status[id],buyer:state.kaeufer[id]||null}});
});
app.put('/api/admin/farms/:id/buyer',auth,requireAnyRole('admin','editor','sales'),(req,res)=>{
  const id=Number(req.params.id); const buyer=cleanPublicText(req.body?.buyer,180)||'Unbekannt';
  if(!Number.isFinite(id)) return res.status(400).json({message:'Ungültiger Hof.'});
  const state=readCurrentState(); if(!state || !Array.isArray(state.hoefe)) return res.status(503).json({message:'Hofdaten fehlen.'});
  const hof=state.hoefe.find(h=>Number(h.id)===id); if(!hof) return res.status(404).json({message:'Hof nicht gefunden.'});
  state.kaeufer=state.kaeufer&&typeof state.kaeufer==='object'&&!Array.isArray(state.kaeufer)?state.kaeufer:{};
  state.kaeufer[id]=buyer;
  const updatedAt=writeCurrentState(state);
  res.json({ok:true,updatedAt,hof:{id:hof.id,name:hof.name,buyer}});
});

// --- Discord-Bot / zentrale Antrag-Statusverwaltung ---
let discordBotApi = null;
let discordBotStatus = {state:'disabled', message:'Discord-Bot nicht aktiviert.'};
function readCurrentState(){
  const row=db.prepare('SELECT state_json FROM app_state WHERE id=1').get();
  if(!row) return null;
  try{return JSON.parse(row.state_json);}catch{return null;}
}
function writeCurrentState(state){
  const updatedAt=new Date().toISOString();
  db.prepare('UPDATE app_state SET state_json=?, updated_at=? WHERE id=1').run(JSON.stringify(state),updatedAt);
  return updatedAt;
}
function findApplication(state,id){
  return Array.isArray(state?.applications) ? state.applications.find(a=>String(a.id)===String(id)) : null;
}
const APPLICATION_RETENTION_MS=3*24*60*60*1000;
function isFinishedApplication(application){ return application?.status==='Angenommen'||application?.status==='Abgelehnt'; }
function pruneExpiredApplications(state,now=Date.now()){
  const applications=Array.isArray(state?.applications)?state.applications:[];
  const expired=applications.filter(a=>isFinishedApplication(a)&&Number.isFinite(Date.parse(a.resolvedAt))&&now-Date.parse(a.resolvedAt)>=APPLICATION_RETENTION_MS);
  if(expired.length) state.applications=applications.filter(a=>!expired.includes(a));
  return expired;
}
function applyApplicationStatusServer(applicationId,status){
  const allowed=['Neu','In Bearbeitung','Angenommen','Abgelehnt'];
  if(!allowed.includes(status)) return {ok:false,status:400,message:'Ungültiger Antragstatus.'};
  const state=readCurrentState();
  if(!state) return {ok:false,status:503,message:'Noch kein gemeinsamer Zustand vorhanden.'};
  state.applications=Array.isArray(state.applications)?state.applications:[];
  const a=findApplication(state,applicationId);
  if(!a) return {ok:false,status:404,message:'Antrag nicht gefunden.'};
  const oldStatus=a.status||'Neu';
  if(isFinishedApplication(a)) return {ok:false,status:409,message:'Abgeschlossene Anträge können nicht weiter geändert werden.'};
  a.status=status;
  if(isFinishedApplication(a)) a.resolvedAt=new Date().toISOString();
  else delete a.resolvedAt;
  let soldHof=null;
  if(status==='Angenommen'){
    state.status=state.status&&typeof state.status==='object'?state.status:{};
    state.kaeufer=state.kaeufer&&typeof state.kaeufer==='object'?state.kaeufer:{};
    const hof=Array.isArray(state.hoefe)?state.hoefe.find(h=>Number(h.id)===Number(a.hofId)):null;
    if(hof){
      state.status[a.hofId]='verkauft';
      state.kaeufer[a.hofId]=(a.applicantFarmName||a.name||'Unbekannt').trim()||'Unbekannt';
      soldHof={name:hof.name,buyer:state.kaeufer[a.hofId],id:a.hofId};
    }
  }
  const updatedAt=writeCurrentState(state);
  return {ok:true,application:a,oldStatus,updatedAt,soldHof};
}
function deleteApplicationServer(applicationId){
    if(!isFinishedApplication(a)) return {ok:false,status:409,message:'Offene Anträge können nicht gelöscht werden.'};
  const state=readCurrentState();
  if(!state) return {ok:false,status:503,message:'Noch kein gemeinsamer Zustand vorhanden.'};
  state.applications=Array.isArray(state.applications)?state.applications:[];
  const before=state.applications.length;
  state.applications=state.applications.filter(a=>String(a.id)!==String(applicationId));
  if(state.applications.length===before) return {ok:false,status:404,message:'Antrag nicht gefunden.'};
  const updatedAt=writeCurrentState(state);
  return {ok:true,updatedAt};
}
function clearApplicationsServer(){
  const state=readCurrentState();
  if(!state) return {ok:false,status:503,message:'Noch kein gemeinsamer Zustand vorhanden.'};
  if((state.applications||[]).some(a=>!isFinishedApplication(a))) return {ok:false,status:409,message:'Offene Anträge können nicht gelöscht werden.'};
  state.applications=[];
  const updatedAt=writeCurrentState(state);
  return {ok:true,updatedAt};
}
async function cleanupExpiredApplications(){
  const state=readCurrentState();
  if(!state) return;
  const expired=pruneExpiredApplications(state);
  if(!expired.length) return;
  writeCurrentState(state);
  for(const application of expired){
    try{ if(discordBotApi?.removeApplicationMessage) await discordBotApi.removeApplicationMessage(application); }
    catch(e){ console.warn('Abgelaufene Discord-Antragsnachricht konnte nicht gelöscht werden:',e.message); }
  }
}

// Öffentlicher Kaufantrag: normale Besucher brauchen keinen Admin-Login.
// Der Antrag wird serverseitig in den gemeinsamen Zustand geschrieben, damit
// er auf jedem Admin-Gerät erscheint. Optional wird der konfigurierte Discord-Webhook
// ebenfalls serverseitig benachrichtigt. Ein kleines Rate-Limit schützt vor Spam.
const publicApplicationRate = new Map();
function allowPublicApplication(req){
  const key=(req.ip||'unknown').replace('::ffff:','');
  const now=Date.now();
  const previous=publicApplicationRate.get(key)||0;
  if(now-previous < 3000) return false;
  publicApplicationRate.set(key,now);
  if(publicApplicationRate.size>5000){
    for(const [k,t] of publicApplicationRate){ if(now-t>3600000) publicApplicationRate.delete(k); }
  }
  return true;
}
function cleanPublicText(value,max=500){ return String(value??'').trim().slice(0,max); }
// Zentrale Discord-Konfiguration. Geheimnisse bleiben ausschließlich auf dem Server.
const discordKeyDir=path.join(require('os').homedir(),'.config','hoefe-der-illwang');
const discordKeyPath=path.join(discordKeyDir,'discord-secret.key');
const fs=require('fs');
function getDiscordKey(){
  try{
    fs.mkdirSync(discordKeyDir,{recursive:true,mode:0o700});
    if(!fs.existsSync(discordKeyPath)) fs.writeFileSync(discordKeyPath,crypto.randomBytes(32),{mode:0o600});
    return fs.readFileSync(discordKeyPath);
  }catch(e){ throw new Error('Discord-Schlüssel konnte nicht geladen werden.'); }
}
function encryptSecret(value){
  if(!value) return '';
  const iv=crypto.randomBytes(12),cipher=crypto.createCipheriv('aes-256-gcm',getDiscordKey(),iv);
  const data=Buffer.concat([cipher.update(String(value),'utf8'),cipher.final()]);
  return [iv.toString('base64'),cipher.getAuthTag().toString('base64'),data.toString('base64')].join('.');
}
function decryptSecret(value){
  if(!value) return '';
  try{ const [ivB64,tagB64,dataB64]=String(value).split('.'); const decipher=crypto.createDecipheriv('aes-256-gcm',getDiscordKey(),Buffer.from(ivB64,'base64')); decipher.setAuthTag(Buffer.from(tagB64,'base64')); return Buffer.concat([decipher.update(Buffer.from(dataB64,'base64')),decipher.final()]).toString('utf8'); }catch{return '';}
}
function readDiscordSettings(){
  const row=db.prepare('SELECT bot_token_enc, bot_enabled, application_channel_id, updates_channel_id, updated_at FROM discord_settings WHERE id=1').get();
  if(!row) return {botEnabled:false,hasBotToken:false,applicationChannelId:'1547013483046899754',updatesChannelId:'1547013483046899755',updatedAt:null};
  return {botEnabled:!!row.bot_enabled,hasBotToken:!!row.bot_token_enc,applicationChannelId:row.application_channel_id||'1547013483046899754',updatesChannelId:row.updates_channel_id||'1547013483046899755',updatedAt:row.updated_at||null};
}
function getDiscordBotToken(){ const row=db.prepare('SELECT bot_token_enc FROM discord_settings WHERE id=1').get(); return row?.bot_token_enc?decryptSecret(row.bot_token_enc):''; }
app.get('/api/admin/discord',auth,(req,res)=>{
  if(!['superadmin','editor'].includes(req.admin?.role)) return res.status(403).json({message:'Keine Berechtigung.'});
  res.json({ok:true,settings:readDiscordSettings(),botConnected:!!discordBotApi?.client?.isReady?.(),botStatus:discordBotStatus});
});
app.put('/api/admin/discord',auth,requireAnyRole('editor'),async(req,res)=>{
  const botEnabled=!!req.body?.botEnabled;
  const applicationChannelId=String(req.body?.applicationChannelId||'').trim();
  const updatesChannelId=String(req.body?.updatesChannelId||'').trim();
  const tokenProvided=Object.prototype.hasOwnProperty.call(req.body||{},'botToken');
  const botToken=tokenProvided?String(req.body?.botToken||'').trim():getDiscordBotToken();
  if(!/^\d{15,25}$/.test(applicationChannelId) || !/^\d{15,25}$/.test(updatesChannelId)) return res.status(400).json({message:'Bitte gültige Discord-Kanal-IDs eintragen.'});
  if(botEnabled && !botToken) return res.status(400).json({message:'Für den Discord-Bot fehlt der Bot-Token.'});
  const updatedAt=new Date().toISOString();
  db.prepare(`INSERT INTO discord_settings(id,webhook_url,enabled,bot_token_enc,bot_enabled,application_channel_id,updates_channel_id,updated_at) VALUES(1,'',0,?,?,?,?,?)
    ON CONFLICT(id) DO UPDATE SET webhook_url='', enabled=0, bot_token_enc=excluded.bot_token_enc, bot_enabled=excluded.bot_enabled, application_channel_id=excluded.application_channel_id, updates_channel_id=excluded.updates_channel_id, updated_at=excluded.updated_at`).run(tokenProvided?encryptSecret(botToken):(db.prepare('SELECT bot_token_enc FROM discord_settings WHERE id=1').get()?.bot_token_enc||''),botEnabled?1:0,applicationChannelId,updatesChannelId,updatedAt);
  if(discordBotApi?.client){ try{ await discordBotApi.client.destroy(); }catch{} discordBotApi=null; }
  discordBotStatus={state:botEnabled?'connecting':'disabled',message:botEnabled?'Discord-Bot wird verbunden …':'Discord-Bot deaktiviert.'};
  if(!botEnabled) return res.json({ok:true,settings:readDiscordSettings(),botConnected:false,botStatus:discordBotStatus});
  try{
    await startDiscordBot();
    return res.json({ok:true,settings:readDiscordSettings(),botConnected:!!discordBotApi?.client?.isReady?.(),botStatus:discordBotStatus});
  }catch(e){
    return res.status(400).json({message:e.message||'Discord-Bot konnte nicht verbunden werden.',settings:readDiscordSettings(),botConnected:false,botStatus:discordBotStatus});
  }
});
app.post('/api/admin/discord/test',auth,requireAnyRole('editor'),async(req,res)=>{
  if(!discordBotApi?.client?.isReady?.() || !discordBotApi?.testConnection) return res.status(400).json({message:discordBotStatus.message||'Discord-Bot ist nicht verbunden.'});
  try{ await discordBotApi.testConnection(); res.json({ok:true,message:'Testnachricht wurde im Antrag-Kanal gesendet.'}); }
  catch(e){ res.status(400).json({message:e.message||'Testnachricht konnte nicht gesendet werden.'}); }
});

app.get('/api/public/businesses',(_req,res)=>{
  const businesses=db.prepare('SELECT id,name FROM businesses ORDER BY name COLLATE NOCASE ASC').all();
  res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate');
  res.json({ok:true,businesses});
});
app.get('/api/admin/businesses',auth,requireAnyRole('admin','editor'),(_req,res)=>{
  const businesses=db.prepare('SELECT id,name,created_at,updated_at FROM businesses ORDER BY name COLLATE NOCASE ASC').all();
  res.json({ok:true,businesses});
});
app.post('/api/admin/businesses',auth,requireAnyRole('admin','editor'),(req,res)=>{
  const name=cleanPublicText(req.body?.name,120);
  if(!name) return res.status(400).json({message:'Bitte einen Betriebsnamen eingeben.'});
  const now=new Date().toISOString();
  try{
    const result=db.prepare('INSERT INTO businesses(name,created_at,updated_at) VALUES(?,?,?)').run(name,now,now);
    res.status(201).json({ok:true,business:{id:result.lastInsertRowid,name,created_at:now,updated_at:now}});
  }catch(e){
    if(String(e.message).includes('UNIQUE')) return res.status(409).json({message:'Dieser Betriebsname existiert bereits.'});
    res.status(500).json({message:'Betrieb konnte nicht angelegt werden.'});
  }
});
app.put('/api/admin/businesses/:id',auth,requireAnyRole('admin','editor'),(req,res)=>{
  const id=Number(req.params.id),name=cleanPublicText(req.body?.name,120);
  if(!Number.isInteger(id)||id<1||!name) return res.status(400).json({message:'Ungültiger Betrieb.'});
  const now=new Date().toISOString();
  try{
    const result=db.prepare('UPDATE businesses SET name=?,updated_at=? WHERE id=?').run(name,now,id);
    if(!result.changes) return res.status(404).json({message:'Betrieb nicht gefunden.'});
    const business=db.prepare('SELECT id,name,created_at,updated_at FROM businesses WHERE id=?').get(id);
    res.json({ok:true,business});
  }catch(e){
    if(String(e.message).includes('UNIQUE')) return res.status(409).json({message:'Dieser Betriebsname existiert bereits.'});
    res.status(500).json({message:'Betrieb konnte nicht geändert werden.'});
  }
});
app.delete('/api/admin/businesses/:id',auth,requireAnyRole('admin','editor'),(req,res)=>{
  const id=Number(req.params.id);
  if(!Number.isInteger(id)||id<1) return res.status(400).json({message:'Ungültiger Betrieb.'});
  const result=db.prepare('DELETE FROM businesses WHERE id=?').run(id);
  if(!result.changes) return res.status(404).json({message:'Betrieb nicht gefunden.'});
  res.json({ok:true});
});

app.post('/api/public/applications', async (req,res)=>{
  if(!allowPublicApplication(req)) return res.status(429).json({message:'Bitte kurz warten und den Antrag erneut versuchen.'});
  const body=req.body||{};
  const hofId=Number(body.hofId);
  const name=cleanPublicText(body.name,120);
  const contact=cleanPublicText(body.contact,240);
  const message=cleanPublicText(body.message,1000);
  let applicantFarmId=body.applicantFarmId==null||body.applicantFarmId===''?null:Number(body.applicantFarmId);
  let applicantFarmName=cleanPublicText(body.applicantFarmName,180);
  const applicantFarmNew=!!body.applicantFarmNew;
  if(!Number.isFinite(hofId) || !name || !contact) return res.status(400).json({message:'Hof, Name und Kontaktinfos sind erforderlich.'});
  if(body.applicantFarmId!=null && body.applicantFarmId!=='' && !Number.isFinite(applicantFarmId)) return res.status(400).json({message:'Ungültiger eigener Hof.'});
  if(applicantFarmNew && !applicantFarmName) return res.status(400).json({message:'Ein neuer Hofname ist erforderlich.'});
  const row=db.prepare('SELECT state_json FROM app_state WHERE id=1').get();
  if(!row) return res.status(503).json({message:'Noch kein gemeinsamer Zustand vorhanden.'});
  let state;
  try{ state=JSON.parse(row.state_json); }catch{return res.status(500).json({message:'Gespeicherter Zustand ist beschädigt.'});}
  if(!Array.isArray(state.hoefe)) return res.status(500).json({message:'Hofdaten fehlen.'});
  const hof=state.hoefe.find(h=>Number(h.id)===hofId);
  if(!hof) return res.status(404).json({message:'Hof nicht gefunden.'});
  state.status=state.status||{};
  if(state.status[hofId]==='verkauft') return res.status(409).json({message:'Dieser Hof ist bereits verkauft.'});
  state.applications=Array.isArray(state.applications)?state.applications:[];
  // Ein neu eingegebener Betrieb wird serverseitig zuerst in die zentrale Betriebsliste übernommen.
  // Dadurch bleibt der Name auch nach dem Antrag und auf anderen Geräten verfügbar.
  if(applicantFarmNew){
    const businessName=applicantFarmName;
    const now=new Date().toISOString();
    try{
      db.prepare('INSERT OR IGNORE INTO businesses(name,created_at,updated_at) VALUES(?,?,?)').run(businessName,now,now);
      const stored=db.prepare('SELECT id,name FROM businesses WHERE name=? COLLATE NOCASE').get(businessName);
      if(stored){
        applicantFarmId=stored.id;
        applicantFarmName=stored.name;
      }
    }catch(e){ return res.status(500).json({message:'Der neue Betriebsname konnte nicht gespeichert werden.'}); }
  } else if(applicantFarmName){
    const stored=db.prepare('SELECT id,name FROM businesses WHERE name=? COLLATE NOCASE').get(applicantFarmName);
    if(stored){ applicantFarmId=stored.id; applicantFarmName=stored.name; }
  }
  const sessionToken=(req.get('authorization')||'').startsWith('Bearer ')?(req.get('authorization')||'').slice(7):''; const optionalSession=sessions.get(sessionToken); const accountId=optionalSession?.kind==='user'&&Number.isInteger(Number(optionalSession.id))?Number(optionalSession.id):null;
  const application={
    id:'KA-'+Date.now().toString(36).toUpperCase()+'-'+crypto.randomBytes(2).toString('hex').toUpperCase(),
    hofId, hofName:cleanPublicText(hof.name,180), preis:cleanPublicText(hof.preis,80), name,
    applicantFarmId: applicantFarmId!=null && Number.isFinite(applicantFarmId) ? applicantFarmId : null,
    applicantFarmName, applicantFarmNew, contact, message,
    time:new Date().toLocaleString('de-DE'), status:'Neu', accountId
  };
  state.applications.unshift(application);
  const updatedAt=new Date().toISOString();
  db.prepare('UPDATE app_state SET state_json=?, updated_at=? WHERE id=1').run(JSON.stringify(state),updatedAt);
  // Kaufantrag sofort bestätigen; Discord darf die HTTP-Antwort nicht verzögern.
  res.status(201).json({ok:true,application,discordSent:false,discordBotSent:false,updatedAt});
  if(discordBotApi?.notifyNewApplication){
    Promise.resolve(discordBotApi.notifyNewApplication(application))
      .then(sent=>{ if(!sent) console.warn('Discord-Bot Antrag konnte nicht zugestellt werden.'); })
      .catch(e=>console.warn('Discord-Bot Antrag fehlgeschlagen:',e.message));
  }
});


app.put('/api/admin/applications/:id/status',auth,requireAnyRole('admin','editor','sales'),async (req,res)=>{
  const result=applyApplicationStatusServer(req.params.id,String(req.body?.status||''));
  if(!result.ok) return res.status(result.status).json({message:result.message});
  try{ if(discordBotApi?.notifyApplicationStatus) await discordBotApi.notifyApplicationStatus(result.application,result.oldStatus,result.soldHof); }catch(e){ console.warn('Discord-Bot Statusupdate fehlgeschlagen:',e.message); }
  res.json(result);
});
app.delete('/api/admin/applications/:id',auth,requireAnyRole('admin','editor','sales'),async (req,res)=>{
  const id=String(req.params.id);
  const state=readCurrentState(); const a=findApplication(state,id);
  const result=deleteApplicationServer(id);
  if(!result.ok) return res.status(result.status).json({message:result.message});
  try{ if(discordBotApi?.notifyApplicationDeleted) await discordBotApi.notifyApplicationDeleted(a); }catch(e){ console.warn('Discord-Bot Löschmeldung fehlgeschlagen:',e.message); }
  res.json(result);
});
app.delete('/api/admin/applications',auth,requireAnyRole('admin','editor','sales'),async (req,res)=>{
  const result=clearApplicationsServer();
  if(!result.ok) return res.status(result.status).json({message:result.message});
  try{ if(discordBotApi?.notifyApplicationsCleared) await discordBotApi.notifyApplicationsCleared(); }catch(e){ console.warn('Discord-Bot Löschmeldung fehlgeschlagen:',e.message); }
  res.json(result);
});

function validateIncomingState(incoming){
  if(!incoming || typeof incoming!=='object' || Array.isArray(incoming)) throw new Error('Ungültiger Zustand.');
  const state={...incoming};
  if(state.status!==undefined && (typeof state.status!=='object' || Array.isArray(state.status))) throw new Error('Status muss ein Objekt sein.');
  if(state.kaeufer!==undefined && (typeof state.kaeufer!=='object' || Array.isArray(state.kaeufer))) throw new Error('Käuferliste muss ein Objekt sein.');
  if(state.hoefe!==undefined && (!Array.isArray(state.hoefe))) throw new Error('Hofliste muss ein Array sein.');
  if(state.applications!==undefined && (!Array.isArray(state.applications))) throw new Error('Antragsliste muss ein Array sein.');
  if(state.businesses!==undefined && (!Array.isArray(state.businesses))) throw new Error('Betriebsliste muss ein Array sein.');
  state.hoefe = Array.isArray(state.hoefe) ? state.hoefe : [];
  state.applications = Array.isArray(state.applications) ? state.applications : [];
  state.status = state.status && typeof state.status === 'object' && !Array.isArray(state.status) ? state.status : {};
  state.kaeufer = state.kaeufer && typeof state.kaeufer === 'object' && !Array.isArray(state.kaeufer) ? state.kaeufer : {};
  state.businesses = Array.isArray(state.businesses) ? state.businesses : [];
  return state;
}

app.put('/api/state',auth,requireAnyRole('admin','editor','sales'),(req,res)=>{
  try{
    const incoming=validateIncomingState(req.body);
    const updatedAt=new Date().toISOString();
    db.prepare(`INSERT INTO app_state(id,state_json,updated_at) VALUES(1,?,?) ON CONFLICT(id) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at`).run(JSON.stringify(incoming),updatedAt);
    res.json({ok:true,updatedAt});
  }catch(e){
    res.status(400).json({message:e.message||'Ungültiger Zustand.'});
  }
});

async function startDiscordBot(){
  const settings=readDiscordSettings();
  const botToken=getDiscordBotToken();
  if(!settings.botEnabled || !botToken){
    discordBotStatus={state:'disabled',message:'Discord-Bot nicht aktiviert oder kein Token gespeichert.'};
    return null;
  }
  discordBotStatus={state:'connecting',message:'Discord-Bot verbindet sich mit Discord …'};
  try{
    const bot=require('./discord_bot');
    discordBotApi=await bot.startDiscordBot({
      token:botToken,
      applicationChannelId:settings.applicationChannelId,
      updatesChannelId:settings.updatesChannelId,
      getState:readCurrentState,
      saveState:writeCurrentState,
      getApplicationMessage:(id)=>db.prepare('SELECT channel_id,message_id FROM discord_application_messages WHERE application_id=?').get(String(id)),
      saveApplicationMessage:(id,channelId,messageId)=>db.prepare(`INSERT INTO discord_application_messages(application_id,channel_id,message_id,updated_at) VALUES(?,?,?,?) ON CONFLICT(application_id) DO UPDATE SET channel_id=excluded.channel_id,message_id=excluded.message_id,updated_at=excluded.updated_at`).run(String(id),String(channelId),String(messageId),new Date().toISOString()),
      deleteApplicationMessage:(id)=>db.prepare('DELETE FROM discord_application_messages WHERE application_id=?').run(String(id)),
      applyApplicationStatus:applyApplicationStatusServer
    });
    discordBotStatus={state:'connected',message:`Discord-Bot verbunden als ${discordBotApi.client.user?.tag||'Bot'}.`};
    return discordBotApi;
  }catch(e){
    discordBotApi=null;
    discordBotStatus={state:'error',message:e.message||'Discord-Bot konnte nicht verbunden werden.'};
    throw e;
  }
}
function startServer(port = PORT){
  return new Promise((resolve, reject) => {
    const server = app.listen(port, async () => {
      console.log(`Höfe der Illschwang Backend ${APP_VERSION} läuft auf Port ${port}`);
      try { await startDiscordBot(); } catch (e) { console.error('Discord-Bot:', e.message); }
      await cleanupExpiredApplications();
      const cleanupTimer=setInterval(() => cleanupExpiredApplications().catch(e => console.warn('Antragsbereinigung fehlgeschlagen:',e.message)),60*60*1000);
      cleanupTimer.unref();
      resolve(server);
    });
    server.on('error', reject);
  });
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error('Serverstart fehlgeschlagen:', error.message);
    process.exit(1);
  });
}

module.exports = { app, startServer, validateIncomingState, readCurrentState, writeCurrentState };
