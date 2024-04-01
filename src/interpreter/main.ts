import { ast } from "../parser/parser";
import { compileIntoVML } from "./compiler";


console.log(compileIntoVML(ast));