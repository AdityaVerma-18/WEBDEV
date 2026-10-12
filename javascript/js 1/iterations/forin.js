/*
=========================================================
📘 JavaScript `for...in` Loop Notes
=========================================================

`for...in` loop is mainly used to iterate
through OBJECTS.

It gives access to:
➡️ Keys (property names)

Syntax:

for (const key in object) {
    // code
}

Important:
`for...in` returns KEYS,
not values.

=========================================================
1️⃣ `for...in` with Object
=========================================================
*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {

    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*
Explanation:

Object:

{
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

`for...in` gives keys one by one.

Flow:

key = "js"
key = "cpp"
key = "rb"
key = "swift"

To access values:

myObject[key]

Example:

myObject["js"]
→ "javascript"

Output:

js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple

---------------------------------------------------------
Why Bracket Notation?
---------------------------------------------------------

Correct:

myObject[key]

Wrong:

myObject.key

Why?

Because:

key = "js"

myObject.key
means:
property literally named "key"

which does NOT exist.

But:

myObject[key]

becomes:

myObject["js"]

Correct ✅

=========================================================
2️⃣ `for...in` with Array
=========================================================
*/

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {

    // console.log(programming[key]);
}

/*
Explanation:

Arrays also have indexes.

`for...in` returns INDEXES.

Flow:

0
1
2
3
4

To access actual values:

programming[key]

Output:

js
rb
py
java
cpp

---------------------------------------------------------
Important Difference
---------------------------------------------------------

`for...in` on array:

Returns INDEXES

Example:

for (const key in programming) {
    console.log(key);
}

Output:

0
1
2
3
4

---------------------------------------------------------

`for...of` on array:

Returns VALUES

Example:

for (const value of programming) {
    console.log(value);
}

Output:

js
rb
py
java
cpp

=========================================================
3️⃣ Why `for...in` Doesn't Work Properly on Maps
=========================================================
*/

// const map = new Map();

// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('Fr', 'France');
// map.set('IN', 'India');

// for (const key in map) {
//     console.log(key);
// }

/*
Output:
❌ Nothing

Why?

Map is NOT enumerable
using `for...in`.

`for...in` works with:
✔️ Object properties

Map is iterable,
not enumerable.

So use:

`for...of`

Correct Example:

for (const [key, value] of map) {
    console.log(key, value);
}

Output:

IN India
USA United States of America
Fr France

=========================================================
🔄 Difference:
`for...in` vs `for...of`
=========================================================

`for...in`
-------------------------
✔️ Objects
✔️ Array indexes

Returns:
➡️ Keys / indexes

Example:

for (const key in obj)

-------------------------

`for...of`
-------------------------
✔️ Arrays
✔️ Strings
✔️ Maps
✔️ Sets

Returns:
➡️ Values

Example:

for (const value of arr)

=========================================================
📌 Summary
=========================================================

1. `for...in`
   → Mainly used for objects

2. Returns:
   → Keys / property names

3. Array with `for...in`
   → Gives indexes

4. Object values access:
   → object[key]

5. Maps:
   ❌ `for...in` does not work

6. Maps use:
   → `for...of`

=========================================================
*/