/* Tasks */

{
    let a = 10;
    let b = 20;
    let c = 5;
    let d = a;

    let e = a + c + d - d - a;
    console.log(e);
    let f = e + c + a - a - e;
    console.log(f);
    let g = c + c + b + b - e;
    console.log(g);
    let h = f - f - b + e - e;
    console.log(h);
    let i = f + (-f) + b + e + a + (-d);
    console.log(i);
    let j = f / f + e - e - h - g + e;
    console.log(j);
}

/* Create a program that performs arithmetic operations on two numbers. */

{

    let a = 10
    let b = 20

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(a ** b);

}

/* Use compound assignment operators to update variables. */

{

    let a = 10
    let b = 20

    console.log(a += b);
    console.log(a -= b);
    console.log(a *= b);
    console.log(a /= b);
    console.log(a %= b);

}

/* Compare two numbers and display the result. */

{

    let a = 10;
    let b = 20;

    let c = a == b;
    console.log(c); // false
    let cc = a != b;
    console.log(cc); // true
    let ccc = a === b;
    console.log(ccc); // false
    let cccc = a !== b;
    console.log(cccc); // true
    let ccccc = a > b;
    console.log(ccccc); // false
    let cccccc = a >= b;
    console.log(cccccc); // false
    let ccccccc = a < b;
    console.log(ccccccc); // true
    let cccccccc = a <= b;
    console.log(cccccccc); // true

}

/* Use the ternary operator to check a condition. */

{

    let text = true;

    let Object = text ? "SkillQode" : "Development";

    console.log(Object);

}

/* Compare two strings and display the result. */

{

    let a = "Skill";
    let b = "Qode";

    let c = a == b;
    console.log(c);
    let cc = a != b;
    console.log(cc);
    let ccc = a === b;
    console.log(ccc);
    let cccc = a !== b;
    console.log(cccc);
    let ccccc = a > b;
    console.log(ccccc);
    let cccccc = a >= b;
    console.log(cccccc);
    let ccccccc = a < b;
    console.log(ccccccc);
    let cccccccc = a <= b;
    console.log(cccccccc);

}

/* Nested Statement / Switch Statement / Loops */

/* Check if a person is eligible to vote. */

// {
//     b = prompt();
//     console.log("Your Age is", b);

//     // let b = 9
//     if (b >= 1 && b <= 10) {
//         console.log("You are young.");
//     }
//     else if (b >= 11 && b <= 17) {
//         console.log("You are student.");
//     }

//     else if (b >= 18) {
//         console.log("You are adult, You are eligible.");
//     }
// }

/* Check if a number is positive, negative, or zero. */

// {
//     number = prompt();
//     console.log("Enter number", number);

//     if (number > 0) {
//         console.log("The number is positive");
//     }
//     else if (number == 0) {
//         console.log("The number is 0");
//     }
//     else {
//         console.log("The number is nagetive");
//     }
// }

/* Determine the largest of three numbers */

// {
//     a = prompt();
//     console.log("Enter number : ", a);
//     b = prompt();
//     console.log("Enter number : ", b);
//     c = prompt();
//     console.log("Enter number : ", c);

//     if (a >= b && a >= c) {
//         console.log("Largest Number of A")
//     }
//     else if (b >= a && b >= c) {
//         console.log("Largest Number of B")
//     }
//     else {
//         console.log("Largest Number of C")
//     }
// }

/* Check if a year is a leap year. */

// let year = prompt();
// console.log("Enter Year", year);

// if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
//     console.log(" Input year:", year, "is a Leap Year");
// }
// else {
//     console.log(" Input year:", year, "is NOT a Leap Year");
// }

/* Determine the grade based on a score. */

// {
//     marks = prompt();
//     console.log("Your Marks is", marks);

