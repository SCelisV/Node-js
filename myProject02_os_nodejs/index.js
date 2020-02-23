// test del modulo os ->  The os module provides operating system-related utility methods and properties
// https://nodejs.org/dist/latest-v12.x/docs/api/os.html
const os = require('os');

console.log(os.platform());

console.log(os.release());

console.log('free mem: ', os.freemem(), 'bytes')

console.log('total mem: ', os.totalmem(), 'bytes')

// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html