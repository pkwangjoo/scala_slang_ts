"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fp_min_tc_inf_2 = exports.fp_min_tc_inf_1 = exports.fp_min_tc_6_ty = exports.fp_min_tc_6 = exports.fp_min_tc_5_ty = exports.fp_min_tc_5 = exports.fp_min_tc_4_ty = exports.fp_min_tc_4 = exports.fp_min_tc_3_ty = exports.fp_min_tc_3 = exports.fp_min_tc_2_ty = exports.fp_min_tc_2 = exports.fp_min_tc_1 = void 0;
const compiler_1 = require("../interpreter/compiler");
const typechecker_1 = require("../interpreter/typechecker");
const parser_1 = require("../parser/parser");
const tc1 = `
1 + 3;
`;
const fp_min_tc_1 = () => test(tc1);
exports.fp_min_tc_1 = fp_min_tc_1;
const tc2 = `
val a = 3;
val b = a + 3;
val c = b + 4;
val d = c + 5;
d;
`;
const fp_min_tc_2 = () => test(tc2);
exports.fp_min_tc_2 = fp_min_tc_2;
const fp_min_tc_2_ty = () => test_type(tc2);
exports.fp_min_tc_2_ty = fp_min_tc_2_ty;
const tc3 = `
val a = 3;
val b = a + 3;
{
    val c = b + 4;
    {
        {
            val d = c + 5;
        }

    }
    
}
`;
const fp_min_tc_3 = () => test(tc3);
exports.fp_min_tc_3 = fp_min_tc_3;
const fp_min_tc_3_ty = () => test_type(tc3);
exports.fp_min_tc_3_ty = fp_min_tc_3_ty;
// check return type of block must be the last
// expression
const tc4 = `
{
    val a = 4;
    1 + 2;
    a;
}

`;
const fp_min_tc_4 = () => test(tc4);
exports.fp_min_tc_4 = fp_min_tc_4;
const fp_min_tc_4_ty = () => test_type(tc4);
exports.fp_min_tc_4_ty = fp_min_tc_4_ty;
const tc5 = `
if true {
    4;
} else {
    5;
}
`;
const fp_min_tc_5 = () => test(tc5);
exports.fp_min_tc_5 = fp_min_tc_5;
const fp_min_tc_5_ty = () => test_type(tc5);
exports.fp_min_tc_5_ty = fp_min_tc_5_ty;
const tc6 = `
def fn (a: int, b: int) = {
    if true {
        val a = 4;
        3;
    } else {
        2;
    }

}
fn(1, 4);

`;
const fp_min_tc_6 = () => test(tc6);
exports.fp_min_tc_6 = fp_min_tc_6;
const fp_min_tc_6_ty = () => test_type(tc6);
exports.fp_min_tc_6_ty = fp_min_tc_6_ty;
// Type inference
const tc_inf_1 = `
true ? 4 : 5;

`;
const fp_min_tc_inf_1 = () => {
    const ast = (0, parser_1.parse)(tc_inf_1);
    const ifStat = ast.stmts[0];
    console.log(ifStat);
    console.log(JSON.stringify((0, typechecker_1.type_inferencer)()(ifStat)));
};
exports.fp_min_tc_inf_1 = fp_min_tc_inf_1;
const tc_inf_2 = `
true 
    ? true
        ? 2
        : 4
    : 5
`;
const fp_min_tc_inf_2 = () => {
    const ast = (0, parser_1.parse)(tc_inf_2);
    const ifStat = ast.stmts[0];
    console.log(ifStat);
    console.log(JSON.stringify((0, typechecker_1.type_inferencer)()(ifStat)));
};
exports.fp_min_tc_inf_2 = fp_min_tc_inf_2;
// Util functions
const test = (test_case) => {
    const ast = (0, parser_1.parse)(test_case);
    console.log(JSON.stringify(ast, null, 2));
    (0, typechecker_1.typecheck)(ast);
    const is = (0, compiler_1.compileIntoVML)(ast);
    for (let i = 0; i < is.length; i++) {
        console.log(i, is[i]);
    }
};
const test_type = (test_case) => {
    const ast = (0, parser_1.parse)(test_case);
    console.log(JSON.stringify(ast, null, 2));
    (0, typechecker_1.typecheck)(ast);
};
const test_type_inf = (test_case) => {
    const ast = (0, parser_1.parse)(test_case);
    console.log(JSON.stringify(ast, null, 2));
    const ti = (0, typechecker_1.type_inferencer)()(ast);
};
//# sourceMappingURL=fp-minimal.js.map