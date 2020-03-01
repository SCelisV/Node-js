console.time('cont');
let cont = 0;
for (let i = 0; i < 10e8; i += 1) { //is increased by 1 for 10e8 times in the code block of for-loop.
    cont += 1;
}
console.timeEnd('cont');
console.log('cont: ' + cont); //not be executed until the for-loop finishes increasing