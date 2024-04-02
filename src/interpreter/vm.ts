type Environment = {
  frames: Frame[]
}

type Frame = Map<string, any>;

interface BinopMicrocode {
  [key: string]: (arg1: any, arg2: any) => any;
}

class VirtualMachine {
  private operandStack: any[] = [];
  private programCounter: number = 0;
  private environment: number = 0;
  private runtimeStack: any[] = [];
  private mem: MemoryManager = new MemoryManager(10000000, 8);

  private globalEnvironment: Environment = { frames: [
    // TODO: Add built-in functions to the global environment
  ] };

  constructor(private instructions: Instruction[]) {
    // init global environment
  }

  run() : any {
    while (this.programCounter < this.instructions.length) {
      const instruction = this.instructions[this.programCounter];
      this.execute(instruction);
    }
    // return the top of the runtime stack
    return this.runtimeStack[this.runtimeStack.length - 1];
  }

  private applyUnop(op: string, arg: any): any {
    if (op === "!") {
      return !arg;
    }
    if (op === "-") {
      return -arg;
    }
    throw new Error("Not implemented");
  }

  binopMicrocode: BinopMicrocode = {
    "+": (a: number | string, b: number | string) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      }
      if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
      }
      throw new Error("Invalid operands for addition");
    },
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
    "%": (a: number, b: number) => a % b,
    "<": (a: number, b: number) => a < b,
    "<=": (a: number, b: number) => a <= b,
    ">": (a: number, b: number) => a > b,
    ">=": (a: number, b: number) => a >= b,
    "==": (a: any, b: any) => a === b,
    "!=": (a: any, b: any) => a !== b,
    "&&": (a: boolean, b: boolean) => a && b,
    "||": (a: boolean, b: boolean) => a || b,
  }

  private applyBinop(op: string, arg1: any, arg2: any): any {
    return this.binopMicrocode[op](arg1, arg2);
  }

  execute(instruction: Instruction) {
    if (instruction.kind === "LDC") {
      this.operandStack.push(instruction.val);
    }
    if (instruction.kind === "LD") {
      const val = this.mem.heapGetEnvironmentValue(this.environment, instruction.pos);
      if (val === MemoryManager.Unassigned_tag) {
        throw new Error("access of unassigned variable");
      }
      this.operandStack.push(val);
    }
    if (instruction.kind === "UNOP") {
      this.operandStack.push(
        this.applyUnop(instruction.sym, this.operandStack.pop())
      );
    }
    if (instruction.kind === "BINOP") {
      this.operandStack.push(
        this.applyBinop(instruction.operator, this.operandStack.pop(), this.operandStack.pop())
      );
    }
    if (instruction.kind === "JOF") {
      if (this.operandStack.pop() === MemoryManager.True_tag) {
        this.programCounter = instruction.addr;
      }
    }
    if (instruction.kind === "GOTO") {
      this.programCounter = instruction.addr;
    }
    throw new Error("Not implemented");
  }
}
