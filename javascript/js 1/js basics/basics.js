/* =====================================================
   JAVASCRIPT: var, let, const (Complete Notes)
   ===================================================== */


/* =====================================================
   1) DECLARATION vs INITIALIZATION
   ===================================================== */

// Declaration
var a;

// Initialization
var a = 10;

// Declaration + Initialization together
var a = 18;


/* =====================================================
   2) var KEYWORD
   ===================================================== */

/* --- Redeclaration Allowed --- */

var a = 18;
var a = 20;   // No error (allowed)

/* --- Reassignment Allowed --- */

var a = 10;
a = 30;       // Allowed


/* --- Function Scoped (NOT Block Scoped) --- */

function abcd() {
    if (true) {
        var a = 12;
    }

    console.log(a);  // 12 (accessible in whole function)
}

/* --- var is NOT block scoped --- */

{
    var b = 100;
}

console.log(b);  // 100 (still accessible globally)


/* =====================================================
   3) let KEYWORD
   ===================================================== */

/* --- Redeclaration NOT Allowed --- */

let x = 10;
// let x = 20;   // Error

/* --- Reassignment Allowed --- */

let y = 15;
y = 25;   // Allowed

/* --- Block Scoped --- */

{
    let z = 50;
}

// console.log(z);  // Error (not accessible outside block)

if (true) {
    let k = 99;
}

// console.log(k);  // Error


/* =====================================================
   4) const KEYWORD
   ===================================================== */

/* --- Redeclaration NOT Allowed --- */
/* --- Reassignment NOT Allowed --- */

const pi = 3.14;
// pi = 3.1415;   // Error

/* --- Block Scoped --- */

{
    const value = 200;
}

// console.log(value);  // Error


/* =====================================================
   5) SCOPE TYPES
   ===================================================== */

/* --- Global Scope --- */

var globalVar = 10;

/* --- Function Scope --- */

function test() {
    var funcVar = 20;
}

/* --- Block Scope --- */

{
    let blockVar = 30;
}


/* =====================================================
   6) HOISTING
   ===================================================== */

/* --- var Hoisting --- */

console.log(a);  // undefined
var a = 19;

/*
Internally JavaScript treats it like:

var a;           // hoisted
console.log(a);  // undefined
a = 19;
*/


/* --- let Hoisting --- */

console.log(b);  // Error
let b = 13;

/*
let is hoisted but NOT initialized
*/


/* --- const Hoisting --- */

console.log(c);  // Error
const c = 100;


/* =====================================================
   7) TEMPORAL DEAD ZONE (TDZ)
   ===================================================== */

/*
TDZ = Time between hoisting and initialization
*/

console.log(d);  // Error
let d = 50;

/*
The area above "let d = 50" is called TDZ.
During TDZ:
- Variable exists
- But cannot be accessed
*/


/* =====================================================
   8) SUMMARY TABLE (Conceptual)
   ===================================================== */

/*
Feature          var        let        const
------------------------------------------------
Scope            Function   Block      Block
Redeclaration    Yes        No         No
Reassignment     Yes        Yes        No
Hoisted          Yes        Yes        Yes
TDZ              No         Yes        Yes
*/


/* =====================================================
   9) BEST PRACTICE (Modern JavaScript)
   ===================================================== */

/*
1) Use const by default
2) Use let if value needs to change
3) Avoid var in modern JS
*/

// updation is allowed with const but not reassignment 
// ex- 
const person ={name: "aditya"};
person.name="verma";//allowed
person={};//not allowed