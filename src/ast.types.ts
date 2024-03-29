

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
    stmts: Statement
}


type Statement = 
      AssignmentStat 
    | FunctionDefStat
    | Expression
    | BlockStat


type Expression = BinaryOperation;



type AstNode = Expression | Statement;
