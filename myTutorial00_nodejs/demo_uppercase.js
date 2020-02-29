const http = require('http')
const uc = require('upper-case')

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    

        try{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(uc.upperCase('hello world'))                  // upperCase("string"); //=> "STRING"
            console.log('try: ' + 'convert lower case to upper case!');
        } catch (err) {
            console.log('catch: ' + 'Error!');
        }

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_uppercase.js
// 2. http://localhost:8080 
// 3. en chrome aparecerá:
    // HELLO WORLD
