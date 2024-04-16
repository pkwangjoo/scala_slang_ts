export class MemoryManager {
  private heap: DataView
  private wordSize: number
  private free: number
  private sizeOffset: number

  static False_tag: number = 13
  static True_tag: number = 14
  static Number_tag: number = 2
  static Null_tag: number = 3
  static Unassigned_tag: number = 4
  static Undefined_tag: number = 5
  static Blockframe_tag: number = 6
  static Callframe_tag: number = 7
  static Closure_tag: number = 8
  static Frame_tag: number = 9
  static Environment_tag: number = 10
  // static Pair_tag: number = 11;
  static Builtin_tag: number = 12

  private True: number;
  private False: number;
  private Null: number;
  private Undefined: number;
  private Unassigned: number;

  isFalse = (address: number): boolean => this.getTag(address) === MemoryManager.False_tag
  isTrue = (address: number): boolean => this.getTag(address) === MemoryManager.True_tag
  isBoolean = (address: number): boolean => this.isFalse(address) || this.isTrue(address)
  isNull = (address: number): boolean => this.getTag(address) === MemoryManager.Null_tag
  isUndefined = (address: number): boolean => this.getTag(address) === MemoryManager.Undefined_tag
  isUnassigned = (address: number): boolean => this.getTag(address) === MemoryManager.Unassigned_tag


  constructor(bytes: number, wordSize: number = 8) {
    // console.log("MemoryManager", bytes, wordSize)
    if (bytes % wordSize !== 0) {
      throw new Error('Heap bytes must be divisible by word size')
    }
    this.heap = new DataView(new ArrayBuffer(bytes))
    this.wordSize = wordSize
    this.free = 0
    this.sizeOffset = 5
    this.False = this.heapAllocate(MemoryManager.False_tag, 1)
    this.True = this.heapAllocate(MemoryManager.True_tag, 1)
    this.Null = this.heapAllocate(MemoryManager.Null_tag, 1)
    this.Undefined = this.heapAllocate(MemoryManager.Undefined_tag, 1)
    this.Unassigned = this.heapAllocate(MemoryManager.Unassigned_tag, 1)
  }

  heapAllocate(tag: number, size: number): number {
    // console.log("heapAllocate", tag, size)
    const address = this.free
    this.free += size
    // Set tag
    this.heap.setUint8(address * this.wordSize, tag)
    // Set # children
    this.heap.setUint16(address * this.wordSize + this.sizeOffset, size)

    return address
  }

  heapGet(address: number): number {
    return this.heap.getFloat64(address * this.wordSize)
  }

  heapSet(address: number, x: number): void {
    this.heap.setFloat64(address * this.wordSize, x)
  }

  get(address: number): number {
    return this.heap.getFloat64(address * this.wordSize)
  }

  set(address: number, x: number): void {
    this.heap.setFloat64(address * this.wordSize, x)
  }

  getChild(address: number, childIndex: number): number {
    return this.get(address + 1 + childIndex)
  }

  setChild(address: number, childIndex: number, value: number): void {
    this.set(address + 1 + childIndex, value)
  }

  getTag(address: number): number {
    return this.heap.getUint8(address * this.wordSize)
  }

  getNumberOfChildren(address: number): number {
    return this.getTag(address) === MemoryManager.Number_tag
      ? 0
      : this.heapGetSize(address) - 1
  }

  heapGetSize(address: number): number {
    return this.heap.getUint16(address * this.wordSize + this.sizeOffset)
  }

  heapGetChild(address: number, childIndex: number): number {
    return this.heapGet(address + 1 + childIndex)
  }

  heapSetChild(address: number, childIndex: number, value: number): void {
    this.heapSet(address + 1 + childIndex, value)
  }

  heapGetByteAtOffset(address: number, offset: number): number {
    return this.heap.getUint8(address * this.wordSize + offset)
  }

  heapSetByteAtOffset(address: number, offset: number, value: number): void {
    this.heap.setUint8(address * this.wordSize + offset, value)
  }

  heapGet2BytesAtOffset(address: number, offset: number): number {
    return this.heap.getUint16(address * this.wordSize + offset)
  }

  heapSet2BytesAtOffset(address: number, offset: number, value: number): void {
    this.heap.setUint16(address * this.wordSize + offset, value)
  }

  isBuiltIn(address: number): boolean {
    return this.getTag(address) === MemoryManager.Builtin_tag
  }

  heapAllocateBuiltin(id: number): number {
    const address = this.heapAllocate(MemoryManager.Builtin_tag, 1)
    this.heapSetByteAtOffset(address, 1, id)
    return address
  }

  heapGetBuiltinId(address: number): number {
    return this.heapGetByteAtOffset(address, 1)
  }

  heapAllocateClosure(arity: number, pc: number, env: number): number {
    const address = this.heapAllocate(MemoryManager.Closure_tag, 2)
    this.heapSetByteAtOffset(address, 1, arity)
    this.heapSet2BytesAtOffset(address, 2, pc)
    this.heapSet(address + 1, env)
    return address
  }

  heapGetClosureArity(address: number): number {
    return this.heapGetByteAtOffset(address, 1)
  }

  heapGetClosurePc(address: number): number {
    return this.heapGet2BytesAtOffset(address, 2)
  }

  heapGetClosureEnvironment(address: number): number {
    return this.heapGetChild(address, 0)
  }

  isClosure(address: number): boolean {
    return this.getTag(address) === MemoryManager.Closure_tag
  }

  heapAllocateBlockframe(env: number): number {
    const address = this.heapAllocate(MemoryManager.Blockframe_tag, 2)
    this.heapSet(address + 1, env)
    return address
  }

  heapGetBlockframeEnvironment(address: number): number {
    return this.heapGetChild(address, 0)
  }

  heapAllocateCallframe(env: number, pc: number): number {
    const address = this.heapAllocate(MemoryManager.Callframe_tag, 2)
    this.heapSet2BytesAtOffset(address, 2, pc)
    this.heapSet(address + 1, env)
    return address
  }

  heapGetCallframeEnvironment(address: number): number {
    return this.heapGetChild(address, 0)
  }

  heapGetCallframePc(address: number): number {
    return this.heapGet2BytesAtOffset(address, 2)
  }

  isCallframe(address: number): boolean {
    return this.getTag(address) === MemoryManager.Callframe_tag
  }

  heapAllocateFrame(numberOfValues: number): number {
    return this.heapAllocate(MemoryManager.Frame_tag, numberOfValues + 1)
  }

  heapAllocateEnvironment(numberOfFrames: number): number {
    return this.heapAllocate(MemoryManager.Environment_tag, numberOfFrames + 1)
  }

  heapEmptyEnvironment(): number {
    return this.heapAllocateEnvironment(0)
  }

  heapGetEnvironmentValue(
    envAddress: number,
    position: [number, number]
  ): number {
    const [frameIndex, valueIndex] = position
    const frameAddress = this.heapGetChild(envAddress, frameIndex)
    return this.heapGetChild(frameAddress, valueIndex)
  }

  heapSetEnvironmentValue(
    envAddress: number,
    position: [number, number],
    value: number
  ): void {
    const [frameIndex, valueIndex] = position
    const frameAddress = this.heapGetChild(envAddress, frameIndex)
    this.heapSetChild(frameAddress, valueIndex, value)
  }

  heapEnvironmentExtend(frameAddress: number, envAddress: number): number {
    const oldSize = this.heapGetSize(envAddress)
    const newEnvAddress = this.heapAllocateEnvironment(oldSize);
    let i;
    for (i = 0; i < oldSize - 1; i++) {
      this.heapSetChild(newEnvAddress, i, this.heapGetChild(envAddress, i))
    }
    this.heapSetChild(newEnvAddress, i, frameAddress)
    return newEnvAddress
  }

  heapAllocateNumber(n: number): number {
    const address = this.heapAllocate(MemoryManager.Number_tag, 2)
    this.heapSet(address + 1, n)
    return address
  }

  isNumber(address: number): boolean {
    return this.getTag(address) === MemoryManager.Number_tag
  }

  addressToTsValue = (x: number): any => {
    if (this.isTrue(x)) {
        return true;
    } else if (this.isFalse(x)) {
        return false;
    } else if (this.isNumber(x)) {
        return this.heapGet(x + 1);
    } else if (this.isUndefined(x)) {
        return undefined;
    } else if (this.isUnassigned(x)) {
        return "<unassigned>";
    } else if (this.isNull(x)) {
        return null;
    // } else if (isString(x)) {
    //     return heapGetString(x);
    } else if (this.isClosure(x)) {
        return "<closure>";
    } else if (this.isBuiltIn(x)) {
        return "<builtin>";
    } else {
        throw new Error("Unknown value at address: " + x);
    }
};

TsValueToAddress = (x: any): number => {
    if (typeof x === "boolean") {
        return x ? this.True : this.False;
    } else if (typeof x === "number") {
        return this.heapAllocateNumber(x);
    } else if (typeof x === "undefined") {
        return this.Undefined;
    } else if (x === null) {
        return this.Null;
    // } else if (typeof x === "string") {
    //     return heap_allocate_String(x);
    // } else if (Array.isArray(x)) {
    //     return heap_allocate_Pair(
    //         this.TS_value_to_address(x[0]),
    //         this.TS_value_to_address(x[1])
    //     );
    } else {
        throw new Error("Unknown JS value: " + x);
    }
};
}
