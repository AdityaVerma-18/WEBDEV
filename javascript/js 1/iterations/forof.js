/*
=========================================================
📘 JavaScript `for...of` Loop & Maps Notes
=========================================================

`for...of` loop is used to iterate
over iterable objects.

Examples of iterable objects:

✔️ Arrays
✔️ Strings
✔️ Maps
✔️ Sets

Syntax:

for (const variable of iterable) {
    // code
}

Important:
`for...of` gives VALUES directly.

=========================================================
1️⃣ `for...of` with Array
=========================================================
*/

// Example arrays

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

/*
Explanation:

`for...of` automatically accesses
each element of array.

No need for index.

Flow:

num = 1
num = 2
num = 3
num = 4
num = 5

Output:
1
2
3
4
5

---------------------------------------------------------
Traditional `for` loop vs `for...of`
---------------------------------------------------------

Traditional:

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

Needs:
❌ index
❌ condition
❌ increment

`for...of`:

for(const num of arr){
    console.log(num);
}

Much cleaner ✅

=========================================================
2️⃣ `for...of` with String
=========================================================
*/

const greetings = "Hello world!";

for (const greet of greetings) {

    // console.log(`Each char is ${greet}`);
}

/*
Explanation:

Strings are iterable.

`for...of` accesses one character
at a time.

Flow:

H
e
l
l
o

(space)

w
o
r
l
d
!

Output:

Each char is H
Each char is e
Each char is l
...

Useful for:
✔️ Character traversal
✔️ String processing

=========================================================
3️⃣ Maps in JavaScript
=========================================================

A Map is a collection of key-value pairs.

Similar to object,
but more powerful.

Syntax:

const map = new Map();

map.set(key, value);

---------------------------------------------------------
Creating a Map
---------------------------------------------------------
*/

const map = new Map();

map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India'); // Duplicate key

// console.log(map);

/*
Explanation:

Map stores:

Key → Value

IN  → India
USA → United States of America
Fr  → France

---------------------------------------------------------
Important Feature:
No Duplicate Keys
---------------------------------------------------------

This line:

map.set('IN', 'India');

already exists.

Adding it again:

map.set('IN', 'India');

does NOT create duplicate entry.

Map keeps unique keys only.

Output:

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}

=========================================================
4️⃣ Iterating Through Map
=========================================================
*/

for (const [key, value] of map) {

    // console.log(key, ':-', value);
}

/*
Explanation:

Maps return data in:

[key, value]

format.

So we use:

[key, value]

This is called:
➡️ Array Destructuring

Flow:

['IN', 'India']
['USA', 'United States of America']
['Fr', 'France']

Output:

IN :- India
USA :- United States of America
Fr :- France

---------------------------------------------------------
Understanding Destructuring
---------------------------------------------------------

Without destructuring:

for (const item of map) {
    console.log(item);
}

Output:

['IN', 'India']
['USA', 'United States of America']

With destructuring:

for (const [key, value] of map)

You directly access:

key
value

Cleaner ✅

=========================================================
5️⃣ Why `for...of` Doesn't Work on Objects
=========================================================
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

/*
❌ ERROR

Why?

Objects are NOT iterable.

`for...of` only works on iterable objects.

Objects are not iterable by default.

So this gives error.

---------------------------------------------------------
Correct Way for Object
---------------------------------------------------------

Use `for...in`

Example:

for (const key in myObject) {
    console.log(key, myObject[key]);
}

Output:

game1 NFS
game2 Spiderman

=========================================================
🔄 Difference: Array vs Object Iteration
=========================================================

Array:
Use `for...of`

const arr = [1,2,3];

for(const value of arr){
    console.log(value);
}

----------------------------

Object:
Use `for...in`

const obj = {
    name: "Aditya",
    age: 20
}

for(const key in obj){
    console.log(key, obj[key]);
}

=========================================================
📌 Summary
=========================================================

1. `for...of`
   → Used for iterable objects

2. Works on:
   ✔️ Arrays
   ✔️ Strings
   ✔️ Maps
   ✔️ Sets

3. Does NOT work on:
   ❌ Objects

4. Maps
   → Store key-value pairs

5. Maps keep:
   ✔️ Unique keys

6. Object iteration:
   → Use `for...in`

=========================================================
*/ 