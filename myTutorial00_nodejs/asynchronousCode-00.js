console.time('cont'); // star timer
let cont = 0;
setTimeout(() => { // Is an asynchronous function that doesn’t block normal flow. They wait in a different queue from normal tasks, is executed after all of the normal tasks are done executing.
    console.time('async cont') // star timer
    for (let i = 0; i < 10e8; i += 1) { // is increased by 1 for 10e8 times in the code block of for-loop.
        cont += 1;
    }
    console.timeEnd('async cont'); // finish timer
    console.log('cont-async: ' + cont); // not be executed until the for-loop finishes increasing
});
console.timeEnd('cont') // finish timer
console.log('cont sync: ' + cont); // its execute in a queue execute normal tasks.