/*
====================================================
📦 JAVASCRIPT OBJECTS — DETAILED NOTES
====================================================

Objects are used to store related data in the form
of key-value pairs.

Example:
Instead of writing:

let name = "Aditya";
let age = 20;
let city = "GZB";

We can group related data together:

*/

let person = {
    name: "Aditya",
    age: 20,
    city: "GZB"
};

/*
Here:

Keys (Properties):
- name
- age
- city

Values:
- "Aditya"
- 20
- "GZB"
*/


/*
====================================================
1️⃣ CREATING OBJECTS
====================================================
*/

/*
Method 1: Object Literal (Most Common) (non singelton)
*/

let obj = {
    name: "Aditya",
    age: 20,
    khanaa: "daal chawaal"
};

/*
Method 2: Using new Object() (singelton object)
*/

let obj2 = new Object();

obj2.name = "Aditya";
obj2.age = 20;
console.log(obj2); 


/*
====================================================
2️⃣ ACCESSING OBJECT PROPERTIES
====================================================

There are 2 ways:

1. Dot Notation (.)
2. Bracket Notation ([])
*/


/*
A) Dot Notation

Syntax:
object.propertyName
*/

console.log(obj.age); // 20
console.log(obj.name); // Aditya


/*
B) Bracket Notation

Syntax:
object["property"]
*/

console.log(obj["age"]); // 20


/*
Why bracket notation?

Because it supports dynamic keys.
*/

let key = "name";

console.log(obj[key]); // Aditya


/*
Difference:

Dot notation:
✔ Easy
✔ Readable

Bracket notation:
✔ Dynamic keys
✔ Keys with spaces
*/

let student = {
    "full name": "Aditya"
};
console.log(student.full name)
console.log(student["full name"]);

// using symbol as key and acessing it with correct syntax ie []
const mysym=Symbol("key1")
const jsuser={
    [mysym]:"mykey1",
}
console.log(jsuser[mysym]);
console.log(jsuser);

// adding functions in properties;
student.greetings=function(){
    console.log(`hello js user ${this["full name"]}`);
}
console.log(student.greetings());

/*
====================================================
3️⃣ MODIFYING OBJECT PROPERTIES
====================================================

We can change existing values.
*/

obj.age = 21;

console.log(obj.age); // 21


/*
====================================================
4️⃣ ADDING NEW PROPERTIES
====================================================

Objects are dynamic.

We can add properties anytime.
*/

obj.city = "GZB";

console.log(obj);


/*
====================================================
5️⃣ DELETING PROPERTIES
====================================================

Use delete keyword.
*/

delete obj.khanaa;

console.log(obj);


/*
====================================================
6️⃣ NESTED OBJECTS
====================================================

Objects can contain another object.
This is called Nested Object.
*/

const user = {
    name: "Aditya",

    address: {
        city: "GZB",
        pin: 201011,

        location: {
            lat: 23.2,
            lng: 77.4
        }
    }
};


/*
Structure:

user
 ├── name
 └── address
      ├── city
      ├── pin
      └── location
             ├── lat
             └── lng
*/


/*
====================================================
7️⃣ ACCESSING NESTED OBJECTS
====================================================

Use multiple dots.
*/

console.log(user.address.location.lng); // 77.4


/*
Step-by-step:

user
↓
user.address
↓
user.address.location
↓
user.address.location.lng
*/


/*
====================================================
8️⃣ OBJECT DESTRUCTURING
====================================================

Destructuring means extracting values
from object into variables.
*/

/*
Without destructuring:
*/

let lat1 = user.address.location.lat;
let lng1 = user.address.location.lng;

console.log(lat1);
console.log(lng1);


/*
Using destructuring:
*/

let { lat, lng } = user.address.location;

console.log(lat); // 23.2
console.log(lng); // 77.4


/*
Renaming variables
*/

let { lat: latitude } = user.address.location;

console.log(latitude); // 23.2


/*
Default values
*/

let { country = "India" } = user;

console.log(country); // India


/*
====================================================
9️⃣ LOOPING THROUGH OBJECTS
====================================================

Objects are not iterable using normal loops.

Use:
for...in
*/

