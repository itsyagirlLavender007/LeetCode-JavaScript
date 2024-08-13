/*

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

*/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        return obj.length === 0
    }
    else{
        let arr = Object.keys(obj)
        return arr.length === 0
    }
};

/*

How to solve:-

1. Basically we have to check if have an empty array which is represented by '[]' or object which is represented by '{}'.

2. To check for array we will use if else with if holding the condition 'Array.isArray(obj)' which will help in determining if the object 'obj' is an array and if it is then we check the length using 'obj.length' and check if it's 0 then return it.

3. For object we check the key in object using 'Object.keys(obj)' which will retrieve the keys of the objects. We create a 'arr' array to store the keys and similar to array we check the length using 'arr.length' and if it's equal to 0 then return it.


*/
