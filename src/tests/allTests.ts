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

export const testBlockDeclarations = {
  name: "Block Declarations",
  test: `
{
  val a = 3;
}
val a = 6;
{
  val b = 4;
  val c = 5;
}
{
  val b = 2;
  {
    val a = 10;
  }
  val result = a + b;
}
`,
  expected: 8
};

export const testFunctionDefinition = {
  name: "Function Definition",
  test: `
def add(x: Int, y: Int) = {
  x + y;
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
    x + y;
  }
  helper(x, y);
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
      y;
  } else {
      add(x - 1, y + 1);
  }
}
val result = add(3, 5);
result;
`,
  expected: 8
};

export const testLambdaExpression = {
  name: "Lambda Expression",
  test: `
  val add = (x: int, y: int) => {
    x + y;
  };
  val result = add(3, 5);
  result;
`,
  expected: 8
};

export const testLambdaExpressionNested = {
  name: "Lambda Expression Nested",
  test: `
  val add = (x: int, y: int) => {
    x + y;
  };
  val curry = (x) => {
    (y) => {
      add(x, y);
    };
  };
  val result = curry(3)(5);
`,
  expected: 8
};

export const testHigherOrder = {
  name: "Higher Order Function",
  test: `
  def add(x: int, y: int) = {
    x + y;
  }
  val apply = (f, x, y) => f(x, y);

  val result = apply(add, 3, 5);
`,
  expected: 8
};

export const testIfElseRecursive = {
  name: "If Else",
  test: `
  def factorial(n: int) = {
    if (n == 0) {
      1;
    } else {
      n * (factorial(n - 1));
    }
  }
  val result = (factorial(3)) + 2;
`,
  expected: 8
};

export const testConditionalExpression = {
  name: "Conditional Expression",
  test: `
  val a = 3;
  val b = 8;
  val result = a + b < b ? a : b;
`,
  expected: 8
};

export const testConditionalExpressionWithFunction = {
  name: "Conditional Expression With Function",
  test: `
  val a = 3;
  val b = 8;
  def greater(x: int, y: int) = {
    x > y ? x : y;
  }
  val result = greater(a, b);
`,
  expected: 8
};

export const testConditionalExpressionWithRecursiveFunction = {
  name: "Conditional Expression With Recursive Function",
  test: `
  def fib(x: int) = {
    (x <= 1) 
           ? x 
           : (fib(x - 1)) + (fib(x - 2));
  }
  val result = fib(6);
  result;
`,
  expected: 8
};

export const testLogicalOperators = {
  name: "Logical Operators",
  test: `
  val a = 3;
  val b = 4;
  a > b;
`,
  expected: false
};

export const testLogicalOperatorsComplex = {
  name: "Logical Operators Complex",
  test: `
  val a = 3;
  val b = 4;
  a > b || a < b;
`,
  expected: true
};

export const testLogicalOperatorsLong = {
  name: "Logical Operators Long",
  test: `
  val a = 3;
  val b = 4;
  val f = false;
  a > b || a < b && f;
`,
  expected: false
};

export const testOptionalTypeAnnotation = {
  name: "Optional Type Annotation",
  test: `
  val a: int = 3;
  val b = 5;
  a + b;
`,
  expected: 8
};

export const testOptionalTypeAnnotationWithFunction = {
  name: "Optional Type Annotation With Function",
  test: `
  val a: int = 3;
  val b = 5;
  def add(x: int, y) = {
    x + y;
  }
  add(b, a);
`,
  expected: 8
};

export const testCs1101sR3 = { // Failing
  name: "CS1101S Reflection 3 Q1",
  test: `
  val x = 5;
  def f(g) = {
      val x = 3;
      x => {
          x + (g(x));
      };
  }
  def g(f, y) = {
      val h = (y, f) => {y(f);};
      h(f, y);
  }
  (g(y => {y + 2;}, x)) + 1;

`,
  expected: 8
};

export const allTests = [
  testSingleAssignment,
  testMultipleAssignment,
  testBlockDeclarations,
  testFunctionDefinition,
  testFunctionRecursive,
  testFunctionNested,
  testLambdaExpression,
  testLambdaExpressionNested,
  testHigherOrder,
  // testIfElseRecursive,
  testConditionalExpression,
  testConditionalExpressionWithFunction,
  // testConditionalExpressionWithRecursiveFunction,
  testLogicalOperators,
  testLogicalOperatorsComplex,
  testLogicalOperatorsLong,
  testOptionalTypeAnnotation,
  testOptionalTypeAnnotationWithFunction,
  // testCs1101sR3,
];