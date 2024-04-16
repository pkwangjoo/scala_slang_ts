import { compileIntoVML } from "../interpreter/compiler"
import { compile_ast_to_term } from "../interpreter/lambda_compiler";
import { type_inferencer, typecheck } from "../interpreter/typechecker"
import { parse } from "../parser/parser"



const tc1 = `
1 + 3;
`

export const fp_min_tc_1 = () => test(tc1);



const tc2 = `
val a = 3;
val b = a + 3;
val c = b + 4;
val d = c + 5;
d;
`

export const fp_min_tc_2 = () => test(tc2);
export const fp_min_tc_2_ty = () => test_type(tc2);

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
`
export const fp_min_tc_3 = () => test(tc3)

export const fp_min_tc_3_ty = () => test_type(tc3);


// check return type of block must be the last
// expression
const tc4 = `
{
    val a = 4;
    1 + 2;
    a;
}

`




export const fp_min_tc_4 = () => test(tc4)

export const fp_min_tc_4_ty = () => test_type(tc4);



const tc5 = `
if true {
    4;
} else {
    5;
}
`


export const fp_min_tc_5 = () => test(tc5)
export const fp_min_tc_5_ty = () => test_type(tc5);

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

`

export const fp_min_tc_6 = () => test(tc6)
export const fp_min_tc_6_ty = () => test_type(tc6);

// Type inference

const tc_inf_1 = `
true ? 4 : 5;

`

export const fp_min_tc_inf_1 = () => {
    const ast = parse(tc_inf_1);
    const ifStat = (ast as Sequence).stmts[0];
    console.log(ifStat)
    console.log(JSON.stringify(type_inferencer()(ifStat)))
};


const tc_inf_2 = `
true 
    ? true
        ? 2
        : 4
    : 5
`

export const fp_min_tc_inf_2 = () => {
    const ast = parse(tc_inf_2);
    const ifStat = (ast as Sequence).stmts[0];
    console.log(ifStat)
    console.log(JSON.stringify(type_inferencer()(ifStat)))
};





// Util functions


const test = (test_case : string) => {

    const ast = parse(test_case)
    console.log(JSON.stringify(ast, null, 2));
    typecheck(ast)
    const is = compileIntoVML(ast as AstNode)

    for (let i = 0; i < is.length; i ++) {
        console.log(i, is[i])
    }


}

const test_type = (test_case: string) => {
    const ast = parse(test_case) 
    console.log(JSON.stringify(ast, null, 2));
    typecheck(ast);
}

const test_type_inf = (test_case : string) => {
    const ast = parse(test_case)
    console.log(JSON.stringify(ast, null, 2));
    const ti = type_inferencer()(ast);
}