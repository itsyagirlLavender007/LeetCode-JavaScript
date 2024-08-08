/*

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    }
}

/*

How to solve:-

Note 1: A memoize function is a technique used to optimize the performance of functions by caching their results. It avoids redundant computations by storing the results of expensive function calls and reusing these results when the same inputs occur again. When a function is called with specific arguments, the result is computed and stored in a cache. If the function is called again with the same arguments, the cached result is returned instead of recomputing it.

1. Create an empty cache object. In order to check if the arguments passed are new are not we use if else. We can't directly pass the entire args so we use JSON.stringify() to convert args into a JSON string key to uniquely represent the set of arguments. This string acts as the cache key.

2. It checks if key already exists in cache. If it does, it means the result for these arguments is already computed and stored. If the result is found in the cache, it returns the cached result.

3. If key is not found in the cache, the function fn is called with the arguments '...args', and the result is stored in cache with key as its identifier. The result is then returned.
 
 */
