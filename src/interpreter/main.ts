import { parse } from "../parser/parser";
import { test_case_5 } from "../tests/parser-test";
import { compileIntoVML } from "./compiler";
import { type_of } from "./typechecker";
import { VirtualMachine } from "./vm";
import { test1 } from "../tests/tests";

const ast = parse(test1);

console.log("recevied ast as: ", JSON.stringify(ast as AstNode, null, 2));

const is = compileIntoVML(ast as AstNode);

console.log(is);

const vm = new VirtualMachine(is);
console.log(vm.run());

