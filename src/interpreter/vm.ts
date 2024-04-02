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
    if (instruction.kind === "CALL") {
      const arity = instruction.arity;
      const fun = this.operandStack.slice(-arity - 1)[0];
      // TODO: handle any built-in functions
      const newProgramCounter = this.mem.heapGetClosurePc(fun);
      const newFrame = this.mem.heapAllocateFrame(arity);
      for (let i = arity - 1; i >= 0; i--) {
        this.mem.heapSetChild(newFrame, i, this.operandStack.pop());
      }
      this.operandStack.pop(); // pop the function
      this.runtimeStack.push(this.mem.heapAllocateCallframe(this.environment, this.programCounter));
      this.environment = this.mem.heapEnvironmentExtend(
        newFrame,
        this.mem.heapGetClosureEnvironment(fun)
      );
      this.programCounter = newProgramCounter;
    }
    if (instruction.kind === "ASSIGN") {
      const val = this.operandStack[this.operandStack.length - 1]
      this.mem.heapSetEnvironmentValue(this.environment, instruction.pos, val);
    }
    if (instruction.kind === "LDF") {
      const closureAddress = this.mem.heapAllocateClosure(
        instruction.prms.length,
        instruction.addr,
        this.environment
      );
      this.operandStack.push(closureAddress);
    }
    if (instruction.kind === "RESET") {
      const topFrame = this.runtimeStack.pop();
      if (this.mem.isCallframe(topFrame)) {
        this.programCounter = this.mem.heapGetCallframePc(topFrame);
        this.environment = this.mem.heapGetCallframeEnvironment(topFrame);
      } else {
        this.programCounter--;
      }
    }
    throw new Error("Not implemented");
  }
}
