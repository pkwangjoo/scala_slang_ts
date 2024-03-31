
type StringLit = {
    val : string
}

type intLit = {
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
    | StringLit
    | intLit;



type AstNode = Expression | Statement | Sequence;
