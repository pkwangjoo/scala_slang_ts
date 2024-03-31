
type Name = {
    sym: string;
}

type IntLit = {
    val : number
}

type BinaryOperation = {
    operand1 : Expression
    operand2 : Expression
    operator : string
}

type LambdaExpr = {
    names : string[]
    body : BlockStat | Expression
}

type CondExpr = {
    pred : Expression // must be logical expression
    conseq: Expression
    alt: Expression
}

type AssignmentStat = {
    name : string
    expr: Expression
}

type FunctionDefStat = {
    name: string
    lambda: LambdaExpr
}

type BlockStat = {
    stmts: Sequence | Statement
}

type IfStat = {
    pred: Expression
    conseq: Expression
    alt: Expression
}

type Sequence = {
    stmts: Statement[];
}


type Statement = 
      AssignmentStat 
    | FunctionDefStat
    | Expression
    | BlockStat


type Expression = 
      BinaryOperation
    | Name
    | IntLit
    | CondExpr;

type EmptyNode = {}

type TerminalNode = {}

type AstNode = Expression | Statement | Sequence | EmptyNode;
