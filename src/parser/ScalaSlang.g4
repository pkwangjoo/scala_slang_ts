grammar ScalaSlang;

/** The start rule; begin parsing here. */
prog:   stat+ EOF; 

stat:   'val' name=ID '=' expr ';'              #assignstat
    |   'def' name=ID '(' names ')' '=' block   #fundefstat
    |   expr ';'                                #exprstat
    |   block                                   #blockstat
    |   ifstat                                  #ifstatement
    ;

block: '{' stat+ '}'
    ;

ifstat  : 'if' expr block                         
        ('else' (block | ifstat))?
    ;


names:  ID | (ID (',' ID)*)
    ;

exprs:  expr | (expr (',' expr)*)
    ;

expr:   expr op=BINOP expr                      #binopexpr 
    |   val=INT                                     #intlit
    |   name=ID                                      #name 
    |   '(' expr ')'                            #paranexpr 
    |   '(' names ')' '=>' (block | expr)       #lambdaexpr
    |   expr '(' exprs ')'                      #funapp
    |   expr '?' expr ':' expr                  #condexpr
    ;



ID  :   [a-zA-Z]+ ;      // match identifiers <label id="code.tour.expr.3"/>
INT :   [0-9]+ ;         // match integers
BINOP : ('+' | '-' | '*' | '/' | '==' | '!=' | '<' | '>' | '<=' | '>=') ; //
UNARY : ('!') ;
BINLOGOP : ('&&' | '||') ;
WS  :   [ \t\r\n]+ -> skip ; // toss out whitespace
