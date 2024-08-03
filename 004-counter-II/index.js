/*

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

-> increment() increases the current value by 1 and then returns it.
-> decrement() reduces the current value by 1 and then returns it.
-> reset() sets the current value to init and then returns it.

*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count; 
        },
        reset: function(){
            count = init;
            return count;
        }
    }
};

const counter = createCounter(5)
counter.increment();
counter.reset();
counter.decrement();


/*

How to solve:-

Think of it as a follow up on 002-counter

1. Similar to the previous one we are going to use Js objects to solve this one.

2. This time we have to use another variable aside from 'init', because we have to reset the value after increment and decrement to this 'init' value.

3. First we will create a variable 'count' that will equal to the 'init' variable and copy the value of 'init' i.e if 'init = 5' then after 'var count = init', the count will hold the value 5. 

4. Create three functions-> increment(), reset(), decrement():-

4a. In increment() function we will increase the count value by 1 using 'count++' and return it.
4b. In decrement() function we will decrease the count value by 1 using 'count--' and return it.
4c. In reset() function we will reset the value of count to the initial value that was passed at the very beginning i.e 5 by just writing 'count = init' and return it.

5. Call the function using another variable counter just like we did in the 002-counter problem.

*/
