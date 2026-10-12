// ⚡ JavaScript – Synchronous, Single Threaded & Async Notes

// ────────────────────────────────────
// 🟢 JavaScript Nature
// ────────────────────────────────────

// 1. JavaScript is Synchronous

// - JavaScript executes code line by line.
// - One operation must finish before the next starts.

/*
Example:
*/

console.log("1");
console.log("2");

/*
Output:

1
2
*/

// console.log("2") waits for console.log("1") to finish.

// Default behavior of JavaScript = Synchronous


// ────────────────────────────────────

// 2. JavaScript is Single Threaded

// - JavaScript can do only one task at a time.
// - It has only one call stack.

/*
Meaning:
- Executes one line of code at a time
- Cannot run multiple tasks simultaneously
*/

/*
Example:
*/

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

/*
Execution Order:

Task 1
Task 2
Task 3
*/


// ────────────────────────────────────
// 🟢 Execution Context
// ────────────────────────────────────

// JavaScript executes code using an Execution Context.

// Key Point:
// JavaScript executes one line of code at a time

/*
Example:
*/

console.log(1);
console.log(2);

/*
Execution Flow:

Step 1 → console.log(1)
Step 2 → console.log(2)
*/

// Important Rule:
// Each operation waits for the previous operation to complete.

// This is called Synchronous Execution.


// ────────────────────────────────────
// 🟢 JavaScript Engine Components
// ────────────────────────────────────


// 1. CALL STACK

// - Keeps track of function execution.
// - Works in LIFO (Last In First Out).

/*
Example:
*/

function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();

/*
Execution Flow:

Global Execution Context
↓
one()
↓
two()
↓
console.log()
↓
Removed from stack after execution
*/


// 2. MEMORY HEAP

// - Stores variables and objects.
// - Dynamic memory allocation happens here.

/*
Example:
*/

let name = "Aditya";

let obj = {
    age: 20
};

// Variables & objects are stored in Memory Heap.


// ────────────────────────────────────
// 🟢 Blocking Code vs Non-Blocking Code
// ────────────────────────────────────


// 1. Blocking Code

// Meaning:
// - Blocks the flow of the program.
// - Next line waits until current task finishes.

/*
Example (Synchronous File Reading):
*/

const fs = require("fs");

const data = fs.readFileSync("file.txt");

console.log(data.toString());
console.log("Finished");

/*
What Happens?

- File is read first
- Then next line executes

Program execution gets blocked.
*/


// ────────────────────────────────────

// 2. Non-Blocking Code

// Meaning:
// - Does NOT block execution.
// - Program continues while task completes in background.

/*
Example (Asynchronous File Reading):
*/

fs.readFile("file.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("Finished");

/*
Output:

Finished
(file content)
*/

// JavaScript does NOT wait for file reading.


// ────────────────────────────────────
// 🟢 How Async Works in JavaScript
// ────────────────────────────────────

// Even though JavaScript is single-threaded,
// async operations are possible because of:


// 1. JavaScript Engine

// Contains:
// - Memory Heap
// - Call Stack


// 2. Web APIs (Browser APIs)

// Browser provides APIs like:

// - DOM API
// - setTimeout()
// - setInterval()
// - fetch()

// These APIs run outside the JS Engine.


// 3. Callback Queue (Task Queue)

// Stores callback functions waiting to execute.

// Examples:
// - setTimeout()
// - Event listeners


// 4. Microtask Queue (High Priority Queue)

// Stores:
// - Promise callbacks (.then())
// - fetch()

// Important:
// Microtask Queue > Callback Queue


// 5. Event Loop

// Event Loop continuously checks:

// 1. Is Call Stack empty?
// 2. If yes:
//    - Execute Microtask Queue first
//    - Then execute Callback Queue


// ────────────────────────────────────
// 🟢 Async Execution Flow
// ────────────────────────────────────

/*
Example:
*/

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*
Execution Flow:

Step 1:
Start

Step 2:
setTimeout() goes to Web API

Step 3:
Promise goes to Microtask Queue

Step 4:
End

Step 5:
Call Stack becomes empty

Step 6:
Microtask Queue executes first

Promise

Step 7:
Callback Queue executes

Timer
*/

/*
Final Output:

Start
End
Promise
Timer
*/


// ────────────────────────────────────
// 🟢 Event Loop Diagram Flow
// ────────────────────────────────────

/*

JS Engine
│
├── Memory Heap
│
├── Call Stack
│
└── Web APIs
      │
      ├── setTimeout()
      ├── setInterval()
      ├── fetch()
      └── DOM APIs
              │
              ▼
      Register Callback
              │
              ▼
     Microtask Queue (High Priority)
          Promise / fetch()

     Callback Queue
       setTimeout / Events
              │
              ▼
           Event Loop
              │
              ▼
          Call Stack

*/


// ────────────────────────────────────
// 🧠 Important Interview Points
// ────────────────────────────────────

// Q1. Is JavaScript synchronous or asynchronous?

// JavaScript is synchronous by default,
// but can handle asynchronous operations
// using Web APIs + Event Loop.


// Q2. Is JavaScript multithreaded?

// No
// JavaScript is single-threaded.


// Q3. Which executes first?

// Promise or setTimeout() ?

// Promise

// Because:
// Microtask Queue > Callback Queue


// Q4. What is Event Loop?

// Event Loop continuously checks
// whether Call Stack is empty and
// moves tasks from queues to stack.