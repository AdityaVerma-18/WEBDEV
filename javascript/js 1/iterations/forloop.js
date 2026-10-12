/*
=========================================================
📘 JavaScript `for` Loop Notes
=========================================================

The `for` loop is used when we know in advance
how many times we want to repeat a task.

Syntax:

for(initialization; condition; increment/decrement){
    // code to execute
}

---------------------------------------------------------
1️⃣ Basic `for` Loop
---------------------------------------------------------
*/

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is best number");
    }

    // console.log(element);
}

/*
Explanation:

1. let i = 0
   -> Initialization
   -> Loop starts from 0.

2. i <= 10
   -> Condition
   -> Loop runs until i becomes greater than 10.

3. i++
   -> Increment
   -> After every iteration, i increases by 1.

Output:
0 1 2 3 4 5 6 7 8 9 10

---------------------------------------------------------
Important Concept: Scope
---------------------------------------------------------

`let` variables only exist inside their block.

Example:
*/

// console.log(element); ❌ Error

/*
Why Error?

Because `element` was declared inside the loop block.

for (...) {
    const element = i;
}

Outside the loop, `element` no longer exists.

This is called:
➡️ Block Scope

=========================================================
2️⃣ Nested `for` Loop
=========================================================

A loop inside another loop is called a
Nested Loop.

Used for:
✔️ Patterns
✔️ Matrix problems
✔️ Multiplication tables
✔️ Comparing elements
*/

for (let i = 1; i <= 10; i++) {

    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {

        // console.log(`Inner loop value ${j} and outer loop ${i}`);

        // Multiplication Table
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

/*
How it works:

Outer Loop → Runs first
Inner Loop → Runs completely for every outer loop iteration

Example:

i = 1
   j = 1 to 10

i = 2
   j = 1 to 10

i = 3
   j = 1 to 10

... continues

---------------------------------------------------------
Multiplication Table Example
---------------------------------------------------------

1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
...
2 * 1 = 2
2 * 2 = 4

and so on...

Time Complexity:
O(n²)

Because:
Loop inside another loop.

=========================================================
3️⃣ Looping Through Array
=========================================================

Arrays can also be traversed using `for` loop.
*/

let myArray = ["flash", "batman", "superman"];

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];

    // console.log(element);
}

/*
Explanation:

myArray.length = 3

Indexes:

0 -> flash
1 -> batman
2 -> superman

Loop Flow:

index = 0
element = "flash"

index = 1
element = "batman"

index = 2
element = "superman"

Condition Used:

index < myArray.length

Why NOT <= ?

Wrong:
index <= myArray.length

Reason:
Array index starts from 0.

For array of size 3:

Valid indexes:
0, 1, 2

Index 3 does not exist.

So we use:

index < myArray.length

Output:
flash
batman
superman

=========================================================
4️⃣ `break` Statement
=========================================================

`break` immediately stops the loop.

Example:
*/

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }

//     console.log(`Value of i is ${index}`);
// }

/*
Flow:

1
2
3
4
Detected 5

Loop stops immediately after finding 5.

Use Case:
When target is found and no need to continue loop.

=========================================================
5️⃣ `continue` Statement
=========================================================

`continue` skips the current iteration
and moves to the next iteration.

Example:
*/

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }

    console.log(`Value of i is ${index}`);
}

/*
Flow:

1
2
3
4
Detected 5
6
7
8
...
20

What happened?

At index = 5:
➡️ `continue` skipped remaining code
➡️ Loop moved to next iteration

Difference Between `break` and `continue`

break:
❌ Stops entire loop completely

continue:
⏭️ Skips current iteration only

Example:

break:
1 2 3 4 (stop)

continue:
1 2 3 4 skip 5 6 7 8...

=========================================================
📌 Summary
=========================================================

1. `for` loop
   -> Used for repeated execution.

2. Nested loop
   -> Loop inside loop.

3. Array traversal
   -> Access elements using index.

4. `break`
   -> Stops loop completely.

5. `continue`
   -> Skips only current iteration.

6. Scope
   -> Variables declared with `let` or `const`
      inside loop are block scoped.

*/ 