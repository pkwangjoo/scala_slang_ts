"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryManager = void 0;
class MemoryManager {
    constructor(bytes, wordSize = 8) {
        this.isFalse = (address) => this.getTag(address) === MemoryManager.False_tag;
        this.isTrue = (address) => this.getTag(address) === MemoryManager.True_tag;
        this.isBoolean = (address) => this.isFalse(address) || this.isTrue(address);
        this.isNull = (address) => this.getTag(address) === MemoryManager.Null_tag;
        this.isUndefined = (address) => this.getTag(address) === MemoryManager.Undefined_tag;
        this.isUnassigned = (address) => this.getTag(address) === MemoryManager.Unassigned_tag;
        this.addressToTsValue = (x) => {
            if (this.isTrue(x)) {
                return true;
            }
            else if (this.isFalse(x)) {
                return false;
            }
            else if (this.isNumber(x)) {
                return this.heapGet(x + 1);
            }
            else if (this.isUndefined(x)) {
                return undefined;
            }
            else if (this.isUnassigned(x)) {
                return '<unassigned>';
            }
            else if (this.isNull(x)) {
                return null;
            }
            else if (this.isClosure(x)) {
                return '<closure>';
            }
            else {
                throw new Error('Unknown value at address: ' + x);
            }
        };
        this.TsValueToAddress = (x) => {
            if (typeof x === 'boolean') {
                return x ? this.True : this.False;
            }
            else if (typeof x === 'number') {
                return this.heapAllocateNumber(x);
            }
            else if (typeof x === 'undefined') {
                return this.Undefined;
            }
            else if (x === null) {
                return this.Null;
            }
            else {
                throw new Error('Unknown JS value: ' + x);
            }
        };
        // console.log("MemoryManager", bytes, wordSize)
        if (bytes % wordSize !== 0) {
            throw new Error('Heap bytes must be divisible by word size');
        }
        this.heap = new DataView(new ArrayBuffer(bytes));
        this.wordSize = wordSize;
        this.free = 0;
        this.sizeOffset = 5;
        this.False = this.heapAllocate(MemoryManager.False_tag, 1);
        this.True = this.heapAllocate(MemoryManager.True_tag, 1);
        this.Null = this.heapAllocate(MemoryManager.Null_tag, 1);
        this.Undefined = this.heapAllocate(MemoryManager.Undefined_tag, 1);
        this.Unassigned = this.heapAllocate(MemoryManager.Unassigned_tag, 1);
    }
    heapAllocate(tag, size) {
        // console.log("heapAllocate", tag, size)
        const address = this.free;
        this.free += size;
        // Set tag
        this.heap.setUint8(address * this.wordSize, tag);
        // Set # children
        this.heap.setUint16(address * this.wordSize + this.sizeOffset, size);
        return address;
    }
    heapGet(address) {
        return this.heap.getFloat64(address * this.wordSize);
    }
    heapSet(address, x) {
        this.heap.setFloat64(address * this.wordSize, x);
    }
    get(address) {
        return this.heap.getFloat64(address * this.wordSize);
    }
    set(address, x) {
        this.heap.setFloat64(address * this.wordSize, x);
    }
    getChild(address, childIndex) {
        return this.get(address + 1 + childIndex);
    }
    setChild(address, childIndex, value) {
        this.set(address + 1 + childIndex, value);
    }
    getTag(address) {
        return this.heap.getUint8(address * this.wordSize);
    }
    getNumberOfChildren(address) {
        return this.getTag(address) === MemoryManager.Number_tag
            ? 0
            : this.heapGetSize(address) - 1;
    }
    heapGetSize(address) {
        return this.heap.getUint16(address * this.wordSize + this.sizeOffset);
    }
    heapGetChild(address, childIndex) {
        return this.heapGet(address + 1 + childIndex);
    }
    heapSetChild(address, childIndex, value) {
        this.heapSet(address + 1 + childIndex, value);
    }
    heapGetByteAtOffset(address, offset) {
        return this.heap.getUint8(address * this.wordSize + offset);
    }
    heapSetByteAtOffset(address, offset, value) {
        this.heap.setUint8(address * this.wordSize + offset, value);
    }
    heapGet2BytesAtOffset(address, offset) {
        return this.heap.getUint16(address * this.wordSize + offset);
    }
    heapSet2BytesAtOffset(address, offset, value) {
        this.heap.setUint16(address * this.wordSize + offset, value);
    }
    heapGetBuiltinId(address) {
        return this.heapGetByteAtOffset(address, 1);
    }
    heapAllocateClosure(arity, pc, env) {
        const address = this.heapAllocate(MemoryManager.Closure_tag, 2);
        this.heapSetByteAtOffset(address, 1, arity);
        this.heapSet2BytesAtOffset(address, 2, pc);
        this.heapSet(address + 1, env);
        return address;
    }
    heapGetClosureArity(address) {
        return this.heapGetByteAtOffset(address, 1);
    }
    heapGetClosurePc(address) {
        return this.heapGet2BytesAtOffset(address, 2);
    }
    heapGetClosureEnvironment(address) {
        return this.heapGetChild(address, 0);
    }
    isClosure(address) {
        return this.getTag(address) === MemoryManager.Closure_tag;
    }
    heapAllocateBlockframe(env) {
        const address = this.heapAllocate(MemoryManager.Blockframe_tag, 2);
        this.heapSet(address + 1, env);
        return address;
    }
    heapGetBlockframeEnvironment(address) {
        return this.heapGetChild(address, 0);
    }
    heapAllocateCallframe(env, pc) {
        const address = this.heapAllocate(MemoryManager.Callframe_tag, 2);
        this.heapSet2BytesAtOffset(address, 2, pc);
        this.heapSet(address + 1, env);
        return address;
    }
    heapGetCallframeEnvironment(address) {
        return this.heapGetChild(address, 0);
    }
    heapGetCallframePc(address) {
        return this.heapGet2BytesAtOffset(address, 2);
    }
    isCallframe(address) {
        return this.getTag(address) === MemoryManager.Callframe_tag;
    }
    heapAllocateFrame(numberOfValues) {
        return this.heapAllocate(MemoryManager.Frame_tag, numberOfValues + 1);
    }
    heapAllocateEnvironment(numberOfFrames) {
        return this.heapAllocate(MemoryManager.Environment_tag, numberOfFrames + 1);
    }
    heapEmptyEnvironment() {
        return this.heapAllocateEnvironment(0);
    }
    heapGetEnvironmentValue(envAddress, position) {
        const [frameIndex, valueIndex] = position;
        const frameAddress = this.heapGetChild(envAddress, frameIndex);
        return this.heapGetChild(frameAddress, valueIndex);
    }
    heapSetEnvironmentValue(envAddress, position, value) {
        const [frameIndex, valueIndex] = position;
        const frameAddress = this.heapGetChild(envAddress, frameIndex);
        this.heapSetChild(frameAddress, valueIndex, value);
    }
    heapEnvironmentExtend(frameAddress, envAddress) {
        const oldSize = this.heapGetSize(envAddress);
        const newEnvAddress = this.heapAllocateEnvironment(oldSize);
        let i;
        for (i = 0; i < oldSize - 1; i++) {
            this.heapSetChild(newEnvAddress, i, this.heapGetChild(envAddress, i));
        }
        this.heapSetChild(newEnvAddress, i, frameAddress);
        return newEnvAddress;
    }
    heapAllocateNumber(n) {
        const address = this.heapAllocate(MemoryManager.Number_tag, 2);
        this.heapSet(address + 1, n);
        return address;
    }
    isNumber(address) {
        return this.getTag(address) === MemoryManager.Number_tag;
    }
    visualiseHeap() {
        const heapSize = this.free;
        const memoryBlocks = [];
        for (let address = 0; address < heapSize; address++) {
            const tag = this.getTag(address);
            let value = '';
            let children;
            switch (tag) {
                case MemoryManager.False_tag:
                    value = 'False';
                    break;
                case MemoryManager.True_tag:
                    value = 'True';
                    break;
                case MemoryManager.Number_tag:
                    value = this.heapGet(address + 1);
                    break;
                case MemoryManager.Null_tag:
                    value = 'Null';
                    break;
                case MemoryManager.Undefined_tag:
                    value = 'Undefined';
                    break;
                case MemoryManager.Unassigned_tag:
                    value = 'Unassigned';
                    break;
                case MemoryManager.Blockframe_tag:
                    value = 'Blockframe';
                    break;
                case MemoryManager.Callframe_tag:
                    value = 'Callframe';
                    break;
                case MemoryManager.Closure_tag:
                    value = 'Closure';
                    break;
                case MemoryManager.Frame_tag:
                    value = 'Frame';
                    break;
                case MemoryManager.Environment_tag:
                    value = 'Environment';
                    break;
                default:
                    value = '<unknown>';
                    break;
            }
            const block = {
                address,
                value,
            };
            if (tag !== MemoryManager.Number_tag &&
                tag !== MemoryManager.Blockframe_tag) {
                const numberOfChildren = this.getNumberOfChildren(address);
                if (numberOfChildren > 0) {
                    children = [];
                    for (let i = 0; i < numberOfChildren; i++) {
                        const childAddress = this.getChild(address, i);
                        const childValue = this.get(childAddress);
                        children.push({
                            address: childAddress,
                            value: childValue,
                        });
                    }
                }
            }
            if (children) {
                block.children = children;
            }
            memoryBlocks.push(block);
        }
        return memoryBlocks;
    }
}
exports.MemoryManager = MemoryManager;
MemoryManager.False_tag = 13;
MemoryManager.True_tag = 14;
MemoryManager.Number_tag = 2;
MemoryManager.Null_tag = 3;
MemoryManager.Unassigned_tag = 4;
MemoryManager.Undefined_tag = 5;
MemoryManager.Blockframe_tag = 6;
MemoryManager.Callframe_tag = 7;
MemoryManager.Closure_tag = 8;
MemoryManager.Frame_tag = 9;
MemoryManager.Environment_tag = 10;
//# sourceMappingURL=memoryManager.js.map