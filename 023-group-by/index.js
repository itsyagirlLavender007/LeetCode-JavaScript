/*

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

*/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item)=>{
        const key = fn(item)
        if(!grouped[key]){
            grouped[key] = [];
        }
        grouped[key].push(item)
        return grouped
    },{})
};


/*

How to solve:-

Note 1: Example of using lodash's _.groupBy function

const _ = require('lodash');

const items = [
    { name: 'Item1', category: 'A' },
    { name: 'Item2', category: 'B' },
    { name: 'Item3', category: 'A' },
    { name: 'Item4', category: 'C' },
    { name: 'Item5', category: 'B' }
];

const groupedByCategory = _.groupBy(items, 'category');

console.log(groupedByCategory);

1. We use reduce() method here. reduce() is used to accumulate results into a single object (grouped). The reduce() method iterates through each 'item' in the array and performs the grouping logic.

2. We create a variable 'key' that stores the result of function 'fn'. We apply function 'fn' on each 'item' to determine the group key. 

3. We use 'if (!grouped[key])' to check if the key already exists in the grouped object. If not we intialize an empty array for that key.

4. We use 'grouped[key].push(item)' to add the item to the appropriate array in the grouped object based on its key.

5. 'return grouped' returns the updated grouped object after processing each item.

6. The initial value for the reduce function is an empty object '{}'. It starts off as an empty object, and as items are processed, it gets filled with groups.

*/
