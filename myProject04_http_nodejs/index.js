// test del modulo  http ->  are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses — the user is able to stream data.
// https://nodejs.org/dist/latest-v12.x/docs/api/http.html

const http = require('http');

// // Mientras se esta creando el servidor (request, response), web podré ejecutar código
// http.createServer(function(req, res){
//     // res.writeHead(200, {'Content-type': 'text/html'}); //escribo la cabecera, indicandole la respuesta que le estoy dando. - https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
//     // res.write('<h1>Hola mundo  </h1>');
//     // res.writeHead(200, {'Content-type': 'text/plain'}); //escribo la cabecera, indicandole la respuesta que le estoy dando. - https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
//     // res.write('Este es un simple texto');
//     res.writeHead(400, {'Content-type': 'text/plain'}); //escribo la cabecera, indicandole la respuesta que le estoy dando. - https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
//     res.write('Este es un simple texto - DEVUELVO 400');
//     res.end();
// }).listen(3000); //ejecuta el servidor en el puerto 3000 - http://localhost:3000/ Crtl+C - para cancelar el servidor

// OTRA FORMA DE ESCRIBIRLO

const handleServer = function(req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'}); //escribo la cabecera, indicandole la respuesta que le estoy dando. - https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
    res.write('Hola mundoc - DEVUELVO 200');
    res.end();
}  

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
});

// TRABAJAR CON FRAMEWORK - npm - USANDO CÓDIGO ESCRITO POR OTROS - npm install colors

const colors = require('colors');




