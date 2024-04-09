const empty_type_env = null;

type frame = Record<string, ty> | null
type TyEnv = [frame, TyEnv] | null


const extend_type_environment = (bindings: [[string, ty]], e: TyEnv) => {
    const new_frame = {}
    for (let i = 0; i < bindings.length; i++) {
        const [sym, ty] = bindings[i]; 
        new_frame[sym] = ty
    }

    return [new_frame, e] as TyEnv
}

const look_up_type = (sym : string, te : TyEnv) => {
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
    const currFn = (formals, formal_types, body) => {

        if (formals.length !== formal_types.length) {
            throw Error("MUST DECLARE TYPES FOR ALL PARAMS")
        }

        // TODO bind types to variables


        // function with empty params
        if (formals.length === 0) {
            return ["unit", type_of(body, te)];
        }

        // take the first argument
        if (formals.length == 1) {
            return [formal_types[0], type_of(body, te)];
        }

        return [formal_types[0], currFn(formals.slice(1), formal_types.slice(1), body)]
    }

    return currFn(formals, formal_types, body);

},

seq: (comp: Sequence, te : TyEnv) => {

    // Hack
    const stmts = comp.stmts.filter(comp => comp.kind !== "terminal");

    const helper = (stmts: Statement[], env: TyEnv) => {
        if (stmts.length == 0) return "unit";

        const curr = stmts[0];
        const rest = stmts.slice(1);
        if (curr.kind === "assign") {
            const {name, decl_type, expr} = curr;

            const expressionType = type_of(expr, env);


            if (decl_type !== undefined && !isTypeEqual(decl_type, expressionType)) {
                throw Error(`Declared type of ${decl_type} did not match the expression type ${expressionType} for sym ${name}`)
            } 

            const extendedTe = extend_type_environment([[name, expressionType]], env);

            return helper(rest, extendedTe)
        }

        type_of(curr, env);

        return helper(rest, env)
    } 
    

    return helper(stmts, te);

},

block : (comp : BlockStat, te : TyEnv) => {
    type_of(comp.body, te);
},

assign: (comp: AssignmentStat, te : TyEnv) => {
    const declaredType = comp.decl_type;
    const expressionType = type_of(comp.expr, te);
    
    
    if (declaredType !== undefined && !isTypeEqual(declaredType, expressionType)) {
        throw Error(`Declared type of ${declaredType} did not match the expression type ${expressionType} for sym ${comp.name}`)
    }

    // IF undefined then we just assign the type as such

    return "unit";
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
}


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
    const TyProg = type_of(comp, null);
    console.log(`Type check success with progtype ${TyProg}`)
}