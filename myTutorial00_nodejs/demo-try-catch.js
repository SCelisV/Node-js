
const fs = require('fs');
 
try{
    // file not presenet
    const data = fs.readFileSync('sample.html');
} catch (err){
    console.log(err);
}
 
console.log("Continuing with other statements..");


// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo-try-catch.js

    // se imprime por consola:

    //     Error: ENOENT: no such file or directory, open 'sample.html'
    //     at Object.openSync (fs.js:440:3)
    //     at Object.readFileSync (fs.js:342:35)
    //     at Object.<anonymous> (/Users/soniacelis/SCProjects/0_SCProjects_github.com_SCelisV/node-js/myTutorial00_nodejs/demo-try-catch.js:6:21)
    //     at Module._compile (internal/modules/cjs/loader.js:955:30)
    //     at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)
    //     at Module.load (internal/modules/cjs/loader.js:811:32)
    //     at Function.Module._load (internal/modules/cjs/loader.js:723:14)
    //     at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)
    //     at internal/main/run_main_module.js:17:11 {
    //   errno: -2,
    //   syscall: 'open',
    //   code: 'ENOENT',
    //   path: 'sample.html'
    // }


    // Continuing with other statements.. 