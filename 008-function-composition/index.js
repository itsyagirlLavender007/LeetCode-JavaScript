/*

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function(functions) {    
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);   
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


/*

How to solve:-

1. Function composition is about chaining multiple functions together so that the output of one function becomes the input for the next, in a specified order.

Note 1: Take a look at the provided example:

const fn = compose([x => x + 1, x => 2 * x])
fn(4)

Note 2: 'compose' takes an array of functions and creates a new function that applies these functions in sequence, from last to first.
The composition of these two functions means the new function will first apply x => 2 * x, then apply x => x + 1 to the result.

2. The return function takes an argument x and applies all functions in the array 'functions' to x, starting from the rightmost function using reduceRight since we want to apply the functions from right to left [from last function to the first function].

3. So it starts with x and applies each function from the end of the functions array to the beginning. The result of each function is used as the input for the next function to the left.

Note 3: Understanding the parameters of reduceRight and the logic applied-

- Callback Function: (acc, fn) => fn(acc)

acc: This is the accumulator that holds the intermediate results. Initially, it’s set to x (the second argument of reduceRight).
fn: This is the current function from the array being processed.

-Inside the callback function:

fn(acc) applies the current function fn to the accumulated value acc.
The result of fn(acc) becomes the new value of acc for the next iteration.

x: This is the initial value passed to reduceRight. It is the starting point of the accumulation process.

Note 4: In easy way in the 'functions.reduceRight((acc, fn) => fn(acc), x);' first the 'acc' will hold the initial value that is 'x' after that the 'fn' function will be applied on the 'acc'. After this the 'acc' will hold the result of 'fn' as it's current value and the process will continue.

If x = 4, the acc = 4 and if 'const fn = x => x * 2' which is fn in short then the answer will be 8 and then this will be the value of acc and then again if the next fn is 'const fn = x => x + 1' then the acc will become 9 for the new round and we will apply the next fn on this till the array of functions is done.

*/