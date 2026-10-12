// ================================
// JAVASCRIPT DATA TYPES
// ================================


// =======================================
// 🔹 PRIMITIVE DATA TYPES
// =======================================
// 👉 Store the actual value
// 👉 When copied, the real value is copied


// 1️⃣ String
let name = "John";
let greeting = 'Hello';
let message = `Hi there!`;
console.log(message.__proto__);


// 2️⃣ Number
let age = 25;
let price = 99.99;
let negative = -10;


// 3️⃣ Boolean
let isLoggedIn = true;
let isAdmin = false;


// 4️⃣ Null
let emptyValue = null;


// 5️⃣ Undefined
let x;
console.log(x); // undefined


// 6️⃣ Symbol
let id = Symbol("uniqueId");


// 7️⃣ BigInt
let bigNumber = 123456789012345678901234567890n;



// =======================================
// 🔹 REFERENCE (NON-PRIMITIVE) DATA TYPES
// =======================================
// 👉 Store reference (address) of the value
// 👉 When copied, reference is copied


// 1️⃣ Array
let fruits = ["apple", "banana", "mango"];


// 2️⃣ Object
let person = {
  name: "John",
  age: 30
};


// 3️⃣ Function
function greet() {
  console.log("Hello!");
}



// =======================================
// 🔹 COPYING DIFFERENCE
// =======================================


// ✅ Primitive Copy Example
let a = 10;
let b = a;

b = 20;

console.log(a); // 10 (not changed)
console.log(b); // 20



// ✅ Reference Copy Example
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20 (changed!)
/*
========================================
DIFFERENCE BETWEEN PRIMITIVE AND REFERENCE DATA TYPES
========================================

| Feature                | Primitive Data Types                          | Reference (Non-Primitive) Data Types          |
|------------------------|-----------------------------------------------|-----------------------------------------------|
| What it stores         | Actual value                                  | Reference (memory address)                   |
| Copy behavior          | Copies the real value                         | Copies the reference                         |
| Comparison             | Compared by value                             | Compared by reference                        |
| Mutability             | Immutable (cannot be changed)                 | Mutable (can be changed)                     |
| Memory allocation      | Stored in stack                               | Stored in heap (reference in stack)          |
| Performance            | Faster                                        | Slightly slower                              |
| Examples               | string, number, boolean, null, undefined,     | array, object, function                      |
|                        | symbol, bigint                                |                                               |

========================================
*/

/*
========================================
TYPE COERCION IN JAVASCRIPT
========================================

Type coercion = automatic or explicit conversion 
of values from one data type to another.

----------------------------------------
1. TYPES OF COERCION
----------------------------------------

1) Implicit Coercion (Automatic)
   - JS converts types automatically.
   - Happens in expressions and comparisons.

2) Explicit Coercion (Manual)
   - Developer converts types intentionally.

----------------------------------------
2. IMPLICIT COERCION
----------------------------------------

A) String Coercion
----------------------------------------
When using + with a string, JS converts 
the other value to a string.

*/

console.log("5" + 2);      // "52"
console.log("Hello " + 10); // "Hello 10"

/*
B) Numeric Coercion
----------------------------------------
Happens with -, *, /, %, <, > operators.
JS converts values to numbers.
*/

console.log("5" - 2);  // 3
console.log("5" * 2);  // 10
console.log("5" / 2);  // 2.5
console.log("5" > 3);  // true

/*
C) Boolean Coercion
----------------------------------------
Values converted to boolean in conditions.
Falsy values:
  false
  0
  -0
  0n
  ""
  null
  undefined
  NaN
*/

if ("") {
  console.log("truthy");
} else {
  console.log("falsy");  // runs
}

/*
----------------------------------------
3. EXPLICIT COERCION
----------------------------------------

A) To String
*/

String(123);      // "123"
(123).toString(); // "123"

/*
B) To Number
*/

Number("123");  // 123
parseInt("123px");  // 123
parseFloat("3.14"); // 3.14
+"123";         // 123 (Unary +)

/*
C) To Boolean
*/

Boolean(1);   // true
Boolean(0);   // false
!!"hello";    // true

/*
----------------------------------------
4. == vs ===
----------------------------------------

==  -> Loose equality (performs coercion)
=== -> Strict equality (no coercion)

*/

console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

/*
----------------------------------------
5. SPECIAL CASES
----------------------------------------

*/

console.log([] == false);   // true
console.log("" == 0);       // true
console.log("0" == 0);      // true
console.log([] == ![]);     // true

/*
----------------------------------------
6. BEST PRACTICES
----------------------------------------

1) Prefer === over ==
2) Avoid relying on implicit coercion
3) Convert types explicitly for clarity
4) Be careful with + operator (string vs number)

----------------------------------------
END
----------------------------------------
*/
/*
========================================
TRUTHY & FALSY VALUES IN JAVASCRIPT
========================================

In JavaScript, every value has an inherent 
boolean value when evaluated in a condition.

Example:
if (value) { ... }

JS automatically converts the value to true or false.
This is called BOOLEAN COERCION.

----------------------------------------
1. FALSY VALUES (ONLY 8 TOTAL)
----------------------------------------

These values evaluate to false:

*/

false
0
-0
0n        // BigInt zero
""        // Empty string
null
undefined
NaN

/*
Example:
*/

if (0) {
  console.log("Runs");
} else {
  console.log("0 is falsy");  // runs
}

/*
----------------------------------------
2. TRUTHY VALUES
----------------------------------------

Everything NOT falsy is truthy.

Common truthy examples:
*/

// true
// 1
// -1
// "0"        // string with value
// "false"    // string is not empty
// []         // empty array
// {}         // empty object
// function() {}

/*
Example:
*/

if ("hello") {
  console.log("Non-empty string is truthy"); // runs
}

/*
----------------------------------------
3. IMPORTANT TRICKY CASES
----------------------------------------
*/

Boolean("false")   // true
Boolean("0")       // true
Boolean([])        // true
Boolean({})        // true

/*
Why?
Because they are NOT in the falsy list.

----------------------------------------
4. DOUBLE NOT (!!) TRICK
----------------------------------------

!!value converts any value to true/false
*/

!!"hello"   // true
!!0         // false
!!null      // false

/*
----------------------------------------
5. COMMON INTERVIEW EXAMPLES
----------------------------------------
*/

console.log([] == false);   // true (coercion)
console.log(Boolean([]));   // true

/*
Explanation:
[] becomes "" → becomes 0 → equals false
But Boolean([]) is true because it's not falsy.

----------------------------------------
6. BEST PRACTICES
----------------------------------------

✔ Always know the 8 falsy values
✔ Be careful with empty arrays/objects
✔ Prefer explicit checks when needed
✔ Use === instead of ==

----------------------------------------
END
----------------------------------------
*/ 