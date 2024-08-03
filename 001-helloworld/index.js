// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
const createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    }
}

