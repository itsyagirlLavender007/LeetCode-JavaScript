/*

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject("Time Limit Exceeded");
            }, t)
            fn(...args).then(resolve).catch(reject)
        })
    }
};


/*

How to solve:-

1. It's an async function so we have to use promise to handle it. 

2. We use setTimeout to check the function against the given time limit. If the function resolves within time t milliseconds then we resolve it or we reject it. We will reject the function directly in the setTimeout.

3. In order to resolve the function we will use 'fn(...args).then(resolve).catch(reject)'. Through this we handle both the cases that is resolve and reject. To resolve the function we use '.then(resolve)' and to reject we use '.catch(reject)' right after it.

Note 1: Example of an async function using Promises

const isAllowed = new Promise((resolve, reject)=>{
    const age = prompt("What is your age? \n");
    if(age >= 18){
        resolve();
    }
    else{
        reject();
    }
})

isAllowed.then(() => console.log("You are allowed")).catch(()=> console.log("You are not allowed"));

[
Output: What is your age?
18
You are allowed
]

Note 2: Another example of async function using await

function isAllowed() {
    return new Promise((resolve, reject)=>{
    const age = prompt("What is your age? \n");
    if(age >= 18){
        resolve("You are allowed");
    }
    else{
        reject("You are not allowed");
    }
})
}

async function myFunction(){
    try{
    const value = await isAllowed()
    console.log(value);
    }
    catch(error){
        console.log(error);
    }
}

myFunction()

[
Output: What is your age?
18
You are allowed
]


*/
