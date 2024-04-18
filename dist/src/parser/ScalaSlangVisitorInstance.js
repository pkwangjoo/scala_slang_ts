"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalaSlangVisitorInstance = void 0;
const ScalaSlangParser_1 = require("./ScalaSlangParser");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
class ScalaSlangVisitorInstance extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {
            kind: "block",
            body: {
                kind: "seq",
                stmts: []
            }
        };
    }
    visitTerminal(node) {
        return { kind: "terminal", sym: node.text };
    }
    visitProg(ctx) {
        return {
            kind: "seq",
            stmts: ctx.children.map(s => this.visit(s))
        };
    }
    visitAssignstat(ctx) {
        const declaredType = ctx.typeDef()
            ? this.visit(ctx.typeDef())
            : undefined;
        const name = ctx._name.text;
        const expr = ctx.expr();
        return {
            name,
            decl_type: declaredType,
            kind: "assign",
            expr: this.visit(expr)
        };
    }
    visitFundefstat(ctx) {
        const name = ctx._name.text;
        const params = ctx.names().ID().map(n => n.text);
        const formal_types = ctx.names().typeDef().map(t => this.visit(t));
        const body = this.visit(ctx.block());
        const lambdaExpr = {
            kind: "lambda",
            params,
            formal_types: formal_types,
            body
        };
        return {
            kind: "assign",
            name,
            decl_type: undefined,
            expr: lambdaExpr
        };
    }
    visitExprstat(ctx) {
        return this.visit(ctx.expr());
    }
    visitBlockstat(ctx) {
        const block = ctx.block();
        return this.visit(block);
    }
    visitBlock(ctx) {
        // console.log("visitblock")
        const stmts = ctx.getRuleContexts(ScalaSlangParser_1.StatContext)
            .map(r => {
            // console.log(r.text)
            return this.visit(r);
        });
        return {
            kind: "block",
            body: {
                kind: "seq",
                stmts
            }
        };
    }
    visitIfstat(ctx) {
        const pred = this.visit(ctx.expr());
        const conseq = this.visit(ctx.block(0));
        if (ctx.ifstat() !== undefined) {
            return {
                kind: "ifstat",
                pred,
                conseq,
                alt: this.visitIfstat(ctx.ifstat())
            };
        }
        if (ctx.block().length < 2) {
            return {
                kind: "ifstat",
                pred,
                conseq,
                alt: undefined
            };
        }
        const alt = this.visit(ctx.block(1));
        return {
            kind: "ifstat",
            pred,
            conseq,
            alt
        };
    }
    visitReturnstatement(ctx) {
        const expr = this.visit(ctx.expr());
        // console.log(expr);
        return {
            kind: "ret",
            expr
        };
    }
    visitBinopexpr(ctx) {
        const fst = ctx.expr(0);
        const scnd = ctx.expr(1);
        const operator = ctx._op.text;
        return {
            kind: "binop",
            operand1: this.visit(fst),
            operand2: this.visit(scnd),
            operator
        };
    }
    visitBinlogopexpr(ctx) {
        const fst = ctx.expr(0);
        const scnd = ctx.expr(1);
        const operator = ctx._op.text;
        if (operator === "&&") {
            return {
                kind: "cond",
                pred: this.visit(fst),
                conseq: this.visit(scnd),
                alt: { kind: "boollit", val: false }
            };
        }
        // oeprator === "||"
        return {
            kind: "cond",
            pred: this.visit(fst),
            conseq: { kind: "boollit", val: true },
            alt: this.visit(scnd)
        };
    }
    visitIntlit(ctx) {
        return {
            kind: "intlit",
            val: parseInt(ctx._val.text),
        };
    }
    visitBoollit(ctx) {
        return {
            kind: "boollit",
            val: ctx._bool.text === 'true'
                ? true
                : false
        };
    }
    visitName(ctx) {
        return {
            kind: "name",
            sym: ctx._name.text
        };
    }
    visitParanexpr(ctx) {
        return this.visit(ctx.expr());
    }
    visitLambdaexpr(ctx) {
        const params = ctx.names().ID().map(n => n.text);
        const formal_types = ctx.names().typeDef().map(t => this.visit(t));
        // console.log(ctx.names().typeDef().map(t => console.log("type in name", t.text)))
        const body = ctx.block()
            ? this.visit(ctx.block())
            : this.visit(ctx.expr());
        return {
            kind: "lambda",
            params,
            body,
            formal_types
        };
    }
    visitCondexpr(ctx) {
        return {
            kind: "cond",
            pred: this.visit(ctx.expr(0)),
            conseq: this.visit(ctx.expr(1)),
            alt: this.visit(ctx.expr(2))
        };
    }
    visitFunapp(ctx) {
        const funExpr = ctx.expr();
        const argExprs = ctx.exprs().expr();
        const args = argExprs.length == 0
            ? [{ kind: "unit" }]
            : argExprs.map(a => this.visit(a));
        return {
            kind: "funapp",
            fun: this.visit(funExpr),
            args
        };
    }
    // TYPES
    visitBParantypedef(ctx) {
        return this.visitParanTypeDef(ctx.paranTypeDef());
    }
    visitBSimpleTypeDef(ctx) {
        return this.visitSimpleTypeDef(ctx.simpleTypeDef());
    }
    visitBAbsTypeDef(ctx) {
        return this.visitAbsTypeDef(ctx.absTypeDef());
    }
    visitSimpleTypeDef(ctx) {
        return ctx._type.text;
    }
    visitParanTypeDef(ctx) {
        return this.visit(ctx.typeDef());
    }
    visitAbsTypeDef(ctx) {
        if (ctx.simpleTypeDef() !== undefined) {
            return [this.visitSimpleTypeDef(ctx.simpleTypeDef()), this.visit(ctx.typeDef())];
        }
        if (ctx.paranTypeDef() !== undefined) {
            return [this.visitParanTypeDef(ctx.paranTypeDef()), this.visit(ctx.typeDef())];
        }
        throw Error("ABS TYPEDEF ERROR");
    }
}
exports.ScalaSlangVisitorInstance = ScalaSlangVisitorInstance;
//# sourceMappingURL=ScalaSlangVisitorInstance.js.map