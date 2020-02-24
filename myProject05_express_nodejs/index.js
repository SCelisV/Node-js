// test del modulo  express ->  http://expressjs.com/en/starter/basic-routing.html

// framework de nodejs modulo para crear servidores
const express = require ('express');
const colors = require('colors');

// ejecuto express y creo un servidor y lo guardo en una constante llamada server
const server =  express();

server.get('/', (req, res) => {
    res.send('<h1>Hola mundo - con express y nodejs</h1>');
    res.end();
})

// le digo que escuche en el puerto 3000 y que envie un mensaje por consola a traves de una función "flecha", 
server.listen(3001)