for (let key in obj) {
    console.log(key, obj[key]);
}


/*
Output example:

name Aditya
age 21
city GZB
*/


/*
====================================================
🔟 OBJECT METHODS
====================================================
*/


/*
1. Object.keys()

Returns all keys.
*/

console.log(Object.keys(obj));

/*
Output:
["name", "age", "city"]
*/


/*
2. Object.values()

Returns all values.
*/

console.log(Object.values(obj));

/*
Output:
["Aditya", 21, "GZB"]
*/


/*
3. Object.entries()

Returns key-value pairs.
*/

console.log(Object.entries(obj));

/*
Output:
[
 ["name", "Aditya"],
 ["age", 21]
]
*/


/*
Loop using entries
*/

for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}


/*
====================================================
1️⃣1️⃣ OBJECT COPYING
====================================================

Objects are stored by reference.
*/

let refObj = obj;

/*
This does NOT create a new object.
Both point to same memory.
*/

refObj.age = 100;

console.log(obj.age); // 100


/*
====================================================
1️⃣2️⃣ SHALLOW COPY
====================================================

Copies only first level.

Nested objects are still shared.
*/


/*
A) Spread Operator
*/

let copy1 = { ...user };

// join 2 objects;
// const copy4={...obj1,...obj2}


/*
B) Object.assign() also can be used to add 2 objects in one object
*/

// copy
let copy2 = Object.assign({}, user);

// join 2 objects 

// 1
// let copy3 = Object.assign(target , source)
// also copy3===target;

// 2
// let copy3=Object.assign({}, user,user2);



/*
Problem in shallow copy
*/

let user1 = {
    name: "Aditya",

    address: {
        city: "GZB"
    }
};

let user2Copy = { ...user1 };

user2Copy.address.city = "Delhi";

console.log(user1.address.city);

/*
Output:
Delhi

Why?

Because nested object is shared.
*/


/*
====================================================
1️⃣3️⃣ DEEP COPY
====================================================

Creates fully independent copy.
*/

/*
JSON Method
*/

let deepCopy = JSON.parse(
    JSON.stringify(user1)
);

deepCopy.address.city = "Mumbai";

console.log(user1.address.city); // GZB


/*
Limitations of JSON Deep Copy:

1. Functions get removed
2. Undefined removed
3. Date converted to string
*/


/*
====================================================
1️⃣4️⃣ CHECKING PROPERTY EXISTS
====================================================
*/

/*
Using 'in' operator
*/

console.log("age" in obj); // true


/*
Using hasOwnProperty()
*/

console.log(obj.hasOwnProperty("age")); // true


/*
====================================================
1️⃣5️⃣ OPTIONAL CHAINING (?.)
====================================================

Prevents crashes/errors.
*/

console.log(user.contact?.phone);

/*
Output:
undefined

Without optional chaining:
Error occurs.
*/


/*
====================================================
1️⃣6️⃣ OBJECT FREEZE
====================================================

Prevents modification.
*/

let freezeObj = {
    name: "Aditya"
};

Object.freeze(freezeObj);

freezeObj.name = "Rahul";

console.log(freezeObj.name);

/*
Still:
Aditya
*/


/*
====================================================
1️⃣7️⃣ OBJECT SEAL
====================================================

Can modify existing properties.

Cannot:
❌ Add new property
❌ Delete property
*/

let sealObj = {
    name: "Aditya"
};

Object.seal(sealObj);

sealObj.name = "Rahul"; // Allowed
sealObj.age = 20; // Not allowed

console.log(sealObj);


/*
====================================================
✅ FINAL SUMMARY
====================================================

1. Objects store data in key-value pairs
2. Access using dot or bracket notation
3. Objects can be nested
4. Destructuring extracts values
5. for...in loops over keys
6. Object.keys() → returns keys
7. Object.values() → returns values
8. Object.entries() → key-value pairs
9. Spread & assign → shallow copy
10. JSON method → deep copy
11. delete removes property
12. in checks existence
13. ?. prevents crashes
14. freeze() locks object
15. seal() partially locks object
*/