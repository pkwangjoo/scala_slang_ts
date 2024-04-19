import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ScalaSlangLexer } from "./ScalaSlangLexer"
import { ScalaSlangParser } from "./ScalaSlangParser";

import { test_case, test_case_4, test_case_5 } from "../tests/parser-test";
import { test_case_2 } from "../tests/parser-test";
import { test_case_3 } from "../tests/parser-test";
import {ScalaSlangVisitorInstance} from "./ScalaSlangVisitorInstance"
import { tc_test_1 } from "../tests/parser-test-type-checker";





export const parse = (progString : string) : AstNode => {
    let inputStream = new ANTLRInputStream(progString);
    let lexer = new ScalaSlangLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ScalaSlangParser(tokenStream);
    
    
    let tree = parser.prog();
    
    let visitor = new ScalaSlangVisitorInstance();

    try {
      return visitor.visit(tree) as AstNode;
    } catch (e) {
      console.error("The above led to a parsing error.");
      throw e;
    }
}



