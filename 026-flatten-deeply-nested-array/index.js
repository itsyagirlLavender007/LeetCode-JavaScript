/*

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

*/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0){
        return arr.slice()
    }
    let flatarr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatarr.push(...flat(arr[i], n - 1));
        } else {
            flatarr.push(arr[i]);
        }
    }
    
    return flatarr;
};

/*

How to solve:-

1. We have to get the subarrays out and merge them into our regular array depending on the depth of n. The base depth is 0 which are our regular array. [1,2,3,[4,5]] Here [4,5] are subarrays with depth n=1. We flatten the array by getting them out of that nesting. Depending on the depth of each subarray we perform we do this.

2. We check the base case which is if the depth is 0 then we just slice the array using 'arr.slice()'. This means no flattening is done; the array remains as it is.

3. We create an array 'flatarr' to store the flatened array. 

4. We have to iterate through the array. If the element is an array '(Array.isArray(arr[i]))', recursively flatten it with depth 'n - 1'. Use the spread operator (...) to merge the results into 'flatarr'. 

5. When we first call 'flat(arr, n)', the function processes each element of 'arr'. If an element is an array, the function makes a recursive call to itself to flatten that inner array.

6. In 'flat(arr[i], n - 1)', the 'arr[i]' is the inner array (or sub-array) that needs to be flattened. 'n - 1' is used to decrease the depth by 1 because we are going one level deeper into the nested structure.

7. The recursion continues until 'n' reaches 0. At this point, 'arr' is no longer flattened, and the function returns the array as is, with no further processing.

8. If the element is not an array, add it directly to 'flatarr'.

9. After this we return the flatened array using 'return flatarr'.

*/
