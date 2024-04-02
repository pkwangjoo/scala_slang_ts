export const test_case = `

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


`

export const test_case_2 = `
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

`

export const test_case_3 = `
def hello(a, b, c) = {
    if a {
        b;
    } else {
        c;
    }
}

`

export const test_case_4 = `
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

`