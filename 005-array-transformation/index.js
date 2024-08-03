/*

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */



var map = function(arr, fn) {
    let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i));
        }
        return result;
};

/*

How to solve:-

1. Can solve this easily by just returning 'return arr.map(fn)' where we are applying the fn function i.e. fn(arr[i],i) to each and every array present in arr and we use map() method for that. But since they've asked not to use this directly we have to use a different method to solve this.

Note 1: The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. 
Note 2: arr[i] -> array at ith index. i -> index of the array.
Note 3: The function fn is already declared and we are just calling it during the execution. 

2. map() method creates a completely new set of array. So we are going to use a new array for this one. The array will hold the newer values after the function is applied on the already present array 'arr'.

3. We create an array called 'result'. Then we use for loop to iterate over the array 'arr' and then apply the function 'fn' on it and push it in the 'result' array with every iteration. To push an array we use the push() method.

Note 4: Example of pushing an array:- 
let arr = [];
for (let i = 1; i < 11; i++){
    arr.push(i);
}
console.log(arr); 

The output to this will be [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]. If you want to get individual value then iterate again over the new array 'arr' or use square brackets like 'arr[0]' will give the value 1 at the zero index. Array index starts with 0.

Note 5: You can also use the following 'for in' statement to iterate over 'arr': - 

for (let i in arr) { 
    result.push(fn(arr[i], Number(i))) 
    } 

Be careful with this method because arrays are also objects in javascript as they are not primitive[hold single values]. So the second parameter which is 'i' will be expecting string, because every property-value pair of an object is treated as a string. In order to get an integer we have to do type conversion with the help of 'Number'.

4. Since we are only calling the function fn, all we have to do is give it the parameters that are already defined in the question i.e. fn(arr[i], i) and then we apply the push() method on the empty array 'result'. 

5. After the entire array is iterated over we return the 'result' array outside of the for loop.

 */
