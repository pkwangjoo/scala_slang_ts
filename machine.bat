@echo off
set FILE_PATH=%1

if "%FILE_PATH%"=="" (
    set /p FILE_PATH=Enter the file path: 
)

node dist\src\interpreter\main.js "%FILE_PATH%"
pause
