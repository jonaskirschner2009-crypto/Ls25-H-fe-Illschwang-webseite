@echo off
cd /d "%~dp0"
echo Pruefe Node-Abhaengigkeiten ...
if not exist "node_modules\express" (
  echo node_modules fehlen. Installiere Abhaengigkeiten ...
  call npm install
  if errorlevel 1 (
    echo.
    echo FEHLER: npm install konnte nicht abgeschlossen werden.
    pause
    exit /b 1
  )
)

echo Starte Hoefe der Illschwang auf http://localhost:3000 ...
start "Hoefe der Illschwang" http://localhost:3000/
npm start
