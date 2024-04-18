"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../parser/parser");
const ivan_tests_1 = require("../tests/ivan-tests");
const compiler_1 = require("./compiler");
const vm_1 = require("./vm");
function run(program) {
    try {
        // Read the contents of the file synchronously
        const ast = (0, parser_1.parse)(program);
        // typecheck(ast) // ! TODO uncomment this line
        const is = (0, compiler_1.compileIntoVML)(ast);
        const vm = new vm_1.VirtualMachine(is);
        return vm.run();
    }
    catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}
// Separate test logic into a function
function runTests(tests) {
    // Run each test
    for (let i = 0; i < tests.length; i++) {
        console.log('===== Running test: ', tests[i]['name']);
        try {
            const res = run(tests[i]['test']);
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
                console.error(`===== Test ${tests[i]['name']} failed: expected ${tests[i]['expected']} but got ${e}`);
            }
        }
    }
}
runTests(ivan_tests_1.allTests);
//# sourceMappingURL=test.js.map