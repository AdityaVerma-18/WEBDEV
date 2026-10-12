// =====================================================
// 📘 JavaScript Operators – Notes
// =====================================================

// Operators are symbols used to perform operations on values or variables.
// Example: +, -, *, /

// -----------------------------------------------------
// 1️⃣ Arithmetic Operators
// -----------------------------------------------------
// Used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log(a + b); // Addition -> 13
console.log(a - b); // Subtraction -> 7
console.log(a * b); // Multiplication -> 30
console.log(a / b); // Division -> 3.33
console.log(a % b); // Modulus (remainder) -> 1
console.log(a ** b); // Exponentiation -> 1000

// Increment / Decrement
a++; // Increment (a = a + 1)
b--; // Decrement (b = b - 1)


// -----------------------------------------------------
// 2️⃣ Assignment Operators
// -----------------------------------------------------
// Used to assign values to variables.

let x = 5;   // Assignment

x += 3;      // x = x + 3
x -= 2;      // x = x - 2
x *= 4;      // x = x * 4
x /= 2;      // x = x / 2
x %= 3;      // x = x % 3
x **= 2;     // x = x ** 2


// -----------------------------------------------------
// 3️⃣ Comparison Operators
// -----------------------------------------------------
// Used to compare two values.
// Returns true or false.

let p = 10;
let q = "10";

console.log(p == q);   // true (checks value only)
console.log(p === q);  // false (checks value + type)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p < 5);    // false
console.log(p >= 10);  // true
console.log(p <= 8);   // false


// -----------------------------------------------------
// 4️⃣ Logical Operators
// -----------------------------------------------------
// Used to combine multiple conditions.

let age = 20;
let hasID = true;

console.log(age > 18 && hasID); // AND -> true if both true
console.log(age > 18 || hasID); // OR -> true if one true
console.log(!hasID);            // NOT -> reverses boolean


// -----------------------------------------------------
// 5️⃣ Bitwise Operators
// -----------------------------------------------------
// Work on binary numbers.

let m = 5; // 0101
let n = 1; // 0001

console.log(m & n); // AND -> 1
console.log(m | n); // OR -> 5
console.log(m ^ n); // XOR -> 4
console.log(~m);    // NOT
console.log(m << 1); // Left shift
console.log(m >> 1); // Right shift


// -----------------------------------------------------
// 6️⃣ Ternary Operator
// -----------------------------------------------------
// Short form of if-else.

let marks = 75;

let result = (marks >= 50) ? "Pass" : "Fail";
console.log(result);


// -----------------------------------------------------
// 7️⃣ Type Operators
// -----------------------------------------------------
// Used to check or change data type.

let num = 10;

console.log(typeof num); // "number"

let arr = [1,2,3];
console.log(arr instanceof Array); // true


// -----------------------------------------------------
// 8️⃣ String Operator
// -----------------------------------------------------
// Used for string concatenation.

let first = "Hello";
let second = "World";

console.log(first + " " + second); // Hello World

// Simple example of typeof

num = 10;
console.log(typeof num); 
// Output: "number"


// Simple example of instanceof

class Animal {}

let dog = new Animal();

console.log(dog instanceof Animal);
// Output: true