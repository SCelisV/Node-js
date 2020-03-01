const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('infocif.csv'); // fichero de salida archivo y add data a medida que lo voy ejecutando

// https://www.youtube.com/watch?v=dJpSTPUVKQU&t=200s - quotes.toscrape.com
// http://www.infocif.es/ficha-empresa/NOMBRE_EMPRESA
// http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// http://www.infocif.es/ficha-empresa/distribuidora-internacional-de-alimentacion-sa
// view-source:http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl

async function init() {
    const $ = await request({ //recibo el objeto $ que contiene todos los métodos que cheerio me devuelve para analizar
        // uri: 'http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl',
        // uri: 'http://www.infocif.es/ficha-empresa/distribuidora-internacional-de-alimentacion-sa',

        transform: body => cheerio.load(body)
    });

    // escribimos por consola lo que trae el objeto $
    // console.log($); 

    // analizamos el título
    const webTitle = $('title');
    console.log(webTitle.html());

    // analizamos el head
    const webHead = $('head');
    // console.log(webHead.html()); #imprime todo el objeto

    // analizamos webHeading 
    const webHeading = $('h1');
    console.log(webHeading.text().trim().replace('<br>', ', ')); 

    // o.k - Lee los script-ld+json
    const webJsonLD = $('script[type="application/ld+json"]').next();
    console.log(webJsonLD.html());
    myObj = webJsonLD;
    for (x in myObj) {
       console.log(myObj[x].name);
    }



}
// arranca el script
init(); 