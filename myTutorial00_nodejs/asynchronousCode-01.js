console.time('cont'); // star timer
let cont = 0;
setTimeout(() => { // Is an asynchronous function that doesn’t block normal flow. They wait in a different queue from normal tasks, is executed after all of the normal tasks are done executing.
    console.time('async cont-01') // star timer
    for (let i = 0; i < 10e8; i += 1) { // is increased by 1 for 10e8 times in the code block of for-loop.
        cont += 1;
    }
    console.timeEnd('async cont-01'); // finish timer
    console.log('cont-async-01: ' + cont); // not be executed until the for-loop finishes increasing
});
setTimeout(() => { // Is an asynchronous function that doesn’t block normal flow. 
    console.time('async cont-02') // star timer
    console.timeEnd('async cont-02'); // finish timer
    console.log('cont-async-02: ' + cont); // Its execute when finish first setTimeout(). Because JavaScript is a single-threaded. Asynchronous functions are in a different task queue, but they are still following the single-threaded rule.
});
console.timeEnd('cont') // finish timer
console.log('cont sync: ' + cont); // its execute in a queue execute normal tasks.