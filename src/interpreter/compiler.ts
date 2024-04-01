type Frame = Map<string, any>;

type Environment = {
    frames: Frame[]
}

const instrs: Instruction[] = [];
let wc = 0;

type CompileFunction = (comp: any, ce: any) => void;

const compile_time_environment_extend = (vs : any, e : any) => {
    //  make shallow copy of e
    return [...e, ...vs];
}

const value_index = (frame: any, x: any) => {
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
    comp.tag === 'seq'
    ? comp.stmts.reduce((acc : any, x : any) => acc.concat(scan(x)),
                        [])
    : ['let', 'const', 'fun'].includes(comp.tag)
    ? [comp.sym]
    : []

interface CompileFunctions {
    intlit: (comp: IntLit, ce: any) => void;
    name: (comp: Name, ce: any) => void;
    binop: (comp: BinopExpr, ce: any) => void;
    cond: (comp: CondExpr, ce: any) => void;
    assign: (comp: AssignmentStat, ce: any) => void;
    lambda: (comp: LambdaExpr, ce: any) => void;
    block: (comp: BlockStat, ce: any) => void;
    fundef: (comp: FunctionDefStat, ce: any) => void;
    seq : () => void
    ifstat: () => void
  }



const compile_comp: CompileFunctions = {
    intlit:
        (comp: IntLit, ce: any) => {
            // Assuming instrs and wc are defined somewhere in your code
            instrs[wc++] = { kind: "LDC", val: comp.val };
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
        (comp: CondExpr, ce: any) => {
            compile(comp.pred, ce)
            const slot_for_JOF = wc++;
            compile(comp.conseq, ce)
            const slot_for_GOTO = wc++;
            const alternative_address = wc;
            instrs[slot_for_JOF] = {kind: "JOF", addr: alternative_address} 
            compile(comp.alt, ce)
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
            instrs[wc++] = {kind: 'ENTER_SCOPE', syms: locals.length}
            compile(comp.body,
                    // extend compile-time environment
                    compile_time_environment_extend(
                        locals, ce))     
            instrs[wc++] = {kind: 'EXIT_SCOPE'}
        },
    seq : () => {},
    fundef: () => {},
    ifstat: () => {}
        
};


const compile = (comp: AstNode, env : any) => {

    





}

