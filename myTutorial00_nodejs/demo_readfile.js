const http = require('http')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    fs.readFile('demofile1.html', (err, data) => { // method is used to read files on your computer

        res.writeHead(200, {'Content-Type': 'text/html'});  // Add an HTTP Header with the correct content type
        // The first argument of the res.writeHead() method is the status code, 200 means that all is OK, 
        // the second argument is an object containing the response headers.
        res.write(data);
        res.end(); //end the response
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_readfile.js  
// 2. http://localhost:8080 => en el navegador aparecerá: 

        // My Header
        // My paragraph.