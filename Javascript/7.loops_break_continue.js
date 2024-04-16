/* Javascript Nested Loop */

/*

for(initialization; condition; afterthought){
    for(initialization; condition; afterthought){

    }
}

*/

// for(let i = 0; i < 10; i++){
//     console.log(`${i} Hello Main`);

//     for (let j = 0; j < 5; j++) {
//         console.log(` ${j} Hello Child`)
//     }
// }

/* Javascript Break Statement */

// for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main`);
//     if (j === 2) {
//         break;
//     }
//     for (let j = 0; j < 5; j++) {
//         console.log(`${j} Hello Child`)
//     }
// }

// Loops: for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main`);
//     for (let j = 0; j < 5; j++) {
//         if (j === 2) {
//             break Loops;
//         }
//         console.log(`${j} Hello Child`)
//     }
// }

/* Javascript Continue Statement */

// Loops: for (let i = 1; i < 10; i++) {
//     console.log(`${i} Hello Main`);
//     for (let j = 0; j < 10; j++) {
//         if (j === 2) {
//             continue Loops;
//         }
//         console.log(`${j} Hello Child`)
//     }
// }

/* Javascript for...in Loop */

// let Obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let Data1 = Obj.name
// let Data2 = Obj.age
// let Data3 = Obj.city

// console.log(Data1);
// console.log(Data2);
// console.log(Data3);

// console.log(Obj);

// for (let key in Obj) {
//     console.log(`${key} : ${Obj[key]}`);
// }

/* JAvascript for...of Loop */

// let Arr = ["John", 30, "New York"]

// let Data4 = Arr[0]
// let Data5 = Arr[1]
// let Data6 = Arr[2]

// console.log(Data4);
// console.log(Data5);
// console.log(Data6);

// for(let value of Arr){
//     console.log(`${value}`);
// }

// let Str = "Javascript";

// for(let char of Str){
//     console.log(`${char}`);
// }