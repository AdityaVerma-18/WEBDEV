/*
=========================================================
📘 JavaScript `while` & `do...while` Loop Notes
=========================================================

Loops are used to execute code repeatedly.

In JavaScript, we commonly use:

1️⃣ while loop
2️⃣ do...while loop

=========================================================
1️⃣ `while` Loop
=========================================================

The `while` loop runs as long as
the condition is TRUE.

Syntax:

while(condition){
    // code
}

Important:
Condition is checked FIRST.

If condition becomes false,
the loop stops.

---------------------------------------------------------
Example 1: Basic `while` Loop
---------------------------------------------------------
*/

let index = 0;

// while (index <= 10) {
//     console.log(`Value of index is ${index}`);

//     index = index + 2;
// }

/*
Explanation:

Step 1:
index = 0

Condition:
index <= 10

If true:
Loop runs.

After execution:
index = index + 2

---------------------------------------------------------
Flow
---------------------------------------------------------

index = 0 → print 0
index = 2 → print 2
index = 4 → print 4
index = 6 → print 6
index = 8 → print 8
index = 10 → print 10

index = 12 ❌ condition false

Loop stops.

Output:
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10

---------------------------------------------------------
Important:
Infinite Loop
---------------------------------------------------------

If we forget to update variable:

while(index <= 10){
    console.log(index);
}

❌ Infinite loop

Reason:
index never changes.

Always update loop variable.

=========================================================
2️⃣ Using `while` Loop with Array
=========================================================

We can iterate through arrays using while loop.
*/

let myArray = ['flash', 'batman', 'superman'];

let arr = 0;

while (arr < myArray.length) {

    // console.log(`Value is ${myArray[arr]}`);

    arr = arr + 1;
}

/*
Explanation:

myArray.length = 3

Indexes:
0 → flash
1 → batman
2 → superman

Loop Flow:

arr = 0
prints flash

arr = 1
prints batman

arr = 2
prints superman

arr = 3 ❌ stop

Condition Used:

arr < myArray.length

Why NOT <= ?

Because valid indexes are:

0, 1, 2

Index 3 does not exist.

Output:
Value is flash
Value is batman
Value is superman

=========================================================
3️⃣ `do...while` Loop
=========================================================

The `do...while` loop runs
AT LEAST ONCE.

Why?

Because condition is checked AFTER execution.

Syntax:

do{
    // code
} while(condition);

---------------------------------------------------------
Example
---------------------------------------------------------
*/

let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;

} while (score <= 10);

/*
Explanation:

score = 11

Step 1:
`do` block runs FIRST.

Output:
Score is 11

Then:
score becomes 12

Now condition checked:

12 <= 10 ❌ false

Loop stops.

---------------------------------------------------------
Key Difference
---------------------------------------------------------

while loop:
✅ Condition checked first

If false initially:
Loop never runs.

Example:

let score = 11;

while(score <= 10){
    console.log(score);
}

Output:
❌ Nothing prints

---------------------------------------------------------

do...while loop:
✅ Code executes first

Even if condition is false,
it runs one time.

Example:

let score = 11;

do{
    console.log(score);
}while(score <= 10);

Output:
11

=========================================================
🔄 Difference: `while` vs `do...while`
=========================================================

1. while loop
   → Checks condition first
   → May execute 0 times

2. do...while loop
   → Executes first
   → Runs at least 1 time

Example:

while(false){
    console.log("Hello");
}

Output:
❌ Nothing

----------------------------

do{
    console.log("Hello");
}while(false);

Output:
✅ Hello

=========================================================
📌 Summary
=========================================================

1. `while`
   → Runs while condition is true

2. Update variable carefully
   → Prevent infinite loops

3. Arrays can be traversed
   → Using index

4. `do...while`
   → Executes at least once

5. Main difference:
   `while` → check first
   `do...while` → execute first

=========================================================
*/ 