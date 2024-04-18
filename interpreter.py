import os
import subprocess

full_program = ""
last_good_program = None
last_good_file = None
is_cont = False

# initialise the temp file
temp_file = 'temp.txt'  # os.path.join(os.environ['TEMP'], 'interpreter_tmp.js')
with open(temp_file, 'w') as f:
    f.write("")
f.close()

def intro():
    print("Scala Sublanguage Interpreter v1 by Kwangjoo and Ivan")
    print("Type 'exit' to exit the interpreter")
    print("Type 'clear' to clear the program")
    print("Type '...' to continue the program on the next line")

intro()

def input_loop():
    global full_program, last_good_program, is_cont
    while True:
        program = input(">>> " if not is_cont else "... ")
        
        if program == 'exit':
            break  # Exit the interpreter
        
        if program == 'clear':
            full_program = ""  # Clear the program
            with open(temp_file, 'w') as f:
                f.write("")
            print("Interpreter restarted.")
            intro()
            continue

        if program.endswith("..."):
            program = program[:-3]
            full_program += f"\n{program}"
            is_cont = True
            continue
        
        full_program += f"\n{program}"
        
        is_cont = False

        with open(temp_file, 'w') as f:
            f.write(full_program)
        f.close()

        try:
            subprocess.run(['node', 'dist/src/interpreter/main.js', temp_file], check=True)
            last_good_program = full_program
        except subprocess.CalledProcessError as e:
            print(e)
            full_program = last_good_program
            with open(temp_file, 'w') as f:
                f.write(last_good_program)


if __name__ == "__main__":
    input_loop()
