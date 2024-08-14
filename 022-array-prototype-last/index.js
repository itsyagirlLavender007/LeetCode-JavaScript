/*

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

*/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length === 0){
        return -1
    }
    return this[this.length-1]
};


/*

How to solve:-

1. We simply have to return the last element of the array which can be done using 'array.length-1' since array index starts from 0.

2. We check if there are no array elements, using if condition 'if(this.length === 0)' and we use 'this' to address the 'Array'. 

3. If the condition is true then we have to 'return -1'.

4. If the condition is false then we return the last element using 'return this[this.length-1]'.

*/
