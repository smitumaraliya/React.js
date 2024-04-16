/* Javascript String Method */

let str1 = "This is string method"

let str2 = 'This is string method'

let str3 = `This is string method`

let str4 = new String("This is string method");

console.log(str1)
console.log(typeof str1);
console.log(str2)
console.log(typeof str2);
console.log(str3)
console.log(typeof str3);
console.log(str4)
console.log(typeof str4);

/* String Method */

/* CharAt(number) */

{
    let str = "this is morning upon us.!"

    let CharStr = str.charAt(2)

    console.log(CharStr);
}

/* indexOf And lastIndexOf Method */

{
    let str = "this is morning upon us.!"

    let indexStr = str.indexOf("is")

    let lastIndStr = str.lastIndexOf("is")

    console.log(indexStr);

    console.log(lastIndStr);

    let indexStr1 = str.indexOf("z")

    let indexStr2 = str.lastIndexOf("z")

    console.log(indexStr1);

    console.log(indexStr2);

    let indexStr3 = str.indexOf("is", 6)

    let lastStr = str.lastIndexOf("is", 4)

    console.log(indexStr3);

    console.log(lastStr);

    let indexStr4 = str.indexOf("is", -1)

    console.log(indexStr4);

    let lastStr1 = str.lastIndexOf("is", 1)

    console.log(lastStr1);
}

/* Javascriptt trim, trimEnd and trimStart Method */

{
    let str = "this is morning upon us.!"
    
    console.log(str);

    let trimStr = str.trim()

    console.log(trimStr);

    let trimStr1 = str.trimStart()

    console.log(trimStr1);

    let trimStr2 = str.trimEnd()

    console.log(trimStr2);
}

/* Javascript padStart and padEnd */

{
    let str = "Be"

    let padStr = str.padStart(10, "BB")

    let endStr = str.padEnd(10, "B")

    console.log(padStr); // BBBeBBBBB

    console.log(endStr); // BeBBBBBBB
}

/* Javascript string split() Method */

{
    let str = "Hello! Javascript"

    let str1 = str.split("")
    let str2 = str.split(" ")
    let str3 = str.split("e")
    let str4 = str.split()

    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
}

/* Javascript string concat Method */

{
    let str = "Hello! Javascript"
    
    let str1 = "Datascript"

    let str2 = "DataDemences"

    console.log(str + " " + str1 + " " + str2);

    let concat = str.concat(" ", str1, " ", str2)

    console.log(concat);
}

/* Javascript string include Method */

{
    let str = "Hello! Javascript"
    
    let includeStr = str.includes("Javascript");

    let includeStr1 = str.includes("Hello", 0)

    console.log(includeStr); // true

    console.log(includeStr1); //true
}

/* Javascript string length Method */

{
    let str = "Hello! Javascript"
    
    console.log(str.length); // 16
}