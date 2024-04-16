/* Javascript Template Literals */

let Str1 = "Hi, I 'Am' A Frontend Developer.!"

let Str2 = 'Hi, I "Am" A Frontend Developer.!'

let Str3 = "'Hi, I 'Am' A Frontend Developer.!'"

let Str4 = "Hi, I \"Am\" A Frontend Developer.!"

let Str5 = 'Hi, I \'Am\' A Frontend Developer.!'

console.log(Str1);

console.log(Str2);

console.log(Str3);

console.log(Str4);

console.log(Str5);

let str6 = `Hi, I 'Am' A 
Frontend Developer.!`;

console.log(str6);

/* Passing The Variables */

let text = "Developer";

let Str7 = "Hi, I 'Am' A Frontend ${text}.!";

let Str8 = `Hi, I 'Am' A Frontend ${text}.!`;

console.log(Str7);

console.log(Str8);

/* Javascript Loops */

/*
while loop
do-while loop
for loop
for in... loop
for of... loop
 */

/* While Loop */

/*

while(condition){
    //statement
}

*/

// let Num = 0;

// while (Num <= 10) {
//     console.log("Hello Javascript.!");

//     document.write("Hello Javascript.!" + "<br>");

//     document.getElementById("demo").innerHTML = "Hello Javascript.!" + Num;

//     Num++;
// }

/* do-while Loop */

/*

do{
    //statement
}while(condition);

*/

// let i = -10;

// do {
//     document.write(`Our Loop.! ${i}` + "<br>");
//     i++;
//     } while (i <= 10);

/* For Loop */

/* 

for(initialization; condition; afterthought){

}

*/

// let i = 0;
// let n = 10;

// for (i; i <= n; i++) {
//     console.log("Hellow");
// }

// for(let i = 0; i < 10; i++){
//     console.log("Helloo");
// }