/*
═══════════════════════════════════════════════
        📘 JavaScript Truthy/Falsy Notes
═══════════════════════════════════════════════

This code explains:
1️⃣ Truthy and Falsy values
2️⃣ Empty array checking
3️⃣ Empty object checking
4️⃣ Object.keys()
5️⃣ Nullish Coalescing Operator (??)
6️⃣ Ternary Operator

───────────────────────────────────────────────
1️⃣ CHECKING VALUES IN IF CONDITION
───────────────────────────────────────────────

Example:
*/

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*
Question:
Why does this print
"Got user email"
even though array is empty?

Because:

[] is a TRUTHY value in JavaScript.

Meaning:
Even an empty array is considered TRUE.

Output:
Got user email

───────────────────────────────────────────────
2️⃣ FALSY VALUES IN JAVASCRIPT
───────────────────────────────────────────────

Falsy values are values that become false
when used in an if condition.

There are only a few falsy values:

1. false
2. 0
3. -0
4. BigInt 0n
5. "" (empty string)
6. null
7. undefined
8. NaN

Example:
*/

if (false) {
    console.log("Runs");
} else {
    console.log("Falsy value");
}

/*
Output:
Falsy value

Example:
*/

if ("") {
    console.log("Runs");
} else {
    console.log("Empty string is falsy");
}

/*
Output:
Empty string is falsy

───────────────────────────────────────────────
3️⃣ TRUTHY VALUES
───────────────────────────────────────────────

Everything except falsy values
is considered truthy.

Examples of truthy values:

"0"         → string zero
'false'     → string false
" "         → space inside string
[]          → empty array
{}          → empty object
function(){} → function

Example:
*/

if ("0") {
    console.log("Truthy");
}

/*
Output:
Truthy

Because "0" is string,
not number 0.

───────────────────────────────────────────────
4️⃣ HOW TO CHECK EMPTY ARRAY
───────────────────────────────────────────────

Since [] is truthy,
we cannot check empty array directly.

Wrong way:
*/

const userEmail2 = [];

if (userEmail2) {
    console.log("Array exists");
}

/*
Even empty array returns true.

Correct way:
*/

if (userEmail2.length === 0) {
    console.log("Array is empty");
}

/*
Explanation:

.length returns number of elements.

[] → length = 0

Output:
Array is empty

───────────────────────────────────────────────
5️⃣ HOW TO CHECK EMPTY OBJECT
───────────────────────────────────────────────

Objects don't have .length

So we use:

Object.keys()

Example:
*/

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*
Explanation:

Object.keys(emptyObj)

Returns array of keys.

Example:

{
   name: "Aditya",
   age: 20
}

Object.keys(obj)

Output:
["name", "age"]

Length = 2

For empty object:

{}

Object.keys({})

Output:
[]

Length = 0

So object is empty.

───────────────────────────────────────────────
6️⃣ NULLISH COALESCING OPERATOR (??)
───────────────────────────────────────────────

Syntax:

value1 ?? value2

Purpose:
Provides fallback value.

It ONLY checks:

✅ null
✅ undefined

NOT other falsy values.

Example:
*/

let val1;

val1 = 5 ?? 10;

console.log(val1);

/*
Output:
5

Because:
5 is not null or undefined

───────────────────────────────────────────────
Example 2:
───────────────────────────────────────────────
*/

val1 = null ?? 10;

console.log(val1);

/*
Output:
10

Because:
null triggers fallback value.

───────────────────────────────────────────────
Example 3:
───────────────────────────────────────────────
*/

val1 = undefined ?? 15;

console.log(val1);

/*
Output:
15

Because:
undefined triggers fallback value.

───────────────────────────────────────────────
Example 4 (YOUR CODE)
───────────────────────────────────────────────
*/

val1 = null ?? 10 ?? 20;

console.log(val1);

/*
Execution:

null ?? 10
→ 10

Now:

10 ?? 20
→ 10

Output:
10

JavaScript picks first non-null
and non-undefined value.

Very useful in API data handling.

Example:
*/

const username = null;

const finalName = username ?? "Guest";

console.log(finalName);

/*
Output:
Guest

───────────────────────────────────────────────
7️⃣ DIFFERENCE BETWEEN || AND ??
───────────────────────────────────────────────

OR Operator (||)
checks ALL falsy values.

Nullish Operator (??)
checks ONLY:
null and undefined

Example:
*/

console.log(0 || 100);

/*
Output:
100

Because:
0 is falsy
*/

/*
Now:
*/

console.log(0 ?? 100);

/*
Output:
0

Because:
0 is NOT null or undefined.

This is the major difference.

───────────────────────────────────────────────
8️⃣ TERNARY OPERATOR
───────────────────────────────────────────────

Short form of if-else.

Syntax:

condition ? trueCode : falseCode

Example:
*/

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("less than 80")
    : console.log("more than 80");

/*
Explanation:

100 <= 80
❌ false

So else part executes.

Output:
more than 80

Equivalent if-else:
*/

if (iceTeaPrice <= 80) {
    console.log("less than 80");
} else {
    console.log("more than 80");
}

/*
Ternary operator is useful
for short conditions.

───────────────────────────────────────────────
🧠 QUICK SUMMARY
───────────────────────────────────────────────

✅ Falsy Values:
false
0
-0
0n
""
null
undefined
NaN

✅ Truthy Values:
"0"
"false"
" "
[]
{}
function(){}

✅ Empty Array Check:
array.length === 0

✅ Empty Object Check:
Object.keys(obj).length === 0

✅ ?? Operator:
Checks only null & undefined

✅ Ternary Operator:
Short form of if-else

condition ? true : false

───────────────────────────────────────────────
🔥 BEST PRACTICE
───────────────────────────────────────────────

Prefer:

value ?? defaultValue

instead of:

value || defaultValue

when 0, false, or ""
are valid values.

Example:

count ?? 0 ✅
count || 0 ❌

because || treats 0 as false.
═══════════════════════════════════════════════
*/