#!/bin/bash
FILE_PATH=$1
USE_TYPE_INFERENCE=$2
if [ -z "$FILE_PATH" ]; then
  read -p "Enter the file path: " FILE_PATH
fi
node dist/src/interpreter/main.js %FILE_PATH% %USE_TYPE_INFERENCE%
read -p "Press any key to continue..."