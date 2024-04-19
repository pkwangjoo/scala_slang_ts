#!/bin/bash
FILE_PATH=$1
if [ -z "$FILE_PATH" ]; then
  read -p "Enter the file path: " FILE_PATH
fi
node dist/src/interpreter/main.js %FILE_PATH%
read -p "Press any key to continue..."