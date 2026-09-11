const {
  Client,
  GatewayIntentBits,
  Partials,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  PermissionsBitField
} = require('discord.js');

function esc(v){return String(v??'—').slice(0,1024);}
function statusMeta(status){
  return {
    'Neu': {emoji:'📨',color:0x64748b,label:'Neu'},
    'In Bearbeitung': {emoji:'🟡',color:0xf59e0b,label:'In Bearbeitung'},
    'Angenommen': {emoji:'🟢',color:0x10b981,label:'Angenommen'},
    'Abgelehnt': {emoji:'🔴',color:0xef4444,label:'Abgelehnt'}
  }[status] || {emoji:'📨',color:0x64748b,label:status||'Neu'};
}
function buttons(id,status){
  const disabled=status==='Angenommen'||status==='Abgelehnt';
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId(`hofapp:${id}:inbearbeitung`).setLabel('In Bearbeitung').setStyle(ButtonStyle.Primary).setDisabled(disabled||status==='In Bearbeitung'),
    new ButtonBuilder().setCustomId(`hofapp:${id}:angenommen`).setLabel('Annehmen').setStyle(ButtonStyle.Success).setDisabled(disabled||status==='Angenommen'),
    new ButtonBuilder().setCustomId(`hofapp:${id}:abgelehnt`).setLabel('Ablehnen').setStyle(ButtonStyle.Danger).setDisabled(disabled||status==='Abgelehnt')
  );
}
function embedFor(a){
  const m=statusMeta(a.status||'Neu');
  const e=new EmbedBuilder().setTitle(`${m.emoji} Kaufantrag · ${esc(a.id)}`).setDescription(`Interesse an **${esc(a.hofName)}**`).setColor(m.color).addFields(
    {name:'👤 Spielername',value:esc(a.name),inline:true},
    {name:'🏡 Eigener Hof',value:esc((a.applicantFarmName||'—')+(a.applicantFarmNew?' · 🆕 neu':'')),inline:true},
    {name:'💰 Preis',value:esc(a.preis),inline:true},
    {name:'📞 Kontakt',value:esc(a.contact),inline:false},
    {name:'💬 Nachricht',value:esc(a.message||'Keine Nachricht'),inline:false},
    {name:'📌 Status',value:`${m.emoji} ${m.label}`,inline:true}
  ).setFooter({text:`Eingegangen: ${esc(a.time)}`});
  return e;
}
function canModerate(member){
  return !!member && (member.permissions?.has(PermissionsBitField.Flags.ManageGuild) || member.permissions?.has(PermissionsBitField.Flags.Administrator));
}

