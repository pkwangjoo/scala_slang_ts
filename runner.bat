@echo off
set USE_TYPE_CHECKER=%1
node dist\src\interpreter\testRunner.js "%USE_TYPE_CHECKER%"
pause