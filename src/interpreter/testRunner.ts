import { parse } from '../parser/parser'
import { allTests } from '../tests/allTests'
import { compileIntoVML } from './compiler'
import { infer_type_of_ast } from './type-inferencer'
import { VirtualMachine } from './vm'

function run(program: string, isRunTypeInference: boolean) {
  try {
    // Read the contents of the file synchronously
    const ast = parse(program)
    if (isRunTypeInference) {
      infer_type_of_ast(ast)
    }
    const is = compileIntoVML(ast)
    const vm = new VirtualMachine(is)
    return vm.run()
  } catch (error) {
    console.error('Error:', error)
  }
}

// Separate test logic into a function
function runTests(tests: any[], isRunTypeInference: boolean = false) {
  // Run each test
  for (let i = 0; i < tests.length; i++) {
    console.log('===== Running test: ', tests[i]['name'])
    try {
      const res = run(tests[i]['test'], isRunTypeInference)
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

const isRunTypeInference = process.argv[2] === 'type'
if (isRunTypeInference) {
  console.log('======== Type inference enabled. ========')
}
runTests(allTests, isRunTypeInference)
