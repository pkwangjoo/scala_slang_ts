type Environment = {
  frames: Frame[]
}

type Frame = Map<string, any>;

class VirtualMachine {
  private operandStack: any[] = [];
  private programCounter: number = 0;
  private environment: Environment = { frames: [] };
  private runtimeStack: any[] = [];

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

  execute(instruction: Instruction) {
    if (instruction.kind === "LDC") {
      this.operandStack.push(instruction.val);
    }
    throw new Error("Not implemented");
  }
}
