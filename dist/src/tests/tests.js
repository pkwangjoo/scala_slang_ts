"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test4 = exports.test3 = exports.test2 = exports.test1 = void 0;
exports.test1 = `
1 + 2;
`;
exports.test2 = `
{

    true && true;

    true && false;

    true || false;

    false || true;

    false || false;
}

`;
// test name
exports.test3 = `
val a = 3;
a;

val b = true;
b;

val c = false;

val d = b && c;

d;
`;
exports.test4 = `
{


    def fn(a: int, b: int) = {
        return a + b;
    }

    fn(1)(3);
}

`;
// mutual recursion
// polymorphism
// let- polymorhphism
// monomorphic
// type schema, type funciton
// see how scala workds,
// scala constructs let polymorphisms , let polymorphism,
// follows the specification of hindley milner
// constraint based approach
// constraint solving hindley milner, elegant implementation
// constraint based types
// we dont need to deal with the subtyping
//# sourceMappingURL=tests.js.map