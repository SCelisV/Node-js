const http = require('http')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    fs.unlink('mynewfile3.txt', (err) => { // method deletes the specified file
        try{
            console.log('try: ' + 'File deleted!!');
        } catch (err) {
            console.log('catch: ' + 'Error!');
        }
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_readfile_deleteFile.js  
// 2. http://localhost:8080 
// 3. en consola aparecerá:
    // try: File deleted!
// 4. Se ha eliminado el fichero mynewfile3.txt

