// test del modulo fs ->  The os module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html
const fs = require('fs');

// crear un fichero, es una tarea del sistema operativo
// fs.writeFile(file, data[, options], callback)
// nombre, contenido del fichero, callback-funcion que se ejecuta cuando termina de crear el fichero.
// código asincrono, mientras termina esto... entonces puede seguir ejecutando el código - "delegar"
fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if(err){
        console.log(err);
    }
    console.log("Archivo creado")
});
// se ejecuta esta línea incluso antes de que termine de crear el fichero
console.log("última líena de código");

// read a fichero
fs.readFile('./texto.txt', function(err, data) {
    if (err){
        console.log(err);
    }
    // console.log(data); -> <Buffer 6c 69 6e 65 61 20 75 6e 6f> -> formato máquina
    console.log(data.toString()); // convierte los datos a string
});




// ejemplo 


// código bloqueante, xq node js tiene que esperar a que termine de ejecutar este código para poder continuar con los siguiente
// const result = fs.writeFile('./texto.txt', 'linea uno', function(err)

// bloqueante
// const users = query("SELECT * FROM USERS")

// asincrono
// query('SELECT * FROM USERS', function(err, users){
//     if (err){
//         console.log("lo que sea");
//     }
//     if (users){
//         console.log("etc...")
//     }
// )}



