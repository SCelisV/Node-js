// include http module in the file
const http = require('http');
 
// create a server listening on 8087
http.createServer(function (req, res) {
    // write the response and send it to the client
    res.writeHead(200, {
        'Content-Type': 'text/html'
    } // Write a Header to the cliente con el tipo de contenido a public text/html
    ); 
    res.write('<h1>Node.js says hello!</h1>');  //write a response to the client
    res.end(); //end the response
}).listen(8087); //the server object listens on port 8087


// to execute
// 1. from terminal write: node node-js-example.js
// 2. open chrome on => http://localhost:8087/ 