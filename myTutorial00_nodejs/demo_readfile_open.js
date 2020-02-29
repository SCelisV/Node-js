const http = require('http')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    fs.open('mynewfile2.txt', 'a', (err) => { // method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
                                              // If the file does not exist, an empty file is created:
        try{
            console.log('try: ' + 'Saved!');
        } catch (err) {
            console.log('catch: ' + 'Error!');
        }
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_readfile_open.js  
// 2. http://localhost:8080 
// 3. en consola aparecerá:
    // try: Saved!
// 4. Se ha creado el fichero mynewfile2.txt de escritura

