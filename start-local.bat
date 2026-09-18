@echo off
cd /d "%~dp0"
echo Starte Hoefe der Illschwang auf http://localhost:3000 ...
start "Hoefe der Illschwang" http://localhost:3000/
npm start
