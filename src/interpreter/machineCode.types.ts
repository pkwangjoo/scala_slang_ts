type LDC = {
  kind: "LDC"
  val: number
}

type LD = {
  kind: "LD"
  sym: string
}

type UNOP = {
  kind: "UNOP"
  sym: string
}

type BINOP = {
  kind: "BINOP"
  sym: string
}

type JOF = {
  kind: "JOF"
}

type GOTO = {
  kind: "GOTO"
}

type CALL = {
  kind: "CALL"
  arity: number
}

type ASSIGN = {
  kind: "ASSIGN"
  sym: string
}

type LDF = {
  kind: "LDF"
  prms: string[]
  addr: number
}

type RESET = {
  kind: "RESET"
}

type ENTER_SCOPE = {
  kind: "ENTER_SCOPE"
  syms: string[]
}

type EXIT_SCOPE = {
  kind: "EXIT_SCOPE"
}

type TAIL_CALL = {
  kind: "TAIL_CALL"
  arity: number
}

type DONE = {
  kind: "DONE"
}

type Instruction = LDC | LD | UNOP | BINOP | JOF | GOTO | CALL | ASSIGN | LDF | RESET | ENTER_SCOPE | EXIT_SCOPE | TAIL_CALL | DONE