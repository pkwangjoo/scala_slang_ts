import { compileIntoVML } from "../interpreter/compiler"
import { typecheck } from "../interpreter/typechecker"
import { parse } from "../parser/parser"

const test_case_1 = `
1 + 2;
`

const test = (test_case : string) => {

    const ast = parse(test_case)
    typecheck(ast)
    const is = compileIntoVML(ast as AstNode)

    for (let i = 0; i < is.length; i ++) {
        console.log(i, is[i])
    }


}


export const runAll = () => {
    test(test_case_1);
}