// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./ScalaSlangParser";
import { StatContext } from "./ScalaSlangParser";
import { BlockContext } from "./ScalaSlangParser";
import { NamesContext } from "./ScalaSlangParser";
import { ExprContext } from "./ScalaSlangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ScalaSlangParser`.
 */
export interface ScalaSlangListener extends ParseTreeListener {
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

