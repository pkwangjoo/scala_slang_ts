import { parse } from "../parser/parser";
import { test_case_5 } from "../tests/parser-test";
import { compileIntoVML } from "./compiler";
import { type_of, typecheck } from "./typechecker";
import { VirtualMachine } from "./vm";
import { test1, test2, test3, test4 } from "../tests/tests";
import { allTests } from "../tests/ivan-tests";

function run(program) {
  const ast = parse(program);
  console.log("recevied ast as: ", JSON.stringify(ast as AstNode, null, 2));
  // disable typechecking by commenting this line
  // typecheck(ast)
  const is = compileIntoVML(ast as AstNode);
  const vm = new VirtualMachine(is);
  return vm.run();
}

const tests = allTests;
for (let i = 0; i < tests.length; i++) {
  console.log("running test: ", tests[i]['name']);
  try {
    const res = run(tests[i]['test']);
    if (res === tests[i]['expected']) {
      console.log(`test ${tests[i]['name']} passed`);
    } else {
      console.log(`test ${tests[i]['name']} failed: expected ${tests[i]['expected']} but got ${res}`);
    }
  } catch (e) {
    if (e === tests[i]['expected']) {
      console.log(`test ${tests[i]['name']} passed`);
    } else {
      throw e;
    }
  }
}

