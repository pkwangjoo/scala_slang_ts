"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTests = exports.testCs1101sR3 = exports.testOptionalTypeAnnotationWithFunction = exports.testOptionalTypeAnnotation = exports.testLogicalOperatorsLong = exports.testLogicalOperatorsComplex = exports.testLogicalOperators = exports.testConditionalExpressionWithRecursiveFunction = exports.testConditionalExpressionWithFunction = exports.testConditionalExpression = exports.testIfElse = exports.testHigherOrder = exports.testLambdaExpressionNested = exports.testLambdaExpression = exports.testFunctionRecursive = exports.testFunctionNested = exports.testFunctionDefinition = exports.testBlockDeclarations = exports.testMultipleAssignment = exports.testSingleAssignment = void 0;
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
exports.testBlockDeclarations = {
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
exports.testLambdaExpression = {
    name: "Lambda Expression",
    test: `
  val add = (x: int, y: int) => {
    return x + y;
  };
  val result = add(3, 5);
  result;
`,
    expected: 8
};
exports.testLambdaExpressionNested = {
    name: "Lambda Expression Nested",
    test: `
  val add = (x: int, y: int) => {
    return x + y;
  };
  val curry = (x) => {
    return (y) => {
      return add(x, y);
    };
  };
  val result = curry(3)(5);
`,
    expected: 8
};
exports.testHigherOrder = {
    name: "Higher Order Function",
    test: `
  def add(x: int, y: int) = {
    return x + y;
  }
  val apply = (f, x, y) => f(x, y);

  val result = apply(add, 3, 5);
`,
    expected: 8
};
exports.testIfElse = {
    name: "If Else",
    test: `
  def factorial(n: int) = {
    if (n == 0) {
      return 1;
    } else {
      return n * (factorial(n - 1));
    }
  }
  val result = (factorial(3)) + 2;
`,
    expected: 8
};
exports.testConditionalExpression = {
    name: "Conditional Expression",
    test: `
  val a = 3;
  val b = 8;
  val result = a + b < b ? a : b;
`,
    expected: 8
};
exports.testConditionalExpressionWithFunction = {
    name: "Conditional Expression With Function",
    test: `
  val a = 3;
  val b = 8;
  def greater(x: int, y: int) = {
    return x > y ? x : y;
  }
  val result = greater(a, b);
`,
    expected: 8
};
exports.testConditionalExpressionWithRecursiveFunction = {
    name: "Conditional Expression With Recursive Function",
    test: `
  def fib(x: int) = {
    return (x <= 1) 
           ? x 
           : (fib(x - 1)) + (fib(x - 2));
  }
  val result = fib(6);
  result;
`,
    expected: 8
};
exports.testLogicalOperators = {
    name: "Logical Operators",
    test: `
  val a = 3;
  val b = 4;
  a > b;
`,
    expected: false
};
exports.testLogicalOperatorsComplex = {
    name: "Logical Operators Complex",
    test: `
  val a = 3;
  val b = 4;
  a > b || a < b;
`,
    expected: true
};
exports.testLogicalOperatorsLong = {
    name: "Logical Operators Long",
    test: `
  val a = 3;
  val b = 4;
  val f = false;
  a > b || a < b && f;
`,
    expected: false
};
exports.testOptionalTypeAnnotation = {
    name: "Optional Type Annotation",
    test: `
  val a: int = 3;
  val b = 5;
  a + b;
`,
    expected: 8
};
exports.testOptionalTypeAnnotationWithFunction = {
    name: "Optional Type Annotation With Function",
    test: `
  val a: int = 3;
  val b = 5;
  def add(x: int, y) = {
    return x + y;
  }
  add(b, a);
`,
    expected: 8
};
exports.testCs1101sR3 = {
    name: "CS1101S Reflection 3 Q1",
    test: `
  val x = 5;
  def f(g) = {
      val x = 3;
      return x => {
          return x + (g(x));
      };
  }
  def g(f, y) = {
      val h = (y, f) => {return y(f);};
      return h(f, y);
  }
  (g(y => {return y + 2;}, x)) + 1;

`,
    expected: 8
};
exports.allTests = [
    exports.testSingleAssignment,
    exports.testMultipleAssignment,
    exports.testBlockDeclarations,
    exports.testFunctionDefinition,
    exports.testFunctionRecursive,
    exports.testFunctionNested,
    exports.testLambdaExpression,
    exports.testLambdaExpressionNested,
    exports.testHigherOrder,
    exports.testIfElse,
    exports.testConditionalExpression,
    exports.testConditionalExpressionWithFunction,
    exports.testConditionalExpressionWithRecursiveFunction,
    exports.testLogicalOperators,
    exports.testLogicalOperatorsComplex,
    exports.testLogicalOperatorsLong,
    exports.testOptionalTypeAnnotation,
    exports.testOptionalTypeAnnotationWithFunction,
    // testCs1101sR3,
];
//# sourceMappingURL=allTests.js.map