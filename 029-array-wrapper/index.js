/*

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

*/

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.array = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.array.reduce((sum, num)=>{
        return sum + num;
    }, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.array.join(",")}]`;
}

/*

How to solve:-

1. First we accept the array of integers, in the class 'ArrayWrapper' using 'this.array = nums', which will store the provided array 'nums', in the instance's property array. This allows other methods in the class to access the array.

2. Then we use reduce() method in 'valueOf' method to return the sum of all the numbers in the array. This sum is returned when the + operator is used with 'ArrayWrapper' instances. JavaScript will call the valueOf method on both instances to convert them into numbers.

3. Then we use '[${this.array.join(",")}]' in the 'toString' method, to convert the array to a string with elements separated by commas and surrounded by brackets. This string is returned when the 'ArrayWrapper' instance is converted to a string.

*/
