console.log('main.ts')

import { parse } from '../parser/parser'
import { allTests } from '../tests/ivan-tests'
import { compileIntoVML } from './compiler'
import { type_of, typecheck } from './typechecker'
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
  }
}

// Separate test logic into a function
function runTests() {
  const tests = allTests
  // Run each test
  for (let i = 0; i < tests.length; i++) {
    console.log('===== Running test: ', tests[i]['name'])
    try {
      const res = runWithFile(tests[i]['test'])
      if (res === tests[i]['expected']) {
        console.log(`===== Test ${tests[i]['name']} passed`)
      } else {
        console.log(
          `===== Test ${tests[i]['name']} failed: expected ${tests[i]['expected']} but got ${res}`
        )
      }
    } catch (e) {
      if (e === tests[i]['expected']) {
        console.log(`===== Test ${tests[i]['name']} passed`)
      } else {
        throw e
      }
    }
  }
}

console.error('===== Running tests =====')

// Check if the script is run from the command line
if (require.main === module) {
  // If run from command line, expect a file path argument
  const filePath = process.argv[2]
  if (!filePath) {
    console.error('Please provide a file path as an argument.')
    process.exit(1)
  }
  console.log(runWithFile(filePath))
}
