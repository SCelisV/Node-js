// REVISAR LA WEB - OJO

// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html





// synchrono

//     const fs = require('fs');

// try {
//     if(fs.existsSync('file.txt')) {
//         console.log("The file exists.");
//     } else {
//         console.log('The file does not exist.');
//     }
// } catch (err) {
//     console.error(err);
// }

// synchrono without open

// const fs = require('fs');

// try {
//     fs.accessSync('file.txt', fs.constants.F_OK);

//     console.log("The file exists.");
// } catch (err) {
//     console.error(err);
// }