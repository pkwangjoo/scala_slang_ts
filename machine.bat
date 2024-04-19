@echo off
set FILE_PATH=%1
set USE_TYPE_CHECKER=%2

if "%FILE_PATH%"=="" (
    set /p FILE_PATH=Enter the file path: 
)

node dist\src\interpreter\main.js "%FILE_PATH%" "%USE_TYPE_CHECKER%"
pause
