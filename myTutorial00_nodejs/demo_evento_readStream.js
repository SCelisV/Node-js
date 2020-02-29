
const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt'); // El objeto readStream dispara eventos al abrir y cerrar un archivo

//create a server object:

rs.on('open', function (err) { // abre el fichero './demofile.txt'
    try{
        console.log('try: ' + 'The file is open');
    } catch (err) {
        console.log('catch: ' + 'Error!');
    }   
});


// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_events_open.js
// 2. The file is open

// if el file no existe  no lo puede abrir y se lanza el siguiente error

// events.js:200
//       throw er; // Unhandled 'error' event
//       ^

// Error: ENOENT: no such file or directory, open './demofile.txt'
// Emitted 'error' event on ReadStream instance at:
//     at internal/fs/streams.js:120:12
//     at FSReqCallback.oncomplete (fs.js:146:23) {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: './demofile.txt'
// }



