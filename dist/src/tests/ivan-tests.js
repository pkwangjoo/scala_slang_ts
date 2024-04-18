"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTests = exports.testParseFail = exports.testNameWithNumber = exports.testFunctionRecursive = exports.testFunctionNested = exports.testFunctionDefinition = exports.testMultipleAssignment = exports.testSingleAssignment = void 0;
exports.testSingleAssignment = {
    name: "Single Assignment",
    test: `
val a = 3;
a;
`,
    expected: 3
};
exports.testMultipleAssignment = {
    name: "Multiple Assignment",
    test: `
val a = 3;
val b = 4;
a + b;
`,
    expected: 7
};
exports.testFunctionDefinition = {
    name: "Function Definition",
    test: `
def add(x: Int, y: Int) = {
  return x + y;
}
val result = add(3, 5);
result;
`,
    expected: 8
};
exports.testFunctionNested = {
    name: "Nested Function Definition",
    test: `
def add(x: Int, y: Int) = {
  def helper(x: Int, y: Int) = {
    return x + y;
  }
  return helper(x, y);
}
val result = add(3, 5);
result;
`,
    expected: 8
};
exports.testFunctionRecursive = {
    name: "Recursive Function",
    test: `
def add(x: Int, y: Int) = {
  if (x == 0) {
      return y;
  } else {
      return add(x - 1, y + 1);
  }
}
val result = add(3, 5);
result;
`,
    expected: 8
};
exports.testNameWithNumber = {
    name: "Test with number in name",
    test: `
val a = 3;
val a1 = 4;
b;
}
`,
    expected: 4
};
exports.testParseFail = {
    name: "Test parse fail",
    test: `
  hello world
  `,
};
exports.allTests = [
    // testSingleAssignment,
    // testMultipleAssignment,
    // testFunctionDefinition,
    // testFunctionRecursive,
    // testFunctionNested,
    // testNameWithNumber,
    exports.testParseFail,
];
//# sourceMappingURL=ivan-tests.js.map