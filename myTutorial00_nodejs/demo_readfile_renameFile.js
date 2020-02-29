const http = require('http')
const fs = require('fs')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => { // method renames the specified file
        try{
            console.log('try: ' + 'File Renamed!');
        } catch (err) {
            console.log('catch: ' + 'Error!');
        }
    })

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_readfile_renameFile.js  
// 2. http://localhost:8080 
// 3. en consola aparecerá:
    // try: File Renamed!
// 4. Se ha renombrado el fichero mynewfile1.txt a myrenamedfile.txt

