export const testSingleAssignment = {
  name: "Single Assignment",
  test: `
val a = 3;
a;
`,
  expected: 3
};

export const testMultipleAssignment = {
  name: "Multiple Assignment",
  test: `
val a = 3;
val b = 4;
a + b;
`,
  expected: 7
};

export const testFunctionDefinition = {
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

export const testFunctionNested = {
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

export const testFunctionRecursive = {
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

export const testNameWithNumber = {
  name: "Test with number in name",
  test: `
val a = 3;
val a1 = 4;
b;
}
`,
  expected: 4
};

export const testParseFail = {
  name: "Test parse fail",
  test: `
  hello world
  `,
}

export const allTests = [
  // testSingleAssignment,
  // testMultipleAssignment,
  // testFunctionDefinition,
  // testFunctionRecursive,
  // testFunctionNested,
  // testNameWithNumber,
  testParseFail,
];