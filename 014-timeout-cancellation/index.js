/*

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timer);
};


/*

How to solve:-

1. Create a 'timer' variable that will use the 'setTimeout()' to execute function 'fn' after 't' milliseconds. '() => fn(...args)' creates an anonymous function that calls 'fn' with args after 't' milliseconds. This ensures 'fn' is called with the arguments after the specified delay.

2. The 'clearTimeout(timer)' cancels the timer if invoked before 'fn' executes. The cancellable function returns a function that, when called, will clear the timeout and prevent 'fn' from being executed.

*/