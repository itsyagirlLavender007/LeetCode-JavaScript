/*

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

*/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
    .then(([value1, value2]) => value1 + value2);
    };
    
/*

How to solve:-

Note 1: A promise in JavaScript is a way to handle asynchronous operations, allowing you to write cleaner and more manageable code when dealing with operations that might not complete immediately, such as fetching data from a server or reading a file.

- States of a Promise:

a. Pending: The initial state. The promise is neither fulfilled nor rejected.
b. Fulfilled: The operation completed successfully, and the promise has a result.
c. Rejected: The operation failed, and the promise has a reason for the failure.

Note 2: Creating a Promise:

You create a promise using the Promise constructor, which takes a function with two arguments: resolve and reject.

const myPromise = new Promise((resolve, reject) => {
 // Perform some asynchronous operation
    if ( operation successful ) {
        resolve('Success!'); // Resolve the promise with a result
    } else {
        reject('Error occurred'); // Reject the promise with a reason
    }
});

Note 3: Consuming a Promise:

You consume a promise using .then() for handling fulfillment and .catch() for handling rejection.

myPromise
    .then(result => {
        console.log(result); // Handle the success result
    })
    .catch(error => {
        console.error(error); // Handle the error
    });

Note 4: Promise.all():

Instead of chaining the promise you can use Promise.all(). 
This method takes an array of promises and returns a single promise that resolves when all of the input promises have resolved.

Promise.all([promise1, promise2])
    .then(results => {
        console.log(results); // Array of results from all promises
    })
    .catch(error => {
        console.error(error); // Handle any error from any of the promises
    });

1. We have to resolve two promises and return a new promise from them. When the both promises are resolved we have to return a sum of their returned values after resolving.

2. We use promise.all() to resolve the given two promises which we can consider as an array of promises. We pass both the promises here as 'promise.all([promise1, promise2])' and return the same.

3. After they've resolved we use '.then()' following the syntax of promise and pass the resolved values 'value1, value2' and return their sum using arrow function.

*/
