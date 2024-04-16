/* Javascript Number Method */

{
    let newNumber = "10"

    console.log(typeof newNumber);

    let convertNum = Number(newNumber)

    console.log(convertNum);

    console.log(typeof convertNum);
}

/* Number Method */

{
    let Num = 10

    let StrNum = Num.toString()

    console.log(StrNum); // Converts number to string

    console.log(typeof StrNum);
}

{
    let Num = 10.23456

    let Num1 = Num.toPrecision()

    console.log(Num1);

    let Num2 = Num.toPrecision(6)

    console.log(Num2);
}

{
    let Num = 10.23456

    let Num1 = Num.toFixed()

    console.log(Num1);

    let Num2 = Num.toFixed(6)

    console.log(Num2);
}

{
    let Num = 110000

    let Num1 = Num.toExponential()

    console.log(Num1);
}

{
    let Num = 123456789

    let Num1 = Num.toLocaleString()

    let Num2 = Num.toString()

    console.log(Num1);

    console.log(typeof Num1);

    console.log(Num2);
}

{
    let Num = (15 + 5) + "4"

    let Num1 = Num.valueOf()

    console.log(Num1);
}

{
    let Num = "10"

    console.log(Number(Num));

    let Num1 = "10 10"

    console.log(Number(Num1));

    console.log(Number.Num1);   // Error!

    let Num2 = "10 items"

    let CoNum = Number("10 items")

    console.log(Number(Num2));

    console.log(CoNum);
}

{
    let Num = 145

    let Num1 = Number.isFinite(Num)

    let Num2 = Number.isSafeInteger(Num)

    let Num3 = Number.isInteger(Num)

    let Num4 = Number.isNaN(Num)

    console.log(Num1);

    console.log(Num2);

    console.log(Num3);

    console.log(Num4);
}

/* ParseFloat,  parseInt */

{
    let Num = 10.1234

    let Num1 = Number.parseFloat(Num)

    console.log(Num1);

    let Num2 = Number.parseInt(Num)

    console.log(Num2);
}

/* Javascript Date() Object */

/* 1 Jan 1970 */

/* Month 0 to 11 */

{
    let now = new Date()

    console.log(now);

    console.log(typeof now);

    console.log(now.toDateString());

    console.log(now.toISOString());

    console.log(now.toJSON());

    console.log(now.toLocaleDateString());

    console.log(now.toLocaleString());

    let now1 = now.toString()

    console.log(now1);

    console.log(typeof now1);

    console.log(now.toTimeString());

    console.log(now.toUTCString());
}

/* Get Method in Date Object */

{
    let date = new Date();

    console.log(date);

    console.log(date.getDay());

    console.log(date.getFullYear());

    console.log(date.getHours());

    console.log(date.getMinutes());

    console.log(date.getSeconds());

    console.log(date.getMonth());
}

/* date.parse() Method */

{
    let date = Date.parse(new Date())

    console.log(date);
}

/* Set Method in Date Object */

{
    let date = new Date()

    console.log(date);

    let date1 = date.setDate(11)

    console.log(date1);

    console.log(date);

    let date2 = date.setFullYear(1111)

    console.log(date);

    let date3 = date.setHours(11)

    console.log(date);

    let date4 = date.setMinutes(11)

    console.log(date);

    let date5 = date.setSeconds(11)

    console.log(date);

    let date6 = date.setMonth(10)

    console.log(date);
}