#!/bin/bash

USE_TYPE_INFERENCE=$1

node dist/src/interpreter/testRunner.js $USE_TYPE_INFERENCE

read -p "Press any key to continue..."
