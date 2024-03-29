import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ScalaSlangLexer } from "./ScalaSlangLexer";
import { ScalaSlangParser } from "./ScalaSlangParser";

const test_case = `

val a = 4; val c = 4; 
val b = 5;
val ab = a + b;

def hello (a, b, c) = {
    a + b;
}

val lf = (a, b, c) => {
    a + b;
};

`

let inputStream = new ANTLRInputStream(test_case);
let lexer = new ScalaSlangLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ScalaSlangParser(tokenStream);

let tree = parser.prog();

console.log(tree.toStringTree(parser));