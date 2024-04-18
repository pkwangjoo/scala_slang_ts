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
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly INT = 17;
	public static readonly BOOL = 18;
	public static readonly ID = 19;
	public static readonly BINOP = 20;
	public static readonly UNARY = 21;
	public static readonly BINLOGOP = 22;
	public static readonly WS = 23;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_ifstat = 3;
	public static readonly RULE_typeDef = 4;
	public static readonly RULE_simpleTypeDef = 5;
	public static readonly RULE_paranTypeDef = 6;
	public static readonly RULE_absTypeDef = 7;
	public static readonly RULE_names = 8;
	public static readonly RULE_exprs = 9;
	public static readonly RULE_expr = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "block", "ifstat", "typeDef", "simpleTypeDef", "paranTypeDef", 
		"absTypeDef", "names", "exprs", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'val'", "':'", "'='", "';'", "'def'", "'('", "')'", "'return'", 
		"'{'", "'}'", "'if'", "'else'", "'->'", "','", "'=>'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "INT", "BOOL", "ID", "BINOP", "UNARY", 
		"BINLOGOP", "WS",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 22;
				this.stat();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaSlangParser.T__0) | (1 << ScalaSlangParser.T__4) | (1 << ScalaSlangParser.T__5) | (1 << ScalaSlangParser.T__7) | (1 << ScalaSlangParser.T__8) | (1 << ScalaSlangParser.T__10) | (1 << ScalaSlangParser.INT) | (1 << ScalaSlangParser.BOOL) | (1 << ScalaSlangParser.ID))) !== 0));
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
		let _la: number;
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScalaSlangParser.T__0:
				_localctx = new AssignstatContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.match(ScalaSlangParser.T__0);
				this.state = 30;
				(_localctx as AssignstatContext)._name = this.match(ScalaSlangParser.ID);
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScalaSlangParser.T__1) {
					{
					this.state = 31;
					this.match(ScalaSlangParser.T__1);
					this.state = 32;
					this.typeDef();
					}
				}

				this.state = 35;
				this.match(ScalaSlangParser.T__2);
				this.state = 36;
				this.expr(0);
				this.state = 37;
				this.match(ScalaSlangParser.T__3);
				}
				break;
			case ScalaSlangParser.T__4:
				_localctx = new FundefstatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.match(ScalaSlangParser.T__4);
				this.state = 40;
				(_localctx as FundefstatContext)._name = this.match(ScalaSlangParser.ID);
				this.state = 41;
				this.match(ScalaSlangParser.T__5);
				this.state = 42;
				this.names();
				this.state = 43;
				this.match(ScalaSlangParser.T__6);
				this.state = 44;
				this.match(ScalaSlangParser.T__2);
				this.state = 45;
				this.block();
				}
				break;
			case ScalaSlangParser.T__5:
			case ScalaSlangParser.INT:
			case ScalaSlangParser.BOOL:
			case ScalaSlangParser.ID:
				_localctx = new ExprstatContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.expr(0);
				this.state = 48;
				this.match(ScalaSlangParser.T__3);
				}
				break;
			case ScalaSlangParser.T__8:
				_localctx = new BlockstatContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 50;
				this.block();
				}
				break;
			case ScalaSlangParser.T__10:
				_localctx = new IfstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 51;
				this.ifstat();
				}
				break;
			case ScalaSlangParser.T__7:
				_localctx = new ReturnstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 52;
				this.match(ScalaSlangParser.T__7);
				this.state = 53;
				this.expr(0);
				this.state = 54;
				this.match(ScalaSlangParser.T__3);
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(ScalaSlangParser.T__8);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 59;
				this.stat();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaSlangParser.T__0) | (1 << ScalaSlangParser.T__4) | (1 << ScalaSlangParser.T__5) | (1 << ScalaSlangParser.T__7) | (1 << ScalaSlangParser.T__8) | (1 << ScalaSlangParser.T__10) | (1 << ScalaSlangParser.INT) | (1 << ScalaSlangParser.BOOL) | (1 << ScalaSlangParser.ID))) !== 0));
			this.state = 64;
			this.match(ScalaSlangParser.T__9);
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
	public ifstat(): IfstatContext {
		let _localctx: IfstatContext = new IfstatContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ScalaSlangParser.RULE_ifstat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(ScalaSlangParser.T__10);
			this.state = 67;
			this.expr(0);
			this.state = 68;
			this.block();
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ScalaSlangParser.T__11) {
				{
				this.state = 69;
				this.match(ScalaSlangParser.T__11);
				this.state = 72;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ScalaSlangParser.T__8:
					{
					this.state = 70;
					this.block();
					}
					break;
				case ScalaSlangParser.T__10:
					{
					this.state = 71;
					this.ifstat();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
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
	// @RuleVersion(0)
	public typeDef(): TypeDefContext {
		let _localctx: TypeDefContext = new TypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ScalaSlangParser.RULE_typeDef);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new BparanTypeDefContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.paranTypeDef();
				}
				break;

			case 2:
				_localctx = new BSimpleTypeDefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this.simpleTypeDef();
				}
				break;

			case 3:
				_localctx = new BAbsTypeDefContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 78;
				this.absTypeDef();
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
	// @RuleVersion(0)
	public simpleTypeDef(): SimpleTypeDefContext {
		let _localctx: SimpleTypeDefContext = new SimpleTypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ScalaSlangParser.RULE_simpleTypeDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			_localctx._type = this.match(ScalaSlangParser.ID);
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
	public paranTypeDef(): ParanTypeDefContext {
		let _localctx: ParanTypeDefContext = new ParanTypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ScalaSlangParser.RULE_paranTypeDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(ScalaSlangParser.T__5);
			this.state = 84;
			this.typeDef();
			this.state = 85;
			this.match(ScalaSlangParser.T__6);
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
	public absTypeDef(): AbsTypeDefContext {
		let _localctx: AbsTypeDefContext = new AbsTypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ScalaSlangParser.RULE_absTypeDef);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScalaSlangParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.simpleTypeDef();
				this.state = 88;
				this.match(ScalaSlangParser.T__12);
				this.state = 89;
				this.typeDef();
				}
				break;
			case ScalaSlangParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.paranTypeDef();
				this.state = 92;
				this.match(ScalaSlangParser.T__12);
				this.state = 93;
				this.typeDef();
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
	public names(): NamesContext {
		let _localctx: NamesContext = new NamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ScalaSlangParser.RULE_names);
		let _la: number;
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScalaSlangParser.ID) {
					{
					this.state = 97;
					this.match(ScalaSlangParser.ID);
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ScalaSlangParser.T__1) {
						{
						this.state = 98;
						this.match(ScalaSlangParser.T__1);
						this.state = 99;
						this.typeDef();
						}
					}

					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 104;
				this.match(ScalaSlangParser.ID);
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScalaSlangParser.T__1) {
					{
					this.state = 105;
					this.match(ScalaSlangParser.T__1);
					this.state = 106;
					this.typeDef();
					}
				}

				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScalaSlangParser.T__13) {
					{
					{
					this.state = 109;
					this.match(ScalaSlangParser.T__13);
					this.state = 110;
					this.match(ScalaSlangParser.ID);
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ScalaSlangParser.T__1) {
						{
						this.state = 111;
						this.match(ScalaSlangParser.T__1);
						this.state = 112;
						this.typeDef();
						}
					}

					}
					}
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
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
	// @RuleVersion(0)
	public exprs(): ExprsContext {
		let _localctx: ExprsContext = new ExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ScalaSlangParser.RULE_exprs);
		let _la: number;
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.expr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 123;
				this.expr(0);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScalaSlangParser.T__13) {
					{
					{
					this.state = 124;
					this.match(ScalaSlangParser.T__13);
					this.state = 125;
					this.expr(0);
					}
					}
					this.state = 130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, ScalaSlangParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				_localctx = new IntlitContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 134;
				(_localctx as IntlitContext)._val = this.match(ScalaSlangParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new BoollitContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 135;
				(_localctx as BoollitContext)._bool = this.match(ScalaSlangParser.BOOL);
				}
				break;

			case 3:
				{
				_localctx = new NameContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				(_localctx as NameContext)._name = this.match(ScalaSlangParser.ID);
				}
				break;

			case 4:
				{
				_localctx = new ParanexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 137;
				this.match(ScalaSlangParser.T__5);
				this.state = 138;
				this.expr(0);
				this.state = 139;
				this.match(ScalaSlangParser.T__6);
				}
				break;

			case 5:
				{
				_localctx = new LambdaexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				this.match(ScalaSlangParser.T__5);
				this.state = 142;
				this.names();
				this.state = 143;
				this.match(ScalaSlangParser.T__6);
				this.state = 144;
				this.match(ScalaSlangParser.T__14);
				this.state = 147;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ScalaSlangParser.T__8:
					{
					this.state = 145;
					this.block();
					}
					break;
				case ScalaSlangParser.T__5:
				case ScalaSlangParser.INT:
				case ScalaSlangParser.BOOL:
				case ScalaSlangParser.ID:
					{
					this.state = 146;
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
			this.state = 170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 168;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						_localctx = new BinopexprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScalaSlangParser.RULE_expr);
						this.state = 151;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 152;
						(_localctx as BinopexprContext)._op = this.match(ScalaSlangParser.BINOP);
						this.state = 153;
						this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new BinlogopexprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScalaSlangParser.RULE_expr);
						this.state = 154;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 155;
						(_localctx as BinlogopexprContext)._op = this.match(ScalaSlangParser.BINLOGOP);
						this.state = 156;
						this.expr(9);
						}
						break;

					case 3:
						{
						_localctx = new CondexprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScalaSlangParser.RULE_expr);
						this.state = 157;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 158;
						this.match(ScalaSlangParser.T__15);
						this.state = 159;
						this.expr(0);
						this.state = 160;
						this.match(ScalaSlangParser.T__1);
						this.state = 161;
						this.expr(2);
						}
						break;

					case 4:
						{
						_localctx = new FunappContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScalaSlangParser.RULE_expr);
						this.state = 163;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 164;
						this.match(ScalaSlangParser.T__5);
						this.state = 165;
						this.exprs();
						this.state = 166;
						this.match(ScalaSlangParser.T__6);
						}
						break;
					}
					}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
		case 10:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 1);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\xB0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x06\x02" +
		"\x1A\n\x02\r\x02\x0E\x02\x1B\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03$\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03" +
		"\x04\x06\x04?\n\x04\r\x04\x0E\x04@\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05K\n\x05\x05\x05M\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06R\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tb\n\t\x03\n\x03\n\x03" +
		"\n\x05\ng\n\n\x05\ni\n\n\x03\n\x03\n\x03\n\x05\nn\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\nt\n\n\x07\nv\n\n\f\n\x0E\ny\v\n\x05\n{\n\n\x03\v\x03\v\x03" +
		"\v\x03\v\x07\v\x81\n\v\f\v\x0E\v\x84\v\v\x05\v\x86\n\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\x96\n\f\x05\f\x98\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xAB\n\f" +
		"\f\f\x0E\f\xAE\v\f\x03\f\x02\x02\x03\x16\r\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x02\x02\xC2\x02" +
		"\x19\x03\x02\x02\x02\x04:\x03\x02\x02\x02\x06<\x03\x02\x02\x02\bD\x03" +
		"\x02\x02\x02\nQ\x03\x02\x02\x02\fS\x03\x02\x02\x02\x0EU\x03\x02\x02\x02" +
		"\x10a\x03\x02\x02\x02\x12z\x03\x02\x02\x02\x14\x85\x03\x02\x02\x02\x16" +
		"\x97\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A" +
		"\x1B\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
		"\x1D\x03\x02\x02\x02\x1D\x1E\x07\x02\x02\x03\x1E\x03\x03\x02\x02\x02\x1F" +
		" \x07\x03\x02\x02 #\x07\x15\x02\x02!\"\x07\x04\x02\x02\"$\x05\n\x06\x02" +
		"#!\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x07\x05\x02\x02" +
		"&\'\x05\x16\f\x02\'(\x07\x06\x02\x02(;\x03\x02\x02\x02)*\x07\x07\x02\x02" +
		"*+\x07\x15\x02\x02+,\x07\b\x02\x02,-\x05\x12\n\x02-.\x07\t\x02\x02./\x07" +
		"\x05\x02\x02/0\x05\x06\x04\x020;\x03\x02\x02\x0212\x05\x16\f\x0223\x07" +
		"\x06\x02\x023;\x03\x02\x02\x024;\x05\x06\x04\x025;\x05\b\x05\x0267\x07" +
		"\n\x02\x0278\x05\x16\f\x0289\x07\x06\x02\x029;\x03\x02\x02\x02:\x1F\x03" +
		"\x02\x02\x02:)\x03\x02\x02\x02:1\x03\x02\x02\x02:4\x03\x02\x02\x02:5\x03" +
		"\x02\x02\x02:6\x03\x02\x02\x02;\x05\x03\x02\x02\x02<>\x07\v\x02\x02=?" +
		"\x05\x04\x03\x02>=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07\f\x02\x02C\x07\x03\x02\x02" +
		"\x02DE\x07\r\x02\x02EF\x05\x16\f\x02FL\x05\x06\x04\x02GJ\x07\x0E\x02\x02" +
		"HK\x05\x06\x04\x02IK\x05\b\x05\x02JH\x03\x02\x02\x02JI\x03\x02\x02\x02" +
		"KM\x03\x02\x02\x02LG\x03\x02\x02\x02LM\x03\x02\x02\x02M\t\x03\x02\x02" +
		"\x02NR\x05\x0E\b\x02OR\x05\f\x07\x02PR\x05\x10\t\x02QN\x03\x02\x02\x02" +
		"QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\v\x03\x02\x02\x02ST\x07\x15\x02" +
		"\x02T\r\x03\x02\x02\x02UV\x07\b\x02\x02VW\x05\n\x06\x02WX\x07\t\x02\x02" +
		"X\x0F\x03\x02\x02\x02YZ\x05\f\x07\x02Z[\x07\x0F\x02\x02[\\\x05\n\x06\x02" +
		"\\b\x03\x02\x02\x02]^\x05\x0E\b\x02^_\x07\x0F\x02\x02_`\x05\n\x06\x02" +
		"`b\x03\x02\x02\x02aY\x03\x02\x02\x02a]\x03\x02\x02\x02b\x11\x03\x02\x02" +
		"\x02cf\x07\x15\x02\x02de\x07\x04\x02\x02eg\x05\n\x06\x02fd\x03\x02\x02" +
		"\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hc\x03\x02\x02\x02hi\x03\x02\x02" +
		"\x02i{\x03\x02\x02\x02jm\x07\x15\x02\x02kl\x07\x04\x02\x02ln\x05\n\x06" +
		"\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02nw\x03\x02\x02\x02op\x07\x10\x02" +
		"\x02ps\x07\x15\x02\x02qr\x07\x04\x02\x02rt\x05\n\x06\x02sq\x03\x02\x02" +
		"\x02st\x03\x02\x02\x02tv\x03\x02\x02\x02uo\x03\x02\x02\x02vy\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02" +
		"\x02zh\x03\x02\x02\x02zj\x03\x02\x02\x02{\x13\x03\x02\x02\x02|\x86\x05" +
		"\x16\f\x02}\x82\x05\x16\f\x02~\x7F\x07\x10\x02\x02\x7F\x81\x05\x16\f\x02" +
		"\x80~\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02" +
		"\x82\x83\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02" +
		"\x85|\x03\x02\x02\x02\x85}\x03\x02\x02\x02\x86\x15\x03\x02\x02\x02\x87" +
		"\x88\b\f\x01\x02\x88\x98\x07\x13\x02\x02\x89\x98\x07\x14\x02\x02\x8A\x98" +
		"\x07\x15\x02\x02\x8B\x8C\x07\b\x02\x02\x8C\x8D\x05\x16\f\x02\x8D\x8E\x07" +
		"\t\x02\x02\x8E\x98\x03\x02\x02\x02\x8F\x90\x07\b\x02\x02\x90\x91\x05\x12" +
		"\n\x02\x91\x92\x07\t\x02\x02\x92\x95\x07\x11\x02\x02\x93\x96\x05\x06\x04" +
		"\x02\x94\x96\x05\x16\f\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02" +
		"\x02\x96\x98\x03\x02\x02\x02\x97\x87\x03\x02\x02\x02\x97\x89\x03\x02\x02" +
		"\x02\x97\x8A\x03\x02\x02\x02\x97\x8B\x03\x02\x02\x02\x97\x8F\x03\x02\x02" +
		"\x02\x98\xAC\x03\x02\x02\x02\x99\x9A\f\v\x02\x02\x9A\x9B\x07\x16\x02\x02" +
		"\x9B\xAB\x05\x16\f\f\x9C\x9D\f\n\x02\x02\x9D\x9E\x07\x18\x02\x02\x9E\xAB" +
		"\x05\x16\f\v\x9F\xA0\f\x03\x02\x02\xA0\xA1\x07\x12\x02\x02\xA1\xA2\x05" +
		"\x16\f\x02\xA2\xA3\x07\x04\x02\x02\xA3\xA4\x05\x16\f\x04\xA4\xAB\x03\x02" +
		"\x02\x02\xA5\xA6\f\x04\x02\x02\xA6\xA7\x07\b\x02\x02\xA7\xA8\x05\x14\v" +
		"\x02\xA8\xA9\x07\t\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\x99\x03\x02\x02" +
		"\x02\xAA\x9C\x03\x02\x02\x02\xAA\x9F\x03\x02\x02\x02\xAA\xA5\x03\x02\x02" +
		"\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\x17\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\x16\x1B#:@JLQafh" +
		"mswz\x82\x85\x95\x97\xAA\xAC";
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_stat; }
	public copyFrom(ctx: StatContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignstatContext extends StatContext {
	public _name!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ID(): TerminalNode { return this.getToken(ScalaSlangParser.ID, 0); }
	public typeDef(): TypeDefContext | undefined {
		return this.tryGetRuleContext(0, TypeDefContext);
	}
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterAssignstat) {
			listener.enterAssignstat(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitAssignstat) {
			listener.exitAssignstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitAssignstat) {
			return visitor.visitAssignstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FundefstatContext extends StatContext {
	public _name!: Token;
	public names(): NamesContext {
		return this.getRuleContext(0, NamesContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ID(): TerminalNode { return this.getToken(ScalaSlangParser.ID, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterFundefstat) {
			listener.enterFundefstat(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitFundefstat) {
			listener.exitFundefstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitFundefstat) {
			return visitor.visitFundefstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprstatContext extends StatContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterExprstat) {
			listener.enterExprstat(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitExprstat) {
			listener.exitExprstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitExprstat) {
			return visitor.visitExprstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockstatContext extends StatContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBlockstat) {
			listener.enterBlockstat(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBlockstat) {
			listener.exitBlockstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBlockstat) {
			return visitor.visitBlockstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfstatementContext extends StatContext {
	public ifstat(): IfstatContext {
		return this.getRuleContext(0, IfstatContext);
	}
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterIfstatement) {
			listener.enterIfstatement(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitIfstatement) {
			listener.exitIfstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitIfstatement) {
			return visitor.visitIfstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnstatementContext extends StatContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterReturnstatement) {
			listener.enterReturnstatement(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitReturnstatement) {
			listener.exitReturnstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitReturnstatement) {
			return visitor.visitReturnstatement(this);
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


export class IfstatContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ifstat(): IfstatContext | undefined {
		return this.tryGetRuleContext(0, IfstatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_ifstat; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterIfstat) {
			listener.enterIfstat(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitIfstat) {
			listener.exitIfstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitIfstat) {
			return visitor.visitIfstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_typeDef; }
	public copyFrom(ctx: TypeDefContext): void {
		super.copyFrom(ctx);
	}
}
export class BparanTypeDefContext extends TypeDefContext {
	public paranTypeDef(): ParanTypeDefContext {
		return this.getRuleContext(0, ParanTypeDefContext);
	}
	constructor(ctx: TypeDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBparanTypeDef) {
			listener.enterBparanTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBparanTypeDef) {
			listener.exitBparanTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBparanTypeDef) {
			return visitor.visitBparanTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BSimpleTypeDefContext extends TypeDefContext {
	public simpleTypeDef(): SimpleTypeDefContext {
		return this.getRuleContext(0, SimpleTypeDefContext);
	}
	constructor(ctx: TypeDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBSimpleTypeDef) {
			listener.enterBSimpleTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBSimpleTypeDef) {
			listener.exitBSimpleTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBSimpleTypeDef) {
			return visitor.visitBSimpleTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BAbsTypeDefContext extends TypeDefContext {
	public absTypeDef(): AbsTypeDefContext {
		return this.getRuleContext(0, AbsTypeDefContext);
	}
	constructor(ctx: TypeDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBAbsTypeDef) {
			listener.enterBAbsTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBAbsTypeDef) {
			listener.exitBAbsTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBAbsTypeDef) {
			return visitor.visitBAbsTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeDefContext extends ParserRuleContext {
	public _type!: Token;
	public ID(): TerminalNode { return this.getToken(ScalaSlangParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_simpleTypeDef; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterSimpleTypeDef) {
			listener.enterSimpleTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitSimpleTypeDef) {
			listener.exitSimpleTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitSimpleTypeDef) {
			return visitor.visitSimpleTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParanTypeDefContext extends ParserRuleContext {
	public typeDef(): TypeDefContext {
		return this.getRuleContext(0, TypeDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_paranTypeDef; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterParanTypeDef) {
			listener.enterParanTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitParanTypeDef) {
			listener.exitParanTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitParanTypeDef) {
			return visitor.visitParanTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbsTypeDefContext extends ParserRuleContext {
	public simpleTypeDef(): SimpleTypeDefContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeDefContext);
	}
	public typeDef(): TypeDefContext {
		return this.getRuleContext(0, TypeDefContext);
	}
	public paranTypeDef(): ParanTypeDefContext | undefined {
		return this.tryGetRuleContext(0, ParanTypeDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_absTypeDef; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterAbsTypeDef) {
			listener.enterAbsTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitAbsTypeDef) {
			listener.exitAbsTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitAbsTypeDef) {
			return visitor.visitAbsTypeDef(this);
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
	public typeDef(): TypeDefContext[];
	public typeDef(i: number): TypeDefContext;
	public typeDef(i?: number): TypeDefContext | TypeDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefContext);
		} else {
			return this.getRuleContext(i, TypeDefContext);
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


export class ExprsContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_exprs; }
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterExprs) {
			listener.enterExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitExprs) {
			listener.exitExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitExprs) {
			return visitor.visitExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScalaSlangParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class BinopexprContext extends ExprContext {
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
	public BINOP(): TerminalNode { return this.getToken(ScalaSlangParser.BINOP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBinopexpr) {
			listener.enterBinopexpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBinopexpr) {
			listener.exitBinopexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBinopexpr) {
			return visitor.visitBinopexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinlogopexprContext extends ExprContext {
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
	public BINLOGOP(): TerminalNode { return this.getToken(ScalaSlangParser.BINLOGOP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBinlogopexpr) {
			listener.enterBinlogopexpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBinlogopexpr) {
			listener.exitBinlogopexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBinlogopexpr) {
			return visitor.visitBinlogopexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntlitContext extends ExprContext {
	public _val!: Token;
	public INT(): TerminalNode { return this.getToken(ScalaSlangParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterIntlit) {
			listener.enterIntlit(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitIntlit) {
			listener.exitIntlit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitIntlit) {
			return visitor.visitIntlit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoollitContext extends ExprContext {
	public _bool!: Token;
	public BOOL(): TerminalNode { return this.getToken(ScalaSlangParser.BOOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterBoollit) {
			listener.enterBoollit(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitBoollit) {
			listener.exitBoollit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitBoollit) {
			return visitor.visitBoollit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameContext extends ExprContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(ScalaSlangParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParanexprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterParanexpr) {
			listener.enterParanexpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitParanexpr) {
			listener.exitParanexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitParanexpr) {
			return visitor.visitParanexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaexprContext extends ExprContext {
	public names(): NamesContext {
		return this.getRuleContext(0, NamesContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterLambdaexpr) {
			listener.enterLambdaexpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitLambdaexpr) {
			listener.exitLambdaexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitLambdaexpr) {
			return visitor.visitLambdaexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunappContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext {
		return this.getRuleContext(0, ExprsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterFunapp) {
			listener.enterFunapp(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitFunapp) {
			listener.exitFunapp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitFunapp) {
			return visitor.visitFunapp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CondexprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScalaSlangListener): void {
		if (listener.enterCondexpr) {
			listener.enterCondexpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScalaSlangListener): void {
		if (listener.exitCondexpr) {
			listener.exitCondexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScalaSlangVisitor<Result>): Result {
		if (visitor.visitCondexpr) {
			return visitor.visitCondexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


