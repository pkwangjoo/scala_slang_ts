grammar ScalaSlang;

/** The start rule; begin parsing here. */
prog:   ((NEWLINE)* stat (NEWLINE)*)+ EOF; 

stat:   'val' ID '=' expr ';'
    |   'def' ID '(' names ')' '=' block
    |   expr ';'
    |   block
    ;

block: '{' ((NEWLINE)* stat (NEWLINE)*)+ '}'
    ;

names:  (ID | (ID (',' ID)*))
    ;

expr:   expr op=BINOP expr 
    |   INT                    
    |   ID                    
    |   '(' expr ')'         
    |   '(' names ')' '=>' (block | expr)
    ;

ID  :   [a-zA-Z]+ ;      // match identifiers <label id="code.tour.expr.3"/>
INT :   [0-9]+ ;         // match integers
NEWLINE:'\r'? '\n' ;     // return newlines to parser (is end-statement signal)
BINOP : ('+' | '-' | '*') ; //
WS  :   [ \t]+ -> skip ; // toss out whitespace
