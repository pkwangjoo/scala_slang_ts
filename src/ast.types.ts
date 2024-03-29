

type BinaryOperation = {
    operand1 : Expression
    operand2 : Expression
    operator : string
}

type AssignmentStat = {
    name : string
    expr: Expression
}

type FunctionDefState = {
    name: string
    body: BlockStat | Statement;
}

type BlockStat = {
    stmts: Statement
}

type Statement = 
      AssignmentStat 
    | FunctionDefState 
    | Expression
    | BlockStat


type Expression = BinaryOperation;



type AstNode = Expression | Statement;
