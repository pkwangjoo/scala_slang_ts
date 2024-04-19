

import { infer_type_of_ast } from "../interpreter/type-inferencer"
import { parse } from "../parser/parser"


const pos_tc_1 = `
1 + 3;
`

const pos_tc_2 =  `
val a = 3;
val b = a + 3;
val c = b + 4;
val d = c + 5;
d;
`
const pos_tc_3 = `
val a = 3;
val b = a + 3;
{
    val c = b + 4;
    {
        {
            val d = c + 5;
        }

    }
    
}
`

const pos_tc_4 =  `
(x) => (x + 1 > 3) == false;
`

const pos_tc_5 = `
if true {
    4;
} else {
    5;
}
`

const pos_tc_6 = `
def fn (a: int, b: int) = {
    if true {
        val a = 4;
        3;
    } else {
        2;
    }

}
fn(1, 4);

`

const pos_tc_7 = `
true 
    ? 3
    : true ? 4 : 2;
        
`

const pos_tc_8=  `
(x, y) => y ? x : 3;
`

const pos_tc_9 =  `
((x) => (y) => (z) => x ? y : z)(true)(2)(1);
`

const pos_tc_10 =  `
{
    val b = (x) => {
        x;
    };
    
    b(1);
    b(true);
}
`


export const test_all_type_inf = () => {
    pos_test_type_inf(pos_tc_1)
    pos_test_type_inf(pos_tc_2)
    pos_test_type_inf(pos_tc_3)
    pos_test_type_inf(pos_tc_4)
    pos_test_type_inf(pos_tc_5)
    pos_test_type_inf(pos_tc_6)
    pos_test_type_inf(pos_tc_7)
    pos_test_type_inf(pos_tc_8)
    pos_test_type_inf(pos_tc_9)
    pos_test_type_inf(pos_tc_10)
}

// positive test
const pos_test_type_inf = (test_case : string) => {

    const ast = parse(test_case);
    const comp = ast;
    try {
        infer_type_of_ast(comp);
        console.log("=====================================") 
        console.log(test_case)
        console.log(`Pass : able to unify type, returning: ${infer_type_of_ast(comp)}`)
        console.log("=====================================") 
        return true;
    } catch (error) {
        console.log("=====================================") 
        console.log(test_case)
        console.log("fail " + error)
        console.log("=====================================") 
        return false; 
    }

}