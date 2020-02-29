const http = require('http')
const url = require('url')

//create a server object:
http.createServer( (req, res) => { // request from the client, response

res.writeHead(200, {'Content-Type': 'text/html'});  // Add an HTTP Header with the correct content type
// The first argument of the res.writeHead() method is the status code, 200 means that all is OK, 
// the second argument is an object containing the response headers.
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_querystring.js   
// 2. http://localhost:8080/?year=2020&month=Feb => en el navegador aparecerá: 2020 Feb