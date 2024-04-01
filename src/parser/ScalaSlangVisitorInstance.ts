
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { AssignstatContext, BinopexprContext, BlockContext, BlockstatContext, CondexprContext, ExprContext, ExprstatContext, FundefstatContext, IfstatContext, IntlitContext, LambdaexprContext, NameContext, NamesContext, ParanexprContext, ProgContext, StatContext } from "./ScalaSlangParser";
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
        return node.text;
    }

    visitProg(ctx: ProgContext) : Sequence {
        
        return {
            kind : "seq",
            stmts: ctx.children!.map(s => this.visit(s) as Statement)
        }
    }

    visitAssignstat(ctx: AssignstatContext) : AssignmentStat {
        const name = ctx._name.text!;
        const expr = ctx.expr();
        return {
            name,
            kind : "assign",
            expr: this.visit(expr) as Expression
        } 
    }

    visitFundefstat(ctx: FundefstatContext) : FunctionDefStat {
        const name = ctx._name.text;
        const params = this.visit(ctx.names());
        const body = this.visit(ctx.block()) as BlockStat;
        const lambdaExpr = {
            kind: "lambda",
            params,
            body
        } as LambdaExpr

        return {
            kind: "fundef",
            name, 
            lambda: lambdaExpr
        } as FunctionDefStat
    }

    visitNames(ctx: NamesContext) : AstNode {
        const names = ctx.ID().map(i => i.text);
        return names;

    }

    visitExprstat(ctx: ExprstatContext) : Expression {
        return this.visit(ctx.expr()) as Expression
    }

    visitBlockstat(ctx: BlockstatContext) : BlockStat {
        const block = ctx.block();
        return this.visit(block) as BlockStat;
    }

    visitBlock(ctx : BlockContext) : BlockStat {
        const stmts = ctx.getRuleContexts(StatContext).map(r => this.visit(r) as Statement);
        return {
            kind: "block",
            stmts
        }
    }

    visitIfstat(ctx : IfstatContext) : IfStat {
        
        const pred = this.visit(ctx.expr()) as Expression
        const conseq = this.visit(ctx.block(0)) as BlockStat
        if (ctx.ifstat()) {
            return {
                kind: "ifstat",
                pred,
                conseq,
                alt: this.visit(ctx.ifstat()!) as IfStat
            }
        }

        const alt = this.visit(ctx.block(1)) as BlockStat;
        return {
            kind: "ifstat",
            pred,
            conseq, 
            alt 
        } 
    }

    visitBinopexpr(ctx: BinopexprContext): BinopExpr {
        const fst = ctx.expr(0);
        const scnd = ctx.expr(1);
        const operator = ctx._op.text!;

        return {
            kind: "binop",
            operand1: this.visit(fst) as Expression,
            operand2: this.visit(scnd) as Expression,
            operator
        }

    }

    visitIntlit(ctx: IntlitContext) : IntLit {
        return {
            kind: "intlit",
            val: parseInt(ctx._val.text!),
        } 
    }
    visitName(ctx: NameContext) : Name {
        return {
            kind: "name",
            sym: ctx._name.text!
        }
    }

    visitParanexpr(ctx: ParanexprContext) : Expression {
        return this.visit(ctx.expr()) as Expression;
    }

    visitLambdaexpr(ctx : LambdaexprContext) : LambdaExpr {

        const body : BlockStat | Expression = ctx.block() 
            ? this.visit(ctx.block()!) as BlockStat
            : this.visit(ctx.expr()!) as Expression


        return {
            kind: "lambda",
            params: this.visit(ctx.names()),
            body
        } as LambdaExpr
    }

    visitCondexpr(ctx: CondexprContext) : CondExpr {
        return {
            kind: "cond",
            pred: this.visit(ctx.expr(0)) as Expression,
            conseq: this.visit(ctx.expr(1)) as Expression,
            alt: this.visit(ctx.expr(2)) as Expression

        }
    }


}