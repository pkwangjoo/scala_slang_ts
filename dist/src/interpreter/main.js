"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../parser/parser");
const ivan_tests_1 = require("../tests/ivan-tests");
const compiler_1 = require("./compiler");
const vm_1 = require("./vm");
const fs = __importStar(require("fs"));
function runWithFile(filePath) {
    try {
        // Read the contents of the file synchronously
        const program = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(program);
        // Disable typechecking by commenting this line
        // typecheck(ast) // ! TODO uncomment this line
        const is = (0, compiler_1.compileIntoVML)(ast);
        const vm = new vm_1.VirtualMachine(is);
        return vm.run();
    }
    catch (error) {
        console.error('Error:', error);
    }
}
// Separate test logic into a function
function runTests() {
    const tests = ivan_tests_1.allTests;
    // Run each test
    for (let i = 0; i < tests.length; i++) {
        console.log('===== Running test: ', tests[i]['name']);
        try {
            const res = runWithFile(tests[i]['test']);
            if (res === tests[i]['expected']) {
                console.log(`===== Test ${tests[i]['name']} passed`);
            }
            else {
                console.log(`===== Test ${tests[i]['name']} failed: expected ${tests[i]['expected']} but got ${res}`);
            }
        }
        catch (e) {
            if (e === tests[i]['expected']) {
                console.log(`===== Test ${tests[i]['name']} passed`);
            }
            else {
                throw e;
            }
        }
    }
}
// Check if the script is run from the command line
if (require.main === module) {
    // If run from command line, expect a file path argument
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide a file path as an argument.');
        process.exit(1);
    }
    console.log(runWithFile(filePath));
}
//# sourceMappingURL=main.js.map