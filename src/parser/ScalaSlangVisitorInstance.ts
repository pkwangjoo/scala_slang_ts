
import { ScalaSlangVisitor } from "./ScalaSlangVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

export class ScalaSlangVisitorInstance 
    extends AbstractParseTreeVisitor<AstNode> 
    implements ScalaSlangVisitor<AstNode> {


    protected defaultResult(): AstNode {
        throw new Error("Method not implemented.");
    }
 

}