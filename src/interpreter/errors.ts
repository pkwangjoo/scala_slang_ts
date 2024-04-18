class CompileTimeError extends Error {

    constructor(message: string, status: number) {
        super("Compile time error! : "  + message);

        Object.setPrototypeOf(this, CompileTimeError.prototype);
    }
}

