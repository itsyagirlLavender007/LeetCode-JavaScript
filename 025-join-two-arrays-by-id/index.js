/*

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

*/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};

    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = { ...arr1[i] };
    }

    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            Object.assign(result[arr2[i].id], arr2[i]);
        } else {
            result[arr2[i].id] = { ...arr2[i] };
        }
    }

    return Object.values(result).sort((a, b) => a.id - b.id);
};


/*

How to solve:-

1. We create an empty object 'result' to store merged objects, using the id as the key.

2. We use a 'for loop' to iterate through 'arr1'. For each object, use its 'id' as a key in the 'result' object. Assign a copy of the object '({ ...arr1[i] })' to 'result[arr1[i].id]'. This creates a shallow copy of the object to avoid directly modifying the original object.

3. Similarly we iterate through 'arr2'. For each object, check if 'result' already has an entry with the same id using '(result[arr2[i].id])'. If it does then merge properties from 'arr2[i]' into the existing object using 'Object.assign()'. This updates the object in 'result' with properties from 'arr2[i]', allowing properties in 'arr2' to override those in 'arr1'. If it doesn’t then add the object from 'arr2' to 'result' with its 'id' as the key, using '{ ...arr2[i] }' to create a copy.

4. 'Object.values(result)' converts the result object into an array of its values (the merged objects). '.sort((a, b) => a.id - b.id)' sorts this array in ascending order by id. After this we return it.

*/
