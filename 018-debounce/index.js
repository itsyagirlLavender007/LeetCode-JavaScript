/*

Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

Check the screenshot image

The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

Please solve it without using lodash's _.debounce() function.

*/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(()=>fn(...args), t);
    }
};


/*

How to solve:-

1. In simple words we don't want to call the function or api over and over again, instead we will only focus on the recent call of the function or api and return/execute result accordingly.

2. We will create a 'timer' variable outside of the return function so it's initialed only once when the function is called and not over and over again every time the return function is called. 

3. We will use 'setTimeout()' so that the function 'fn(...args)' is executed after the given time 't' and store it in 'timer'.

4. We want to stop all the functions are called before the given time 't' so we will use 'clearTimeout(timer)'.

*/
