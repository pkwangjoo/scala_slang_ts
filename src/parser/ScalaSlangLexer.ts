// Generated from ./src/parser/ScalaSlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ScalaSlangLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "ID", "INT", "NEWLINE", "BINOP", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ScalaSlangLexer._LITERAL_NAMES, ScalaSlangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ScalaSlangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ScalaSlangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ScalaSlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return ScalaSlangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ScalaSlangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ScalaSlangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ScalaSlangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11R\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\f\x06\f<\n\f\r\f\x0E\f=\x03\r\x06\rA\n\r\r\r\x0E\rB\x03" +
		"\x0E\x05\x0EF\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x06\x10M\n" +
		"\x10\r\x10\x0E\x10N\x03\x10\x03\x10\x02\x02\x02\x11\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
		"\x03\x02\x06\x04\x02C\\c|\x03\x022;\x04\x02,-//\x04\x02\v\v\"\"\x02U\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x03!" +
		"\x03\x02\x02\x02\x05%\x03\x02\x02\x02\x07\'\x03\x02\x02\x02\t)\x03\x02" +
		"\x02\x02\v-\x03\x02\x02\x02\r/\x03\x02\x02\x02\x0F1\x03\x02\x02\x02\x11" +
		"3\x03\x02\x02\x02\x135\x03\x02\x02\x02\x157\x03\x02\x02\x02\x17;\x03\x02" +
		"\x02\x02\x19@\x03\x02\x02\x02\x1BE\x03\x02\x02\x02\x1DI\x03\x02\x02\x02" +
		"\x1FL\x03\x02\x02\x02!\"\x07x\x02\x02\"#\x07c\x02\x02#$\x07n\x02\x02$" +
		"\x04\x03\x02\x02\x02%&\x07?\x02\x02&\x06\x03\x02\x02\x02\'(\x07=\x02\x02" +
		"(\b\x03\x02\x02\x02)*\x07f\x02\x02*+\x07g\x02\x02+,\x07h\x02\x02,\n\x03" +
		"\x02\x02\x02-.\x07*\x02\x02.\f\x03\x02\x02\x02/0\x07+\x02\x020\x0E\x03" +
		"\x02\x02\x0212\x07}\x02\x022\x10\x03\x02\x02\x0234\x07\x7F\x02\x024\x12" +
		"\x03\x02\x02\x0256\x07.\x02\x026\x14\x03\x02\x02\x0278\x07?\x02\x0289" +
		"\x07@\x02\x029\x16\x03\x02\x02\x02:<\t\x02\x02\x02;:\x03\x02\x02\x02<" +
		"=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>\x18\x03\x02\x02" +
		"\x02?A\t\x03\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02C\x1A\x03\x02\x02\x02DF\x07\x0F\x02\x02ED\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x07\f\x02\x02H\x1C\x03" +
		"\x02\x02\x02IJ\t\x04\x02\x02J\x1E\x03\x02\x02\x02KM\t\x05\x02\x02LK\x03" +
		"\x02\x02\x02MN\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03" +
		"\x02\x02\x02PQ\b\x10\x02\x02Q \x03\x02\x02\x02\x07\x02=BEN\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ScalaSlangLexer.__ATN) {
			ScalaSlangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ScalaSlangLexer._serializedATN));
		}

		return ScalaSlangLexer.__ATN;
	}

}

