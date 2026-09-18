# Höfe der Illschwang – v81

v81 erweitert das Projekt um Benutzerkonten, vollständige Hofbearbeitung und die zentrale Antrags-/Statusverwaltung.

## Wichtig
- Bestehende `hoefe.db` behalten.
- Den Schlüssel `~/.config/hoefe-der-illwang/discord-secret.key` behalten, damit der gespeicherte Bot-Token weiter entschlüsselt werden kann.
- Nach dem Update den alten Node-Prozess wirklich mit `Ctrl+C` beenden und anschließend aus diesem v81-Ordner `npm install` und `npm start` ausführen.
- `/api/health` zeigt jetzt `version: v81`. Damit lässt sich sofort prüfen, ob wirklich die neue `server.js` läuft.
- Für echten Betrieb sollten `HOF_ADMIN_USER` und `HOF_ADMIN_PASSWORD` über Umgebungsvariablen gesetzt werden; der Standardwert dient nur zum lokalen Test.

## Lokaler Start
```bash
npm install
HOF_ADMIN_USER=Admin HOF_ADMIN_PASSWORD='dein-sicheres-passwort' npm start
```

## Produktions-/Betriebsseite
- `HOF_DB_PATH` setzt den Ort der SQLite-Datei.
- `PORT` setzt den Listenport (Standard: 3000).
- `HOF_ADMIN_USER` und `HOF_ADMIN_PASSWORD` verwalten den Initial-Adminzugang.
- `~/.config/hoefe-der-illwang/discord-secret.key` bleibt der Server-Schlüssel für verschlüsselte Discord-Token.

## Betriebsliste
Die Standardbetriebe werden beim Start automatisch angelegt. Ein über „Mein Betrieb ist noch nicht vorhanden“ eingegebener neuer Betriebsname wird beim Absenden serverseitig zentral gespeichert und steht anschließend auch auf anderen Geräten zur Verfügung.

## Discord-Bot
Die Bot-Einstellungen bleiben serverseitig gespeichert. Der Bot startet beim Serverstart automatisch, sofern er aktiviert ist und ein gespeicherter Token vorhanden ist. In den Discord-Bot-Einstellungen kann eine Testnachricht gesendet werden.


## v81 – Benutzerkonto & vollständige Hofbearbeitung
- Freiwilliges normales Benutzerkonto mit Registrierung und Login
- Admin-Login bleibt separat und ist vom normalen Konto aus erreichbar
- Merkliste und Vergleich können an ein Benutzerkonto gebunden werden
- Kaufanträge können beim Absenden einem Benutzerkonto zugeordnet werden
- Eigenes Benutzerkonto kann die eigenen Kaufanträge im Bereich „Mein Bereich“ anzeigen
- Admin-Hofbearbeitung erweitert um Hofgröße, Flächen, Tierhaltung, Schwerpunkt und Zielgruppe
- Hofdatenfelder können im Admin-Bearbeitungsmodus auch geleert/geändert werden
- Backend nutzt für Benutzerpasswörter ebenfalls scrypt mit zufälligem Salt
- Kaufanträge bleiben bis zur Annahme oder Ablehnung offen; abgeschlossene Anträge werden nach drei Tagen automatisch entfernt
