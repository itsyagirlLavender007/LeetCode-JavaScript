/*

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

*/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
    if(obj === null){
        return obj
    }

    if(typeof obj !== "object"){
        return obj
    }

    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted = {}
    for(const key in obj){
        let value = compactObject(obj[key])
        if(value){
            compacted[key] = value
        }
    }

    return compacted
};

/*

How to solve:-

1. First we check if the input 'obj' is null and if the given 'obj' is of type object since the falsy value only applies to object. 

2. If the input is an array then we use 'obj.filter(Boolean)' which filters out falsy values (false, 0, "", null, undefined, and NaN). The '.map(compactObject)' recursively applies 'compactObject' to each item in the array, ensuring nested arrays are also compacted.

3. If the input is an object then first we create a new object 'compacted' that will store the truthy values after filtering the input of falsy values.

4. We use 'for in' to iterate over the object with the help of its key. We create another variable 'value' that now holds the compacted version of obj[key], which could be a cleaned-up object, array, or a primitive value.

5. After compacting we check if the 'value' is truthy or not. If it is then we add it to 'compacted' object with corresponding 'key'. 

6. After this we return the 'compacted' object using 'return compacted'.

*/
