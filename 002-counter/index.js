/* Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). */

 /**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n
    return function() {
        return count++;
    };
};

const counter = createCounter(10)
counter();
counter();
counter();

/*
How to solve:-

1. Make a function that first gives the passed value so in this case 10 and in the next function call it increases it by one i.e 11 and so on.
2. Simply use the [n ++] operator or use [n + 1].
3. You can also use a count variable to first store the value of n and then return the increment of the count variable which will be copied in n. 
4. Create a counter variable to call the createCounter(10) function or just use console.log(createCounter(10)).

*/
