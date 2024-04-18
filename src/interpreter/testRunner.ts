import { parse } from '../parser/parser'
import { allTests } from '../tests/ivan-tests'
import { compileIntoVML } from './compiler'
import { typecheck } from './typechecker'
import { VirtualMachine } from './vm'

function run(program: string) {
  try {
    // Read the contents of the file synchronously
    const ast = parse(program)
    // typecheck(ast) // ! TODO uncomment this line
    const is = compileIntoVML(ast)
    const vm = new VirtualMachine(is)
    return vm.run()
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

// Separate test logic into a function
function runTests(tests: any[]) {
  // Run each test
  for (let i = 0; i < tests.length; i++) {
    console.log('===== Running test: ', tests[i]['name'])
    try {
      const res = run(tests[i]['test'])
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
        console.error(`===== Test ${tests[i]['name']} failed: expected ${tests[i]['expected']} but got ${e}`)
      }
    }
  }
}

runTests(allTests)
