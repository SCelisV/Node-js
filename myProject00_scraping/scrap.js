const cheerio = require('cheerio');
const request = require('request');

// request('https://www.amazon.es/Polo-camisero-manga-larga-visibilidad/dp/B072QF1HYY', (error, response, html) => {
request('http://codedemos.com/sampleblog/', (error, response, html) => {

 if(!error && response.statusCode == 200){
    // creamos la variable que va contener lo que necesitamos
    const $ = cheerio.load(html);

    // creamos una variable que va a contener lo que tenga en la página web class="firstHeading => const nombredelaclase = $('.nombredelaclase')
    const siteHeading = $('.site-heading');

   //  console.log(siteHeading.html());
   //  console.log(siteHeading.text());
    
   // const output = siteHeading.find('h1').text();
   // const output = siteHeading.children('h1').text();
   // --
   // const output = siteHeading
   //    .children('h1')
   //    .next()
   //    .text();
   //  console.log(output);
   // --
   // const output = siteHeading
   // .children('h1')
   // .parent()
   // .text();

   // console.log(output);
   // --
      $('.nav-item a').each((i, el) => {
         const item = $(el).text();
         const link = $(el).attr('href');
         console.log(link);
      });



    
 } else {
        console.log("NO SE PUEDE HACER SCRAPING EN ESTE SITIO... :'( "); // Si da error muestra el mensaje por consola.
 }

});