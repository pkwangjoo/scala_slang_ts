
type Name = {
    kind: "name";
    sym: string;
}

type IntLit = {
    kind: "intlit"
    val : number
}

type BinaryOperation = {
    kind: "binop"
    operand1 : Expression
    operand2 : Expression
    operator : string
}

type LambdaExpr = {
    kind: "lambda"
    params : string[]
    body : BlockStat | Expression
}


type CondExpr = {
    kind: "cond"
    pred : Expression // must be logical expression
    conseq: Expression
    alt: Expression
}


type AssignmentStat = {
    kind: "assign"
    name : string
    expr: Expression
}

type FunctionDefStat = {
    kind: "fundef"
    name: string
    lambda: LambdaExpr
}


type BlockStat = {
    kind: "block"
    stmts: Statement[] 
}

type IfStat = {
    kind: "ifstat"
    pred: Expression
    conseq: BlockStat
    alt: BlockStat | IfStat
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


type Expression = 
      BinaryOperation
    | Name
    | IntLit
    | CondExpr;

type EmptyNode = {}

type TerminalNode = {}

type AstNode = Expression | Statement | Sequence | EmptyNode;
