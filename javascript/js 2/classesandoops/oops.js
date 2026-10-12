// Creating an object using object literal syntax
const user = {
    username: "hitesh",   // property
    loginCount: 8,        // property
    signedIn: true,       // property

    // Method inside object
    getUserDetails: function(){

        // This message is commented out
        // console.log("Got user details from database");

        // 'this' refers to the current object
        // Here, this.username means user.username
        // console.log(`Username: ${this.username}`);

        // Prints the entire current object
        console.log(this);
    }
}

// Accessing object property
// console.log(user.username)

// Calling object method
// console.log(user.getUserDetails());

// In browser:
// console.log(this) → refers to window object
// In Node.js:
// console.log(this) → refers to empty object {}
// because top-level 'this' behaves differently


// Constructor Function
// Used to create multiple objects with same structure
function User(username, loginCount, isLoggedIn){

    // 'this' refers to the new object being created
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method added to every object
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // Explicit return of current object
    // Not necessary when using 'new'
    // 'new' automatically returns 'this'
    return this;
}


// Creating object using 'new' keyword

// Steps when 'new' keyword is used:
// 1. A new empty object {} is created
// 2. Constructor function is called
// 3. 'this' points to newly created object
// 4. Properties are assigned
// 5. Object is returned automatically

const userOne = new User("hitesh", 12, true);

// Creates another completely separate object
const userTwo = new User("ChaiAurCode", 11, false);


// constructor property refers to the function
// that created this object
console.log(userOne.constructor);

// Output:
// [Function: User]


// console.log(userTwo);


/*
IMPORTANT NOTE:

Without 'new' keyword:

const userThree = User("sam", 5, true)

Problem:
- 'this' will point to global object (window/global)
- values may overwrite each other
- userOne and userTwo can get unexpected behavior

That's why constructor functions are usually called with 'new'
*/