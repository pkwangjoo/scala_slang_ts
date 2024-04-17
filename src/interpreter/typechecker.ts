const empty_type_env = null;

type frame = Record<string, ty> | null
type TyEnv = [frame, TyEnv] | null



type pickFreshTy = () => string; // picks a fresh name

// constraint that ty == ty
type constraint = [ty, ty]

// ty generates a set of constraints
type tyWithConstraints = [ty, constraint[]]

// substitute first to second
type substitution = [ty, ty] | []

const isTypeVariable = (t : ty) => {
    if (Array.isArray(t)) { // of TyArr
        return false;
    }

    return t !== "int" && t!== "bool" && t !== "unit";
}

const extend_type_environment = (bindings: [[string, ty]], e: TyEnv) => {
    const new_frame = {}
    for (let i = 0; i < bindings.length; i++) {
        const [sym, ty] = bindings[i]; 
        new_frame[sym] = ty
    }

    return [new_frame, e] as TyEnv
}

const look_up_type = (sym : string, te : TyEnv) => {
    console.log(te);
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


const type_of_aux = {

intlit : (comp: IntLit, te : TyEnv) => {
    return "int";
},

boollit : (comp: BoolLit, te : TyEnv) => {
    return "bool";
},


unit: () => "unit",

binop: (comp : BinopExpr, te : TyEnv) => {
    if (comp.operator === "+" || comp.operator === "-" || comp.operator === "*" || comp.operator === "/") {
        if (type_of(comp.operand1, te) !== 'int' || type_of(comp.operand2, te) !== 'int' ) {
            throw Error(`binop operands for "${comp.operator}" must both be integers`)
        }

        return "int";
    }

},


lambda : (comp: LambdaExpr, te : TyEnv) => {
    const { params: formals, formal_types, body } = comp;
    const currFn = (formals: string[], formal_types: ty[], body, te : TyEnv) => {

        if (formals.length !== formal_types.length) {
            throw Error("MUST DECLARE TYPES FOR ALL PARAMS")
        }

        // function with empty params
        if (formals.length === 0) {
            return ["unit", type_of(body, te)];
        }

        const extendedTe = extend_type_environment([[formals[0], formal_types[0]]], te);


        // take the first argument
        if (formals.length == 1) {
            return [formal_types[0], type_of(body, extendedTe)];
        }

        return [formal_types[0], currFn(formals.slice(1), formal_types.slice(1), body, extendedTe)]
    }
    const resTy = currFn(formals, formal_types, body, te); 
    return resTy

},

seq: (comp: Sequence, te : TyEnv) => {

    // Hack
    const stmts = comp.stmts.filter(comp => comp.kind !== "terminal");

    const helper = (stmts: Statement[], env: TyEnv, prevType: ty) => {
        if (stmts.length == 0) return prevType;

        const curr = stmts[0];


        const rest = stmts.slice(1);
        if (curr.kind === "assign") {
            const {name, decl_type, expr} = curr;

            const expressionType = type_of(expr, env);


            if (decl_type !== undefined && !isTypeEqual(decl_type, expressionType)) {
                throw Error(`Declared type of ${decl_type} did not match the expression type ${expressionType} for sym ${name}`)
            } 

            const extendedTe = extend_type_environment([[name, expressionType]], env);

            return helper(rest, extendedTe, "unit")
        }


        return helper(rest, env, type_of(curr, env))
    } 
    

    return helper(stmts, te, "unit");

},

block : (comp : BlockStat, te : TyEnv) => {
    return type_of(comp.body, te);
},


funapp: (comp: FunAppExpr, te : TyEnv) => {


    // TODO support name 
    const funType = type_of(comp.fun, te);

    if (!Array.isArray(funType)) {
        throw new Error("The given function is not of function type")
    }

    const argTypes = comp.args.map(a => type_of(a, te));


    const applySingleArg = (funType, arg) => {
        const domType = funType[0]
        const rangeType = funType[1] 

        if (domType === "unit") {
            return rangeType
        }

        if (!isTypeEqual(domType, arg)) {
            throw Error(`domtype of ${domType} doesnt match the arg type ${arg}`)
        } 

        return rangeType
    }

    const applyArgRec = (funType, args) => {
        if (args.length === 1) {
            return applySingleArg(funType, args[0])
        }   

        applySingleArg(funType, args[0])

        return applyArgRec(funType[1], args.slice(1))
    }

    return applyArgRec(funType, argTypes)

},

name : (comp: Name, te: TyEnv) => {
    return look_up_type(comp.sym, te);
},

ret : (comp: RetStat, te: TyEnv) => {
    return type_of(comp.expr, te);
},

ifstat: (comp : IfStat, te: TyEnv) => {
    const {pred, conseq, alt} = comp

    if (type_of(pred, te) !== "bool") {
        throw new Error(`Type of predicate must be bool but got ${type_of(pred, te)}`)
    }

    if (alt === undefined) {
        throw new Error("else branch is not defined")
    }

    const TyConseq = type_of(conseq, te);
    const TyAlt = type_of(alt, te);

    if (!isTypeEqual(TyAlt, TyConseq)) {
        throw new Error(`Branches must have the same type but got \n
                            conseq: ${TyConseq} \n
                            alt: ${TyAlt}`)
    }

    return TyAlt;

}

}


const infer_type_aux = (pickFresh : pickFreshTy) => ({
    

seq : (comp : Sequence) => {
    const {stmts} = comp;
    const stmtsWithoutTerminal = stmts.filter(s => s.kind !== "terminal")


    
},    

intlit : (comp : IntLit) => ["int", []],

boollit : (comp : BoolLit) => ["bool", []],

cond : (comp: IfStat) : tyWithConstraints=> {
    
    const resTy = pickFresh();

    const {pred, conseq, alt} = comp;

    if (alt === undefined) {
        throw Error("Branch must have alt defined")
    }

    const [tyPred, cPred] = infer_type(pickFresh)(pred);
    const [tyConseq, cConseq] = infer_type(pickFresh)(conseq);
    const [tyAlt, cAlt] = infer_type(pickFresh)(alt);


    // get all the constraints from pred, conseq and alt, and enforce new constraints 
    
    const constraints = [
        ...cPred, ...cConseq, ...cAlt, // constraints from previous
        // constraints generated by me
        [tyPred, "bool"], 
        [resTy, tyConseq], 
        [resTy, tyAlt]] as  constraint[]
     
    // filter those that are equal and does not provide more value
    const filteredConstraints = constraints.filter(c => c[0] !== c[1]) 
    const temp =  [resTy, filteredConstraints]

    



    return temp as tyWithConstraints;

}


})

const infer_type = (pickFresh) => (comp : AstNode) : tyWithConstraints => {
    if (!(comp.kind in infer_type_aux(pickFresh))) {
        throw Error(`type inference for ${comp.kind} not implemented`)
    }

    return infer_type_aux(pickFresh)[comp.kind](comp);
}

export const type_inferencer = () => {

    let fresh = 0;
    const pickFresh: pickFreshTy = () => {
        fresh++;
        return fresh.toString();
    }
    return infer_type(pickFresh);


}


const solve_constraints = (cs : constraint[], ss: substitution[]) : constraint[] => {
    if (ss.length === 0) {
        return cs;
    } else {
        const firstS = ss[0];
        const restS = ss.slice(1);
        const temp = applySubstitutionToConstraints(cs, firstS);

        return solve_constraints(temp, restS);
    }
}


// generate sequence of substitutions
const unify = (cs: constraint[]) : substitution[] => {
    if (cs.length === 0) {
        return []
    }

    const curr = cs[0];
    const rest = cs.slice(1);

    const left = curr[0];
    const right = curr[1]

    if (left === right) {
        return unify(rest)

    }
    // TODO unify function types
    if (Array.isArray(left) || Array.isArray(right)) {
        throw Error("TyArr unify to be implemneted!!")
    }

    if (isTypeVariable(left) && !isTypeEqual(left, right)) {
        return [[right, left], ...unify(rest)]
    }

    if (isTypeVariable(right) && !isTypeEqual(left, right)) {
        return [[left, right], ...unify(rest)]

    }

    throw Error("Error in unify")



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
        return substituteThis;

    }

    throw Error("TyArr for apply substitution not implemented")
}

const applySubstitutionToConstraints = (cs : constraint[], s : substitution) : constraint[] => {

    if (cs.length === 0) {
        return cs;
    }

    const first = cs[0];
    const rest = cs.slice(1);

    const left = first[0];
    const right = first[1];

    const sLeft = applySubstitutionToType(left, s);
    const sRight = applySubstitutionToType(right, s);

    return [[sLeft, sRight], ...applySubstitutionToConstraints(rest, s)]
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


export const type_of = (comp: AstNode, te : TyEnv): ty => {
    let res;
    try {
        res = type_of_aux[comp.kind](comp, te);
    } catch (e) {
        if (e instanceof TypeError) {
            console.log(`type check for component of kind : ${comp.kind} is not implemented`)
        } else {
            throw e
        }
    }
    return res;
}


export const typecheck = (comp: AstNode) => {
    console.log(comp.kind)
    const TyProg = type_of(comp, null);
    console.log(`Type check success with progtype ${TyProg}`)
}