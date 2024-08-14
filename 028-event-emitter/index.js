/*

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

*/

class EventEmitter {

    constructor(){
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        };
    }
    
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }
        return this.events[eventName].map(callback => callback(...args));
    }
}


/*

How to solve:-

Note 1: An EventEmitter is a class that helps you manage events. You can:

- Subscribe to events: This means you set up a function (called a callback) that should be called whenever a specific event happens.

- Emit events: This means you trigger the event and run all the functions (callbacks) that were subscribed to it.

1. We create a constructor to initialize a new 'EventEmitter' instance. It sets up an empty object called 'this.events'. This object will keep track of all the events and their associated functions.

2. We check for for existing event. If 'eventName' doesn’t already have a list of functions, create one with 'this.events[eventName] = []'. Add the provided callback function to the list of functions for that event with 'this.events[eventName].push(callback)'.

3. We return an object with an unsubscribe method to remove this callback later. When unsubscribe is called it will remove the callback from the list. If no callbacks are left for this event, it deletes the event from 'this.events'.

Note 2: Explaining 'this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)'

- 'this.events[eventName]': This accesses the array of callback functions associated with the event named eventName.

- '.filter(cb => cb !== callback)': The .filter() method creates a new array containing only the elements that pass a certain condition.

- Condition: 'cb => cb !== callback'

cb represents each callback function in the array. callback is the specific function that you want to remove. The condition 'cb !== callback' means that only those callback functions that are not equal to the one you want to remove will be included in the new array.

- 'this.events[eventName] = ...': After filtering, the result (an array without the specified callback function) is assigned back to 'this.events[eventName]'. This updates the list of callbacks for the event to exclude the one that was unsubscribed.

4. The emit() method triggers an event, causing all functions subscribed to that event to run. We use if condition to check are no functions for 'eventName', then return an empty array.

5. If there are functions, then for each function in the list for 'eventName', call it with the provided arguments (args), and collect the results, we do this by applying map() method on it then return an array containing the results of each callback function.


*/
