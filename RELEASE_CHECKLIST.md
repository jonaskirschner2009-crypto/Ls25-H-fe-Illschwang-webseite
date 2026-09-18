# Release-Checkliste – Höfe der Illwang v81

## 1. Voraussetzungen
- Node.js 20+
- npm installiert
- `hoefe.db` vorhanden oder neu erstellt
- Discord-Token nur über Umgebungsvariable/Server-Config setzen
- Caddy installiert, falls über Proxy gestartet werden soll

## 2. Umgebungsvariablen
```bash
export PORT=3000
export HOF_ADMIN_USER='Admin'
export HOF_ADMIN_PASSWORD='dein-sicheres-passwort'
export HOF_DB_PATH='/pfad/zur/hoefe.db'
```

## 3. Start des Backends
```bash
npm install
npm start
```

## 4. Health-Check
```bash
curl http://localhost:3000/api/health
```
Erwartet:
- `ok: true`
- `service: "hoefe-der-illwang"`
- `version: "v81"`

## 5. Smoke-Tests
```bash
node smoke-test.js
```
Erwartet:
- `Smoke-Test: PASS`

## 6. Caddy-Proxy
```bash
caddy run --config Caddyfile
```
Dann erreichbar unter:
- `http://localhost:8080`

## 7. Wichtige Hinweise
- Standardpasswort nur für lokale Tests verwenden
- `discord-secret.key` in `~/.config/hoefe-der-illwang/` behalten
- `hoefe.db` nicht verlieren
- Änderungen im API-Server immer mit Live-Tests absichern

## 8. Release-Ready
Wenn diese Punkte grün sind, ist der Stand für einen stabilen Release-Start bereit.
