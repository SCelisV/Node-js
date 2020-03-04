const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra'); // importa el fs-extra package y permite que lo usemos en nuestro code.
const fetch = require('node-fetch')

// https://www.youtube.com/watch?v=dJpSTPUVKQU&t=200s - quotes.toscrape.com
// http://www.infocif.es/ficha-empresa/NOMBRE_EMPRESA
// http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// http://www.infocif.es/ficha-empresa/distribuidora-internacional-de-alimentacion-sa
// view-source:http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// for each position of empresas then build url
// http://www.infocif.es/ficha-empresa/


function readLineas(input, procesa) {

    var resto = '';

    input.on('data', function(data) { //

    resto += data; // contiene el fichero

    var indice = resto.indexOf('\n'); //almacena la cantidad de caracteres de la línea => desde 1 hasta cuando encuentra el '\n'

    while (indice > -1) {// hay caracteres

        var linea = resto.substring(0, indice) // se guarda el contenido de la línea

        // console.log("linea: " + linea);

        resto = resto.substring(indice + 1) // es el resto del fichero, quita la línea leída

        // console.log("indice: " + indice)

        // console.log("resto: " + resto)

        const result2 = procesa(linea); // función async que construye la uri y crea el json

        console.log(result2)

        // console.log('result2: ' + result2)

        // empresas_out.push(result2); //add un elemento al arreglo empresas_out

        indice = resto.indexOf('\n') // actualiza el indice con la siguiente línea

    }

    });
  
    input.on('end', function() {
        if (resto.length > 0) {
            procesa(resto);
        }
    });
}

async function procesa(data) {//Construye la uri y escribe el json de la uri, automáticamente esta devolviendo una promesa
    // uri='http://www.infocif.es/ficha-empresa/' + data;
    // // console.log('uri: ' + uri);
    // const $ = await request({ //recibo el objeto $ que contiene todos los métodos que cheerio me devuelve para analizar
    //             uri: uri,
    //             transform: body => cheerio.load(body)
    // });

    try{
        uri='http://www.infocif.es/ficha-empresa/' + data;

        // let response = await fetch(uri) // se detiene hasta resolver la promesa, es decir,  

        const response = await fetch(uri)
        
        const $ = cheerio.load(response.body)

        // escribimos por consola lo que trae el objeto $
        console.log($)


        // // analizamos webHeading 
        // const webHeading = $('h1');
        // console.log(webHeading.text().trim().replace('<br>', ', ')); 



        // let datares = await response.json()
        // console.log('uri: ' + uri);

      



        // console.log('wjson: ' + wjson)

        // // analizamos el título
        // const webTitle = $('title');
        // console.log(webTitle.html());

        // // o.k - Lee los script-ld+json
        // const webScriptJsonLD = await $('script[type="application/ld+json"]').next() 
        // console.log(webScriptJsonLD.html())

    //    let country = await response.json()
    //     return country[0]
    } catch (error){
        return "Error al ejecutar la uri: " + uri;
    }
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

    // // o.k - Lee los script-ld+json
    // const webScriptJsonLD = await $('script[type="application/ld+json"]').next() 
    // console.log(webScriptJsonLD.html())


    // var jsonContent = JSON.stringify(webScriptJsonLD);
    // console.log(jsonContent);
    
    // obj = JSON.parse(webScriptJsonLD.html())
    // let json = JSON.stringify(obj);
    // fs.writeFile ('empresas.json', json, function(err) {
    //     if (err) throw err;
    //         console.log('complete');
    // });  

    // append data to file

    // fs.appendFile('empresas_out.txt',result,
    //     // callback function
    //     function(err) {
    //         if (err) throw err;
    //         // if no error
    //         console.log("Data is appended to file successfully.")
    //         // new Promise(() => {
          
    //         // })





    // });


}

// Lee el fichero txt y lo guarda en una variable

var empresas = fs.createReadStream('empresas.txt'); //leo el fichero y lo guardo en una variable
const empresas_out = [];
readLineas(empresas, procesa); //procesa el fichero de empresas

