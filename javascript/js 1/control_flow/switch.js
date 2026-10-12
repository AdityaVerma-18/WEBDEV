/*
═══════════════════════════════════════════════
            📘 JavaScript SWITCH NOTES
═══════════════════════════════════════════════

This code explains:
1️⃣ What is switch statement?
2️⃣ Syntax of switch
3️⃣ case keyword
4️⃣ break keyword
5️⃣ default case
6️⃣ Flow of execution
7️⃣ Example explanation

───────────────────────────────────────────────
1️⃣ WHAT IS SWITCH STATEMENT?
───────────────────────────────────────────────

👉 switch is used when we want to compare
one value against multiple options.

Instead of writing many if-else statements,
we can use switch for cleaner code.

Example use cases:
✅ Days of week
✅ Months
✅ Menu systems
✅ Options selection

───────────────────────────────────────────────
2️⃣ BASIC SYNTAX OF SWITCH
───────────────────────────────────────────────

Syntax:

switch(expression) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
        break;
}

Explanation:

switch(expression)
→ The value to check

case
→ Possible matching value

break
→ Stops execution

default
→ Runs when no case matches

───────────────────────────────────────────────
3️⃣ YOUR EXAMPLE
───────────────────────────────────────────────
*/

const month = "march";

switch (month) {

    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("feb");
        break;

    case "march":
        console.log("march");
        break;

    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/*
───────────────────────────────────────────────
4️⃣ STEP-BY-STEP EXECUTION
───────────────────────────────────────────────

month = "march"

JavaScript checks cases one by one:

Step 1:
case "jan"

"march" === "jan"
❌ false

Step 2:
case "feb"

"march" === "feb"
❌ false

Step 3:
case "march"

"march" === "march"
✅ true

So this executes:

console.log("march");

Output:
march

Then break runs
and switch stops immediately.

Remaining cases are skipped.

───────────────────────────────────────────────
5️⃣ IMPORTANCE OF break
───────────────────────────────────────────────

👉 break stops execution after a match.

Without break,
JavaScript keeps running the next cases.

Example:
*/

const month2 = "march";

switch (month2) {

    case "jan":
        console.log("January");

    case "feb":
        console.log("feb");

    case "march":
        console.log("march");

    case "april":
        console.log("april");

    default:
        console.log("default");
}

/*
Output:
march
april
default

❌ Wrong behavior

Why?

Because there is NO break.

After finding "march",
execution continues downward.

This is called:
🔥 Fall Through Behavior

So always use break
unless intentionally needed.

───────────────────────────────────────────────
6️⃣ DEFAULT CASE
───────────────────────────────────────────────

default works like else.

It runs when no case matches.

Example:
*/

const month3 = "dec";

switch (month3) {

    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("February");
        break;

    default:
        console.log("default case match");
        break;
}

/*
Explanation:

month3 = "dec"

Check:
"dec" === "jan" ❌

"dec" === "feb" ❌

No match found.

So default runs.

Output:
default case match

───────────────────────────────────────────────
7️⃣ SWITCH VS IF-ELSE
───────────────────────────────────────────────

Use switch when:
✅ Checking one variable
against many fixed values

Example:
Month names
Days
Menu options

Use if-else when:
✅ Conditions are complex

Example:
age > 18
marks >= 90
salary > 50000

Example:

if (marks > 90) {
    console.log("A Grade");
}

switch is not ideal here.

───────────────────────────────────────────────
8️⃣ IMPORTANT RULES
───────────────────────────────────────────────

✅ switch uses strict comparison

Meaning:
It behaves like ===

Example:
*/

const num = 1;

switch (num) {

    case "1":
        console.log("String one");
        break;

    case 1:
        console.log("Number one");
        break;
}

/*
Output:
Number one

Why?

1 !== "1"

switch uses strict equality (===)

Datatype also matters.

───────────────────────────────────────────────
🧠 QUICK SUMMARY
───────────────────────────────────────────────

✅ switch
Used for multiple fixed choices

✅ case
Possible matching values

✅ break
Stops execution

✅ default
Runs if nothing matches

✅ switch uses ===
(strict comparison)

✅ Without break
Fall-through happens

───────────────────────────────────────────────
🔥 BEST PRACTICE
───────────────────────────────────────────────

Always write break after every case.

Good:
case "march":
    console.log("march");
    break;

Bad:
case "march":
    console.log("march");

This can cause bugs.
═══════════════════════════════════════════════
*/ 