// Function declaration
function multipleBy5(num){

    // Returns number multiplied by 5
    return num * 5
}

// In JavaScript, functions are also objects
// So we can add custom properties to functions
multipleBy5.power = 2


// Calling the function
console.log(multipleBy5(5)); 
// Output: 25


// Accessing custom property of function
console.log(multipleBy5.power); 
// Output: 2


// Every function automatically gets a prototype object
console.log(multipleBy5.prototype);

// Output:
// {} (empty object)
// because we haven't added anything to prototype yet



// Constructor function
// Used to create user objects
function createUser(username, score){

    // 'this' refers to newly created object
    // when called with 'new'
    this.username = username
    this.score = score
}


// Adding method to prototype
// This method will be shared among all objects
// instead of being recreated every time
createUser.prototype.increment = function(){

    // Increase score by 1
    this.score++
}


// Another shared method
createUser.prototype.printMe = function(){

    console.log(`price is ${this.score}`);
}


// Creating object using 'new'
const chai = new createUser("chai", 25)


// ❌ WRONG WAY (without new)
const tea = createUser("tea", 250)

/*
Problem here:

Without 'new':

1. No new object is created
2. 'this' points to global object (window/global)
3. username and score become global variables
4. tea becomes undefined

Equivalent behavior:

this.username = "tea"
this.score = 250

tea = undefined
*/

// Calling prototype method
chai.printMe()
// Output: price is 25



/*
----------------------------------------
Prototype Chain Understanding
----------------------------------------

When we do:

const chai = new createUser("chai", 25)

JavaScript internally does:

1. Create empty object

   const obj = {}

2. Link object to prototype

   obj.__proto__ = createUser.prototype

3. Call constructor

   createUser.call(obj, "chai", 25)

4. Return object

   return obj

So chai gets access to:

chai.increment()
chai.printMe()

through prototype inheritance.
*/



/*
----------------------------------------
What happens behind the scenes with 'new'
----------------------------------------

1️⃣ A new object is created
--------------------------------
const obj = {}

The 'new' keyword creates a fresh empty object.


2️⃣ Prototype gets linked
--------------------------------
obj.__proto__ = createUser.prototype

The object gets access to methods
defined on prototype.

Example:

chai.increment()
chai.printMe()


3️⃣ Constructor function executes
--------------------------------
createUser.call(obj, username, score)

'this' points to the new object.

this.username = username
this.score = score


4️⃣ Object gets returned
--------------------------------
return obj

If constructor doesn't return
its own object, JavaScript returns
the newly created object automatically.
*/



/*
IMPORTANT INTERVIEW CONCEPT:

Functions in JavaScript are:

1. Function
2. Object

That’s why this works:

multipleBy5.power = 2

Because functions can store properties.
*/