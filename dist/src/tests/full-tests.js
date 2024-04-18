"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAll = void 0;
const compiler_1 = require("../interpreter/compiler");
const typechecker_1 = require("../interpreter/typechecker");
const parser_1 = require("../parser/parser");
const test_case_1 = `
1 + 2;
`;
const test = (test_case) => {
    const ast = (0, parser_1.parse)(test_case);
    (0, typechecker_1.typecheck)(ast);
    const is = (0, compiler_1.compileIntoVML)(ast);
    for (let i = 0; i < is.length; i++) {
        console.log(i, is[i]);
    }
};
const runAll = () => {
    test(test_case_1);
};
exports.runAll = runAll;
//# sourceMappingURL=full-tests.js.map