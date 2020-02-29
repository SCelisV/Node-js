
const http = require('http');
const dt = require('./myfirstmodule'); // the module is located in the same folder

http.createServer((req, res) => { //function (req, res)
    res.writeHead(200, {'Content-Type' : 'text/html'}); // write a response to the client
    res.write("La fecha y hora actual es: " + dt.myDateTime())
    res.end(); //end the response
}).listen(8080);

// to execute
// 1. from terminal write: demo_module.js
// 2. open chrome on => http://localhost:8080/ 