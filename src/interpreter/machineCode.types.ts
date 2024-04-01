type LDC = {
  val: number
}

type LD = {
  sym: string
}

type UNOP = {
  sym: string
}

type BINOP = {
  sym: string
}

type JOF = {
}

type GOTO = {
}

type CALL = {
  arity: number
}

type ASSIGN = {
  sym: string
}

type LDF = {
  prms: string[],
  addr: number
}

type RESET = {
}

type ENTER_SCOPE = {
  syms: string[]
}

type EXIT_SCOPE = {
}

type TAIL_CALL = {
  arity: number
}

type DONE = {
}

type Instruction = LDC | LD | UNOP | BINOP | JOF | GOTO | CALL | ASSIGN | LDF | RESET | ENTER_SCOPE | EXIT_SCOPE | TAIL_CALL | DONE