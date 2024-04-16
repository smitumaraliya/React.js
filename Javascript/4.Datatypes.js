/* Javascript Data Types */

/*

String
Number
Boolean
Array
Object
Null
Function
Undefined
BigInt
Symbol

*/

/* Javascript Primitive data types */

/*

String
Number
Null 
Boolean
Undefined
BigInt
Symbol

*/

/* Javascript Non-Primitive Data Types */

/*

Array
Object
Function

*/

/* Logical Operator */

/* Logical AND */

{

    let a = false;
    let b = true;
    let c = false;

    console.log(a && b); //false

    console.log(a && b && c);

}

/* Logical OR */
{

    let a = false;
    let b = true;
    let c = false;

    console.log(a || b); //true
    console.log(a || b || c);

}

/* Logical NOT */

{

    let a = false;
    let b = true;
    let c = false;

    console.log(!(a));
    console.log(!(b));
    console.log(!(c));
    console.log(!(a && b));
    console.log(!(a || b || c));
    console.log(!(a && b || c));

}

/* Conditional(Ternary) Operator */

/* ? : */

// (condition) ? "value1" : "value2";

// true ? print:- value1
// false ? print:- value2

{

    let text = true;

    let Object = text ? "SkillQode" : "Development";

    console.log(Object);

}

/* Bitwise Operator */

{

    let a = 1;
    let b = 0;

    console.log(a < b);

    console.log(!(a & b));

}