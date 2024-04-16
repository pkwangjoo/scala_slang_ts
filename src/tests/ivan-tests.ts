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
  def add2(x: Int, y: Int) = {
    return x + y;
  }
  return add2(x, y);
}
val result = add(3, 5);
result;
`,
  expected: 8
};

export const allTests = [
  testSingleAssignment,
  testMultipleAssignment,
  testFunctionDefinition,
  testFunctionNested,
];