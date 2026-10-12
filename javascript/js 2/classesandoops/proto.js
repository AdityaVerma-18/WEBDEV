// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength());


// Array of heroes
let myHeros = ["thor", "spiderman"]


// Object containing hero powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // Method inside object
    getSpiderPower: function(){

        // 'this' refers to current object
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


/*
=================================================
Adding Custom Methods to Prototype
=================================================
*/

// Adding method to Object prototype

// Since almost everything in JS inherits from Object,
// this method becomes available to ALL objects
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


/*
Array-specific prototype method

Only arrays can access this method
because it is added to Array.prototype
*/
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


/*
=================================================
Prototype Access
=================================================
*/

// heroPower.hitesh()
// ✅ Works
// because heroPower is an object


// myHeros.hitesh()
// ✅ Works
// Arrays inherit from Object too

/*
Prototype chain:

myHeros
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null
*/


// myHeros.heyHitesh()
// ✅ Works
// because myHeros is an array


// heroPower.heyHitesh()
// ❌ Error
// because heroPower is object,
// not an array

/*
heroPower prototype chain:

heroPower
   ↓
Object.prototype
   ↓
null

No Array.prototype in chain
*/



/*
=================================================
Inheritance Example
=================================================
*/

// Parent object
const User = {
    name: "chai",
    email: "chai@google.com"
}


// Child object
const Teacher = {
    makeVideo: true
}


// Another object
const TeachingSupport = {
    isAvailable: false
}


// Child inheriting from TeachingSupport
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    // old way of inheritance
    __proto__: TeachingSupport
}


/*
Teacher inherits from User

Teacher can now access:
- name
- email
*/
Teacher.__proto__ = User


/*
Modern syntax for inheritance

TeachingSupport inherits from Teacher

Chain becomes:

TeachingSupport
      ↓
Teacher
      ↓
User
      ↓
Object.prototype
      ↓
null
*/
Object.setPrototypeOf(TeachingSupport, Teacher)



/*
=================================================
String Prototype Example
=================================================
*/

let anotherUsername = "ChaiAurCode     "


// Adding custom method to String prototype

// Now every string gets access to trueLength()
String.prototype.trueLength = function(){

    // 'this' refers to current string object

    console.log(`${this}`);

    // trim() removes extra spaces
    // length gives actual length
    console.log(`True length is: ${this.trim().length}`);
}


/*
Calling custom string method
*/

// Extra spaces removed
anotherUsername.trueLength()


// String literal can also access prototype methods
"hitesh".trueLength()


"iceTea".trueLength()



/*
=================================================
OUTPUT
=================================================

ChaiAurCode
True length is: 14

hitesh
True length is: 6

iceTea
True length is: 6
*/



/*
=================================================
Prototype Chain Visualization
=================================================

"hitesh"
   ↓
String.prototype
   ↓
Object.prototype
   ↓
null


myHeros
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null


heroPower
   ↓
Object.prototype
   ↓
null
*/



/*
=================================================
IMPORTANT INTERVIEW NOTES
=================================================

1. Everything in JavaScript is Object
   (except primitive values internally)

2. Arrays inherit from Object

3. Functions are also Objects

4. Prototype allows inheritance

5. Avoid modifying native prototypes
   in real projects because:

   - Can create bugs
   - Causes conflicts
   - Considered bad practice

Example:

Object.prototype.xyz = function(){}

This affects EVERY object globally.
This is called Prototype Pollution.
*/