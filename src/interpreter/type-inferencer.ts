const empty_type_env = null;

type frame = Record<string, ty | tyScheme> | null
type TyEnv = [frame, TyEnv] | null



type pickFreshTy = () => string; // picks a fresh name

// constraint that ty == ty
type constraint = [ty, ty]

// ty generates a set of constraints
type tyWithConstraints = [ty, constraint[]]

// substitute first to second
type substitution = [ty, ty] | []

// for all (...left) . t 
type tyScheme = ["tyscheme", string[], ty]

const GLOBAL_FRAME = {
    "(+)" : ["int", ["int", "int"]],
    "(-)" : ["int", ["int", "int"]],
    "(*)" : ["int", ["int", "int"]],
    "(/)" : ["int", ["int", "int"]],
    "(<=)" : ["int", ["int", "bool"]],
    "(>=)" : ["int", ["int", "bool"]],
    "(<)" : ["int", ["int", "bool"]],
    "(>)" : ["int", ["int", "bool"]],
    "(==)" : ["a", ["b", "bool"]]
}

const GLOBAL_CONSTRAINTS_MAP = {
    "(==)" : ["a", "b"]
}


const isTypeVariable = (t : ty) => {
    if (Array.isArray(t)) { // of TyArr
        return false;
    }
    return t !== "int" && t!== "bool" && t !== "unit";
}

const extend_type_environment = (binding: [string, ty | tyScheme], e: TyEnv) => {
    const new_frame = {}
    new_frame[binding[0]] = binding[1];

    return [new_frame, e] as TyEnv
}

const look_up_type = (sym : string, te : TyEnv) : (ty | tyScheme) => {
    if (te === null) {
        throw Error(`Type for ${sym} is unbound`)
    }

    // search in the current frame
    const type_in_curr_frame = te[0]![sym];

    if (type_in_curr_frame === undefined) {
        return look_up_type(sym, te[1]);
    } 

    return type_in_curr_frame;

}


