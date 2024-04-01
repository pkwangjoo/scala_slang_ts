
type Name = {
    kind: "name";
    sym: string;
}

type IntLit = {
    kind: "intlit"
    val : number
}

type BinopExpr = {
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
    body: Sequence
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
    | IfStat


type Expression = 
      BinopExpr
    | Name
    | IntLit
    | CondExpr
    | LambdaExpr;

type EmptyNode = {
    kind: "empty"
}

type TerminalAstNode = {
    kind: "terminal"
    sym: string
}

type AstNode = Expression | Statement | Sequence | TerminalAstNode
