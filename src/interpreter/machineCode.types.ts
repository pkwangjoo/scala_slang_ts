type LDC = {
  tag: "LDC",
  val: number
}

type LD = {
  tag: "LD",
  sym: string
}

type UNOP = {
  tag: "UNOP",
  sym: string
}

type BINOP = {
  tag: "BINOP",
  sym: string
}

type JOF = {
  tag: "JOF",
}

type GOTO = {
  tag: "GOTO",
}

type CALL = {
  tag: "CALL",
  arity: number
}

type ASSIGN = {
  tag: "ASSIGN",
  sym: string
}

type LDF = {
  tag: "LDF",
  prms: string[],
  addr: number
}

type RESET = {
  tag: "RESET"
}

type ENTER_SCOPE = {
  tag: "ENTER_SCOPE"
  syms: string[]
}

type EXIT_SCOPE = {
  tag: "EXIT_SCOPE"
}

type TAIL_CALL = {
  tag: "TAIL_CALL"
  arity: number
}

type DONE = {
  tag: "DONE"
}

type Instruction = LDC | LD | UNOP | BINOP | JOF | GOTO | CALL | ASSIGN | LDF | RESET | ENTER_SCOPE | EXIT_SCOPE | TAIL_CALL | DONE