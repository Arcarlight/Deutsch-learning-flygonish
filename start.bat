@echo off
setlocal
chcp 65001 >nul
title PokeDeutsch Local Server
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found on this computer.
  echo Opening index.html directly. Progress may not be saved.
  start "" "index.html"
  pause
  exit /b 1
)

echo Starting PokeDeutsch local preview...
echo Close this window to stop the server.
echo.
node tools\serve.mjs 4321 --open
if errorlevel 1 (
  echo.
  echo Server failed to start. See the message above.
  pause
)
