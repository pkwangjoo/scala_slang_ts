// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ScalaSlangParser`.
 */
export interface ScalaSlangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `assignstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterAssignstat?: (ctx: AssignstatContext) => void;
	/**
	 * Exit a parse tree produced by the `assignstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitAssignstat?: (ctx: AssignstatContext) => void;

	/**
	 * Enter a parse tree produced by the `fundefstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterFundefstat?: (ctx: FundefstatContext) => void;
	/**
	 * Exit a parse tree produced by the `fundefstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitFundefstat?: (ctx: FundefstatContext) => void;

	/**
	 * Enter a parse tree produced by the `exprstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterExprstat?: (ctx: ExprstatContext) => void;
	/**
	 * Exit a parse tree produced by the `exprstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitExprstat?: (ctx: ExprstatContext) => void;

	/**
	 * Enter a parse tree produced by the `blockstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterBlockstat?: (ctx: BlockstatContext) => void;
	/**
	 * Exit a parse tree produced by the `blockstat`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitBlockstat?: (ctx: BlockstatContext) => void;

	/**
	 * Enter a parse tree produced by the `ifstatement`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterIfstatement?: (ctx: IfstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ifstatement`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitIfstatement?: (ctx: IfstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `returnstatement`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterReturnstatement?: (ctx: ReturnstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `returnstatement`
	 * labeled alternative in `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitReturnstatement?: (ctx: ReturnstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `binopexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinopexpr?: (ctx: BinopexprContext) => void;
	/**
	 * Exit a parse tree produced by the `binopexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinopexpr?: (ctx: BinopexprContext) => void;

	/**
	 * Enter a parse tree produced by the `binlogopexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinlogopexpr?: (ctx: BinlogopexprContext) => void;
	/**
	 * Exit a parse tree produced by the `binlogopexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinlogopexpr?: (ctx: BinlogopexprContext) => void;

	/**
	 * Enter a parse tree produced by the `intlit`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIntlit?: (ctx: IntlitContext) => void;
	/**
	 * Exit a parse tree produced by the `intlit`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIntlit?: (ctx: IntlitContext) => void;

	/**
	 * Enter a parse tree produced by the `boollit`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBoollit?: (ctx: BoollitContext) => void;
	/**
	 * Exit a parse tree produced by the `boollit`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBoollit?: (ctx: BoollitContext) => void;

	/**
	 * Enter a parse tree produced by the `name`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by the `name`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by the `paranexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParanexpr?: (ctx: ParanexprContext) => void;
	/**
	 * Exit a parse tree produced by the `paranexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParanexpr?: (ctx: ParanexprContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLambdaexpr?: (ctx: LambdaexprContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLambdaexpr?: (ctx: LambdaexprContext) => void;

	/**
	 * Enter a parse tree produced by the `funapp`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunapp?: (ctx: FunappContext) => void;
	/**
	 * Exit a parse tree produced by the `funapp`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunapp?: (ctx: FunappContext) => void;

	/**
	 * Enter a parse tree produced by the `condexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCondexpr?: (ctx: CondexprContext) => void;
	/**
	 * Exit a parse tree produced by the `condexpr`
	 * labeled alternative in `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCondexpr?: (ctx: CondexprContext) => void;

	/**
	 * Enter a parse tree produced by the `bparanTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterBparanTypeDef?: (ctx: BparanTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by the `bparanTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitBparanTypeDef?: (ctx: BparanTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by the `bSimpleTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterBSimpleTypeDef?: (ctx: BSimpleTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by the `bSimpleTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitBSimpleTypeDef?: (ctx: BSimpleTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by the `bAbsTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterBAbsTypeDef?: (ctx: BAbsTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by the `bAbsTypeDef`
	 * labeled alternative in `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitBAbsTypeDef?: (ctx: BAbsTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.ifstat`.
	 * @param ctx the parse tree
	 */
	enterIfstat?: (ctx: IfstatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.ifstat`.
	 * @param ctx the parse tree
	 */
	exitIfstat?: (ctx: IfstatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitTypeDef?: (ctx: TypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.simpleTypeDef`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeDef?: (ctx: SimpleTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.simpleTypeDef`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeDef?: (ctx: SimpleTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.paranTypeDef`.
	 * @param ctx the parse tree
	 */
	enterParanTypeDef?: (ctx: ParanTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.paranTypeDef`.
	 * @param ctx the parse tree
	 */
	exitParanTypeDef?: (ctx: ParanTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.absTypeDef`.
	 * @param ctx the parse tree
	 */
	enterAbsTypeDef?: (ctx: AbsTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.absTypeDef`.
	 * @param ctx the parse tree
	 */
	exitAbsTypeDef?: (ctx: AbsTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.names`.
	 * @param ctx the parse tree
	 */
	enterNames?: (ctx: NamesContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.names`.
	 * @param ctx the parse tree
	 */
	exitNames?: (ctx: NamesContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.exprs`.
	 * @param ctx the parse tree
	 */
	enterExprs?: (ctx: ExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.exprs`.
	 * @param ctx the parse tree
	 */
	exitExprs?: (ctx: ExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

