/*

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
        return init;
    }
    else{
        let result = init;
        for(let i = 0;i<nums.length;i++){
            result = fn(result, nums[i]);
        }
        return result;
    }
};


/*

How to solve:-

1. Can solve this easily by just returning 'return nums.reduce(fn,init);'.

2. The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result.

Note 1:- Syntax for reduce() -
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

- function(): The callback function that is applied to each element of the array.
- total: The accumulator, which accumulates the results of the callback function.
- currentValue: The current element being processed in the array.
- currentIndex (optional): The index of the current element being processed.
arr (optional): The array reduce was called upon.
- initialValue (optional): The initial value to use as the first argument to the first call of the callback function. If not provided, the first element of the array is used as the total, and iteration starts with the second element.

Note 2:- Example of reduce() -

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce(function(total, currentValue, currentIndex, arr) {
    console.log(`Index: ${currentIndex}, Array: ${arr}`);
    return total + currentValue;
}, 0);

console.log(`Total = ${result}`);

Output:- 
Index: 0, Array: 1,2,3,4,5
Index: 1, Array: 1,2,3,4,5
Index: 2, Array: 1,2,3,4,5
Index: 3, Array: 1,2,3,4,5
Index: 4, Array: 1,2,3,4,5
Total = 15

3. If the length of the array nums is 0 then we've to return the init value, for this we will use if else and with the if statement check if the length is 0 using 'nums.length === 0'. If it is then we return the init value, else we continue to the else block.

4. In the else block we create a variable result that will first store the init value then we use for loop to loop over the entire array nums. During each iteration the callback function will return the updated (result, nums[i]) at that point in the loop and store it in result variable we created before. The 'result' in (result, nums[i]) will hold the value of previous result of the callback function and nums[i] will give us the array at the ith position. And after the entire array is processed we return the 'result' outside of the for loop.

*/