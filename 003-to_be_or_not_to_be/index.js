/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

-> toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
-> notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

   
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expectedVal) {
            if (val !== expectedVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

expect(5).toBe(5);

/*
How to solve:-

1. So we are simply trying to create a function that will catch errors if they appear during testing using some conditionals.

2. We are to return two functions: -

2a. toBe function which will compare the user-given value 'val' with the value that the function has 'expectedVal'. If they are similar then return 'true' and if not then throw error that says 'Not Equal'. The second part about throwing the error can be done using 'throw new Error("Not Equal")'. 
2b. Similar to toBe the notToBe function will compare the user-given value 'val' with the 'expectedVal'. If they are not similar then it returns 'true' and if are then throws an error that says 'Equal'.

3. If you look at 'expect(5).toBe(5)' which will trigger the execution you'll understand that we've to use an object for execution. So both the functions will be created as property value pairs with a common separating these properties that are 'toBe' and 'notToBe'.

Note 1: Example of an object in Javascript:-
var rose = {
    Family: "Rosaceae"
    ,Genus: "Rosa"
    ,Species: "There are over 300 species and thousands of cultivars of roses."
}
console.log(rose.Family);
Will return the answer -> Rosaceae

Note 2: More about 'throw new Error([message])':-

The throw new Error statement in JavaScript is used to create and throw a new instance of the Error object. This mechanism is a key part of error handling in JavaScript, allowing you to signal that an error has occurred in your code and provide a specific error message or custom error object.
About 'throw new Error([message])' -> throw: This keyword is used to throw an exception. When an exception is thrown, the current function's execution is stopped, and control is transferred to the nearest catch block in the call stack. If no catch block is found, the program will terminate. Error: The Error constructor creates an error object with a given message. This error object can then be thrown using the throw statement. message: A string describing the error. This is an optional parameter.

*/
