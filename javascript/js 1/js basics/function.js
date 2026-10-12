// ======================================================
// 1. FUNCTION DECLARATION
// A normal function declaration
// ======================================================

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Aditya"));



// ======================================================
// 2. FUNCTION EXPRESSION
// Function stored inside a variable
// ======================================================

const greet2 = function(name) {
    return "Hello " + name;
};

console.log(greet2("Aditya"));



// ======================================================
// 3. ARROW FUNCTION
// Short syntax for writing functions
// ======================================================

const greet3 = (name) => {
    return "Hello " + name;
};

console.log(greet3("Aditya"));



// ======================================================
// 4. FUNCTION WITH PARAMETERS
// ======================================================

function dance(v1) {
    console.log(`${v1} naach raha hai`);
}

dance("ghoda");



// ======================================================
// 5. DEFAULT PARAMETERS
// ======================================================

function add(v2 = 0, v3 = 0) {
    console.log(v2 + v3);
}

add();
add(1);
add(1, 2);



// ======================================================
// 6. RETURN KEYWORD
// ======================================================

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const addResult = addTwoNumbers(3, 5);

console.log("Result:", addResult);



// ======================================================
// 7. LOGIN USER MESSAGE
// ======================================================

function loginUserMessage(username = "sam") {

    // If empty string passed
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("aditya"));
console.log(loginUserMessage());



// ======================================================
// 8. REST PARAMETERS (...)
// Handles multiple arguments
// ======================================================

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(
    calculateCartPrice(200, 400, 500, 2000)
);



// ======================================================
// 9. REST PARAMETER EXAMPLE
// ======================================================

function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}

abcd(1, 2, 3, 4, 5, 6);



// ======================================================
// 10. OBJECTS INSIDE FUNCTION
// ======================================================

const user = {
    username: "aditya",
    price: 199
};

function handleObject(anyObject) {

    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

handleObject(user);

handleObject({
    username: "sam",
    price: 399
});



// ======================================================
// 11. ARRAYS INSIDE FUNCTION
// ======================================================

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(
    returnSecondValue(myNewArray)
);

console.log(
    returnSecondValue([200, 400, 500, 1000])
);



// ======================================================
// 12. SCOPE
// let & const are block scoped
// ======================================================

let outerA = 300;

if (true) {

    let innerA = 10;
    const b = 20;

    console.log("INNER:", innerA);
}

console.log("OUTER:", outerA);



// ======================================================
// 13. LEXICAL SCOPING
// Child can access parent variables
// ======================================================

function one() {

    const username = "aditya";

    function two() {

        const website = "youtube";

        console.log(username);
    }

    two();
}

one();



// ======================================================
// 14. BLOCK SCOPING
// ======================================================

if (true) {

    const username = "aditya";

    if (username === "aditya") {

        const website = " youtube";

        console.log(username + website);
    }
}



// ======================================================
// 15. HOISTING
// Function declaration gets hoisted
// ======================================================

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}



// ======================================================
// 16. FUNCTION EXPRESSION
// Not hoisted
// ======================================================

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));



// ======================================================
// 17. OBJECT METHODS + this KEYWORD
// ======================================================

const user2 = {

    username: "aditya",
    price: 999,

    welcomeMessage: function() {

        console.log(
            `${this.username}, welcome to website`
        );
    }
};

user2.welcomeMessage();

user2.username = "sam";

user2.welcomeMessage();



// ======================================================
// 18. this IN NORMAL FUNCTION
// ======================================================

function chai() {

    let username = "aditya";

    console.log(this);
}

chai();



// ======================================================
// 19. this IN ARROW FUNCTION
// Arrow function has no own this
// ======================================================

const chai2 = () => {

    let username = "aditya";

    console.log(this);
};

chai2();



// ======================================================
// 20. ARROW FUNCTION RETURNS
// ======================================================

// Explicit return
const sum1 = (num1, num2) => {
    return num1 + num2;
};

// Implicit return
const sum2 = (num1, num2) => num1 + num2;

// Returning object
const sum3 = () => ({
    username: "aditya"
});

console.log(sum1(3, 4));
console.log(sum2(3, 4));
console.log(sum3());



// ======================================================
// 21. FIRST CLASS FUNCTION
// Function as value
// ======================================================

function abc(val) {
    val();
}

abc(function() {
    console.log("hey");
});



// ======================================================
// 22. HIGHER ORDER FUNCTION
// Function returning another function
// ======================================================

function higherOrder() {

    return function() {
        console.log("hey");
    };
}

higherOrder()();



// ======================================================
// 23. PURE FUNCTION
// Same input -> same output
// ======================================================

function pureFunction(num) {
    return num + 1;
}

console.log(pureFunction(5));



// ======================================================
// 24. IMPURE FUNCTION
// Changes external variable
// ======================================================

let count = 12;

function impureFunction() {
    count++;
}

impureFunction();

console.log(count);



// ======================================================
// 25. CLOSURE
// Child remembers parent variable
// ======================================================

function closureExample() {

    let num = 12;

    return function() {
        console.log(num);
    };
}

const closureResult = closureExample();

closureResult();



// ======================================================
// 26. ADVANCED LEXICAL SCOPING
// ======================================================

function parentFunction() {

    let a = 12;

    function childFunction() {

        let b = 13;

        function grandChildFunction() {

            let c = 14;

            console.log(a);
            console.log(b);
            console.log(c);
        }

        grandChildFunction();
    }

    childFunction();
}

parentFunction();



// ======================================================
// 27. IIFE
// Immediately Invoked Function Expression
// ======================================================

(function chaiIIFE() {

    console.log("DB CONNECTED");

})();

((name) => {

    console.log(
        `DB CONNECTED TWO ${name}`
    );

})("aditya");



// ======================================================
// 28. BMI CALCULATOR
// ======================================================

function bmi(weight, height) {

    let result =
        weight / (height * height);

    return Math.round(result);
}

console.log(bmi(70, 1.75));



// ======================================================
// 29. DISCOUNT CALCULATOR
// Higher Order Function Example
// ======================================================

function discountCalculator(discount) {

    return function(price) {

        return (
            price -
            price * (discount / 100)
        );
    };
}

let tenPercent =
    discountCalculator(10);

let twentyPercent =
    discountCalculator(20);

console.log(tenPercent(1200));
console.log(twentyPercent(1200));



// ======================================================
// 30. IMPORTANT INTERVIEW DEFINITIONS
// ======================================================

/*

1. Function Declaration
   Normal function.

2. Function Expression
   Function stored inside variable.

3. Arrow Function
   Short syntax for functions.

4. Rest Parameters (...)
   Stores multiple values in array.

5. First Class Function
   Function treated like a value.

6. Higher Order Function
   Accepts/returns another function.

7. Closure
   Child remembers parent variable.

8. Lexical Scope
   Child accesses parent variables.

9. Hoisting
   JS moves declarations to top.

10. IIFE
    Runs immediately.

11. Pure Function
    No side effects.

12. Impure Function
    Modifies outside variable.

13. this Keyword
    Refers to current object.

*/