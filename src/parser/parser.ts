import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ScalaSlangLexer } from "./ScalaSlangLexer"
import { ScalaSlangParser } from "./ScalaSlangParser";

import { test_case, test_case_4 } from "../tests/parser-test";
import { test_case_2 } from "../tests/parser-test";
import { test_case_3 } from "../tests/parser-test";
import {ScalaSlangVisitorInstance} from "./ScalaSlangVisitorInstance"



let inputStream = new ANTLRInputStream(test_case_4);
let lexer = new ScalaSlangLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ScalaSlangParser(tokenStream);


let tree = parser.prog();

let visitor = new ScalaSlangVisitorInstance();

let ast = visitor.visit(tree);

console.log(ast);

console.log(tree.toStringTree(parser));