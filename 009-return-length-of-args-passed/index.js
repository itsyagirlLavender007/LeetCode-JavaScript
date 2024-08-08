/*

Write a function argumentsLength that returns the count of arguments passed to it.

*/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/*

How to solve:

1. Probably the easiest one as we only have to return the length of the arguments passed. We simply used the length property on it using 'args.length' and return it. 

Note 1: Let's look at an example to understand in a better way

function name(...args){
    return args.length; 
}

console.log(name(1, 2, 3));

//Output: 3

*/