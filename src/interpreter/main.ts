import { ast } from "../parser/parser";
import { compileIntoVML } from "./compiler";
import { type_of } from "./typechecker";
import { VirtualMachine } from "./vm";


console.log("recevied ast as: ", JSON.stringify(ast as AstNode, null, 2));
// const t = type_of(ast as AstNode);

// console.log("TYPE CHECKING SUCCESS")



const is = compileIntoVML(ast as AstNode);

console.log(is);

const vm = new VirtualMachine(is);
console.log(vm.run());

