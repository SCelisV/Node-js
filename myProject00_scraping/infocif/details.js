const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('infocif.csv'); // fichero de salida archivo y add data a medida que lo voy ejecutando

// https://www.youtube.com/watch?v=dJpSTPUVKQU&t=200s - quotes.toscrape.com
// http://www.infocif.es/ficha-empresa/NOMBRE_EMPRESA
// http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// http://www.infocif.es/ficha-empresa/distribuidora-internacional-de-alimentacion-sa
// view-source:http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl
// for each position of empresas then build url
// http://www.infocif.es/ficha-empresa/

let empresas = [
    'repsol-petroleo-sa',
    'mercadona-sa',
    'compania-espanola-de-petroleos-sa',
    'cepsa-trading-sa',
    'industria-de-diseno-textil-sa',
    'repsol-comercial-de-productos-petroliferos-sa',
    'endesa-energia-sa',
    'el-corte-ingles-sa',
    'seat-sa',
    'repsol-trading-sa',
    'sociedad-estatal-loterias-y-apuestas-del-estado-sme-sa',
    'telefonica-de-espana-sa',
    'ford-espana-sl',
    'centros-comerciales-carrefour-sa',
    'iberdrola-clientes-sa',
    'renault-espana-sa',
    'iberdrola-generacion-espana-sa',
    'banco-santander-sa',
    'petroleos-del-norte-sa',
    'buildingcenter-sa',
    'gas-natural-comercializadora-sa',
    'bp-oil-espana-sa',
    'galp-energia-espana-sa',
    'naturgy-aprovisionamientos-sa',
    'mercedes-benz-espana-sa',
    'opel-espana-sl',
    'peugeot-citroen-automoviles-espana-sa',
    'orange-espagne-sa',
    'telefonica-sa',
    'banco-bilbao-vizcaya-argentaria-sa',
    'naturgy-energy-group-sa',
    'iberia-lineas-aereas-de-espana-sa',
    'cepsa-comercial-petroleo-sa',
    'endesa-generacion-sa',
    'amadeus-it-group-sa',
    'distribuidora-internacional-de-alimentacion-sa',
    'caixabank-sa',
    'telefonica-moviles-espana-sa',
    'mapfre-espana-compania-de-seguros-y-reaseguros-sa',
    'lidl-supermercados-sa',
    'volkswagen-group-espana-distribucion-sa',
    'aena-sme-sa',
    'vodafone-espana-sa',
    'arcelormittal-espana-sa',
    'naturgy-iberia-sa',
    'psag-automoviles-comercial-espana-sa',
    'renfe-viajeros-sociedad-mercantil-estatal-sa',
    'banco-de-sabadell-sa',
    'repsol-quimica-sa',
    'alcampo-sa'
  ];

    let URLS = empresas.map(empresas => `http://www.infocif.es/ficha-empresa/${empresas}`);
    console.log('URLS');

    // let  = [];


    


async function init() {
    const $ = await request({ //recibo el objeto $ que contiene todos los métodos que cheerio me devuelve para analizar
        // uri: 'http://www.infocif.es/ficha-empresa/arcelormittal-amds-processing-sl',
        uri: 'http://www.infocif.es/ficha-empresa/distribuidora-internacional-de-alimentacion-sa',

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

    // // analizamos webHeading 
    // const webHeading = $('h1');
    // console.log(webHeading.text().trim().replace('<br>', ', ')); 

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