// ─────────────────────────────────────────────────────────────
//  JavaScript Arrays — Complete Reference
// ─────────────────────────────────────────────────────────────
//
//  Sections:
//    1. Basics
//    2. Mutating Methods   — modify the original array
//    3. Iterating Methods
//    4. Searching Methods
//    5. Transform Methods  — return a new array
//    6. Spread, Rest & Destructuring
//
// ─────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────
//  1. BASICS
// ─────────────────────────────────────────────────────────────
// ARRAY IS A OBJECT
// Declaration
let fruits = ["apple", "banana", "mango"];
let nums   = new Array(1, 2, 3);

// Accessing elements (zero-indexed)
fruits[0];                         // "apple"
fruits[fruits.length - 1];         // last element
fruits.at(-1);                     // last element via at()

// Length
fruits.length;                     // 3
fruits.length = 2;                 // truncates array!

// Type check
Array.isArray(fruits);             // true
Array.isArray("hello");            // false


// ─────────────────────────────────────────────────────────────
//  2. MUTATING METHODS  —  modify the original array
// ─────────────────────────────────────────────────────────────

// push / pop  (end)
let arr = [1, 2, 3];
arr.push(4, 5);                    // [1,2,3,4,5]  returns new length
arr.pop();                         // removes & returns 5

// unshift / shift  (start)
arr.unshift(0);                    // [0,1,2,3,4]
arr.shift();                       // removes & returns 0

// splice — insert / remove at any index
//   splice(start, deleteCount, ...items)
arr.splice(1, 1);                  // remove 1 item at index 1
arr.splice(1, 0, 99, 100);         // insert 99,100 at index 1

// sort — lexicographic by default!
[10, 2, 5].sort();                 // [10,2,5]  ← wrong!
[10, 2, 5].sort((a, b) => a - b); // [2,5,10]  ← correct numeric sort
// a-b is ascending and b-a is descending
let sr=arr.sort(function(a,b){
  return a-b;
});

// reverse — reverses in-place
arr.reverse();

// fill — fill slots with a value
new Array(4).fill(0);              // [0,0,0,0]
arr.fill(9, 1, 3);                 // fill index 1–2 with 9


// ─────────────────────────────────────────────────────────────
//  3. ITERATING METHODS
// ─────────────────────────────────────────────────────────────

// forEach — side-effect per element
[1, 2, 3].forEach(n => console.log(n));
arr.forEach(function(n){
  console.log(n);
})

// for...of — cleanest value loop
for (const item of fruits) {
  console.log(item);
}

// entries — index + value pairs
for (const [i, val] of fruits.entries()) {
  console.log(i, val);
}

// keys / values
[...fruits.keys()];                // [0, 1, 2]
[...fruits.values()];              // ["apple","banana","mango"]

// reduce — accumulate to a single value
const sum = [1, 2, 3, 4].reduce(
  (acc, cur) => acc + cur, 0
);  // 10

let ans=arr.reduce(function(accumulator,val){
  return accumulator+val;
},0);

// reduceRight — same but right-to-left
["a", "b", "c"].reduceRight((acc, c) => acc + c, ""); // "cba"


// ─────────────────────────────────────────────────────────────
//  4. SEARCHING METHODS
// ─────────────────────────────────────────────────────────────

const nums2 = [10, 20, 30, 20, 40];

// indexOf / lastIndexOf — position of value
nums2.indexOf(20);                 // 1  (first occurrence)
nums2.lastIndexOf(20);             // 3  (last occurrence)
nums2.indexOf(99);                 // -1 if not found

// includes — boolean check
nums2.includes(30);                // true

// find / findIndex — first match
let va=nums2.find(function(val){
  return val===1;
});
nums2.find(n => n > 25);           // 30
nums2.findIndex(n => n > 25);      // 2

// findLast / findLastIndex — search from end
nums2.findLast(n => n > 15);       // 40
nums2.findLastIndex(n => n > 15);  // 4

// some — true if ANY element passes
let any=nums2.some(function(val){
  return val>2;
});
nums2.some(n => n > 35);           // true

// every — true only if ALL elements pass
let any=nums2.every(function(val){
  return val>5;
});
nums2.every(n => n > 0);           // true


// ─────────────────────────────────────────────────────────────
//  5. TRANSFORM METHODS  —  return a new array
// ─────────────────────────────────────────────────────────────

// map — transform each element
[1, 2, 3].map(n => n * 2);                      // [2,4,6]

let arr2 =arr.map(function(val){
  return 12;
})
console.log(arr2);

// filter — keep elements that pass test
[1, 2, 3, 4].filter(n => n % 2 === 0);          // [2,4]

let arr3 =arr.filter(function(val){
  if(val>4)return true;//if true is returned tthe value goes to new array
});
console.log(arr3);

// slice — copy a portion (non-mutating)
//   slice(start, end)  — end is exclusive
[0, 1, 2, 3].slice(1, 3);                        // [1,2]
[0, 1, 2].slice(-2);                             // [1,2]  negative counts from end

// concat — merge arrays (non-mutating)
[1, 2].concat([3, 4]);                           // [1,2,3,4]

// flat — flatten nested arrays
[1, [2, [3]]].flat();                            // [1,2,[3]]  depth 1 by default
[1, [2, [3]]].flat(Infinity);                    // [1,2,3]    fully flattened

// flatMap — map then flat (depth 1)
[1, 2, 3].flatMap(n => [n, n * 2]);             // [1,2,2,4,3,6]

// join — array to delimited string
["a", "b", "c"].join("-");                       // "a-b-c"
["a", "b"].join();                               // "a,b"  default delimiter is comma

// Array.from — create array from iterable / length
Array.from("hello");                             // ["h","e","l","l","o"]
Array.from({ length: 3 }, (_, i) => i);         // [0,1,2]

// Array.of — create from arguments
Array.of(1, 2, 3);                              // [1,2,3]


// ─────────────────────────────────────────────────────────────
//  6. SPREAD, REST & DESTRUCTURING
// ─────────────────────────────────────────────────────────────

// Spread — expand array into elements
const a = [1, 2], b = [3, 4];
const c    = [...a, ...b];                       // [1,2,3,4]
const copy = [...a];                             // shallow clone

Math.max(...[5, 1, 9]);                          // 9  spread as function args

// Rest — collect remaining elements
const [first, second, ...rest] = [1, 2, 3, 4];
// first=1   second=2   rest=[3,4]

// Destructuring — unpack into variables
const [x, y] = [10, 20];                        // x=10  y=20
const [a2 = 0, , b2] = [7, 8, 9];              // skip index 1 with empty comma

// Swap variables using destructuring
let p = 1, q = 2;
[p, q] = [q, p];                                // p=2  q=1

// Deep clone with structuredClone
const deep = structuredClone([[1], [2]]);        // fully independent copy

// toSorted / toReversed / toSpliced — non-mutating ES2023
const sorted  = [3, 1, 2].toSorted((a, b) => a - b);  // [1,2,3]
const rev     = [1, 2, 3].toReversed();                // [3,2,1]
const spliced = [1, 2, 3].toSpliced(1, 1, 99);         // [1,99,3]


// copy array normally is areference so any change in arr2 also changes arr 
let arr=[1,2,3,4,5,6]
let arr2=arr;
// making copy without referrence
let arr2=[...arr];