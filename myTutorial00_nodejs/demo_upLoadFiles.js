
const http = require('http') 
const formidable = require('formidable') //upload files
const fs = require('fs') // file system

//create a server object:
http.createServer( (req, res) => { // request from the client, response
    
    if (req.url == '/fileupload') { //
        const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => { // to parse the uploaded file once it llega the server.
        const oldpath = files.filetoupload.path;
        const newpath = '/Users/soniacelis/' + files.filetoupload.name;

        fs.rename(oldpath, newpath, (err) => { // renombra el fichero temporal al lugar elegido
            if (err) throw err;

    res.write('File uploaded and moved!');
    res.end();

        });

    });

    } else {

        res.writeHead(200, {'Content-Type': 'text/html'});  // Add an HTTP Header with the correct content type
        // The first argument of the res.writeHead() method is the status code, 200 means that all is OK, 
        // the second argument is an object containing the response headers.
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
            return res.end(); //return end the response
    }

}).listen(8080); //the server object listens on port 8080

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_upLoadFiles.js
// 2. http://localhost:8080 => en el navegador aparecerá: 

// El formulario que te permite cargar el fichero, 

// Choose file --> selecciona el fichero
// Submit --> se ejecuta y 

// print el mensaje: File uploaded and moved!

// -- Procedimiento 

// 1. Create an Upload Form: Now you are ready to make a web page in Node.js that lets the user upload files to your computer:
// 2. Parse the upload File: Include the Formidable module to be able to parse the uploaded file once it reaches the server.
// When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.
// 3. Save the file: When a file is successfully uploaded to the server, it is placed on a temporary folder.
// The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.
// To move the file to the folder of your choice, use the File System module, and rename the file.