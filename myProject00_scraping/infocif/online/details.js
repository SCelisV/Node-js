const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra'); // importa el fs-extra package y permite que lo usemos en nuestro code.
const writeStream = fs.createWriteStream('infocif.csv'); // fichero de salida archivo y add data a medida que lo voy ejecutando


// https://www.youtube.com/watch?v=dJpSTPUVKQU&t=200s - quotes.toscrape.com
// http://www.infocif.es/ficha-empresa/NOMBRE_EMPRESA
// http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// http://www.infocif.es/ficha-empresa/distribuidora-internacional-de-alimentacion-sa
// view-source:http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// for each position of empresas then build url
// http://www.infocif.es/ficha-empresa/


function readLines(input, func) {

    var resto = '';

    input.on('data', function(data) { //

    resto += data; // contiene el fichero

    var index = resto.indexOf('\n'); //almacena la cantidad de caracteres de la línea => desde 1 hasta cuando encuentra el '\n'

    const empresas_out = [];

    while (index > -1) {// hay caracteres

        var line = resto.substring(0, index) // se guarda el contenido de la línea

        // console.log("line: " + line);

        resto = resto.substring(index + 1)

        // console.log("resto: " + resto)

        const result2 = func(line); // función async que construye la uri y crea el json

        console.log('result3: ' + result2)

        empresas_out.push(result2); //add un elemento al arreglo empresas_out

        index = resto.indexOf('\n') // actualiza el index con la siguiente línea

    }

    });
  
    input.on('end', function() {
        if (resto.length > 0) {
            func(resto);
        }
    });
}

    async function func(data) {//Construye la uri y escribe el json de la uri 
        uri='http://www.infocif.es/ficha-empresa/' + data;
        // console.log('uri: ' + uri);
        const $ = await request({ //recibo el objeto $ que contiene todos los métodos que cheerio me devuelve para analizar
                    uri: uri,
                    transform: body => cheerio.load(body)
        });
        // // escribimos por consola lo que trae el objeto $
        // console.log($); 

        // // analizamos el título
        // const webTitle = $('title');
        // console.log(webTitle.html());

        // // analizamos el head
        // const webHead = $('head');
        // // console.log(webHead.html()); #imprime todo el objeto

        // analizamos webHeading 
        // const webHeading = $('h1');
        // console.log(webHeading.text().trim().replace('<br>', ', ')); 

        // o.k - Lee los script-ld+json
        var webScriptJsonLD = await $('script[type="application/ld+json"]').next().each(function (){
            // console.log(webScriptJsonLD.html())

            // var result =  webScriptJsonLD.html()

        });
    }

// Lee el fichero txt y lo guarda en una variable

var empresas = fs.createReadStream('empresas.txt'); //leo el fichero y lo guardo en una variable
readLines(empresas, func); //creo esta función que leerá cada línea del fichero y ejecutará una función

