/*

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

*/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let promiseArray = Array(functions.length)
        let reducingLength = functions.length

        for(let i=0;i<functions.length;i++){
            functions[i]().
            then((result)=>{
                promiseArray[i] = result;
                reducingLength--
                if(reducingLength === 0) resolve(promiseArray)
            }).catch(reject)
        }
    })
};


/*

How to solve:-

1. We have to return a new promise so we will use 'return new Promise()' directly. We have to make sure that the given array of functions are resolved at the same time. If any of the promise gets rejected then we have to return that particular promise that got rejected.

2. We will create a variable 'promiseArray' that will store the results of the resolved functions and it's length will be similar to the length of the array of functions. We will assign that length using 'Array(functions.length)'.

3. We will create under varible 'reducingLength' that will hold the length of the array of functions.

4. We will use 'for loop' to iterate through the array of functions and after doing that we will use '.then()' with each of the function at that position which is considered as 'i' at this point, to get the result of each function at that position and store it in the 'promiseArray' array. With each execution of then we will also check the length using 'reducingLength--' to see how many functions are remaining. This way if we ever get any error then it will get caught/rejected easily.

5. If the length of 'reducingLength' becomes 0 then we can say that all the functions have been iterated over and then we resolve their results together by using 'resolve(promiseArray)'.

*/
