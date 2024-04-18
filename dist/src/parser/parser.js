"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const antlr4ts_1 = require("antlr4ts");
const ScalaSlangLexer_1 = require("./ScalaSlangLexer");
const ScalaSlangParser_1 = require("./ScalaSlangParser");
const ScalaSlangVisitorInstance_1 = require("./ScalaSlangVisitorInstance");
const parse = (progString) => {
    let inputStream = new antlr4ts_1.ANTLRInputStream(progString);
    let lexer = new ScalaSlangLexer_1.ScalaSlangLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new ScalaSlangParser_1.ScalaSlangParser(tokenStream);
    let tree = parser.prog();
    let visitor = new ScalaSlangVisitorInstance_1.ScalaSlangVisitorInstance();
    return visitor.visit(tree);
};
exports.parse = parse;
//# sourceMappingURL=parser.js.map