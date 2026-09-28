 Höfe der Illschwang

  Lokal

Node.js 20 oder neuer benötigt. Doppelklick auf `start-local.bat` oder:


npm install
npm start


Website: http://localhost:3000/
Admin: `Admin` / `admin123`

 Wichtig für GitHub + Cloudflare

GitHub speichert den Code, führt "server.js"  aber nicht aus. Die Express/SQLite-Version benötigt einen Node.js-Webserver. "Dockerfile"  und "render.yaml"  sind dafür vorbereitet. Cloudflare kann anschließend als DNS/Proxy vor den laufenden Node-Webserver gesetzt werden.

Die API unterstützt Cross-Origin-Anfragen über "HOF_CORS_ORIGIN"; für eine feste Frontend-Domain sollte dieser Wert später auf die konkrete Origin eingeschränkt werden.
