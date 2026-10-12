// ======================================================
// JavaScript Promises & Async/Await Notes
// ======================================================

// Promise = An object representing completion or failure
// of an asynchronous operation.

// Async Tasks Examples:
// - Database calls
// - API requests
// - Cryptography
// - File handling
// - Timers (setTimeout)

// Promise has 3 states:
// 1. Pending   -> Initial state
// 2. Fulfilled -> resolve() called
// 3. Rejected  -> reject() called



// ======================================================
// Creating a Promise
// ======================================================

const promiseOne = new Promise(function(resolve, reject){

    // Do an async task
    // Example: DB calls, network requests

    setTimeout(function(){

        console.log('Async task is complete');

        // Marks promise as resolved
        resolve()

    }, 1000)
})

// ======================================================
// Consuming Promise using .then()
// ======================================================

// .then() executes when promise is resolved

promiseOne.then(function(){
    console.log("Promise consumed");
})



// ======================================================
// Promise Without Storing in Variable
// ======================================================

// We can create and consume promise directly

new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("Async task 2");

        // Resolve promise
        resolve()

    }, 1000)

}).then(function(){

    console.log("Async 2 resolved");

})



// ======================================================
// Passing Data Through resolve()
// ======================================================

// resolve() can return data/object

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){

        // Sending object data
        resolve({
            username: "Chai",
            email: "chai@example.com"
        })

    }, 1000)
})

// Data received inside .then()

promiseThree.then(function(user){

    console.log(user);

})



// ======================================================
// Promise Chaining
// ======================================================

// Multiple .then() can be chained

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true

        if (!error) {

            // Promise resolved
            resolve({
                username: "hitesh",
                password: "123"
            })

        } else {

            // Promise rejected
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})

promiseFour

// First .then() gets resolved data
.then((user) => {

    console.log(user);

    // Passing username to next .then()
    return user.username
})

// Second .then() receives returned value
.then((username) => {

    console.log(username);

})

// catch() handles rejected promise
.catch(function(error){

    console.log(error);

})

// finally() always runs
// Whether promise resolved or rejected
.finally(() => console.log(
    "The promise is either resolved or rejected"
))



// ======================================================
// async / await
// ======================================================

// async makes function asynchronous
// await waits for promise completion

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true

        if (!error) {

            resolve({
                username: "javascript",
                password: "123"
            })

        } else {

            reject('ERROR: JS went wrong')
        }

    }, 1000)
})

// async function to consume promise

async function consumePromiseFive(){

    // try-catch used for error handling
    try {

        // await waits for promise response
        const response = await promiseFive

        console.log(response);

    } catch (error) {

        console.log(error);
    }
}

// Calling async function
consumePromiseFive()



// ======================================================
// Fetch API using async/await
// ======================================================

// fetch() returns a promise

// async function getAllUsers(){

//     try {

//         // API call
//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         )

//         // Convert response to JSON
//         // response.json() also returns promise
//         const data = await response.json()

//         console.log(data);

//     } catch (error) {

//         console.log("E: ", error);
//     }
// }

// Function call
// getAllUsers()



// ======================================================
// Fetch API using .then()
// ======================================================

// fetch() returns promise

fetch('https://api.github.com/users/hiteshchoudhary')

.then((response) => {

    // Convert response to JSON
    return response.json()
})

.then((data) => {

    // Final API data
    console.log(data);

})

// Handles errors
.catch((error) => console.log(error))



// ======================================================
// Promise.all()
// ======================================================

// Used to run multiple promises together

// If all promises succeed -> returns all results
// If one promise fails -> rejects immediately

// Example:

/*
Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
})
*/  