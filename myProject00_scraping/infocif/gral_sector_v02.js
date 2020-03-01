const cheerio = require('cheerio');
    // cheerioTableparser = require('cheerio-tableparser');

const request = require('request');
const fs = require('fs-extra');

// http://www.infocif.es/ranking/ventas-empresas/espana
// http://www.infocif.es/ranking/ventas-empresas/espana?pagina=2
// http://www.infocif.es/ranking/ventas-empresas/espana?pagina=675

// view-source:http://www.infocif.es/ranking/ventas-empresas/espana


// function init() {

// console.log("inicio - ");

var pag = 3;

var i = 1;

const empresas = [];

while (i <= pag) { // 

    if (i == 1) {//primera página

        new_uri = 'http://www.infocif.es/ranking/ventas-empresas/espana'
        // console.log('new_uri: ', new_uri);
        consult(new_uri); 

    } else {

        new_uri = `http://www.infocif.es/ranking/ventas-empresas/espana?pagina=${i}`
        // console.log('new_uri: ', new_uri);
        consult(new_uri); 

    }
    
    i += 1; 
    
    var long = empresas.length;

}

// console.log("fin - i: " + i + " pag - pag: " + pag);

console.log("Successfully Written to File.");

function consult(new_uri) {

    // console.log('consult_new_uri: ', new_uri);

        request(new_uri, (err, res, body) => {

            if(!err & res.statusCode == 200){

                // console.log('statusCode 200: ', new_uri);

                let $ = cheerio.load(body);

                $('a.fs11').each(() => {

                    var webhref = $(this).attr('href');
                
                    if (webhref.indexOf('http://www.infocif.es/ficha-empresa/') != -1){
                    
                            webhref = webhref.substring(36); //(extra desde el índice 36 hasta el final, le quito: 'http://www.infocif.es/ficha-empresa/)
                    
                            empresas.push(webhref); //add un elemento al arreglo empresas
                    
                    }

                    // console.log(`${index}: ${val}`)
                    
                });

                // console.log(empresas); // imprimo el arreglo de salida
                // Escribe una línea por cada posición del arreglo en un fichero de texto
                var file = fs.createWriteStream('empresas.txt'); // fichero de salida 

                file.on('error', function(err) { 
                        console.log("WROOOOONG Written to File." +  err); 
                });

                empresas.forEach(function(escribe) { 
                    file.write(escribe + '\n'); 
                });

                file.end();

                // console.log("Successfully Written to File.");

                // escribe cada posición del arreglo separado por comas en una sóla línea en un fichero de texto
                // fs.writeFile("empresas.txt", empresas, (err) => {
                //     if (err) console.log(err);
                //     console.log("Successfully Written to File.");
                // });
                
                // var long = empresas.length;

                // console.log('empresas_long: ', long); // imprimo la longitud del arreglo

            }//fin - if(!err & res.statusCode == 200)

        });//fin - request(new_uri, (err, res, body)             

    };//fin - function consult(new_uri) {

