type Frame = Map<string, any>;

type Environment = {
    frames: Frame[]
}

let instrs: Instruction[] = [];
let wc = 0;

type CompileFunction = (comp: any, ce: any) => void;

const push = (array:any, ...items: any) => {
    // fixed by Liew Zhao Wei, see Discussion 5
    for (let item of items) {
        array.push(item)
    }
    return array 
}

const compile_time_environment_extend = (vs : any, e : any) => {
    //  make shallow copy of e
    return push([...e], vs)
}

const value_index = (frame: any, x: any) => {
    if (!frame) {
      console.error(`Compile error: Tried to access undeclared name.`)
      process.exit(1)
    }
    for (let i = 0; i < frame.length; i++) {
      if (frame[i] === x) return i
    }
    return -1;
  }

const compile_time_environment_position = (env: any, x: any) : [number, number] => {
    let frame_index = env.length
    while (value_index(env[--frame_index], x) === -1) {}
    return [frame_index, 
            value_index(env[frame_index], x)]
}

const scan = (comp: any) => 
    comp.kind === 'seq'
    ? comp.stmts.reduce((acc : any, x : any) => acc.concat(scan(x)),
                        [])
    : ["assign", "fundef"].includes(comp.kind)
    ? [comp.name]
    : []

const compile_sequence = (seq: Sequence, ce: any) => {
    if (seq.stmts.length === 0) 
        return instrs[wc++] = {kind: "LDC", val: undefined}
    let first = true
    for (let comp of seq.stmts) {
        first ? first = false
                : instrs[wc++] = {kind: 'POP'}
        compile(comp, ce)
    }
}

interface CompileFunctions {
    intlit: (comp: IntLit, ce: any) => void;
    boollit: (comp: BoolLit, ce: any) => void;
    name: (comp: Name, ce: any) => void;
    binop: (comp: BinopExpr, ce: any) => void;
    cond: (comp: CondExpr | IfStat, ce: any) => void;
    assign: (comp: AssignmentStat, ce: any) => void;
    lambda: (comp: LambdaExpr, ce: any) => void;
    block: (comp: BlockStat, ce: any) => void;
    fundef: (comp: FunctionDefStat, ce: any) => void;
    seq : (comp: Sequence, ce: any) => void;
    ret : (comp: RetStat, ce: any) => void;
    funapp: (com: FunAppExpr, ce : any) => void;
  }



