/*

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

*/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};

/*

How to solve:-

1. Since we have to sort the functions based on their results in ascending order which are going to be numbers so we a sort() method.

2. There is another sort() method sort(compareFn). 

Note 1: 

sort(compareFn) = A function that determines the order of the elements. The function is called with the following arguments:

a - The first element for comparison. Will never be undefined.

b - The second element for comparison. Will never be undefined.

(a, b) => a - b sorts numbers in ascending order

3. The comparison function '(a, b) => fn(a) - fn(b)' determines the order of a and b based on the numeric values returned by fn.

4. If 'fn(a) - fn(b)' is negative, a comes before b. If positive, b comes before a. If zero, their order remains unchanged.

*/
