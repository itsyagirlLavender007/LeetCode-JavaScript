/*

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis); 
    });
}

/*

How to solve:-

Note 1: Look at '012-two-promise' to understand the Promise concept

Note 2: async Keyword:
The function is declared with the async keyword, which means it automatically returns a Promise. This allows you to use the await keyword inside the function if needed.

1. We create a new promise. A Promise constructor takes a function with two arguments: resolve and reject. In this case, only resolve is used because we don't need to handle any errors.

2. We use setTimeout in this. It is a JavaScript function that executes a provided function (resolve in this case) after a specified delay (millis in milliseconds).

3. setTimeout(resolve, millis) means that after millis milliseconds, the resolve function will be called. This completes the Promise, making it resolved.

*/