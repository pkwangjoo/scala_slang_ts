import { run } from 'node:test'
import { parse } from '../parser/parser'
import { compileIntoVML } from './compiler'
import { infer_type_of_ast } from './type-inferencer'
import { VirtualMachine } from './vm'
import * as fs from 'fs'


function runWithFile(filePath: string, isRunTypeInference: boolean = false) {
  try {
    // Read the contents of the file synchronously
    const program = fs.readFileSync(filePath, 'utf8')
    const ast = parse(program)
    if (isRunTypeInference) {
      console.log('Running type checker...')
      infer_type_of_ast(ast)
    }
    const is = compileIntoVML(ast)
    const vm = new VirtualMachine(is)
    return vm.run()
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

const filePath = process.argv[2]
const isRunTypeInference = process.argv[3] === 'type'
if (isRunTypeInference) {
  console.log('Type inference enabled.')
}
if (!filePath) {
  console.error('Please provide a file path as an argument.')
  process.exit(1)
}
console.log(runWithFile(filePath, isRunTypeInference))
