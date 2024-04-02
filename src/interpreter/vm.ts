type Environment = {
  frames: Frame[]
}

type Frame = Map<string, any>;

class VirtualMachine {
  private operandStack: any[] = [];
  private programCounter: number = 0;
  private environment: Environment = { frames: [] };
  private runtimeStack: any[] = [];
  private mem: MemoryManager = new MemoryManager(10000000, 8);

  private globalEnvironment: Environment = { frames: [
    // TODO: Add built-in functions to the global environment
  ] };

  constructor(private instructions: Instruction[]) {
    this.environment = this.globalEnvironment;
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

  execute(instruction: Instruction) {
    if (instruction.kind === "LDC") {
      this.operandStack.push(instruction.val);
    }
    if (instruction.kind === "LD") {
      this.operandStack.push(
        this.applyUnop(instruction.sym, this.operandStack.pop())
      );
    }
    throw new Error("Not implemented");
  }
}
