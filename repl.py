import os
import subprocess

full_program = ""
last_good_program = ""
last_good_file = None
is_cont = False

# initialise the temp file
temp_file = 'temp.txt'  # os.path.join(os.environ['TEMP'], 'interpreter_tmp.js')
with open(temp_file, 'w') as f:
    f.write("")
f.close()

def intro():
    print("Scala Sublanguage Repl v1 by Kwangjoo and Ivan")
    print("Type 'exit' to exit the interpreter")
    print("Type 'clear' to clear the program\n")
intro()

def count_brackets(program):
    brackets = {'(': 0, '[': 0, '{': 0, ')': 0, ']': 0, '}': 0}

    for char in program:
        if char in brackets:
            brackets[char] += 1

    max_diff = max(abs(brackets['('] - brackets[')']), abs(brackets['['] - brackets[']']), abs(brackets['{'] - brackets['}']))


    open_count = brackets['('] + brackets['['] + brackets['{']
    close_count = brackets[')'] + brackets[']'] + brackets['}']

    return any([open_count > close_count, brackets['('] > brackets[')'], brackets['['] > brackets[']'], brackets['{'] > brackets['}']]), max_diff

def input_loop():
    global full_program, last_good_program, is_cont
    while True:
        prompt = ">>> " if not is_cont else "... " + 2 * max_diff * " "
        program = input(prompt)

        if program == 'exit':
            break  # Exit the interpreter
        
        if program == 'clear':
            full_program = ""  # Clear the program
            with open(temp_file, 'w') as f:
                f.write("")
            print("Interpreter restarted.")
            intro()
            continue
        
        if is_cont and program == "":
            program = ""

        full_program += f"\n{program}"
        diff, max_diff = count_brackets(full_program)
        is_cont = diff > 0

        if is_cont:
            if program == "":
                # break the continuation
                is_cont = False
            else:
                continue

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
                f.write(last_good_program) if last_good_program is not None else f.write("")


if __name__ == "__main__":
    input_loop()
