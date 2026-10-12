/*
=========================================================
📘 JavaScript `forEach()` Loop Notes
=========================================================

`forEach()` is an array method used to
iterate through array elements.

It executes a function once for
each array element.

Syntax:

array.forEach(function)

OR

array.forEach((item) => {
    // code
})

Important:
✔️ Works only on arrays
✔️ Executes for every element
❌ Does NOT return values
❌ Cannot use `break` or `continue`

=========================================================
1️⃣ Basic `forEach()` Loop
=========================================================
*/

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach(function (val) {
//     console.log(val);
// });

/*
Explanation:

`forEach()` runs function for every element.

Flow:

val = js
val = ruby
val = java
val = python
val = cpp

Output:

js
ruby
java
python
cpp

---------------------------------------------------------
Anonymous Function
---------------------------------------------------------

function(val){
    console.log(val);
}

This function has:
❌ No name

So it is called:
➡️ Anonymous Function

=========================================================
2️⃣ `forEach()` using Arrow Function
=========================================================
*/

// coding.forEach((item) => {
//     console.log(item);
// });

/*
Explanation:

Arrow function is a shorter syntax.

Normal Function:

function(item){
    console.log(item);
}

Arrow Function:

(item) => {
    console.log(item);
}

Output:

js
ruby
java
python
cpp

Cleaner syntax ✅

=========================================================
3️⃣ Passing Function Reference
=========================================================
*/

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

/*
Explanation:

We pass function reference.

Wrong ❌

coding.forEach(printMe())

Why wrong?

Because:
It immediately executes function.

Correct ✅

coding.forEach(printMe)

No parentheses.

`forEach()` automatically calls it
for every item.

Flow:

printMe("js")
printMe("ruby")
printMe("java")

and so on...

=========================================================
4️⃣ `forEach()` Parameters
=========================================================
*/

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

/*
`forEach()` provides 3 parameters:

1. item
   → Current element

2. index
   → Position of element

3. arr
   → Full original array

Example Flow:

item     index
----------------
js         0
ruby       1
java       2
python     3
cpp        4

Output Example:

js 0 [full array]
ruby 1 [full array]
...

=========================================================
5️⃣ `forEach()` with Array of Objects
=========================================================
*/

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },

    {
        languageName: 'java',
        languageFileName: 'java'
    },

    {
        languageName: 'python',
        languageFileName: 'py'
    }
];

myCoding.forEach((item) => {

    console.log(item.languageName);
});

/*
Explanation:

This is:
➡️ Array of Objects

Structure:

[
   { key:value },
   { key:value }
]

Each item is an object.

Flow:

item = {
    languageName: 'javascript',
    languageFileName: 'js'
}

Access property:

item.languageName

Output:

javascript
java
python

---------------------------------------------------------
Accessing Other Property
---------------------------------------------------------

item.languageFileName

Output:

js
java
py

=========================================================
🔄 Difference:
`forEach()` vs `for...of`
=========================================================

`forEach()`
-------------------------
✔️ Array method
✔️ Cleaner syntax
❌ Cannot break loop

Example:

coding.forEach((item)=>{
    console.log(item)
})

-------------------------

`for...of`
-------------------------
✔️ Works on iterable objects
✔️ Can use break/continue

Example:

for(const item of coding){
    console.log(item)
}

=========================================================
📌 Summary
=========================================================

1. `forEach()`
   → Used to iterate arrays

2. Can use:
   ✔️ Normal function
   ✔️ Arrow function
   ✔️ Function reference

3. Parameters:
   → item
   → index
   → array

4. Works well with:
   ✔️ Array of objects

5. Cannot use:
   ❌ break
   ❌ continue

6. `forEach()` does NOT return values

=========================================================
*/