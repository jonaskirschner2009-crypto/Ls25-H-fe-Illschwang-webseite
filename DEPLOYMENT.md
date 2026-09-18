# Deployment – Höfe der Illschwang

## Wichtig

`server.js` ist ein Node.js/Express-Server. GitHub hostet den Server nicht selbst und ein reiner Cloudflare-Worker kann diese Express/SQLite-Version nicht einfach ausführen.

Für diese Version gilt:

1. Repository bei GitHub hochladen.
2. Das Repository als Node.js-Webservice deployen, z. B. mit Render, Railway oder einem eigenen Node-Server.
3. Startbefehl: `npm start`
4. Healthcheck: `/api/health`
5. Danach kann Cloudflare als DNS/Proxy vor den laufenden Server gesetzt werden.

## Standard-Admin

- Benutzername: `Admin`
- Passwort: `admin123`

Die mitgelieferte `hoefe.db` enthält bereits den passenden Passwort-Hash. Beim ersten Start eines neuen Datenbestands legt der Server außerdem automatisch den Admin aus `HOF_ADMIN_USER`/`HOF_ADMIN_PASSWORD` an.

## Lokal

`start-local.bat` startet den Server und öffnet anschließend `http://localhost:3000/`.

Die `index.html` nicht direkt per Doppelklick als `file://` öffnen, weil dann kein Express-Server läuft und der Browser mit `Failed to fetch` antworten kann.
