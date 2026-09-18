# Startanleitung – Höfe der Illwang v81

## 1. Abhängigkeiten installieren
```bash
npm install
```

## 2. Umgebungsvariablen setzen
Für deinen lokalen Windows-Start:
```powershell
$env:HOF_ADMIN_USER = "Jonas"
$env:HOF_ADMIN_PASSWORD = "Jonas12062009."
$env:HOF_DB_PATH = "$PWD\hoefe.db"
```

Alternativ in einer normalen CMD:
```cmd
set HOF_ADMIN_USER=Jonas
set HOF_ADMIN_PASSWORD=Jonas12062009.
set HOF_DB_PATH=%CD%\hoefe.db
```

Für Linux/macOS:
```bash
export HOF_ADMIN_USER='Admin'
export HOF_ADMIN_PASSWORD='dein-sicheres-passwort'
export HOF_DB_PATH="$PWD/hoefe.db"
```

## 3. Server starten
```bash
npm start
```

## 4. Health-Check
```bash
curl http://localhost:3000/api/health
```
Erwartet:
```json
{"ok":true,"service":"hoefe-der-illwang","version":"v81"}
```

## 5. Smoke-Tests ausführen
```bash
node smoke-test.js
```
Erwartet:
```text
Smoke-Test: PASS
```

## 6. Caddy-Proxy starten (optional)
```bash
caddy run --config Caddyfile
```
Dann erreichbar unter:
- `http://localhost:8080`

## 7. Start mit einem Klick
### Windows / MagentaCLOUD
Lege den Projektordner unter `C:\Users\jonas\MagentaCLOUD\Desktopsync` ab und starte:
```cmd
start-windows.bat
```
Die Datei öffnet Backend und Caddy in eigenen Fenstern. Sie verwendet automatisch `D:\eigene dateien\caddy\caddy.exe`, falls vorhanden.
Wenn `D:\eigene dateien\cloudflared\cloudflared.exe` vorhanden ist, startet sie zusätzlich einen kostenlosen öffentlichen Tunnel. Die URL wird im Cloudflare-Fenster angezeigt und ändert sich bei jedem Neustart.

### CachyOS / Arch Linux
```bash
chmod +x start-cachyos.sh
./start-cachyos.sh
```
Falls Caddy nicht im PATH liegt:
```bash
CADDY_BIN=/pfad/zu/caddy ./start-cachyos.sh
```
Die App ist danach unter `http://localhost:8080` erreichbar.

## 8. Wichtige Hinweise
- `hoefe.db` nicht verlieren
- `discord-secret.key` im Home-Verzeichnis behalten
- Admin-Passwort nur in der Umgebung oder als Secret setzen
- Offene Kaufanträge sind nicht löschbar. Angenommene oder abgelehnte Anträge werden nach drei Tagen automatisch aus Website und Discord entfernt.
- Bei Updates immer alten Node-Prozess mit `Ctrl+C` beenden
