/* Assignment Opr */

{
    let x = 10;
    let y = 20;

    // ( (x+=y) = (x = x + y) )

    let z = x += y;
    console.log(z);
    console.log(x);
    let zz = x -= y;
    console.log(zz); // x = x - y x = 30 - 20 = 10
    let zzz = x *= y;
    console.log(zzz);
    let zzzz = x /= y;
    console.log(zzzz);
    let zzzzz = x %= y;
    console.log(zzzzz);
    let zzzzzz = x **= y;
    console.log(zzzzzz);
}

/* Comparision Opr */

{
    let x = 10;
    let y = 20;

    let z = x == y;
    console.log(z); // false
    let zz = x != y;
    console.log(zz); // true
    let zzz = x === y;
    console.log(zzz); // false
    let zzzz = x !== y;
    console.log(zzzz); // true
    let zzzzz = x > y;
    console.log(zzzzz); // false
    let zzzzzz = x >= y;
    console.log(zzzzzz); // false
    let zzzzzzz = x < y;
    console.log(zzzzzzz); // true
    let zzzzzzzz = x <= y;
    console.log(zzzzzzzz); // true
}

/* TypeOf Opr */

{
    let str = "SkillQode";
    let num = 123;
    let bool = true;
    let arr = [];
    let obj = {};
    let Big = 123456789n;

    console.log(typeof (str)); // string
    console.log(typeof (num)); // number
    console.log(typeof (bool)); // boolean
    console.log(typeof (arr)); // object
    console.log(typeof (obj)); //object
    console.log(typeof (Big)); // bigint
}

/* String Opr */

{
    let x = 10;
    let y = "20";
    let zz = 20;
    let xx = 4;
    let yy = 2;

    let z = zz + zz + zz + y + x + y + x + x + x + zz - xx * yy / yy;

    let zzz = yy / yy

    console.log(z);
    console.log(zzz);
    console.log(1 / 0);
    console.log(-1 / 0);
    console.log("1" / 0);
    console.log("1" / "1");
    console.log("1" + ("1" * 20));
}