// ============================================================
// 📌 JAVASCRIPT EXECUTION CONTEXT NOTES
// (Global Execution Phase, Memory Phase,
// Execution Context, Function Execution Phase)
// ============================================================


// ============================================================
// 🟡 Example Code
// ============================================================

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);


// ============================================================
// 1️⃣ GLOBAL EXECUTION CONTEXT (GEC)
// ============================================================

/*
Whenever a JavaScript program runs, the first thing
created is the Global Execution Context.

It is the environment where the whole JS code executes.

JavaScript divides execution into two phases:

1. Memory Creation Phase
2. Execution Phase

Global Execution Context also creates:

➡️ Global Object
   - Browser → window object
   - Node.js → global object

➡️ this keyword
   - In browser, "this" points to window object.

Example:
console.log(this);
*/


// ============================================================
// 2️⃣ MEMORY CREATION PHASE (Memory Phase)
// ============================================================

/*
In this phase JavaScript only allocates memory.

Code DOES NOT execute here.

Variables get memory and are initialized as undefined.

Functions store their complete definition in memory.

Let's understand from the example:
*/


/*
Code:

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
*/


// Memory Allocation Table

/*
val1     → undefined
val2     → undefined
addNum   → complete function definition
result1  → undefined
result2  → undefined
*/

/*
Important:

Variables:
var / let / const
initially reserve memory.

Functions:
their full body is stored in memory.
*/


// ============================================================
// 3️⃣ EXECUTION PHASE
// ============================================================

/*
Now JavaScript executes code line by line.

Step-by-step:

Line 1:
val1 = 10

Line 2:
val2 = 5

Line 3:
Function already exists in memory
(no execution yet)

Line 7:
result1 = addNum(val1, val2)

Function call happens.

A NEW FUNCTION EXECUTION CONTEXT
is created.
*/


// ============================================================
// 4️⃣ FUNCTION EXECUTION CONTEXT
// ============================================================

/*
Whenever a function is called,
JavaScript creates a NEW execution context.

Every function call gets:

1. New Variable Environment
2. Execution Thread

Function call:
addNum(10, 5)
*/

/*
Function Memory Phase:

num1  → undefined
num2  → undefined
total → undefined
*/


/*
Function Execution Phase:

num1 = 10
num2 = 5

total = num1 + num2
total = 15

return total
*/

// result1 = 15


// ============================================================
// 5️⃣ AFTER FUNCTION EXECUTION
// ============================================================

/*
After function finishes:

Execution Context gets deleted.

Returned value goes back to
the global execution context.

result1 = 15
*/




// ============================================================
// SECOND FUNCTION CALL
// ============================================================

/*
result2 = addNum(10, 2)

Again a NEW execution context is created.

Memory Phase:

num1  → undefined
num2  → undefined
total → undefined


Execution Phase:

num1 = 10
num2 = 2

total = 12

return total
*/

// result2 = 12


// ============================================================
// CALL STACK CONCEPT
// ============================================================

/*
JavaScript uses Call Stack.

Latest function execution stays on top.

Example:

1. Global Execution Context created
        ↓
2. addNum() called
        ↓
3. Function Execution Context created
        ↓
4. Work completed
        ↓
5. Execution Context removed (popped)
        ↓
6. Back to Global Execution Context
*/


// ============================================================
// FINAL VALUES
// ============================================================

console.log(result1); // 15
console.log(result2); // 12


/*
Summary:

1. Global Execution Context starts first.

2. Memory Phase:
   Variables → undefined
   Functions → full definition

3. Execution Phase:
   Code runs line by line.

4. Function call creates:
   New Execution Context

5. Function has:
   Memory Phase + Execution Phase

6. After function execution:
   Context gets deleted.

7. JavaScript uses Call Stack.
*/
