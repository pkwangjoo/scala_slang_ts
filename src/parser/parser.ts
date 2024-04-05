import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ScalaSlangLexer } from "./ScalaSlangLexer"
import { ScalaSlangParser } from "./ScalaSlangParser";

import { test_case, test_case_4 } from "../tests/parser-test";
import { test_case_2 } from "../tests/parser-test";
import { test_case_3 } from "../tests/parser-test";
import {ScalaSlangVisitorInstance} from "./ScalaSlangVisitorInstance"
import { tc_test_1 } from "../tests/parser-test-type-checker";
import { vm_test_basic } from "../tests/vm-test";



let inputStream = new ANTLRInputStream(vm_test_basic);
let lexer = new ScalaSlangLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ScalaSlangParser(tokenStream);


let tree = parser.prog();

let visitor = new ScalaSlangVisitorInstance();

export const ast = visitor.visit(tree);

