# Deployment – Höfe der Illschwang

## Wichtig

`server.js` ist ein Node.js/Express-Server. GitHub hostet den Server nicht selbst und ein reiner Cloudflare-Worker kann diese Express/SQLite-Version nicht einfach ausführen.

Für diese Version gilt:

1. Repository bei GitHub hochladen.
2. Das Repository als Node.js-Webservice deployen, z. B. mit Render, Railway oder einem eigenen Node-Server.
3. Startbefehl: `npm start`
4. Healthcheck: `/api/health`
5. Danach kann Cloudflare als DNS/Proxy vor den laufenden Server gesetzt werden.

## Daten dauerhaft speichern

SQLite braucht auf Render einen persistenten Datenträger. Ohne Disk werden `hoefe.db`, Konten, verkaufte Höfe und Einstellungen bei einem neuen Deploy oder einem
Server-Neustart auf einem flüchtigen Dateisystem angelegt und können verloren gehen.

Die mitgelieferte `render.yaml` verwendet deshalb einen kostenpflichtigen Starter-Webservice mit einer 1-GB-Disk unter `/var/data` und setzt
`HOF_DB_PATH=/var/data/hoefe.db`. Beim bestehenden Render-Service müssen dieselben Werte unter den Service-Einstellungen eingerichtet werden, oder der Service muss
über die Blueprint-Datei neu angelegt werden. Eine Render-Disk ist kostenpflichtig; alternativ braucht das Projekt eine externe PostgreSQL-/SQLite-Speicherlösung.

## Standard-Admin

- Benutzername: `Admin`
- Passwort: `admin123`

Die mitgelieferte `hoefe.db` enthält bereits den passenden Passwort-Hash. Beim ersten Start eines neuen Datenbestands legt der Server außerdem automatisch den Admin aus `HOF_ADMIN_USER`/`HOF_ADMIN_PASSWORD` an.

## Lokal

`start-local.bat` startet den Server und öffnet anschließend `http://localhost:3000/`.

Die `index.html` nicht direkt per Doppelklick als `file://` öffnen, weil dann kein Express-Server läuft und der Browser mit `Failed to fetch` antworten kann.
