"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test_case_5 = exports.test_case_4 = exports.test_case_3 = exports.test_case_2 = exports.test_case = void 0;
exports.test_case = `

val a = 4; val c = 4; 
val b = 5;
val ab = a + b;

def hello (a, b, c) = {
    a + b;
}

val lf = (a, b, c) => {
    a + b;
};

def hello (a, b, c) = {
    a + b;

}


`;
exports.test_case_2 = `
a;
b;
a ? b : c;
a + b;
if a {
    b;
} else {
    if c {
        d;
    } else {
        p;
    }
}
if a {
    aa;
} else if b{
    ba;
} else {
    ca;
}

`;
exports.test_case_3 = `
def hello(a, b, c) = {
    if a {
        b;
    } else {
        c;
    }
}

`;
exports.test_case_4 = `
val hello = (a, b, c) => {
    a;
};

val helloexpr = (a, b, c) => a;

def helloFn(a, b, c) = {
    if a {
        b;
    } else {
        c;
    }
}

`;
// Return statement
exports.test_case_5 = `
def fn (a, b, c) = {
    if a {
        return b;
    }

    return c;

}

`;
//# sourceMappingURL=parser-test.js.map