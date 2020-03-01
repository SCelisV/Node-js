const http = require('http');

//create a server object:
http.createServer( (req, res) => { // request from the client, response

res.writeHead(200, {'Content-Type': 'text/html'});  // Add an HTTP Header with the correct content type
// The first argument of the res.writeHead() method is the status code, 200 means that all is OK, 
// the second argument is an object containing the response headers.
res.write('Hello World!'); //write a response to the client
res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_http.js   
// 2. http://localhost:8080/

// other way

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });