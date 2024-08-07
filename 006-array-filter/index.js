/*

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
 
*/


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) 
        {
        result.push(arr[i]);
        }
    }
    return result;
};


/*

How to solve:-

1. Can solve this easily by just returning 'return arr.filter(fn)' where we are applying the fn function i.e. fn(arr[i],i) to each and every array present in arr and we use filter() method for that. But since they've asked not to use this directly we have to use a different method to solve this.

2. The filter() method creates a new array filled with elements that pass a test provided by a function. 

3. We create an array called 'result'. We use 'for' loop to iterate over the array 'arr'. The new array 'result' should only contain the values that have passed the given test 'fn(arr[i], i). We use 'if else' statements fot this. If the test is passed i.e. return a truthy value, then we push it in the 'result' array with every iteration. 

Note 1: Example of 'if else':

let value = 1;
if(value){
    console.log(value);
}

The output will be = 1

Note 2: Another example:

let age = 18;
if(age === 18){
    console.log("Have some wine!");
}
else{
    console.log("Have a candy!");
}

The output will be = Have some wine! 

If the age is reduced to 10 then the output will be = Have a candy!

4. We return the result outside of the loop.

*/
