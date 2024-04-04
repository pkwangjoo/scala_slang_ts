
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { AbsTypeDefContext, AssignstatContext, BAbsTypeDefContext, BSimpleTypeDefContext, BinopexprContext, BlockContext, BlockstatContext, BparanTypeDefContext, CondexprContext, ExprContext, ExprstatContext, FunappContext, FundefstatContext, IfstatContext, IntlitContext, LambdaexprContext, NameContext, NamesContext, ParanTypeDefContext, ParanexprContext, ProgContext, SimpleTypeDefContext, StatContext, TypeDefContext } from "./ScalaSlangParser";
import { ScalaSlangVisitor } from "./ScalaSlangVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

export class ScalaSlangVisitorInstance 
    extends AbstractParseTreeVisitor<AstNode | ty> 
    implements ScalaSlangVisitor<AstNode | ty> {


    protected defaultResult(): AstNode {
        return {
          kind: "block",
          body: {
            kind: "seq",
            stmts: []
        }
      }
    }

    visitTerminal(node: TerminalNode): AstNode {
       return {kind: "terminal", sym: node.text} 
    }

    visitProg(ctx: ProgContext) : Sequence {
        
        
        return {
            kind : "seq",
            stmts: ctx.children!.map(s => this.visit(s) as Statement)
        }
    }

    visitAssignstat(ctx: AssignstatContext) : AssignmentStat {
        const declaredType = ctx.typeDef() 
            ? this.visit(ctx.typeDef()!) as ty
            : undefined;

        const name = ctx._name.text!;
        const expr = ctx.expr();
        return {
            name,
            decl_type : declaredType,
            kind : "assign",
            expr: this.visit(expr) as Expression
        } 
    }

    visitFundefstat(ctx: FundefstatContext) : AssignmentStat {
        const name = ctx._name.text!;
        const params = ctx.names().ID().map(n => n.text)
        const body = this.visit(ctx.block()) as BlockStat;
        const lambdaExpr = {
            kind: "lambda",
            params,
            body
        } as LambdaExpr

        return {
            kind: "assign",
            name, 
            decl_type : "any",
            expr: lambdaExpr
        } as AssignmentStat
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
            body: {
                kind : "seq",
                stmts
            }
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
                alt: this.visitIfstat(ctx.ifstat()!) 
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

        const params = ctx.names().ID().map(n => n.text)
        const formal_types = ctx.names().typeDef().map(t => this.visit(t));
        // console.log(ctx.names().typeDef().map(t => console.log("type in name", t.text)))

        const body : BlockStat | Expression = ctx.block() 
            ? this.visit(ctx.block()!) as BlockStat
            : this.visit(ctx.expr()!) as Expression


        return {
            kind: "lambda",
            params,
            body,
            formal_types
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

    visitFunapp(ctx: FunappContext) : FunAppExpr {
        const funExpr = ctx.expr();
        const args = ctx.exprs().expr()
        
        return {
            kind: "funapp",
            fun: this.visit(funExpr) as Expression,
            args : args.map(a => this.visit(a)) as Expression[]
        }


    }


    // TYPES

  
    visitBParantypedef(ctx: BparanTypeDefContext) : ty {
        
        return this.visitParanTypeDef(ctx.paranTypeDef());

    }

    visitBSimpleTypeDef(ctx: BSimpleTypeDefContext) : ty {

        return this.visitSimpleTypeDef(ctx.simpleTypeDef());
    }

    visitBAbsTypeDef(ctx: BAbsTypeDefContext) : ty {
        return this.visitAbsTypeDef(ctx.absTypeDef()); 
    }

    visitSimpleTypeDef(ctx: SimpleTypeDefContext) : ty {
        return ctx._type.text! as ty
    }

    visitParanTypeDef(ctx: ParanTypeDefContext) : ty {
        return this.visit(ctx.typeDef()) as ty
    }

    visitAbsTypeDef(ctx: AbsTypeDefContext) : ty {
        if (ctx.simpleTypeDef() !== undefined) {

            return [this.visitSimpleTypeDef(ctx.simpleTypeDef()!) as ty, this.visit(ctx.typeDef()!) as ty];
        }
        if (ctx.paranTypeDef() !== undefined) {

            return [this.visitParanTypeDef(ctx.paranTypeDef()!) as ty, this.visit(ctx.typeDef()!) as ty];
        }

        throw Error("ABS TYPEDEF ERROR")
    }

    




}