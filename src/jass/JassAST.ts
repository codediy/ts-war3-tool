export enum SyntaxKind {
    /* Declarations */
    Jass_TypeDeclarations,
    Jass_GlobalsDeclarations,
    Jass_NativeFunctionDeclarations,

    /* Type */
    Jass_TypeKeyword,
    Jass_ExtendsKeyword,
    Jass_HandleKeyword,

    /* Globals */
    Jass_GlobalKeyword,
    Jass_GlobalDeclStatements,
    Jass_GlobalEndKeyword,    
    
    /* Globals Var */
    Jass_ConstantKeyword,
    Jass_NativeKeyword,
    ,

    Jass_FunctionStatement,

    /* Function */
    Jass_TakesKeyword,
    Jass_NothingKeyword,
    Jass_FunctionParamStatment,
    Jass_ReturnKeyword,

    /* Param */

    /* Func */
    Jass_FunctionKeyword,
    Jass_LocalVarStatement,
    Jass_EndFunctionKeyword,

    Jass_LocalKeyword,
    Jass_VarDeclr,
    Jass_ArrayKeyword,

    /* Statments */
    Jass_Statement,
    Jass_SetStatement,
    Jass_CallStatement,
    Jass_IfThenElseStatement,
    Jass_LoopStatement,
    Jass_ExitWhenStatment,
    Jass_ReturnStatement,
    Jass_DebugStatement,

    Jass_SetKeyWord,
    Jass_CallKeyword,

    Jass_IfKeyword,
    Jass_ElseKeyword,
    Jass_ElseIfKeyword,
    Jass_ThenKeyword,
    Jass_EndIfKeyword,

    Jass_LoopKeyword,
    Jass_EndLoop,
    Jass_ExitWhenKeyword,
    Jass_DebugKeyword,

    Jass_Expression,
    Jass_BinaryExpression,
    Jass_UnaryExpression,
    Jass_FuncCallExpression,
    Jass_FuncRefExpression,
    Jass_ConstExpression,
    Jass_IntConstExpression,
    
    Jass_Decimal,
    Jass_Octal,
    Jass_Hex,
    Jass_Fource,

    Jass_RealConst,
    Jass_BoolConst,
    Jass_StringConst,
    Jass_Parents,

    Jass_CodeKeyword,
    Jass_IntegerKeywrod,
    Jass_RealKeyword,
    Jass_BooleanKeyword,
    Jass_StringKeyword,

    Identifier,
}

