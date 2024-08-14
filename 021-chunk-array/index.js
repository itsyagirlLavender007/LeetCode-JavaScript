/*

Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    
    return result;
};



/*

How to solve:-

1. Consider an array, arr = [1,2,3,4,5,6] and if the chunk size is 2 then the array will become arr= [[1,2],[3,4],[5,6]] this is a chunked array. If the size was 2 and we have only 5 array elements then the last subarray would only contain 1 element.

2. We create an empty array 'result' that will hold the chunked array.

3. Using a 'for loop' we will iterate through the original array and we will create a variable 'chunk' that will apply the slice() method on the given array 'arr'. 

4. The slice(start,end) method takes two parameters that is start and end so we will use this to cut our array according to the chunk size. 

5. 'arr.slice(i, i + size)', in this 'i' will be the array at 'ith' index and then 'i + size' will add the index of our array at 'ith' position with the 'size' so that we can cut the array from that 'ith' position to the 'size' that is given.

Note 1: Example 

let chunk = arr.slice(i, i + size);
console.log(chunk);

Output:

[ 1, 2 ]
[ 3, 4 ]
[ 5 ]

6. After this we will push the 'chunk' into the array 'result' with every iteration.

7. We will return the 'result' outside of the 'for loop'.


*/
