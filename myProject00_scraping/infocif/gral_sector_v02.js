const cheerio = require('cheerio');
    // cheerioTableparser = require('cheerio-tableparser');

const request = require('request');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('infocif.csv'); // fichero de salida archivo y add data a medida que lo voy ejecutando


// http://www.infocif.es/ranking/ventas-empresas/espana
// http://www.infocif.es/ranking/ventas-empresas/espana?pagina=2
// http://www.infocif.es/ranking/ventas-empresas/espana?pagina=675

// view-source:http://www.infocif.es/ranking/ventas-empresas/espana


// function init() {

console.log("inicio - ");
var pag = 20;

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

}

console.log("fin - i: " + i + " pag - pag: " + pag);

// }//fin - function init()

function consult(new_uri) {

    console.log('consult_new_uri: ', new_uri);

        request(new_uri, (err, res, body) => {

            if(!err & res.statusCode == 200){

                console.log('statusCode 200: ', new_uri);

                let $ = cheerio.load(body);

                $('a.fs11').each(function (){
                    var webhref = $(this).attr('href');
                
                    if (webhref.indexOf('http://www.infocif.es/ficha-empresa/') != -1){
                    
                            webhref = webhref.substring(36); //(extra desde el índice 36 hasta el final, le quito: 'http://www.infocif.es/ficha-empresa/)
                    
                            empresas.push(webhref); //add un elemento al arreglo empresas
                    
                    }
                    
                    
                });

                console.log(empresas); // imprimo el arreglo de salida
                
                var long = empresas.length;
                console.log('empresas_long: ', long); // imprimo la longitud del arreglo


            }//fin - if(!err & res.statusCode == 200)





        });//fin - request(new_uri, (err, res, body)

        return empresas;
                

};//fin - function consult(new_uri) {

