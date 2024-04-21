# Quick start

## Pre-requisites
- To run the VM and tester: A recent installation of Node.js and npm.
- To run the REPL: A recent installation of Python 3. Python 3.12 is recommended.

## Setting up the VM (macOS/Linux)
Open a terminal and navigate to a folder of your choice. Then, clone the repository as follows:
```
git clone https://github.com/pkwangjoo/scala_slang_ts.git
```
Navigate to the cloned repository:
```
cd scala_slang_ts
```
Install the required dependencies:
```
npm install
```
Generate the parser and lexer. Please contact us if the following command does not work:
```
npm run antlr4ts
```
Transpile the TypeScript code:
```
npx tsc
```
Allow permissions for the shell script:
```
chmod +x ./machine.sh
```
## Running the VM (macOS/Linux):
The setup process is now complete. To run the VM, use the following command:
```
./machine.sh [PATH_TO_FILE] [OPTIONAL: type]
```
Note that the `type` argument is optional, and if provided, will run the type inferencer. 

## Running the REPL (macOS/Linux):
The REPL is a Python script. To run it, use the following command:
```
python3 repl.py
```
