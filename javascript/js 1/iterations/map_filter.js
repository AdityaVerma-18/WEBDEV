/*
=========================================================
📘 JavaScript `filter()` & `map()` Notes
=========================================================

These are array methods used for
processing data.

1️⃣ forEach()
2️⃣ filter()
3️⃣ map()

Very important for:
✔️ React
✔️ JavaScript Interviews
✔️ Data Processing

=========================================================
1️⃣ Why `forEach()` Does NOT Return Values
=========================================================
*/

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach((item) => {

//     // console.log(item);

//     return item;
// });

// console.log(values);

/*
Explanation:

`forEach()` always returns:

undefined

Even if we write:

return item

it does NOT return array.

Output:
undefined

Why?

Because:
`forEach()` is made only for iteration.

It is NOT used for creating new arrays.

---------------------------------------------------------
Use Case:
---------------------------------------------------------

forEach()
✔️ Printing values
✔️ Performing actions

NOT for:
❌ Returning transformed data

=========================================================
2️⃣ `filter()` Method
=========================================================

`filter()` creates a NEW array
based on a condition.

Syntax:

array.filter((item) => {
    return condition;
})

Important:
✔️ Returns new array
✔️ Original array unchanged
✔️ Used for filtering data

=========================================================
3️⃣ Basic `filter()` Example
=========================================================
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//     return num > 4;
// });

/*
Condition:

num > 4

Output:

[5, 6, 7, 8, 9, 10]

Explanation:

Numbers greater than 4
are selected.

---------------------------------------------------------
Important Arrow Function Rule
---------------------------------------------------------

Implicit Return:

(num) => num > 4

No need for `return`

----------------------------

Explicit Return:

(num) => {
    return num > 4;
}

When using `{ }`
you MUST write `return`.

=========================================================
4️⃣ Doing Same Work Using `forEach()`
=========================================================
*/

// const newNums = [];

// myNums.forEach((num) => {

//     if (num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(newNums);

/*
Explanation:

We manually create array.

If condition is true:
push value.

Output:

[5, 6, 7, 8, 9, 10]

But:

`filter()` is cleaner ✅

=========================================================
5️⃣ `filter()` with Array of Objects
=========================================================
*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },

    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },

    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },

    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },

    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },

    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },

    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },

    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },

    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

/*
---------------------------------------------------------
Filter by Genre
---------------------------------------------------------
*/

let userBooks = books.filter(
    (bk) => bk.genre === 'History'
);

/*
Output:

[
 { title: 'Book Three', genre: 'History' },
 { title: 'Book Seven', genre: 'History' }
]

Explanation:

Only books whose genre is:

History

are selected.

---------------------------------------------------------
Multiple Conditions
---------------------------------------------------------
*/

userBooks = books.filter((bk) => {

    return bk.publish >= 1995 &&
           bk.genre === 'History';
});

console.log(userBooks);

/*
Conditions:

1. publish >= 1995
2. genre === "History"

Both must be true.

Output:

[
 {
   title: 'Book Three',
   genre: 'History',
   publish: 1999
 }
]

Why only one?

Book Seven:
publish = 1986 ❌

=========================================================
6️⃣ `map()` Method
=========================================================

`map()` transforms data.

It creates a NEW array
after modifying each element.

Syntax:

array.map((item) => {
    return modifiedValue;
})

Important:
✔️ Returns new array
✔️ Does not change original array

=========================================================
7️⃣ Basic `map()` Example
=========================================================
*/

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map(
//     (num) => {
//         return num + 10;
//     }
// );

/*
Output:

[
11,12,13,14,15,
16,17,18,19,20
]

Explanation:

Each number +10

=========================================================
8️⃣ Method Chaining
=========================================================

Multiple methods together
is called:

➡️ Method Chaining
*/

const newNums = myNumers
    .map((num) => num * 10)

    .map((num) => num + 1)

    .filter((num) => num >= 40);

console.log(newNums);

/*
Step-by-step:

Original:
[1,2,3,4,5,6,7,8,9,10]

-------------------------
Step 1: map(num * 10)
-------------------------

[
10,20,30,40,50,
60,70,80,90,100
]

-------------------------
Step 2: map(num + 1)
-------------------------

[
11,21,31,41,51,
61,71,81,91,101
]

-------------------------
Step 3: filter(num >= 40)
-------------------------

[
41,51,61,
71,81,91,101
]

Final Output:

[
41,51,61,
71,81,91,101
]

=========================================================
🔄 Difference:
`forEach()` vs `filter()` vs `map()`
=========================================================

forEach()
-------------------------
✔️ Iteration only
❌ No return value

filter()
-------------------------
✔️ Returns filtered array
✔️ Based on condition

map()
-------------------------
✔️ Returns modified array
✔️ Transforms data

=========================================================
📌 Summary
=========================================================

1. `forEach()`
   → Iteration only

2. `filter()`
   → Select values using condition

3. `map()`
   → Modify/transform values

4. `filter()` & `map()`
   → Return NEW arrays

5. Method chaining
   → Multiple methods together

=========================================================
*/