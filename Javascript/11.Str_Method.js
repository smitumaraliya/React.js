/* Javascript String Method */

/* String toUpperCase And toLowerCase Method */

{
    let str = "Dog is very Dangerous"

    let UpperStr = str.toUpperCase()

    let LowerCase = str.toLowerCase()

    console.log(UpperStr);

    console.log(LowerCase);
}

/* String Slice And SubString Method */

{
    let str = "this is morning upon us!"

    let SliceStr = str.slice(10)
    // let SliceStr = str.slice(0)
    // let SliceStr = str.slice(-10)

    console.log(SliceStr);

    let SubStr = str.slice(10, 22)
    let SubStr1 = str.slice(10, -5)

    console.log(SubStr);
    console.log(SubStr1);
}

/* Javascript replace And replaceAll Method */

/* 

replace(Regx)
replaceAll(Regx)

*/

{
    let str = "Dog is very Dangerous dog is very honest"

    // let replaceStr = str.replace("Dog", "Cat")
    // let replaceStr = str.replace("dog", "cat")
    let replaceStr = str.replace(/Dog/gi, "Cat")

    console.log(replaceStr);

    // let replaceAll = str.replaceAll("Dog", "Cat")
    let replaceAll = str.replaceAll(/Dog/gi, "Cat")

    console.log(replaceAll);
}

/* Javascript CharCodeAt() */

{
    let str = "Hello"

    // let CharStr = str.charCodeAt(10)
    let CharStr = str.charCodeAt(2)

    let repeatStr = str.repeat(2)

    console.log(CharStr);

    console.log(repeatStr);
}