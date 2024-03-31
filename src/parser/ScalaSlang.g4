grammar ScalaSlang;

/** The start rule; begin parsing here. */
prog:   stat+ EOF; 

stat:   'val' ID '=' expr ';'
    |   'def' ID '(' names ')' '=' block
    |   expr ';'
    |   block
    |   ifstat
    ;

block: '{' stat+ '}'
    ;

ifstat: 'if' expr block ('else' (block | ifstat))?
    ;


names:  ID | (ID (',' ID)*)
    ;

exprs:  expr | (expr (',' expr)*)
    ;

expr:   expr op=BINOP expr 
    |   INT                    
    |   ID                    
    |   '(' expr ')'         
    |   '(' names ')' '=>' (block | expr)
    |   expr '(' exprs ')'
    |   expr '?' expr ':' expr
    ;



ID  :   [a-zA-Z]+ ;      // match identifiers <label id="code.tour.expr.3"/>
INT :   [0-9]+ ;         // match integers
BINOP : ('+' | '-' | '*' | '/' | '==' | '!=' | '<' | '>' | '<=' | '>=') ; //
UNARY : ('!') ;
BINLOGOP : ('&&' | '||') ;
WS  :   [ \t\r\n]+ -> skip ; // toss out whitespace
