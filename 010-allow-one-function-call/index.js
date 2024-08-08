/*

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    }
};

/*

How to solve:-

1. 'var once' is the new function that ensures that 'fn' function is passed atmost once i.e one time compulsorily. 

2. We will use another variable 'called'. First we will set it to a boolen value 'false'. Using if else we will check if the function is called or not. 

3. In the if block we will use '!called' to check if called is false. If yes then we will assign the 'true' value to 'called' to ensure fn will not be executed again and return the function with arguments similar to fn by using 'return fn(...args)'. 

4. We will use 'return undefined' to return undefined every subseqent time the entire function is called. 

 */
