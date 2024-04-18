import { MemoryManager } from '../memory_manager/memoryManager'

type Environment = {
  frames: Frame[]
}

type Frame = Map<string, any>

interface BinopMicrocode {
  [key: string]: (arg1: any, arg2: any) => any
}

export class VirtualMachine {
  private operandStack: any[] = []
  private programCounter: number = 0
  private environment: number = 0
  private runtimeStack: any[] = []
  private mem: MemoryManager = new MemoryManager(10000000, 8)
  private instructions: Instruction[] = []
  private lastPopped: any

  private globalEnvironment: Environment = {
    frames: [],
  }

  constructor(private instrs: Instruction[]) {
    this.instructions = instrs
    this.instructions.push({ kind: 'DONE' })
  }

  popOperand() {
    this.lastPopped = this.operandStack.pop()
    return this.lastPopped
  }

  debugEnv(pos, env) {
    return this.mem.heapGetEnvironmentValue(env, pos)
  }

  run(): any {
    try {
      while (this.instructions[this.programCounter].kind !== 'DONE') {
        const instruction = this.instructions[this.programCounter]
        this.execute(instruction)
        this.programCounter++
      }
    } catch (e) {
      console.error('The above led to a runtime error.')
      process.exit(1)
    }
    // return the top of the runtime stack
    return this.mem.addressToTsValue(this.lastPopped)
  }

  private applyUnop(op: string, arg: any): any {
    if (op === '!') {
      return this.mem.TsValueToAddress(!this.mem.addressToTsValue(arg))
    }
    if (op === '-') {
      return this.mem.TsValueToAddress(-this.mem.addressToTsValue(arg))
    }
    console.error(`Unary operator not implemented: ${op}`)
    throw new Error()
  }

  binopMicrocode: BinopMicrocode = {
    '+': (a: number | string, b: number | string) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b
      }
      if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
      }
      throw new Error('Invalid operands for addition')
    },
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
    '%': (a: number, b: number) => a % b,
    '<': (a: number, b: number) => a < b,
    '<=': (a: number, b: number) => a <= b,
    '>': (a: number, b: number) => a > b,
    '>=': (a: number, b: number) => a >= b,
    '==': (a: any, b: any) => a === b,
    '!=': (a: any, b: any) => a !== b,
    '&&': (a: boolean, b: boolean) => a && b,
    '||': (a: boolean, b: boolean) => a || b,
  }

  private applyBinop(op: string, arg1: any, arg2: any): any {
    const val1 = this.mem.addressToTsValue(arg2)
    const val2 = this.mem.addressToTsValue(arg1)
    const microcode = this.binopMicrocode[op]
    try {
      const result = microcode(val1, val2)
      return this.mem.TsValueToAddress(result)
    } catch (e) {
      console.error(`Error applying binop ${op} to ${val1} and ${val2}`)
      throw e
    }
  }

  execute(instruction: Instruction) {
    // console.log(`Executing ${instruction.kind}`)
    if (instruction.kind === 'LDC') {
      this.operandStack.push(this.mem.TsValueToAddress(instruction.val))
      return
    }
    if (instruction.kind === 'LD') {
      const val = this.mem.heapGetEnvironmentValue(
        this.environment,
        instruction.pos
      )
      if (this.mem.getTag(val) === MemoryManager.Unassigned_tag) {
        console.error(`Access of unassigned variable at position ${instruction.pos}`)
        throw new Error('access of unassigned variable')
      }
      this.operandStack.push(val)
      return
    }
    if (instruction.kind === 'UNOP') {
      this.operandStack.push(this.applyUnop(instruction.sym, this.popOperand()))
      return
    }
    if (instruction.kind === 'BINOP') {
      this.operandStack.push(
        this.applyBinop(
          instruction.operator,
          this.popOperand(),
          this.popOperand()
        )
      )
      return
    }
    if (instruction.kind === 'JOF') {
      if (this.popOperand() === this.mem.False) {
        this.programCounter = instruction.addr
      }
      return
    }
    if (instruction.kind === 'GOTO') {
      this.programCounter = instruction.addr - 1 // -1 because we increment it at the end of the loop
      return
    }
    if (instruction.kind === 'CALL') {
      const arity = instruction.arity
      const fun = this.operandStack.slice(-arity - 1)[0]
      const newProgramCounter = this.mem.heapGetClosurePc(fun)
      const newFrame = this.mem.heapAllocateFrame(arity)
      for (let i = arity - 1; i >= 0; i--) {
        this.mem.heapSetChild(newFrame, i, this.popOperand())
      }
      this.popOperand() // pop the function
      this.runtimeStack.push(
        this.mem.heapAllocateCallframe(this.environment, this.programCounter)
      )
      this.environment = this.mem.heapEnvironmentExtend(
        newFrame,
        this.mem.heapGetClosureEnvironment(fun)
      )
      this.programCounter = newProgramCounter - 1 // -1 because we increment it at the end of the loop
      return
    }
    if (instruction.kind === 'ASSIGN') {
      const val = this.operandStack[this.operandStack.length - 1]
      this.mem.heapSetEnvironmentValue(this.environment, instruction.pos, val)
      return
    }
    if (instruction.kind === 'LDF') {
      const closureAddress = this.mem.heapAllocateClosure(
        instruction.prms.length,
        instruction.addr,
        this.environment
      )
      this.operandStack.push(closureAddress)
      return
    }
    if (instruction.kind === 'RESET') {
      const topFrame = this.runtimeStack.pop()
      if (this.mem.isCallframe(topFrame)) {
        this.programCounter = this.mem.heapGetCallframePc(topFrame)
        this.environment = this.mem.heapGetCallframeEnvironment(topFrame)
      } else {
        this.programCounter--
      }
      return
    }
    if (instruction.kind === 'ENTER_SCOPE') {
      this.runtimeStack.push(this.mem.heapAllocateBlockframe(this.environment))
      const frameAddress = this.mem.heapAllocateFrame(instruction.num)
      this.environment = this.mem.heapEnvironmentExtend(
        frameAddress,
        this.environment
      )
      for (let i = 0; i < instruction.num; i++) {
        this.mem.heapSetChild(frameAddress, i, MemoryManager.Unassigned_tag)
      }
      return
    }
    if (instruction.kind === 'EXIT_SCOPE') {
      const topFrame = this.runtimeStack.pop()
      this.environment = this.mem.heapGetBlockframeEnvironment(topFrame)
      return
    }
    if (instruction.kind === 'POP') {
      this.popOperand()
      return
    }
    if (instruction.kind === 'TAIL_CALL') {
      const arity = instruction.arity
      const fun = this.operandStack.slice(-arity - 1)[0]
      const newProgramCounter = this.mem.heapGetClosurePc(fun)
      const newFrame = this.mem.heapAllocateFrame(arity)
      for (let i = arity - 1; i >= 0; i--) {
        this.mem.heapSetChild(newFrame, i, this.popOperand())
      }
      this.popOperand() // pop the function
      this.environment = this.mem.heapEnvironmentExtend(
        newFrame,
        this.mem.heapGetClosureEnvironment(fun)
      )
      this.programCounter = newProgramCounter
      return
    }

    console.error(`Not implemented: ${instruction.kind}`)
    throw new Error()
  }
}
