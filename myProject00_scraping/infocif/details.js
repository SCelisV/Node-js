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
    // console.log("reading....")

    input.on('data', function(data) {

      resto += data;
      var index = resto.indexOf('\n'); //lee hasta que encuentra un '\n'

      while (index > -1) {// encontró el '\n'

        var line = resto.substring(0, index);
        // console.log("line: " + line);
        resto = resto.substring(index + 1);

        console.log("antes de func(line);")
        func(line);
        console.log("después de func(line);")
        index = resto.indexOf('\n');

      }

    });
  
    input.on('end', function() {
      if (resto.length > 0) {
        func(resto);
      }
    });
  }
  


    async function func(data) {//Escribe la línea que va leyendo
        // console.log('Line: ' + data);
        uri='http://www.infocif.es/ficha-empresa/' + data;
        console.log('uri: ' + uri);
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

        // // analizamos webHeading 
        // const webHeading = $('h1');
        // console.log(webHeading.text().trim().replace('<br>', ', ')); 


        // o.k - Lee los script-ld+json
        const webScriptJsonLD = $('script[type="application/ld+json"]').next();
        // console.log('webScriptJsonLD: ' + webScriptJsonLD.html());
        // myObj = webScriptJsonLD;
        // for (x in myObj) {
        // console.log(myObj[x].name);
        // }




        var data = JSON.stringify(webScriptJsonLD,null, 2);
        fs.writeFile('empresas.json', data, finished);

    }
  
    // Lee el fichero txt y lo guarda en una variable
    var empresas = fs.createReadStream('empresas.txt'); //leo el fichero y lo guardo en una variable
    readLines(empresas, func); //creo esta función que leerá cada línea del fichero y ejecutará una función

