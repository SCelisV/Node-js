const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('infocif.csv'); // fichero de salida archivo y add data a medida que lo voy ejecutando

// https://www.youtube.com/watch?v=dJpSTPUVKQU&t=200s - quotes.toscrape.com
// http://www.infocif.es/ranking/ventas-empresas/espana
// view-source:http://www.infocif.es/ranking/ventas-empresas/espana

async function init() {
    const $ = await request({ //recibo el objeto $ que contiene todos los métodos que cheerio me devuelve para analizar
        uri: 'http://www.infocif.es/ranking/ventas-empresas/espana',

        transform: body => cheerio.load(body)
    });

    // escribimos por consola lo que trae el objeto $
    console.log($); 

    // analizamos el título
    const webTitle = $('title');
    console.log(webTitle.html());

    // analizamos el head
    const webHead = $('head');
    // #imprime todo el objeto
    console.log(webHead.html()); 

    // analizamos webHeading 
    const webHeading = $('h1');
    console.log(webHeading.text().trim().replace('<br>', ', ')); 

    // o.k - Lee los script-ld+json
    const webJsonLD = $('script[type="application/ld+json"]').next();
    console.log(webJsonLD.html());




}
// arranca el script
init(); 