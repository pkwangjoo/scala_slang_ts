
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { BinopexprContext, CondexprContext, ExprContext, ExprstatContext, IntlitContext, NameContext, ProgContext, StatContext } from "./ScalaSlangParser";
import { ScalaSlangVisitor } from "./ScalaSlangVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

export class ScalaSlangVisitorInstance 
    extends AbstractParseTreeVisitor<AstNode> 
    implements ScalaSlangVisitor<AstNode> {


    protected defaultResult(): AstNode {
        // throw new Error("Method not implemented.");
        return {} as EmptyNode
    }

    visitTerminal(node: TerminalNode): AstNode {
        return {} as TerminalNode
    }

    visitExprstat(ctx: ExprstatContext) : Expression {
        return this.visit(ctx.expr()) as Expression
    } 

    visitProg(ctx: ProgContext) : AstNode {
        console.log("yello1", ctx.children!);
        
        return {
            stmts: ctx.children!.map(s => this.visit(s))
        }
    }



    visitBinopexpr(ctx: BinopexprContext): BinaryOperation {
        const fst = ctx.expr(0);
        const scnd = ctx.expr(1);
        const operator = ctx._op.text!;

        const res = {
            operand1: this.visit(fst) as Expression,
            operand2: this.visit(scnd) as Expression,
            operator
        }

        return res;
    }

    visitIntlit(ctx: IntlitContext) : IntLit {
        return {
            val: parseInt(ctx._val.text!),
        } 
    }
    visitName(ctx: NameContext) : Name {
        console.log("visiting name");
        return {sym: ctx._name.text!}
    }

    visitCondexpr(ctx: CondexprContext) : CondExpr {
        return {
            pred: this.visit(ctx.expr(0)) as Expression,
            conseq: this.visit(ctx.expr(1)) as Expression,
            alt: this.visit(ctx.expr(2)) as Expression

        }
    }

    


 

}