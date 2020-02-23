const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('cnae.csv'); // fichero de salidaarchivo y add data a medida que lo voy ejecutando


async function init() {
    const $ = await request({ //recibo el objeto $ que contiene todos los métodos que cheerio me devuelve para analizar => view-source:http://quotes.toscrape.com/
        // uri: 'https://www.cnae.com.es/obtener-cnae-4.php?nivel=011',
        // uri: 'https://www.axesor.es/Informes-Empresas/8704236/CONFECCIONES_CABANILLAS_SL.html',
        uri: 'http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl',

        transform: body => cheerio.load(body)
    });

    fs.r

    // console.log($);

    // analizamos el título
    const webTitle = $('title');
    console.log(webTitle.html());

    // analizamos el head
    const webHead = $('head');
    console.log(webHead.html());

    const log = document.querySelector('.event-log-contents');

    console.log( parsedHTML('script').get().length );   

    debbugger;

    // // review
    // $('a.title','#siteTable').each(function(){

    //     var urlImg = $(this).attr('href');
    //     if(urlImg.indexOf('i.imgur.com') != -1){
    //         images.push(urlImg);
    //     }
    // }
    // for (var i=0; i < images.length; i++){
    //     request(images[i]).pipe(fs.createWriteStream(`img/${i}.jpg`));
    // }

    // // analizamos webHeading 
    // const webHeading = $('h1');
    // console.log(webHeading.html()); 
    // console.log(webHeading.text()); 
    // console.log(webHeading.text().trim()); 

    // // analizamos los div que tengan la clase quote
    // const quote = $('.quote').find('a'); //texto que tiene la etiqueta a
    // console.log(quote.html());

    // // analizamos la tercera etiqueta que tenga la clase quote
    // const third_quote = $('.quote').next().next();
    // console.log(third_quote.html());

    // // analizamos el bloque que contiene todas las etiquetas
    // const containerClass = $('.row .col-md-8');
    // console.log(containerClass.html());

    //  // analizamos el bloque que contiene todas las etiquetas desde el padre
    //  const containerClass2 = $('.row .col-md-8').parent().next();
    //  console.log(containerClass2.html());

    // // analizamos el bloque que contiene todas las etiquetas desde el hijo
    //  const containerClass3 = $('.row .col-md-8').children();
    //  console.log(containerClass3.html());

    //  // analizamos todos los div de la clase quote con la clase span.text
    //  const quotes = $('.quote span.text');
    //  console.log(quotes.html());

    /*

     // analizamos todas las etiquetas y pedimos el indice y el elemento 
     const quotes2 = $('.quote span.text').each((i, el) => {

     console.log(i, $(el).html());
     console.log(i, $(el).text());
    
     const quote_text = $(el).text();
     const quote_text2 = quote_text.replace(/(^\“|\”$)/g,"");
     console.log(i, quote_text2);

    }); 
    
    */

//     // Me trae todos los datos de la clase .quote
//    $('.quote').each((i, el) => {
//         console.log(i, $(el).html())
//    });

    // // extraigo el texto y muestro incluso el html
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text');
    //     console.log(text.html())
    // });

    // // extraigo el texto y muestro sólo texto
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text');
    //     console.log(text.text())
    // });

    // // extraigo el texto y muestro sólo texto y quito las comillas
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     console.log(text)
    // });

    // // extraigo el texto y muestro sólo texto y quito las comillas, ahora extraigo el author
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('small.author').text(); //clase author de la etiqueta small
    //     console.log(text, author)
    // });

    // // extraigo el texto y muestro sólo texto y quito las comillas, ahora extraigo el author
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text(); //clase author de la etiqueta small que esta dentro de la etiqueta span
    //     console.log(author)
    // });

    // // extraigo el texto y muestro el texto y el autor
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text(); //clase author de la etiqueta small que esta dentro de la etiqueta span
    //     console.log(text, author)
    // });

    // // en este caso sólo me trae el primer elemento de cada cita - capturamos las etiquetas - cada una esta en un div con la clase tag, pero quiero las etiquetas a ya que estas tienen el nombre de las etiquetas
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text(); //clase author de la etiqueta small que esta dentro de la etiqueta span
    //     const tag = $(el).find('.tags a').html();
    //     console.log(tag)
    // });

    // // en este caso trae todas las tags en un arreglo - capturamos las etiquetas - cada una esta en un div con la clase tag, pero quiero las etiquetas a ya que estas tienen el nombre de las etiquetas
    // const tags = [];
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text(); //clase author de la etiqueta small que esta dentro de la etiqueta span
    //     const tag = $(el).find('.tags a').html();
    //     tags.push(tag);
    //     console.log(tags)
    // });

    // // en este caso trae todas las tags en un arreglo - capturamos las etiquetas - cada una esta en un div con la clase tag, pero quiero las etiquetas a ya que estas tienen el nombre de las etiquetas
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text(); //clase author de la etiqueta small que esta dentro de la etiqueta span
    //     const tags = [];
    //     const tag = $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text())); // todas las etiquetas a que tienen la clase tag con el valor del elemento que estamos recorriendo
    //     console.log(tags)
    // });

    //   // en este caso trae todas las tags en un arreglo con los valores - capturamos las etiquetas - cada una esta en un div con la clase tag, pero quiero las etiquetas a ya que estas tienen el nombre de las etiquetas
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text(); //clase author de la etiqueta small que esta dentro de la etiqueta span
    //     const tags = [];
    //     $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text())); // todas las etiquetas a que tienen la clase tag con el valor del elemento que estamos recorriendo
    //     console.log(tags)
    // });
    
    //   // en este caso trae todas las tags como texto con los valores - capturamos las etiquetas - cada una esta en un div con la clase tag, pero quiero las etiquetas a ya que estas tienen el nombre de las etiquetas
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text();
    //     const tags = [];
    //     $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text())); //cada etiqueta esta dentro de un div, quiero el valor de las etiquetas a que estan con la clase tag
    //     console.log(tags.join(',')) // string separado por comas
    // })

    // lo guardamos en un fichero cvs

    // writeStream.write('Quote|Author|Tags\n') //Intento crear las cabeceras separadas por columnas
    // $('.quote').each((i, el) => {
    //     const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
    //     const author = $(el).find('span small.author').text();
    //     const tags = [];
    //     $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text())); //cada etiqueta esta dentro de un div, quiero el valor de las etiquetas a que estan con la clase tag
    //     writeStream.write(`${text}|${author}|${tags}\n`);

    // })  



    

}

init();