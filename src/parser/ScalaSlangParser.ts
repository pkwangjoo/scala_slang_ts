// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { ScalaSlangListener } from "./ScalaSlangListener";
import { ScalaSlangVisitor } from "./ScalaSlangVisitor";


export class ScalaSlangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly ID = 11;
	public static readonly INT = 12;
	public static readonly NEWLINE = 13;
	public static readonly BINOP = 14;
	public static readonly WS = 15;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_names = 3;
	public static readonly RULE_expr = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "block", "names", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'val'", "'='", "';'", "'def'", "'('", "')'", "'{'", "'}'", 
		"','", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "ID", "INT", "NEWLINE", "BINOP", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ScalaSlangParser._LITERAL_NAMES, ScalaSlangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ScalaSlangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ScalaSlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return ScalaSlangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ScalaSlangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ScalaSlangParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ScalaSlangParser.RULE_prog);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScalaSlangParser.NEWLINE) {
					{
					{
					this.state = 10;
					this.match(ScalaSlangParser.NEWLINE);
					}
					}
					this.state = 15;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 16;
				this.stat();
				this.state = 20;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 17;
						this.match(ScalaSlangParser.NEWLINE);
						}
						}
					}
					this.state = 22;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaSlangParser.T__0) | (1 << ScalaSlangParser.T__3) | (1 << ScalaSlangParser.T__4) | (1 << ScalaSlangParser.T__6) | (1 << ScalaSlangParser.ID) | (1 << ScalaSlangParser.INT) | (1 << ScalaSlangParser.NEWLINE))) !== 0));
			this.state = 27;
			this.match(ScalaSlangParser.EOF);
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
		this.enterRule(_localctx, 2, ScalaSlangParser.RULE_stat);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScalaSlangParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.match(ScalaSlangParser.T__0);
				this.state = 30;
				this.match(ScalaSlangParser.ID);
				this.state = 31;
				this.match(ScalaSlangParser.T__1);
				this.state = 32;
				this.expr(0);
				this.state = 33;
				this.match(ScalaSlangParser.T__2);
				}
				break;
			case ScalaSlangParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.match(ScalaSlangParser.T__3);
				this.state = 36;
				this.match(ScalaSlangParser.ID);
				this.state = 37;
				this.match(ScalaSlangParser.T__4);
				this.state = 38;
				this.names();
				this.state = 39;
				this.match(ScalaSlangParser.T__5);
				this.state = 40;
				this.match(ScalaSlangParser.T__1);
				this.state = 41;
				this.block();
				}
				break;
			case ScalaSlangParser.T__4:
			case ScalaSlangParser.ID:
			case ScalaSlangParser.INT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.expr(0);
				this.state = 44;
				this.match(ScalaSlangParser.T__2);
				}
				break;
			case ScalaSlangParser.T__6:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 46;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ScalaSlangParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(ScalaSlangParser.T__6);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScalaSlangParser.NEWLINE) {
					{
					{
					this.state = 50;
					this.match(ScalaSlangParser.NEWLINE);
					}
					}
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 56;
				this.stat();
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 57;
						this.match(ScalaSlangParser.NEWLINE);
						}
						}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaSlangParser.T__0) | (1 << ScalaSlangParser.T__3) | (1 << ScalaSlangParser.T__4) | (1 << ScalaSlangParser.T__6) | (1 << ScalaSlangParser.ID) | (1 << ScalaSlangParser.INT) | (1 << ScalaSlangParser.NEWLINE))) !== 0));
			this.state = 67;
			this.match(ScalaSlangParser.T__7);
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
	public names(): NamesContext {
		let _localctx: NamesContext = new NamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ScalaSlangParser.RULE_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 69;
				this.match(ScalaSlangParser.ID);
				}
				break;

			case 2:
				{
				{
				this.state = 70;
				this.match(ScalaSlangParser.ID);
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScalaSlangParser.T__8) {
					{
					{
					this.state = 71;
					this.match(ScalaSlangParser.T__8);
					this.state = 72;
					this.match(ScalaSlangParser.ID);
					}
					}
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, ScalaSlangParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 81;
				this.match(ScalaSlangParser.INT);
				}
				break;

			case 2:
				{
				this.state = 82;
				this.match(ScalaSlangParser.ID);
				}
				break;

			case 3:
				{
				this.state = 83;
				this.match(ScalaSlangParser.T__4);
				this.state = 84;
				this.expr(0);
				this.state = 85;
				this.match(ScalaSlangParser.T__5);
				}
				break;

			case 4:
				{
				this.state = 87;
				this.match(ScalaSlangParser.T__4);
				this.state = 88;
				this.names();
				this.state = 89;
				this.match(ScalaSlangParser.T__5);
				this.state = 90;
				this.match(ScalaSlangParser.T__9);
				this.state = 93;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ScalaSlangParser.T__6:
					{
					this.state = 91;
					this.block();
					}
					break;
				case ScalaSlangParser.T__4:
				case ScalaSlangParser.ID:
				case ScalaSlangParser.INT:
					{
					this.state = 92;
					this.expr(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 102;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ScalaSlangParser.RULE_expr);
					this.state = 97;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 98;
					_localctx._op = this.match(ScalaSlangParser.BINOP);
					this.state = 99;
					this.expr(6);
					}
					}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
		case 4:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11l\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x07\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x02\x03\x02\x07\x02\x15" +
		"\n\x02\f\x02\x0E\x02\x18\v\x02\x06\x02\x1A\n\x02\r\x02\x0E\x02\x1B\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x032\n\x03\x03\x04\x03\x04\x07\x046\n\x04\f\x04\x0E\x04" +
		"9\v\x04\x03\x04\x03\x04\x07\x04=\n\x04\f\x04\x0E\x04@\v\x04\x06\x04B\n" +
		"\x04\r\x04\x0E\x04C\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05L\n\x05\f\x05\x0E\x05O\v\x05\x05\x05Q\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06`\n\x06\x05\x06b\n\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"g\n\x06\f\x06\x0E\x06j\v\x06\x03\x06\x02\x02\x03\n\x07\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\x02\x02\x02v\x02\x19\x03\x02\x02\x02\x041\x03\x02" +
		"\x02\x02\x063\x03\x02\x02\x02\bP\x03\x02\x02\x02\na\x03\x02\x02\x02\f" +
		"\x0E\x07\x0F\x02\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02\x02\x0F\r" +
		"\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x12\x03\x02\x02\x02\x11\x0F" +
		"\x03\x02\x02\x02\x12\x16\x05\x04\x03\x02\x13\x15\x07\x0F\x02\x02\x14\x13" +
		"\x03\x02\x02\x02\x15\x18\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16\x17" +
		"\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x19\x0F" +
		"\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C" +
		"\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1E\x07\x02\x02\x03\x1E\x03" +
		"\x03\x02\x02\x02\x1F \x07\x03\x02\x02 !\x07\r\x02\x02!\"\x07\x04\x02\x02" +
		"\"#\x05\n\x06\x02#$\x07\x05\x02\x02$2\x03\x02\x02\x02%&\x07\x06\x02\x02" +
		"&\'\x07\r\x02\x02\'(\x07\x07\x02\x02()\x05\b\x05\x02)*\x07\b\x02\x02*" +
		"+\x07\x04\x02\x02+,\x05\x06\x04\x02,2\x03\x02\x02\x02-.\x05\n\x06\x02" +
		"./\x07\x05\x02\x02/2\x03\x02\x02\x0202\x05\x06\x04\x021\x1F\x03\x02\x02" +
		"\x021%\x03\x02\x02\x021-\x03\x02\x02\x0210\x03\x02\x02\x022\x05\x03\x02" +
		"\x02\x023A\x07\t\x02\x0246\x07\x0F\x02\x0254\x03\x02\x02\x0269\x03\x02" +
		"\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02" +
		"\x02\x02:>\x05\x04\x03\x02;=\x07\x0F\x02\x02<;\x03\x02\x02\x02=@\x03\x02" +
		"\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02" +
		"\x02\x02A7\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02" +
		"\x02\x02DE\x03\x02\x02\x02EF\x07\n\x02\x02F\x07\x03\x02\x02\x02GQ\x07" +
		"\r\x02\x02HM\x07\r\x02\x02IJ\x07\v\x02\x02JL\x07\r\x02\x02KI\x03\x02\x02" +
		"\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NQ\x03\x02\x02" +
		"\x02OM\x03\x02\x02\x02PG\x03\x02\x02\x02PH\x03\x02\x02\x02Q\t\x03\x02" +
		"\x02\x02RS\b\x06\x01\x02Sb\x07\x0E\x02\x02Tb\x07\r\x02\x02UV\x07\x07\x02" +
		"\x02VW\x05\n\x06\x02WX\x07\b\x02\x02Xb\x03\x02\x02\x02YZ\x07\x07\x02\x02" +
		"Z[\x05\b\x05\x02[\\\x07\b\x02\x02\\_\x07\f\x02\x02]`\x05\x06\x04\x02^" +
		"`\x05\n\x06\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`b\x03\x02\x02\x02" +
		"aR\x03\x02\x02\x02aT\x03\x02\x02\x02aU\x03\x02\x02\x02aY\x03\x02\x02\x02" +
		"bh\x03\x02\x02\x02cd\f\x07\x02\x02de\x07\x10\x02\x02eg\x05\n\x06\bfc\x03" +
		"\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\v" +
		"\x03\x02\x02\x02jh\x03\x02\x02\x02\x0E\x0F\x16\x1B17>CMP_ah";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ScalaSlangParser.__ATN) {
			ScalaSlangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ScalaSlangParser._serializedATN));
		}

		return ScalaSlangParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ScalaSlangParser.EOF, 0); }
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScalaSlangParser.NEWLINE);
		} else {
			return this.getToken(ScalaSlangParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_prog; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(ScalaSlangParser.ID, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public names(): NamesContext | undefined {
		return this.tryGetRuleContext(0, NamesContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_stat; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitStat) {
			return visitor.visitStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScalaSlangParser.NEWLINE);
		} else {
			return this.getToken(ScalaSlangParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_block; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamesContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScalaSlangParser.ID);
		} else {
			return this.getToken(ScalaSlangParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_names; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterNames) {
			listener.enterNames(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitNames) {
			listener.exitNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitNames) {
			return visitor.visitNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public BINOP(): TerminalNode | undefined { return this.tryGetToken(ScalaSlangParser.BINOP, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ScalaSlangParser.INT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(ScalaSlangParser.ID, 0); }
	public names(): NamesContext | undefined {
		return this.tryGetRuleContext(0, NamesContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_expr; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