async function startDiscordBot({token,applicationChannelId,updatesChannelId,getState,saveState,getApplicationMessage,saveApplicationMessage,deleteApplicationMessage,applyApplicationStatus}){
  const client=new Client({intents:[GatewayIntentBits.Guilds],partials:[Partials.Channel]});
  async function channel(id){ if(!id)return null; try{return await client.channels.fetch(id);}catch{return null;} }
  async function postUpdate(text){
    const c=await getWritableChannel(updatesChannelId,'Update-Kanal');
    await c.send({embeds:[new EmbedBuilder().setColor(0x64748b).setDescription(text).setTimestamp()]});
    return true;
  }
  async function updateMessage(a){
    const ref=getApplicationMessage(a.id); if(!ref)return false;
    try{
      const c=await client.channels.fetch(ref.channel_id); if(!c?.isTextBased())return false;
      const msg=await c.messages.fetch(ref.message_id);
      await msg.edit({embeds:[embedFor(a)],components:[buttons(a.id,a.status||'Neu')]});
      return true;
    }catch{return false;}
  }
  async function notifyNewApplication(a){
    const c=await getWritableChannel(applicationChannelId,'Antrags-Kanal');
    const msg=await c.send({embeds:[embedFor(a)],components:[buttons(a.id,a.status||'Neu')]});
    saveApplicationMessage(a.id,c.id,msg.id);
    await postUpdate(`📨 **Antrag gesendet** · ${esc(a.id)} · ${esc(a.name)} · Betrieb: **${esc(a.applicantFarmName||'—')}** → **${esc(a.hofName)}**`);
    return true;
  }
  async function notifyApplicationStatus(a,oldStatus,soldHof){
    await updateMessage(a);
    const st=a.status||'Neu';
    let text=`${statusMeta(st).emoji} **Antrag ${statusMeta(st).label}** · ${esc(a.id)} · ${esc(a.name)} · Betrieb: **${esc(a.applicantFarmName||'—')}** → **${esc(a.hofName)}**`;
    if(st==='Angenommen'&&soldHof) text+=`\n🏡 Hof automatisch verkauft an **${esc(soldHof.buyer)}**.`;
    await postUpdate(text);
    return true;
  }
  async function notifyApplicationDeleted(a){
    if(a) await postUpdate(`🗑️ **Antrag gelöscht** · ${esc(a.id)} · ${esc(a.name)} → **${esc(a.hofName)}`);
    if(a) deleteApplicationMessage(a.id);
    return true;
  }
  async function notifyApplicationsCleared(){
    await postUpdate('🗑️ **Alle Kaufanträge wurden gelöscht.**');
    return true;
  }
  async function removeApplicationMessage(a){
    const ref=a&&getApplicationMessage(a.id);
    if(!ref){ if(a) deleteApplicationMessage(a.id); return true; }
    try{
      const c=await client.channels.fetch(ref.channel_id);
      const msg=c?.isTextBased()?await c.messages.fetch(ref.message_id):null;
      await msg?.delete();
    }catch{}
    deleteApplicationMessage(a.id);
    return true;
  }

  async function getWritableChannel(id,label){
    if(!id) throw new Error(`${label}: Kanal-ID fehlt.`);
    let c;
    try{ c=await client.channels.fetch(id); }catch(e){ throw new Error(`${label}: Kanal ${id} konnte nicht gefunden/geladen werden. Prüfe die Kanal-ID und ob der Bot Zugriff auf den Server hat.`); }
    if(!c?.isTextBased()) throw new Error(`${label}: Der angegebene Kanal ist kein Textkanal.`);
    const me=c.guild?.members?.me || (c.guild ? await c.guild.members.fetch(client.user.id).catch(()=>null) : null);
    if(me && c.permissionsFor){
      const perms=c.permissionsFor(me);
      const needed=[PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.EmbedLinks,PermissionsBitField.Flags.ReadMessageHistory];
      if(!needed.every(flag=>perms?.has(flag))) throw new Error(`${label}: Dem Bot fehlen Rechte. Benötigt werden „Kanal ansehen“, „Nachrichten senden“, „Links einbetten“ und „Nachrichtenverlauf lesen“.`);
    }
    return c;
  }
  async function testConnection(){
    const c=await getWritableChannel(applicationChannelId,'Antrags-Kanal');
    await c.send({embeds:[new EmbedBuilder().setColor(0x10b981).setTitle('✅ Discord-Bot verbunden').setDescription('Der Höfe-der-Illwang-Bot ist korrekt eingerichtet und kann Kaufanträge empfangen.').setTimestamp()]});
    return true;
  }

  client.on('interactionCreate',async interaction=>{
    if(!interaction.isButton() || !interaction.customId.startsWith('hofapp:'))return;
    if(!canModerate(interaction.member)){
      await interaction.reply({content:'❌ Du brauchst „Server verwalten“ oder Administrator-Rechte, um Anträge zu bearbeiten.',ephemeral:true});
      return;
    }
    const [,id,action]=interaction.customId.split(':');
    const map={inbearbeitung:'In Bearbeitung',angenommen:'Angenommen',abgelehnt:'Abgelehnt',erledigt:'Erledigt'};
    const status=map[action];
    if(!status){await interaction.reply({content:'Ungültige Aktion.',ephemeral:true});return;}
    const result=applyApplicationStatus(id,status);
    if(!result.ok){await interaction.reply({content:`❌ ${result.message}`,ephemeral:true});return;}
    await interaction.reply({content:`${statusMeta(status).emoji} Antrag ${id} → **${status}**`,ephemeral:true});
    try{await updateMessage(result.application);}catch{}
    await postUpdate(`${statusMeta(status).emoji} **Antrag ${status}** · ${esc(id)} · bearbeitet von **${esc(interaction.user.displayName||interaction.user.username)}**`+(result.soldHof?`\n🏡 Hof automatisch verkauft an **${esc(result.soldHof.buyer)}**.`:''));
  });

  const readyPromise=new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('Discord-Verbindung läuft zu lange. Prüfe Bot-Token, Internetverbindung und ob der Bot aktiviert wurde.')),15000);
    client.once('clientReady',()=>{ clearTimeout(timer); console.log(`Discord-Bot verbunden als ${client.user.tag}`); resolve(); });
    client.once('error',err=>{ clearTimeout(timer); reject(err); });
  });
  try{ await client.login(token); await readyPromise; }
  catch(e){ try{client.destroy();}catch{}; throw new Error(`Discord-Login fehlgeschlagen: ${e?.message||e}`); }
  await getWritableChannel(applicationChannelId,'Antrags-Kanal');
  await getWritableChannel(updatesChannelId,'Update-Kanal');
  return {notifyNewApplication,notifyApplicationStatus,notifyApplicationDeleted,notifyApplicationsCleared,removeApplicationMessage,testConnection,client};
}
module.exports={startDiscordBot};
