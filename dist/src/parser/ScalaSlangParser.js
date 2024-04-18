"use strict";
// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CondexprContext = exports.FunappContext = exports.LambdaexprContext = exports.ParanexprContext = exports.NameContext = exports.BoollitContext = exports.IntlitContext = exports.BinlogopexprContext = exports.BinopexprContext = exports.ExprContext = exports.ExprsContext = exports.NamesContext = exports.AbsTypeDefContext = exports.ParanTypeDefContext = exports.SimpleTypeDefContext = exports.BAbsTypeDefContext = exports.BSimpleTypeDefContext = exports.BparanTypeDefContext = exports.TypeDefContext = exports.IfstatContext = exports.BlockContext = exports.ReturnstatementContext = exports.IfstatementContext = exports.BlockstatContext = exports.ExprstatContext = exports.FundefstatContext = exports.AssignstatContext = exports.StatContext = exports.ProgContext = exports.ScalaSlangParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class ScalaSlangParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return ScalaSlangParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "ScalaSlang.g4"; }
    // @Override
    get ruleNames() { return ScalaSlangParser.ruleNames; }
    // @Override
    get serializedATN() { return ScalaSlangParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(ScalaSlangParser._ATN, this);
    }
    // @RuleVersion(0)
    prog() {
        let _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ScalaSlangParser.RULE_prog);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stat() {
        let _localctx = new StatContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ScalaSlangParser.RULE_stat);
        let _la;
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
                        _localctx._name = this.match(ScalaSlangParser.ID);
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
                        _localctx._name = this.match(ScalaSlangParser.ID);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ScalaSlangParser.RULE_block);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifstat() {
        let _localctx = new IfstatContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ScalaSlangParser.RULE_ifstat);
        let _la;
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
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDef() {
        let _localctx = new TypeDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ScalaSlangParser.RULE_typeDef);
        try {
            this.state = 79;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleTypeDef() {
        let _localctx = new SimpleTypeDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ScalaSlangParser.RULE_simpleTypeDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                _localctx._type = this.match(ScalaSlangParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paranTypeDef() {
        let _localctx = new ParanTypeDefContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    absTypeDef() {
        let _localctx = new AbsTypeDefContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    names() {
        let _localctx = new NamesContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ScalaSlangParser.RULE_names);
        let _la;
        try {
            this.state = 120;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exprs() {
        let _localctx = new ExprsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ScalaSlangParser.RULE_exprs);
        let _la;
        try {
            this.state = 131;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 20;
        this.enterRecursionRule(_localctx, 20, ScalaSlangParser.RULE_expr, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            _localctx = new IntlitContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 134;
                            _localctx._val = this.match(ScalaSlangParser.INT);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new BoollitContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 135;
                            _localctx._bool = this.match(ScalaSlangParser.BOOL);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new NameContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 136;
                            _localctx._name = this.match(ScalaSlangParser.ID);
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
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 170;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 168;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new BinopexprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, ScalaSlangParser.RULE_expr);
                                        this.state = 151;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 152;
                                        _localctx._op = this.match(ScalaSlangParser.BINOP);
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
                                        _localctx._op = this.match(ScalaSlangParser.BINLOGOP);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 10:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    }
    expr_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!ScalaSlangParser.__ATN) {
            ScalaSlangParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ScalaSlangParser._serializedATN));
        }
        return ScalaSlangParser.__ATN;
    }
}
exports.ScalaSlangParser = ScalaSlangParser;
ScalaSlangParser.T__0 = 1;
ScalaSlangParser.T__1 = 2;
ScalaSlangParser.T__2 = 3;
ScalaSlangParser.T__3 = 4;
ScalaSlangParser.T__4 = 5;
ScalaSlangParser.T__5 = 6;
ScalaSlangParser.T__6 = 7;
ScalaSlangParser.T__7 = 8;
ScalaSlangParser.T__8 = 9;
ScalaSlangParser.T__9 = 10;
ScalaSlangParser.T__10 = 11;
ScalaSlangParser.T__11 = 12;
ScalaSlangParser.T__12 = 13;
ScalaSlangParser.T__13 = 14;
ScalaSlangParser.T__14 = 15;
ScalaSlangParser.T__15 = 16;
ScalaSlangParser.INT = 17;
ScalaSlangParser.BOOL = 18;
ScalaSlangParser.ID = 19;
ScalaSlangParser.BINOP = 20;
ScalaSlangParser.UNARY = 21;
ScalaSlangParser.BINLOGOP = 22;
ScalaSlangParser.WS = 23;
ScalaSlangParser.RULE_prog = 0;
ScalaSlangParser.RULE_stat = 1;
ScalaSlangParser.RULE_block = 2;
ScalaSlangParser.RULE_ifstat = 3;
ScalaSlangParser.RULE_typeDef = 4;
ScalaSlangParser.RULE_simpleTypeDef = 5;
ScalaSlangParser.RULE_paranTypeDef = 6;
ScalaSlangParser.RULE_absTypeDef = 7;
ScalaSlangParser.RULE_names = 8;
ScalaSlangParser.RULE_exprs = 9;
ScalaSlangParser.RULE_expr = 10;
// tslint:disable:no-trailing-whitespace
ScalaSlangParser.ruleNames = [
    "prog", "stat", "block", "ifstat", "typeDef", "simpleTypeDef", "paranTypeDef",
    "absTypeDef", "names", "exprs", "expr",
];
ScalaSlangParser._LITERAL_NAMES = [
    undefined, "'val'", "':'", "'='", "';'", "'def'", "'('", "')'", "'return'",
    "'{'", "'}'", "'if'", "'else'", "'->'", "','", "'=>'", "'?'",
];
ScalaSlangParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "INT", "BOOL", "ID", "BINOP", "UNARY",
    "BINLOGOP", "WS",
];
ScalaSlangParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ScalaSlangParser._LITERAL_NAMES, ScalaSlangParser._SYMBOLIC_NAMES, []);
ScalaSlangParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\xB0\x04\x02" +
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
class ProgContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(ScalaSlangParser.EOF, 0); }
    stat(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatContext);
        }
        else {
            return this.getRuleContext(i, StatContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_prog; }
    // @Override
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class StatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_stat; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.StatContext = StatContext;
class AssignstatContext extends StatContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    ID() { return this.getToken(ScalaSlangParser.ID, 0); }
    typeDef() {
        return this.tryGetRuleContext(0, TypeDefContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignstat) {
            listener.enterAssignstat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignstat) {
            listener.exitAssignstat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignstat) {
            return visitor.visitAssignstat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignstatContext = AssignstatContext;
class FundefstatContext extends StatContext {
    names() {
        return this.getRuleContext(0, NamesContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    ID() { return this.getToken(ScalaSlangParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFundefstat) {
            listener.enterFundefstat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFundefstat) {
            listener.exitFundefstat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFundefstat) {
            return visitor.visitFundefstat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FundefstatContext = FundefstatContext;
class ExprstatContext extends StatContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExprstat) {
            listener.enterExprstat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprstat) {
            listener.exitExprstat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprstat) {
            return visitor.visitExprstat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprstatContext = ExprstatContext;
class BlockstatContext extends StatContext {
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockstat) {
            listener.enterBlockstat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockstat) {
            listener.exitBlockstat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockstat) {
            return visitor.visitBlockstat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockstatContext = BlockstatContext;
class IfstatementContext extends StatContext {
    ifstat() {
        return this.getRuleContext(0, IfstatContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfstatement) {
            listener.enterIfstatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfstatement) {
            listener.exitIfstatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfstatement) {
            return visitor.visitIfstatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfstatementContext = IfstatementContext;
class ReturnstatementContext extends StatContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnstatement) {
            listener.enterReturnstatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnstatement) {
            listener.exitReturnstatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnstatement) {
            return visitor.visitReturnstatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnstatementContext = ReturnstatementContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    stat(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatContext);
        }
        else {
            return this.getRuleContext(i, StatContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class IfstatContext extends ParserRuleContext_1.ParserRuleContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    }
    ifstat() {
        return this.tryGetRuleContext(0, IfstatContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_ifstat; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfstat) {
            listener.enterIfstat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfstat) {
            listener.exitIfstat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfstat) {
            return visitor.visitIfstat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfstatContext = IfstatContext;
class TypeDefContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_typeDef; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TypeDefContext = TypeDefContext;
class BparanTypeDefContext extends TypeDefContext {
    paranTypeDef() {
        return this.getRuleContext(0, ParanTypeDefContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBparanTypeDef) {
            listener.enterBparanTypeDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBparanTypeDef) {
            listener.exitBparanTypeDef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBparanTypeDef) {
            return visitor.visitBparanTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BparanTypeDefContext = BparanTypeDefContext;
class BSimpleTypeDefContext extends TypeDefContext {
    simpleTypeDef() {
        return this.getRuleContext(0, SimpleTypeDefContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBSimpleTypeDef) {
            listener.enterBSimpleTypeDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBSimpleTypeDef) {
            listener.exitBSimpleTypeDef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBSimpleTypeDef) {
            return visitor.visitBSimpleTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BSimpleTypeDefContext = BSimpleTypeDefContext;
class BAbsTypeDefContext extends TypeDefContext {
    absTypeDef() {
        return this.getRuleContext(0, AbsTypeDefContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBAbsTypeDef) {
            listener.enterBAbsTypeDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBAbsTypeDef) {
            listener.exitBAbsTypeDef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBAbsTypeDef) {
            return visitor.visitBAbsTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BAbsTypeDefContext = BAbsTypeDefContext;
class SimpleTypeDefContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(ScalaSlangParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_simpleTypeDef; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleTypeDef) {
            listener.enterSimpleTypeDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleTypeDef) {
            listener.exitSimpleTypeDef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleTypeDef) {
            return visitor.visitSimpleTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleTypeDefContext = SimpleTypeDefContext;
class ParanTypeDefContext extends ParserRuleContext_1.ParserRuleContext {
    typeDef() {
        return this.getRuleContext(0, TypeDefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_paranTypeDef; }
    // @Override
    enterRule(listener) {
        if (listener.enterParanTypeDef) {
            listener.enterParanTypeDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParanTypeDef) {
            listener.exitParanTypeDef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParanTypeDef) {
            return visitor.visitParanTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParanTypeDefContext = ParanTypeDefContext;
class AbsTypeDefContext extends ParserRuleContext_1.ParserRuleContext {
    simpleTypeDef() {
        return this.tryGetRuleContext(0, SimpleTypeDefContext);
    }
    typeDef() {
        return this.getRuleContext(0, TypeDefContext);
    }
    paranTypeDef() {
        return this.tryGetRuleContext(0, ParanTypeDefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_absTypeDef; }
    // @Override
    enterRule(listener) {
        if (listener.enterAbsTypeDef) {
            listener.enterAbsTypeDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAbsTypeDef) {
            listener.exitAbsTypeDef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAbsTypeDef) {
            return visitor.visitAbsTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AbsTypeDefContext = AbsTypeDefContext;
class NamesContext extends ParserRuleContext_1.ParserRuleContext {
    ID(i) {
        if (i === undefined) {
            return this.getTokens(ScalaSlangParser.ID);
        }
        else {
            return this.getToken(ScalaSlangParser.ID, i);
        }
    }
    typeDef(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDefContext);
        }
        else {
            return this.getRuleContext(i, TypeDefContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_names; }
    // @Override
    enterRule(listener) {
        if (listener.enterNames) {
            listener.enterNames(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNames) {
            listener.exitNames(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNames) {
            return visitor.visitNames(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamesContext = NamesContext;
class ExprsContext extends ParserRuleContext_1.ParserRuleContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_exprs; }
    // @Override
    enterRule(listener) {
        if (listener.enterExprs) {
            listener.enterExprs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprs) {
            listener.exitExprs(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprs) {
            return visitor.visitExprs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprsContext = ExprsContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ScalaSlangParser.RULE_expr; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExprContext = ExprContext;
class BinopexprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    BINOP() { return this.getToken(ScalaSlangParser.BINOP, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBinopexpr) {
            listener.enterBinopexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinopexpr) {
            listener.exitBinopexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinopexpr) {
            return visitor.visitBinopexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BinopexprContext = BinopexprContext;
class BinlogopexprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    BINLOGOP() { return this.getToken(ScalaSlangParser.BINLOGOP, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBinlogopexpr) {
            listener.enterBinlogopexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinlogopexpr) {
            listener.exitBinlogopexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinlogopexpr) {
            return visitor.visitBinlogopexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BinlogopexprContext = BinlogopexprContext;
class IntlitContext extends ExprContext {
    INT() { return this.getToken(ScalaSlangParser.INT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIntlit) {
            listener.enterIntlit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntlit) {
            listener.exitIntlit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntlit) {
            return visitor.visitIntlit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntlitContext = IntlitContext;
class BoollitContext extends ExprContext {
    BOOL() { return this.getToken(ScalaSlangParser.BOOL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBoollit) {
            listener.enterBoollit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoollit) {
            listener.exitBoollit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoollit) {
            return visitor.visitBoollit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BoollitContext = BoollitContext;
class NameContext extends ExprContext {
    ID() { return this.getToken(ScalaSlangParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NameContext = NameContext;
class ParanexprContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParanexpr) {
            listener.enterParanexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParanexpr) {
            listener.exitParanexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParanexpr) {
            return visitor.visitParanexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParanexprContext = ParanexprContext;
class LambdaexprContext extends ExprContext {
    names() {
        return this.getRuleContext(0, NamesContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaexpr) {
            listener.enterLambdaexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaexpr) {
            listener.exitLambdaexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaexpr) {
            return visitor.visitLambdaexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaexprContext = LambdaexprContext;
class FunappContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    exprs() {
        return this.getRuleContext(0, ExprsContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunapp) {
            listener.enterFunapp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunapp) {
            listener.exitFunapp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunapp) {
            return visitor.visitFunapp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunappContext = FunappContext;
class CondexprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCondexpr) {
            listener.enterCondexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCondexpr) {
            listener.exitCondexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCondexpr) {
            return visitor.visitCondexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CondexprContext = CondexprContext;
//# sourceMappingURL=ScalaSlangParser.js.map