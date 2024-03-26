import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ExprLexer } from './parser/ExprLexer';
import { ExprParser } from './parser/ExprParser';
// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new ExprLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ExprParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.compilationUnit();
