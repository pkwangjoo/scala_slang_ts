// Generated from ./src/parser/Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExprListener } from "./ExprListener";
import { ExprVisitor } from "./ExprVisitor";


export class ExprParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly ID = 8;
	public static readonly INT = 9;
	public static readonly NEWLINE = 10;
	public static readonly WS = 11;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_expr = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'*'", "'/'", "'+'", "'-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "ID", "INT", "NEWLINE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprParser._LITERAL_NAMES, ExprParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExprParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExprParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 6;
				this.stat();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExprParser.T__5) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.NEWLINE))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ExprParser.RULE_stat);
		try {
			this.state = 20;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 11;
				this.expr(0);
				this.state = 12;
				this.match(ExprParser.NEWLINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 14;
				this.match(ExprParser.ID);
				this.state = 15;
				this.match(ExprParser.T__0);
				this.state = 16;
				this.expr(0);
				this.state = 17;
				this.match(ExprParser.NEWLINE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 19;
				this.match(ExprParser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, ExprParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExprParser.INT:
				{
				this.state = 23;
				this.match(ExprParser.INT);
				}
				break;
			case ExprParser.ID:
				{
				this.state = 24;
				this.match(ExprParser.ID);
				}
				break;
			case ExprParser.T__5:
				{
				this.state = 25;
				this.match(ExprParser.T__5);
				this.state = 26;
				this.expr(0);
				this.state = 27;
				this.match(ExprParser.T__6);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 39;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 37;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_expr);
						this.state = 31;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 32;
						_la = this._input.LA(1);
						if (!(_la === ExprParser.T__1 || _la === ExprParser.T__2)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 33;
						this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_expr);
						this.state = 34;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 35;
						_la = this._input.LA(1);
						if (!(_la === ExprParser.T__3 || _la === ExprParser.T__4)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 36;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r-\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04(\n\x04\f\x04\x0E\x04+\v\x04\x03\x04\x02\x02\x03\x06\x05\x02\x02" +
		"\x04\x02\x06\x02\x02\x04\x03\x02\x04\x05\x03\x02\x06\x07\x020\x02\t\x03" +
		"\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\n\x05\x04" +
		"\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v" +
		"\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05\x06\x04\x02\x0E\x0F" +
		"\x07\f\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x12\x07" +
		"\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07\f\x02\x02\x14\x17\x03" +
		"\x02\x02\x02\x15\x17\x07\f\x02\x02\x16\r\x03\x02\x02\x02\x16\x10\x03\x02" +
		"\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\b\x04" +
		"\x01\x02\x19 \x07\v\x02\x02\x1A \x07\n\x02\x02\x1B\x1C\x07\b\x02\x02\x1C" +
		"\x1D\x05\x06\x04\x02\x1D\x1E\x07\t\x02\x02\x1E \x03\x02\x02\x02\x1F\x18" +
		"\x03\x02\x02\x02\x1F\x1A\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 )\x03" +
		"\x02\x02\x02!\"\f\x07\x02\x02\"#\t\x02\x02\x02#(\x05\x06\x04\b$%\f\x06" +
		"\x02\x02%&\t\x03\x02\x02&(\x05\x06\x04\x07\'!\x03\x02\x02\x02\'$\x03\x02" +
		"\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03" +
		"\x02\x02\x02+)\x03\x02\x02\x02\x07\v\x16\x1F\')";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprParser.__ATN) {
			ExprParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprParser._serializedATN));
		}

		return ExprParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_prog; }
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(ExprParser.NEWLINE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(ExprParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_stat; }
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitStat) {
			return visitor.visitStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(ExprParser.INT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(ExprParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_expr; }
	// @Override
	public enterRule(listener: ExprListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExprListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


