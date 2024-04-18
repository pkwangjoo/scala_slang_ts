@echo off
set FILE_PATH=%1
node dist\src\interpreter\main.js %FILE_PATH%
