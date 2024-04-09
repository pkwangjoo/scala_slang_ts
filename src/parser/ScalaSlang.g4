grammar ScalaSlang;

/** The start rule; begin parsing here. */
prog:   stat+ EOF; 

stat:   'val' name=ID (':' typeDef)? '=' expr ';'              #assignstat
    |   'def' name=ID '(' names ')' '=' block   #fundefstat
    |   expr ';'                                #exprstat
    |   block                                   #blockstat
    |   ifstat                                  #ifstatement
    |   'return' expr ';'                       #returnstatement
    ;

block: '{' stat+ '}'
    ;

ifstat  : 'if' expr block                         
        ('else' (block | ifstat))?
    ;

typeDef : paranTypeDef                          #bparanTypeDef           
        | simpleTypeDef                         #bSimpleTypeDef  
        | absTypeDef                            #bAbsTypeDef  
    ;

simpleTypeDef : type=ID
    ;

paranTypeDef : '(' typeDef ')'
    ;

absTypeDef : simpleTypeDef '->' typeDef
           | paranTypeDef '->' typeDef
    ;


names:  (ID (':' typeDef)?)? | (ID (':' typeDef)? (',' ID (':' typeDef)? )*)
    ;

exprs:  expr | (expr (',' expr)*)
    ;

expr:   expr op=BINOP expr                      #binopexpr 
    |   expr op=BINLOGOP expr                   #binlogopexpr
    |   val=INT                                 #intlit
    |   bool=BOOL                               #boollit
    |   name=ID                                 #name
    |   '(' expr ')'                            #paranexpr 
    |   '(' names ')' '=>' (block | expr)       #lambdaexpr
    |   expr '(' exprs ')'                      #funapp
    |   expr '?' expr ':' expr                  #condexpr
    ;



INT :   [0-9]+ ;         // match integers
BOOL:   ('true' | 'false') ;
ID  :   [a-zA-Z]+ ;      // match identifiers <label id="code.tour.expr.3"/>
BINOP : ('+' | '-' | '*' | '/' | '==' | '!=' | '<' | '>' | '<=' | '>=') ; //
UNARY : ('!') ;
BINLOGOP : ('&&' | '||') ;
WS  :   [ \t\r\n]+ -> skip ; // toss out whitespace