const infer_type_aux = (pickFresh) => ({

block : (comp : BlockStat, env) => {
    return infer_type(pickFresh)(comp.body, env);
},
    

seq : (comp : Sequence, env) => {
    const {stmts} = comp;
    const stmtsWithoutTerminal = stmts.filter(s => s.kind !== "terminal")

    const seq_aux = (stmts : Statement[], prevType : ty, env) : tyWithConstraints => {

        if (stmts.length === 0) {
            return [prevType, []];
        }

        

        const curr = stmts[0];

        if (curr.kind !== "assign") { // statement
            const [tyCurr, cCurr] = infer_type(pickFresh)(curr, env)
            const [tyRest, cRest] = seq_aux(stmts.slice(1), tyCurr, env);

            return [tyRest, [...cCurr, ...cRest]]
        }

        // let x = e1 in e2

        // handle e1
        const {name, expr} = curr as AssignmentStat

        const [tyCurr, cCurr] = infer_type(pickFresh)(expr, env);
        // then we have to generalise
        const generalise = (t : ty) : (tyScheme | ty) => {
            // we just generalise all the occuring variables here...


            const collectTypeVar = (t : ty) : string[] => {
                if (Array.isArray(t)) {
                    return [...collectTypeVar(t[0]), ...collectTypeVar(t[1])]
                }
                if (isPrimitiveType(t)) {
                    return [];
                }
                return [t]; 
            }

            const uniqueTypes = Array.from(new Set(collectTypeVar(t)));

            if (uniqueTypes.length <= 0) {
                return t
            }

            const typeScheme = ["tyscheme", uniqueTypes, t] as tyScheme; 

            return typeScheme

        }
        
        // try to solve first
        const ss = unify(cCurr);
        const infTy = solve_for_type(tyCurr, ss);

        const extendedTe = extend_type_environment([name, generalise(infTy)], env);

        const [tyRest, cRest] = seq_aux(stmts.slice(1), "unit", extendedTe);

        return [tyRest, [...cCurr, ...cRest]];

    }


    return seq_aux(stmtsWithoutTerminal, "unit", env);


    
},

ifstat: (comp : IfStat, env) => {

    const resTy = pickFresh();

    const {pred, conseq, alt} = comp;

    if (alt === undefined) {
        throw Error("Branch must have alt defined")
    }

    const [tyPred, cPred] = infer_type(pickFresh)(pred, env);
    const [tyConseq, cConseq] = infer_type(pickFresh)(conseq, env);
    const [tyAlt, cAlt] = infer_type(pickFresh)(alt, env);


    // get all the constraints from pred, conseq and alt, and enforce new constraints 
   
    const constraints = [
        ...cPred, ...cConseq, ...cAlt, // constraints from previous
        // constraints generated by me
        [tyPred, "bool"], 
        [resTy, tyConseq], 
        [resTy, tyAlt]] as  constraint[]
     
    // filter those that are equal and does not provide more value

    const temp =  [resTy, constraints]


    return temp as tyWithConstraints;


},

binop: (comp : BinopExpr, env) => {
    const {operator, operand1, operand2} = comp;
    // convert to fun app
    
    const toFunapp = {
        kind : "funapp",
        fun : {
            kind : "name",
            sym : "(" + operator + ")"
        },
        args: [operand1, operand2]
    } as FunAppExpr

    return infer_type(pickFresh)(toFunapp, env);

},

intlit : (comp : IntLit, env) => ["int", []],

boollit : (comp : BoolLit, env) => ["bool", []],

name : (comp: Name, env) => {

    const tyFound = look_up_type(comp.sym, env);

    const isTyScheme = Array.isArray(tyFound) && tyFound[0] === "tyscheme"
    if (isTyScheme) {
        // instantiate
        const quantifier = tyFound[1] as string[];

        const instantiatedVar = quantifier.map(q => [pickFresh(), q]) as substitution[];


        const instantiated = applySubstitutionToType(
            (tyFound as tyScheme)[2],
            instantiatedVar[0], 
        )

        return [instantiated, []];
    }

    const constraints = comp.sym in GLOBAL_CONSTRAINTS_MAP 
        ? GLOBAL_CONSTRAINTS_MAP[comp.sym]
        : []

    return [
        look_up_type(comp.sym, env), 
        constraints
        ];

},


lambda : (comp : LambdaExpr, env) : tyWithConstraints => {

    const {formals, body} = comp;

    const currFn = (formals, body) => {
        if (formals.length === 1) {
            
            return [formals[0], body]
        }

        return [formals[0], currFn(formals.slice(1), body)];
    }

    const lambda_aux = (fn, env) : tyWithConstraints => {

        const dom = fn[0];
        const range = fn[1];
        const domSym = dom[0];
        const domTy = pickFresh()

        const extendedTe = extend_type_environment([domSym, domTy] ,env);


        if (!Array.isArray(range)) { // we have reached the body
            
            const [tyBody, cBody] = infer_type(pickFresh)(range, extendedTe);
            
            return [[domTy, tyBody], cBody];
            
        }

        const [tyRest, cRest] = lambda_aux(range, extendedTe);
        return [[domTy, tyRest], cRest];


    }

    return lambda_aux(currFn(formals, body), env)

},

funapp : (comp : FunAppExpr, env) : tyWithConstraints=> {

    const {fun, args} = comp;

    const funapp_aux = (tyFun, cFun, args) => {
        if (args.length === 0) {
            return [tyFun, cFun]
        }
        const curr = args[0]
        const resTy = pickFresh()
        const [tyArg, cArg] = infer_type(pickFresh)(curr, env);

        const resC = [
            ...cFun, 
            ...cArg,
            [tyFun, [tyArg, resTy]]
        ]

        return funapp_aux(resTy, resC, args.slice(1));
    }

    const [tyFun, cFun] = infer_type(pickFresh)(fun, env);

    return funapp_aux(tyFun, cFun, args);


},

cond : (comp: IfStat, env) : tyWithConstraints=> {
    
    const resTy = pickFresh();

    const {pred, conseq, alt} = comp;

    if (alt === undefined) {
        throw Error("Branch must have alt defined")
    }

    const [tyPred, cPred] = infer_type(pickFresh)(pred, env);
    const [tyConseq, cConseq] = infer_type(pickFresh)(conseq, env);
    const [tyAlt, cAlt] = infer_type(pickFresh)(alt, env);

    // get all the constraints from pred, conseq and alt, and enforce new constraints 
   
    const constraints = [
        ...cPred, ...cConseq, ...cAlt, // constraints from previous
        // constraints generated by me
        [tyPred, "bool"], 
        [resTy, tyConseq], 
        [resTy, tyAlt]] as  constraint[]
     
    // filter those that are equal and does not provide more value

    const temp =  [resTy, constraints]


    return temp as tyWithConstraints;

},



})

