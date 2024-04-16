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

export const allTests = [
  testSingleAssignment,
  testMultipleAssignment,
];