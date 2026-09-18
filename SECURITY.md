# Sicherheit – v63

- Discord-Bot-Token wird nur über `DISCORD_BOT_TOKEN` als Server-Umgebungsvariable gelesen.
- Der Token wird nicht an Browser ausgeliefert und nicht in SQLite gespeichert.
- Interaktive Antrag-Buttons sind serverseitig geschützt. Nur Discord-Mitglieder mit „Server verwalten“ oder Administrator können sie benutzen.
- Öffentliche Nutzer dürfen Kaufanträge erstellen, aber keine Statusänderungen durchführen.
- Die vorhandene Admin-Authentifizierung bleibt für die Weboberfläche aktiv.