const infer_type = (pickFresh) => (comp : AstNode, env : any) : tyWithConstraints => {
    if (!(comp.kind in infer_type_aux(pickFresh))) {
        throw Error(`type inference for ${comp.kind} not implemented`)
    }

    return infer_type_aux(pickFresh)[comp.kind](comp, env);
}

export const infer_type_of_ast = (ast : AstNode) => {

    let fresh = 0;
    const pickFresh: pickFreshTy = () => {
        fresh++;
        return fresh.toString();
    }

    const [ty, c] = infer_type(pickFresh)(ast, [GLOBAL_FRAME, null]);


    return solve_for_type(ty, unify(c));


}

const sub_into_rest = (cs : constraint[], s : substitution) => {
    if (cs.length === 0) {
        return cs;
    }
    const first = cs[0];

    const left = first[0];
    const right = first[1];
    return [[applySubstitutionToType(left, s), applySubstitutionToType(right, s)], ...sub_into_rest(cs.slice(1), s)]

}
// generate sequence of substitutions
const unify = (cs: constraint[]) : substitution[] => {

    if (cs.length === 0) {
        return []
    }

    const curr = cs[0];
    const rest = cs.slice(1);

    const left = curr[0];
    const right = curr[1];

    if (isTypeEqual(left, right)) {
        return unify(rest)
    }

    const doesThisTyAppearInThatTy = (thisTy : ty, thatTy : ty) => {
        if (Array.isArray(thisTy) || !isTypeVariable(thisTy)) {
            throw Error("thisTy must be a type variable")
        }   
        

        const helper = (thisTy : ty, thatTy : ty) => {
            if (!Array.isArray(thatTy)) {
                return isTypeEqual(thisTy, thatTy) 
            } else {
                return helper(thisTy, thatTy[0]) || helper(thisTy, thatTy[1])
            }
        }

        return helper(thisTy, thatTy);

    }

    // sanity check
    const truecase1 = doesThisTyAppearInThatTy("2", "2");
    const truecase2 = doesThisTyAppearInThatTy("2", ["1", ["bool", ["3", "2"]]]);
    
    if (!truecase1 || !truecase2) throw Error("ASSERT FAILURE IN unify");

    const falsecase1 = doesThisTyAppearInThatTy("4", ["1", ["bool", ["3", "2"]]]); 
    
    if (falsecase1) throw Error("ASSERT FAILURE IN unify"); 
    

    if (isTypeVariable(left) && !doesThisTyAppearInThatTy(left, right)) {
        
        return [[right, left], ...unify(sub_into_rest(rest, [right, left]))]

    }

    if (isTypeVariable(right) && !doesThisTyAppearInThatTy(right, left)) {
        
        return [[left, right], ...unify(sub_into_rest(rest, [left, right]))]

    }


    if (Array.isArray(left) && Array.isArray(right)) {
        const leftDom = left[0];
        const rightDom = right[0];
        const leftCoDom = left[1];
        const rightCoDom = right[1];
        return unify(
            [
                [leftDom, rightDom],
                [leftCoDom, rightCoDom],
                 ...rest
            ]);

    }
     throw Error("Error in unify")



}


const solve_for_type = (t : ty, ss : substitution[]) : ty => {
    if (ss.length === 0) {
        return t;
    } 

    return solve_for_type(applySubstitutionToType(t, ss[0]), ss.slice(1));
}


const applySubstitutionToType = (t : ty, s : substitution) : ty => {
    if (!s) {
        return t;
    }

    if (isPrimitiveType(t)) {
        return t;
    }

    if (!Array.isArray(t)) {
        // singleton type

        // x' <- t substitue x' for t
        const substituteThis = s[1]!
        const forThis = s[0]!

        if (isTypeEqual(t, substituteThis)) {
            return forThis;
        }

        return t;

    }
    const dom = t[0]
    const range = t[1]
    return [applySubstitutionToType(dom, s), applySubstitutionToType(range, s)]

}


const isTypeEqual = (ty1: ty, ty2: ty) => {

    // check if they are of TyArr

    if (Array.isArray(ty1) && Array.isArray(ty2)) {
        return isTypeEqual(ty1[0], ty2[0]) && isTypeEqual(ty1[1], ty2[1])
    }

    if (!Array.isArray(ty1) && !Array.isArray(ty2)) {
        return ty1 === ty2;
    }

    return false
}

const isPrimitiveType = (t : ty) => {
    return isTypeEqual(t, "int") || isTypeEqual(t, "bool") 
}
