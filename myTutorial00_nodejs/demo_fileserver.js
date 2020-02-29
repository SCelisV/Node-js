const http = require('http')
const url = require('url')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response

    const q = url.parse(req.url, true) // The parse method returns an object containing request.url properties
    const filename = "." + q.pathname; 

    
    fs.readFile(filename, (err, data) => { // method is used to read files on your computer
        try{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        } catch (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end("404 Not Found")
        }
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_fileserver.js
// 2. http://localhost:8080/summer.html
// 3. en el navegador aparecerá:
    // Summer
    // I love the sun!

// 4. http://localhost:8080/winter.html
// 3. en el navegador aparecerá:
    // Winter
    // I love the snow!