const compile_comp: CompileFunctions = {
    intlit:
        (comp: IntLit, ce: any) => {
            // Assuming instrs and wc are defined somewhere in your code
            instrs[wc++] = { kind: "LDC", val: comp.val };
        },
    boollit: 
        (comp: BoolLit, ce : any) => {
            instrs[wc++] = {kind: "LDC", val: comp.val}
    
        },
    name:
        (comp: Name, ce: any) => {
            // Assuming compile_time_environment_position is defined somewhere in your code
            instrs[wc++] = { kind: "LD", sym: comp.sym, pos: compile_time_environment_position(ce, comp.sym) };
        },
    binop:
        (comp: BinopExpr, ce: any) => {
            compile(comp.operand1, ce);
            compile(comp.operand2, ce);
            instrs[wc++] = { kind : 'BINOP' , operator: comp.operator};
        },
    cond: 
        (comp: CondExpr | IfStat, ce: any) => {
            compile(comp.pred, ce)
            const slot_for_JOF = wc++;
            compile(comp.conseq, ce)
            const slot_for_GOTO = wc++;
            const alternative_address = wc;
            instrs[slot_for_JOF] = {kind: "JOF", addr: alternative_address} 
            if (comp.alt) compile(comp.alt, ce)
            instrs[slot_for_GOTO] = {kind: "GOTO", addr: wc}
        },
    assign:
        // store precomputed position info in ASSIGN instruction
        (comp : AssignmentStat, ce : any) => {
            compile(comp.expr, ce)
            instrs[wc++] = {kind: 'ASSIGN', 
                            sym: comp.name,
                            pos: compile_time_environment_position(
                                    ce, comp.name)}
        },
    lambda:
        (comp: LambdaExpr, ce : any) => {
            instrs[wc++] = {kind: 'LDF', 
                            prms: comp.params,
                            addr: wc + 1};
            // jump over the body of the lambda expression
            const slot_for_GOTO = wc++;
            // const goto_instruction: Partial<GOTO> = {kind: 'GOTO'}
            // instrs[wc++] = goto_instruction

            // extend compile-time environment
            compile(comp.body,
    		        compile_time_environment_extend(
    		            comp.params, ce))
            instrs[wc++] = {kind: 'LDC', val: undefined}
            instrs[wc++] = {kind: 'RESET'}
            instrs[slot_for_GOTO] = {kind: "GOTO", addr: wc}
        },
    block:
        (comp : BlockStat, ce : any) => {
            const locals = scan(comp.body)
            instrs[wc++] = {kind: 'ENTER_SCOPE', num: locals.length}
            compile(comp.body,
                    // extend compile-time environment
                    compile_time_environment_extend(
                        locals, ce))     
            instrs[wc++] = {kind: 'EXIT_SCOPE'}
        },
    seq : (comp : Sequence, ce : any) => {
        compile_sequence(comp, ce);
    },
    fundef: (comp: FunctionDefStat, ce: any) => {
        const {name} = comp;
        const assignStat: AssignmentStat = {
            kind: "assign",
            name,
            decl_type: "any",
            expr: comp.lambda
        }

        compile(assignStat, ce);
    },

    ret: (comp : RetStat, ce: any) => {
        compile(comp.expr, ce);
        instrs[wc++] = {kind : 'RESET'}
    },

    funapp: (comp : FunAppExpr, ce : any) => {
        compile(comp.fun, ce);
        comp.args.map(arg => compile(arg, ce))

        instrs[wc++] = {kind : "CALL", arity: comp.args.length}
    } 
        
};


const compile = (comp: AstNode, env: any) => {
    if (comp.kind === 'intlit') {
        compile_comp[comp.kind](comp as IntLit, env);
    } else if (comp.kind === 'boollit') {
        compile_comp[comp.kind](comp as BoolLit, env);
    } else if (comp.kind === 'name') {
        compile_comp[comp.kind](comp as Name, env);
    } else if (comp.kind === 'assign') {
        compile_comp[comp.kind](comp as AssignmentStat, env);
    } else if (comp.kind === 'binop') {
        compile_comp[comp.kind](comp as BinopExpr, env);
    } else if (comp.kind === 'block') {
        compile_comp[comp.kind](comp as BlockStat, env);
    } else if (comp.kind === 'cond') {
        compile_comp[comp.kind](comp as CondExpr, env);
    } else if (comp.kind === 'fundef') {
        compile_comp[comp.kind](comp as FunctionDefStat, env);
    } else if (comp.kind === 'ifstat') {
        // we treat ifstat and condExpr as the same
        compile_comp["cond"](comp as IfStat, env);
    } else if (comp.kind === 'lambda') {
        compile_comp[comp.kind](comp as LambdaExpr, env);
    } else if (comp.kind === "seq"){
        compile_comp[comp.kind](comp as Sequence, env);
    } else if (comp.kind === "terminal" && comp.sym === "<EOF>") {
        instrs[wc] = {kind: "DONE"}
    } else if (comp.kind === "ret") {
        compile_comp[comp.kind](comp as RetStat, env)
    } else if (comp.kind === "funapp") {
        compile_comp[comp.kind](comp as FunAppExpr, env)
    } else {
        throw new Error(`unknown componenet ${JSON.stringify(comp)}`)    
    }


}

export const compileIntoVML = (ast : AstNode) => {
    instrs = []
    wc = 0;
    const mainBlock: BlockStat = {kind : "block", body: ast as Sequence}
    compile(mainBlock, []);
    // console.log("compilation success")
    return instrs;

}