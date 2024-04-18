#!/bin/bash
FILE_PATH=$1
node dist/src/interpreter/main.js %FILE_PATH%
read -p "Press any key to continue..."