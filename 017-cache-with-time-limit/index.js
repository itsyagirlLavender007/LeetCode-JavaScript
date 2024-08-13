/*

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

 */


class TimeLimitedCache{
    constructor(){
        this.cache = new Map();
    }
    set(key, value, duration){

        const alreadyExists = this.cache.get(key);
        if(alreadyExists){
            clearTimeout(alreadyExists.timeoutId);
        }

        const timeoutId = setTimeout(()=>{
            this.cache.delete(key);
        },duration);
        
        this.cache.set(key, {value, timeoutId})
        return Boolean(alreadyExists)
    }
    get(key){
        if(this.cache.has(key)){
            return this.cache.get(key).value
        }
        return -1;
    }
    count(){
        return this.cache.size;
    }
}


/*

How to solve:-


1. We are given a class with three methods set(), get(), and count(). Since we are given a class we will use a 'constructor'. We are also given key-value pairs so it's better to use Map() data structure. We are going to use class based approach.

Note 1: Using Map() in Js

let myMap = new Map([
    ['name', 'Karan Aujla'],
    [true, 'Boolkey'],
    [1, 'Numberkey'],
])

console.log(myMap);

myMap.set('age', 28)
console.log(myMap);

console.log(myMap.get('name')); 
console.log(myMap.has('gender'));

myMap.delete('name');
console.log(myMap);

Note 2: In object we either have string or symbol as the key. In Map() data structure, we can have any data type. 

[Imp note: Objects can be considered a type of data structure, but the term "data structure" encompasses a wider range of organizational methods for managing data.
A data structure is a way to organize and store data so you can use it efficiently.
In programming, an object is a specific kind of data structure that stores data as pairs of keys and values.]

2. In the constructor we will create a Map() using 'this.cache = new Map()'. This will store our key-value pairs.

3. In the count() method we will return the size of the key by simply using 'return this.cache.size'. This will return the number of key-value pairs present in the cache.
 
4. In set() we have to check whether the key is expired or unexpired and what duration it will run for. Since we are given a duration we will use 'setTimeout()'. We will check the 'duration' till which the key is active and then we will delete it. We will store the 'setTimeout()' in 'timeoutId'. 

5. We will use the set() to add a key-value pair to the cache. We will take the '{value,timeoutId}' as an object to handle both of them together. Since we might have to get remove or update the old value after a certain duration we will couple them up as key will automatically expire after a certain duration of time and assign a new value to it with new time duration.

Note 3: Understanding the grouping of {value, timeoutId}

=> Example 1:- 

Part 1: Checkout Book:

<---------->

cache.set('Moby Dick', 'Herman Melville', 10000); 

Here, Moby Dick is the book (key), Herman Melville is the author (value), and 10000 milliseconds is the due date (timeoutId).
Update Checkout:

<----------->

cache.set('Moby Dick', 'Herman Melville', 20000); 

You extend the checkout period, so the system cancels the old due date (clears the old timeout) and sets a new due date.

<----------->

Part 2: Book Returned:

<----------->

If the book is returned before the due date, the library system removes the record of the due date and the book details.

<----------->

Part 3: Check Status:

<----------->

console.log(cache.get('Moby Dick')); // 'Herman Melville' if not overdue, else -1

<----------->

Part 4: Count Checked-Out Books:

<----------->

console.log(cache.count()); // Number of books currently checked out

<----------->


=> Example 2:

Imagine a cache with a key that should expire after 5 seconds:

Part 1: Initial Set:

<----------->

cache.set('key1', 'value1', 5000);

<----------->

Here, value1 and its expiration timeout (5 seconds) are stored together.

<----------->

Part 2: Updating Value:

<----------->

cache.set('key1', 'value2', 5000);

<----------->

You need to cancel the previous timeout associated with 'key1' to prevent it from deleting 'value1' after 5 seconds.
The timeoutId is used to clear the old timeout before setting a new one.

Part 3: Clear Expired Entry:

<----------->

setTimeout(() => {
    cache.delete('key1');
}, 5000);

<----------->

When the timeout is reached, the cache entry is deleted. The timeoutId stored with the value allows this deletion to be managed automatically.

<----------->


6. It is possible that the key is already present in the cache, so we have to create a condition to check the possibility. We create a variable 'alreadyExists' to check the availability of a key and use get method to fetch it.

7. If it already exists then we use 'clearTimeout(alreadyExists.timeoutId)' to ensure that old timeouts do not cause unintended deletions if the key is updated before expiration.

8. In order to return true or false at the end regarding if the key exists or not we use 'return Boolean(alreadyExists)'.

9. In the get() method we will use 'has' to check if there is a key or not. If there is no key then we use 'return -1' to return -1 as asked. If there is a key that already exists then we return its value using 'return this.cache.get(key).value'.

*/
