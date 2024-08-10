/*

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

*/ 

 
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args)
    let timer = setInterval(() => fn(...args), t)
    return () => clearTimeout(timer)
};


/*

How to solve:-

1. Here we use setInterval to call the function 'fn' after time 't' milliseconds till we use clearinterval() to stop the function from running.

2. We call 'fn(...args)' immediately with the arguments args.

3. We use 'setInterval' to set up an interval that repeatedly calls 'fn' with args every 't' milliseconds. The interval ID is stored in timer.

4. The return function returns a cancel function that clears the interval using 'clearInterval(timer)'. This stops the repeated execution of 'fn'.

*/
