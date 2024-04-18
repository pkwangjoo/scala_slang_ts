// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AssignstatContext } from "./ScalaSlangParser";
import { FundefstatContext } from "./ScalaSlangParser";
import { ExprstatContext } from "./ScalaSlangParser";
import { BlockstatContext } from "./ScalaSlangParser";
import { IfstatementContext } from "./ScalaSlangParser";
import { ReturnstatementContext } from "./ScalaSlangParser";
import { BinopexprContext } from "./ScalaSlangParser";
import { BinlogopexprContext } from "./ScalaSlangParser";
import { IntlitContext } from "./ScalaSlangParser";
import { BoollitContext } from "./ScalaSlangParser";
import { NameContext } from "./ScalaSlangParser";
import { ParanexprContext } from "./ScalaSlangParser";
import { LambdaexprContext } from "./ScalaSlangParser";
import { FunappContext } from "./ScalaSlangParser";
import { CondexprContext } from "./ScalaSlangParser";
import { BparanTypeDefContext } from "./ScalaSlangParser";
import { BSimpleTypeDefContext } from "./ScalaSlangParser";
import { BAbsTypeDefContext } from "./ScalaSlangParser";
import { ProgContext } from "./ScalaSlangParser";
import { StatContext } from "./ScalaSlangParser";
import { BlockContext } from "./ScalaSlangParser";
import { IfstatContext } from "./ScalaSlangParser";
import { TypeDefContext } from "./ScalaSlangParser";
import { SimpleTypeDefContext } from "./ScalaSlangParser";
import { ParanTypeDefContext } from "./ScalaSlangParser";
import { AbsTypeDefContext } from "./ScalaSlangParser";
import { NamesContext } from "./ScalaSlangParser";
import { ExprsContext } from "./ScalaSlangParser";
import { ExprContext } from "./ScalaSlangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ScalaSlangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ScalaSlangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `assignstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignstat?: (ctx: AssignstatContext) => Result;

	/**
	 * Visit a parse tree produced by the `fundefstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFundefstat?: (ctx: FundefstatContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprstat?: (ctx: ExprstatContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockstat?: (ctx: BlockstatContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifstatement`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstatement?: (ctx: IfstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnstatement`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnstatement?: (ctx: ReturnstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `binopexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinopexpr?: (ctx: BinopexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `binlogopexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinlogopexpr?: (ctx: BinlogopexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `intlit`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntlit?: (ctx: IntlitContext) => Result;

	/**
	 * Visit a parse tree produced by the `boollit`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoollit?: (ctx: BoollitContext) => Result;

	/**
	 * Visit a parse tree produced by the `name`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by the `paranexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParanexpr?: (ctx: ParanexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambdaexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaexpr?: (ctx: LambdaexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `funapp`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunapp?: (ctx: FunappContext) => Result;

	/**
	 * Visit a parse tree produced by the `condexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondexpr?: (ctx: CondexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `bparanTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBparanTypeDef?: (ctx: BparanTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by the `bSimpleTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBSimpleTypeDef?: (ctx: BSimpleTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by the `bAbsTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBAbsTypeDef?: (ctx: BAbsTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.ifstat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstat?: (ctx: IfstatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDef?: (ctx: TypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.simpleTypeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeDef?: (ctx: SimpleTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.paranTypeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParanTypeDef?: (ctx: ParanTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.absTypeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsTypeDef?: (ctx: AbsTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNames?: (ctx: NamesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.exprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprs?: (ctx: ExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

