const http = require('http')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    fs.appendFile('mynewfile1.txt', 'Hello content!\n', (err) => {  // method appends specified content to a file. 
                                                                    // If the file does not exist, 
                                                                    // the file will be created:
        try{
            console.log('try: ' + 'Updated!');
        } catch (err) {
            console.log('catch: ' + 'Error!');
        }
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_readfile_append.js  
// 2. http://localhost:8080 
// 3. en consola aparecerá:
    // try: Updated!
// 4. Se ha creado el fichero mynewfile1.txt que contine una línea Hello content!  y un retorno de línea