//     if (marks >= 40 && marks < 50) {
//         console.log("Grade:F");
//     }
//     else if (marks >= 50 && marks < 60) {
//         console.log("Grade: E");
//     }
//     else if (marks >= 60 && marks < 70) {
//         console.log("Grade: D");
//     }
//     else if (marks >= 70 && marks < 80) {
//         console.log("Grade: C");
//     }
//     else if (marks >= 80 && marks < 90) {
//         console.log("Grade: B");
//     }
//     else if (marks >= 90 && marks < 100) {
//         console.log("Grade: A");
//     }
//     else {
//         console.log("Fail");
//     }
// }

/* 1. Print the numbers from 0 to 15. */

// for(let i = 1 ; i <= 15; i++) {
//     document.write(`${i}Yeah.!!` + "<br>")
// console.log(`Yeah.`);
// }

/* 2. Print the numbers from 12 to 24. */

// for (let i = 12; i <= 24; i++) {
// document.write(`${i} Yeah.!!`+ "<br>");
//     console.log(`Yeah.`);
// }

/* 3. Print the ODD numbers from 7 to 31. */

// for  (let j=7; j<=31; j+=2){
// document.write(`Odd number is ${j}`+"<br>");
// console.log(`Odd number.`);
// }

/* 4. Print the EVEN numbers from 10 to -20. */

// for  (let k=10; k>=(-20);k-=2){
// document.write(`Even Number is ${k}`+"<br>");
// console.log(`Even number.`);
// }

/* 5. Iterate through all numbers from 1 to 45. Print the following:
      For multiples of 3 print “Fizz”
      For multiples of 5 print “Buzz”
      For multiples of 3 and 5 print “FizzBuzz” */

// for (let l = 1; l <= 45; l++) {
//     if (l % 3 == 0) {
//         document.write(`${l} Fizz` + "<br>");
//     } else if (l % 5 == 0) {
//         document.write(`${l} Buzz` + "<br>")
//     } else if (l % 3 == 0 && l % 5 == 0) {
//         document.write(`${l} FizzBuzz` + "<br>");
//     } else {
//         document.write(l + "<br>");
//     }
// }


/* 6. Print all the elements of the following array.
      var thisIsAnArray = ["element1","element2","element3","element4"]; */

// var thisIsAnArray = ["element1", "element2", "element3", "element4"];
// for (let l = 0; l < thisIsAnArray.length; l++) {
//     document.write(`The element at position ${l} is ${thisIsAnArray[l]}.` + "<br>");
//     console.log(`Element at position ${l}: ${thisIsAnArray[l]}`);
// }

/* 7. Calculate the sum of all the numbers in the following array.
      var numbersArray = [1,13,22,123,49] */

// var numbersArray = [1, 13, 22, 123, 49];
// var sum = 0;

// for (let i = 0; i < numbersArray.length; i++) {
//     sum += numbersArray[i];
// }

// console.log("The sum : " + sum);


/* Javascript Tasks */

/* 1. Display Alert in JavaScript */

let Name = "Smit";

alert("Hello, " + Name);

/* 5. Use keypress In JavaScript to Display Alerts */

document.onkeydown = function (event) {
    let charCode = event.which || event.keycode;
     if ((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90)) {
        alert('You Pressed: ' + String.fromCharCode(charCode));
      } else if (charCode ==  32) {
         alert('Space is pressed');
      }
};

/* 13. Retrieve Today’s Date in JavaScript */

let date = new Date()

console.log(date);

/* 14. Reverse array javascript */

let arr = [10, 20, 30]

let arr1 = arr.reverse()

console.log(arr1);

/* 15. JavaScript concate or merge two Arrays */

let a1 = [1, 2];
let b1 = [3, 4];

let c1 = a1.concat(b1);

console.log(c1);

/* 16. Reverse String in JavaScript */

let str = ["H","e","l","l","o"]

let reverseStr = str.reverse().join("")

console.log(reverseStr);

/* 18. if else statement in JavaScript */

if (5 > 10) {
    console.log("This is an incorrect condition")
} else {
   console.log("Correct Condition!");
}

/* 19. Insert element in array javascript */

let array = ['Javascript', false, undefined]

array.push("TailwindCss")

array.push("Sass")

array.unshift("Html")

array.unshift("Reactjs")

console.log(array);