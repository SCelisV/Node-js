const http = require('http')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => { // method replaces the specified file and content if it exists. 
                                                                // If the file does not exist, 
                                                                // a new file, containing the specified content, 
                                                                // will be created:
        try{
            console.log('try: ' + 'Replaced!');
        } catch (err) {
            console.log('catch: ' + 'Error!');
        }
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_readfile_writeFile.js  
// 2. http://localhost:8080 
// 3. en consola aparecerá:
    // try: Replaced!
// 4. Se ha creado el fichero mynewfile3.txt

