type LDC = {
  kind: "LDC"
  val: number | boolean | undefined
}

type LD = {
  kind: "LD"
  sym: string
  pos: [number, number]
}

type UNOP = {
  kind: "UNOP"
  sym: string
}

type BINOP = {
  kind: "BINOP"
  operator : string
}

type JOF = {
  kind: "JOF"
  addr: number
}

type GOTO = {
  kind: "GOTO"
  addr: number
}

type CALL = {
  kind: "CALL"
  arity: number
}

type ASSIGN = {
  kind: "ASSIGN"
  sym: string
  pos: [number, number]
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
  num: number
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

type POP = {
  kind: "POP"
}

type Instruction = LDC | LD | UNOP | BINOP | JOF | GOTO | CALL | ASSIGN | LDF | RESET | ENTER_SCOPE | EXIT_SCOPE | TAIL_CALL | DONE | POP