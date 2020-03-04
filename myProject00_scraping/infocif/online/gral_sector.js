const cheerio = require('cheerio');
    // cheerioTableparser = require('cheerio-tableparser');

const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('infocif.csv'); // fichero de salida archivo y add data a medida que lo voy ejecutando


// http://www.infocif.es/ranking/ventas-empresas/espana
// http://www.infocif.es/ranking/ventas-empresas/espana?pagina=2
// http://www.infocif.es/ranking/ventas-empresas/espana?pagina=675

// view-source:http://www.infocif.es/ranking/ventas-empresas/espana

function init() {

    var pag = 3;

    var i = 1;

    const empresas = [];

    while (i <= pag) {

        if (i === 1) {//primera página

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

    console.log('i: ' + i);

    return new Promise(resolve => {
        // setTimeout(() => {
        // resolve('resolved');
        // }, 2000);
    });
}

// var pag = 675;
// console.log('pag: ' + pag);

//se ejecuta hasta que termine

function consult(new_uri) {

    // console.log('consult_new_uri: ', new_uri);

    // var options = {
    //     uri: new_uri,
    //     transform: function (body) {
    //         return cheerio.load(body);
    //     }
    // };

    // request(options)

    // .then(function ($) {
        
    //     console.log(body); 
        
        // ok - analizamos la table id="tablaranking"
        // const webtableRanking = $('table');
        // console.log(webtableRanking.html());
        
        // ok - analizamos el head de la table id="tablaranking"
        // const webheadtableRanking = $('table thead');
        // console.log(webheadtableRanking.html());
        
        
        // // const empresas = [];
        
        // $('a.fs11').each(function (){
            //     var webhref = $(this).attr('href');
            
            //     if (webhref.indexOf('http://www.infocif.es/ficha-empresa/') != -1){
                
                //         webhref = webhref.substring(36); //(extra desde el índice 36 hasta el final, le quito: 'http://www.infocif.es/ficha-empresa/)
                
                //         empresas.push(webhref); //add un elemento al arreglo empresas
                
                //     }
                
                // });
                
                // console.log(empresas); // imprimo el arreglo de salida
                
                // var long = empresas.length;
                // console.log('empresas_long: ', long); // imprimo la longitud del arreglo
                

            })
                .catch(function (err) {
                    console.log('err: ', err);
                });
                

}

// arranca el script
init();
