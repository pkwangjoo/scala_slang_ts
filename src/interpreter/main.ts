import { parse } from '../parser/parser'
import { compileIntoVML } from './compiler'
import { VirtualMachine } from './vm'
import * as fs from 'fs'


function runWithFile(filePath: string) {
  try {
    // Read the contents of the file synchronously
    const program = fs.readFileSync(filePath, 'utf8')
    const ast = parse(program)
    // Disable typechecking by commenting this line
    // typecheck(ast) // ! TODO uncomment this line
    const is = compileIntoVML(ast)
    const vm = new VirtualMachine(is)
    return vm.run()
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

const filePath = process.argv[2]
if (!filePath) {
  console.error('Please provide a file path as an argument.')
  process.exit(1)
}
console.log(runWithFile(filePath))

// runTests()
