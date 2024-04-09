import { parse } from "../parser/parser";
import { test_case_5 } from "../tests/parser-test";
import { compileIntoVML } from "./compiler";
import { type_of } from "./typechecker";
import { VirtualMachine } from "./vm";
import { test1, test2, test3 } from "../tests/tests";

const ast = parse(test3);

console.log("recevied ast as: ", JSON.stringify(ast as AstNode, null, 2));

const is = compileIntoVML(ast as AstNode);

for (let i = 0; i < is.length; i ++) {
    console.log(i, is[i])
}

const vm = new VirtualMachine(is);
console.log(vm.run());

