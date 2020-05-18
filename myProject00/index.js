const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('Total mem: ', os.totalmem(), ' bytes');

const fs = require("fs");

fs.writeFile('./texto.txt', 'linea uno', (err) => {
    if (err){
        console.log(err);
    }
    console.log('Archivo creado');
});
console.log('antes de el core de babel');

fs.readFile('./texto.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
require("babel-core/register");
require("dotenv").config();



exports = module.exports = require("./src");


