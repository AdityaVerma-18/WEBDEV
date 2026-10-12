/*
═══════════════════════════════════════════════
               📘 JavaScript IF-ELSE NOTES
═══════════════════════════════════════════════

This code explains:
1️⃣ if statement
2️⃣ if-else statement
3️⃣ Comparison operators
4️⃣ Scope of variables
5️⃣ Shorthand if syntax
6️⃣ else-if ladder
7️⃣ Logical operators (&& and ||)

───────────────────────────────────────────────
1️⃣ IF STATEMENT
───────────────────────────────────────────────

👉 Used to execute a block of code ONLY if a condition is true.

Syntax:

if(condition){
    // code executes if condition is true
}

Example:
*/

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");
}

/*
Explanation:
- temperature === 40 checks if value is exactly 40
- Since temperature = 41
- Condition becomes false
- So nothing executes

───────────────────────────────────────────────
2️⃣ IF-ELSE STATEMENT
───────────────────────────────────────────────

👉 Used when we want one block for true
and another block for false.

Syntax:

if(condition){
    // runs if true
}
else{
    // runs if false
}

Example:
*/

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

/*
Explanation:
- temperature = 41
- 41 !== 40
- Condition is false
- else block runs

Output:
temperature is greater than 50

───────────────────────────────────────────────
3️⃣ EXECUTION AFTER IF-ELSE
───────────────────────────────────────────────

Code outside if-else always executes.

Example:
*/

console.log("Execute");

/*
Output:
Execute

Even if condition is false,
this line still executes.

───────────────────────────────────────────────
4️⃣ COMPARISON OPERATORS
───────────────────────────────────────────────

These operators compare values.

1. <  (Less than)
2. >  (Greater than)
3. <= (Less than or equal to)
4. >= (Greater than or equal to)
5. == (Loose equality)
6. != (Not equal)
7. === (Strict equality)
8. !== (Strict not equal)

Example:
*/

console.log(5 < 10);     // true
console.log(5 > 10);     // false
console.log(10 >= 10);   // true
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 10);    // true
console.log(5 !== "5");  // true

/*
Difference Between == and ===

==  → checks only value
=== → checks value + datatype

Example:

5 == "5"
true

Because only value is checked

5 === "5"
false

Because:
5      → number
"5"    → string

Datatype is different.

───────────────────────────────────────────────
5️⃣ VARIABLE SCOPE (IMPORTANT)
───────────────────────────────────────────────

Variables declared using let inside
if block cannot be accessed outside.

Example:
*/

const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}

/*
This works because power
is inside the block.

But this will give error:

console.log(power);

❌ Error:
ReferenceError

Why?

Because let has BLOCK SCOPE.

Meaning:
Variable only exists inside { } block.

───────────────────────────────────────────────
6️⃣ SHORTHAND IF (NOT RECOMMENDED)
───────────────────────────────────────────────

JavaScript allows single-line if.

Example:
*/

const balance = 1000;

if (balance > 500) console.log("test");

/*
You can also write multiple statements
using comma operator.
*/

if (balance > 500)
    console.log("test"),
    console.log("test2");

/*
Output:
test
test2

⚠️ Avoid this style in real projects.
It reduces readability.

Better way:
*/

if (balance > 500) {
    console.log("test");
    console.log("test2");
}

/*
───────────────────────────────────────────────
7️⃣ ELSE-IF LADDER
───────────────────────────────────────────────

Used when checking multiple conditions.

Syntax:

if(condition1){
}
else if(condition2){
}
else{
}

Example:
*/

if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");

} else {
    console.log("less than 1200");
}

/*
Explanation:

balance = 1000

Check 1:
1000 < 500 ❌ false

Check 2:
1000 < 750 ❌ false

Check 3:
1000 < 900 ❌ false

Else runs ✅

Output:
less than 1200

IMPORTANT:
JavaScript checks conditions
from top to bottom.

Once a true condition is found,
remaining conditions are skipped.

───────────────────────────────────────────────
8️⃣ LOGICAL OPERATORS
───────────────────────────────────────────────

Used when multiple conditions exist.

A) && (AND Operator)

Meaning:
ALL conditions must be true.

Example:
*/

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

/*
Output:
Allow to buy course

Because both are true.

Example from your code:
*/

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

/*
Explanation:

userLoggedIn → true ✅
debitCard → true ✅
2 == 3 → false ❌

Since AND (&&) requires ALL true,
entire condition becomes false.

So nothing executes.

───────────────────────────────────────────────
B) || (OR Operator)
───────────────────────────────────────────────

Meaning:
At least ONE condition
must be true.

Example:
*/

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

/*
Explanation:

Google Login → false ❌
Email Login → true ✅

OR (||) checks:
At least one true?

YES ✅

Output:
User logged in

───────────────────────────────────────────────
🧠 QUICK SUMMARY
───────────────────────────────────────────────

✅ if
Runs code only if condition is true

✅ else
Runs when condition is false

✅ else if
Checks multiple conditions

✅ ===
Strict comparison (best practice)

✅ let
Block scoped

✅ &&
All conditions must be true

✅ ||
At least one condition must be true

───────────────────────────────────────────────
🔥 Best Practice
───────────────────────────────────────────────

Always prefer:

=== instead of ==
!== instead of !=

because strict comparison avoids bugs.

Example:

5 == "5"   → true
5 === "5"  → false

Use === in interviews and projects.
═══════════════════════════════════════════════
*/