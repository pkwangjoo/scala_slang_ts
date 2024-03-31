import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ScalaSlangLexer } from "./ScalaSlangLexer"
import { ScalaSlangParser } from "./ScalaSlangParser";

import { test_case } from "../tests/parser-test";
import {ScalaSlangVisitorInstance} from "./ScalaSlangVisitorInstance"



let inputStream = new ANTLRInputStream(test_case);
let lexer = new ScalaSlangLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ScalaSlangParser(tokenStream);

let visitor = new ScalaSlangVisitorInstance();

let tree = parser.prog();

console.log(tree.toStringTree(parser));