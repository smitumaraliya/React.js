/* MathObject Method in Javascript */

console.log(Math);

let Math1 = Math.PI;

console.log(Math1);// 3.141592653589793

console.log(Math.abs(-10)); // Returns the absolute value of a number.

let Math2 = Math.sqrt(1024)

console.log(Math2); //Returns the square root of a number.

let Math3 = Math.log(10)
let Math4 = Math.log2(10)
let Math5 = Math.log10(10)

console.log(Math3, Math4, Math5); // Natural logarithm of a number (e), base 2 logarithm, and base  10 logarithm of a number.

let Math6 = Math.ceil(26.69)

let Math7 = Math.floor(26.69)

console.log(Math6, Math7); // Rounds up and down to the nearest whole number.

let fix = 10.476

let tofix = fix.toFixed(2)

console.log(tofix); // Converts a number into a fixed-point notation.

let Math8 = Math.trunc(26.69)

console.log(Math8); // Removes any fractional digits from a number.

let Math9 = Math.pow(5, 3)

console.log(Math9); // Returns the base to the exponent power. If the base is zero and the exponent is negative, the method.

let Math10 = Math.round(26.69)

console.log(Math10); // Rounds to the nearest whole number.

let Math11 = Math.sign(-10)
let Math12 = Math.sign(10)
let Math13 = Math.sign(-0)

console.log(Math11, Math12, Math13); // Returns -1, 1, or 0 depending on whether the input is negative, positive, or zero.

let Math14 = Math.max(11, 34, 45, 22, 65, 69)
let Math15 = Math.min(11, 34, 45, 22, 65, 69)

console.log(Math14, Math15); // Returns the largest or smallest of zero or more numbers.
// Returns the maximum value in an array (or multiple arguments).
// Also returns the minimum value in an array (or multiple arguments).

let Math16 = Math.sin(90 * 3.14/ 180)

console.log(Math16); // Calculates the sine of a number. The result is between -1 and 1.

let Math17 = Math.cos(90 * 3.14/ 180)

console.log(Math17); // Calculates the sine of a number. The result is returned as a floating point number between.

let Math18 = Math.random()

console.log(Math18); // Returns a random floating point number between 0 and 1;

let Math19 = Math.floor(Math.random()*10 +  1)

console.log(Math19); // Returns a random integer between 1 and  10.
/*The floor function rounds down to the nearest whole number.
So adding 1 first ensures that the generated number will be between 1 and 10 instead of 0 and 10.*/

let max = 100;
let min = 91;

let Math20 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math20); // Generate a random integer between min and max inclusive.