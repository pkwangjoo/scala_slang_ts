
type Name = {
    kind: "name";
    sym: string;
}

type IntLit = {
    kind: "intlit"
    val : number
}

type BoolLit = {
    kind: "boollit"
    val: boolean
}

type BinopExpr = {
    kind: "binop"
    operand1 : Expression
    operand2 : Expression
    operator : string
}

type BinLogExpr = {
    kind: "binlogop"
    operator: string,
    operand1 : Expression
    operand2 : Expression
}

type LambdaExpr = {
    kind: "lambda"
    params : string[]
    formal_types : ty[]
    body : BlockStat | Expression
}


type CondExpr = {
    kind: "cond"
    pred : Expression // must be logical expression
    conseq: Expression
    alt: Expression
}

type FunAppExpr = {
    kind: "funapp"
    fun: Expression,
    args: Expression[]

}


type AssignmentStat = {
    kind: "assign"
    name : string
    decl_type: ty | undefined
    expr: Expression
}

type FunctionDefStat = {
    kind: "fundef"
    name: string
    lambda: LambdaExpr
}


type BlockStat = {
    kind: "block"
    body: Sequence
}

type IfStat = {
    kind: "ifstat"
    pred: Expression
    conseq: BlockStat
    alt: BlockStat | IfStat | undefined
}

type RetStat = {
    kind: "ret"
    expr: Expression
}

type Sequence = {
    kind: "seq"
    stmts: Statement[];
}


type Statement = 
      AssignmentStat 
    | FunctionDefStat
    | Expression
    | BlockStat
    | IfStat
    | RetStat
    | TerminalAstNode
    ;

type UnitExpr = {kind: "unit"}

type Expression = 
      BinopExpr
    | BinLogExpr
    | Name
    | IntLit
    | BoolLit
    | CondExpr
    | LambdaExpr
    | FunAppExpr
    | UnitExpr
    ;

type EmptyNode = {
    kind: "empty"
}

type TerminalAstNode = {
    kind: "terminal"
    sym: string
}



// DO NOT CHANGE! FOR TYPE CHECKING
// type term = TmInt | TmIf | TmBool | TmAbs | TmApp | "unit";

type ty = TyInt | TyBool | TyArr | string;

type TyInt = "int"
type TyBool = "bool"
type TyUnit = "unit"
type TyArr = [ty, ty]

["bool", "bool"] as ty
[["bool", "bool"], ["bool", "bool"]] as ty
[[["bool", "bool"], ["bool", "bool"]], [["bool", "bool"], ["bool", "bool"]]] as ty
[[["bool", "bool"], ["bool", "bool"]], [[["bool", "bool"], ["bool", "bool"]], [["bool", "bool"], ["bool", "bool"]]]] as ty

// HOORAY IT WORKS!!!!

// type TmInt = ["TmInt", number];
// type TmBool = ["TmBool", boolean];
// type TmIf = ["TmIf", term, term, term];
// type TmAbs = ["TmAbs", string, ty, term];
// type TmApp = ["TmApp", term, term];


type AstNode = Expression | Statement | Sequence | TerminalAstNode
