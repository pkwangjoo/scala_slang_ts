grammar ScalaSlang;

/** The start rule; begin parsing here. */
prog:   stat+ EOF; 

stat:   'val' name=ID '=' expr ';'              #assignstat
    |   'def' name=ID '(' names ')' '=' block   #fundefstat
    |   expr ';'                                #exprstat
    |   block                                   #blockstat
    |   ifstat                                  #ifstat
    ;

block: '{' stat+ '}'
    ;

ifstat: 'if' expr block                         
        ('else' (block | ifstat))?
    ;


names:  ID | (ID (',' ID)*)
    ;

exprs:  expr | (expr (',' expr)*)
    ;

expr:   expr op=BINOP expr                      #binopexpr 
    |   INT                                     #intlitexpr
    |   ID                                      #stringlitexpr 
    |   '(' expr ')'                            #paranexpr 
    |   '(' names ')' '=>' (block | expr)       #lambdaexpr
    |   expr '(' exprs ')'                      #funappexpr
    |   expr '?' expr ':' expr                  #condexpr
    ;



ID  :   [a-zA-Z]+ ;      // match identifiers <label id="code.tour.expr.3"/>
INT :   [0-9]+ ;         // match integers
BINOP : ('+' | '-' | '*' | '/' | '==' | '!=' | '<' | '>' | '<=' | '>=') ; //
UNARY : ('!') ;
BINLOGOP : ('&&' | '||') ;
WS  :   [ \t\r\n]+ -> skip ; // toss out whitespace
