import { ast } from "../parser/parser";
import { compileIntoVML } from "./compiler";
import { type_of } from "./typechecker";


// console.log("recevied ast as: ", ast as AstNode);
const t = type_of(ast as AstNode);

console.log("TYPE CHECKING SUCCESS")

const is = compileIntoVML(ast as AstNode);

console.log(is);

