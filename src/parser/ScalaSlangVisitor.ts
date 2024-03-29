// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./ScalaSlangParser";
import { StatContext } from "./ScalaSlangParser";
import { BlockContext } from "./ScalaSlangParser";
import { NamesContext } from "./ScalaSlangParser";
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
	 * Visit a parse tree produced by `ScalaSlangParser.names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNames?: (ctx: NamesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaSlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

