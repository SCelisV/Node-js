// process.argv is the array that contains command line arguments
// print all arguments using forEach
process.argv.forEach((val, index) => {

    console.log(`${index}: ${val}`)

});
  
// to execute: 1. ejecuto el file without arguments => imprime los argumentos que trae el array process.argv

// soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node command-line-args-example.js
// 0: /usr/local/bin/node
// 1: /Users/soniacelis/SCProjects/0_SCProjects_github.com_SCelisV/node-js/myTutorial00_nodejs/command-line-args-example.js

// to execute: 2. ejecuto el file with arguments => imprime los argumentos que trae el array process.argv más los argumentos que le haya pasado

// soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node command-line-args-example.js argument_one argument_two 3 4 five
// 0: /usr/local/bin/node
// 1: /Users/soniacelis/SCProjects/0_SCProjects_github.com_SCelisV/node-js/myTutorial00_nodejs/command-line-args-example.js
// 2: argument_one
// 3: argument_two
// 4: 3
// 5: 4
// 6: five
// soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % 