const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv')

// Write Header
writeStream.write(`Title,link,Date \n`)


// request('https://www.amazon.es/Polo-camisero-manga-larga-visibilidad/dp/B072QF1HYY', (error, response, html) => {
request('http://codedemos.com/sampleblog/', (error, response, html) => {

 if(!error && response.statusCode == 200){
    // creamos la variable que va contener lo que necesitamos
    const $ = cheerio.load(html);

    $('.post-preview').each((i, el) => {
        const title = $(el)
            .find('.post-title')
            .text()
            .replace(/\s\s+/g, ''); //quita todo el espacio en blanco
        console.log(title);

        const link = $(el)
            .find('a')
            .attr('href');
        console.log(link);

        const date = $(el)
            .find('.post-date')
            .text()
            .replace(/,/, ''); //reemplaza las comas por espacio
        console.log(date);

        // Write Row To CSV
        writeStream.write(`${title}, ${link}, ${date} \n`);

    });

    
 } else {
        console.log("NO SE PUEDE HACER SCRAPING EN ESTE SITIO... :'( "); // Si da error muestra el mensaje por consola.
 }

 console.log('Scraping Done...')

});