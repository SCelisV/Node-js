const fetch = require('node-fetch')
const cheerio = require('cheerio')
const request = require('request')


function init(){    


try{

    var uriPpal = 'http://www.infocif.es/ranking/ventas-empresas/espana' // Esta és la página inicial de las consultas

    var endpag = 1 // Las siguientes uris se forman: uriPpal + ?pagina=${i}

    const empresas = []; // array que va a contener los nombres de las empresas para formar las urls
    
    var i = 675;
    console.time('i')
    
    do { // se ejecutará por lo menos una vez
        if (i == 1) {//primera página
            uri = uriPpal
            obtieneURLS(uri, i); 
        } else {
            uri = uriPpal+`?pagina=${i}`
            obtieneURLS(uri, i); 
        }
        i += 1; 
    } // se ejecutará hastá cuando llegue a la página indicada
    while (i <= endpag) 

    // if (sReturn) { // 1 ok -
    //     console.log('sReturn: ' + sReturn)
    //     console.log('¡¡ Perfect, all is successful !!')
    // } else { // 0 err -
    //     console.log('sReturn: ' + sReturn)
    //     console.log('- OjO - : SomeThing was WRONGGGs')
    // }

    console.timeEnd('i')
    } catch {

        console.log('catch: ')

    }

}

async function obtieneURLS(uri, i){ // Recupera los datos de las uris para crear el arreglo de empresas
// function obtieneURLS(uri, i){ // Recupera los datos de las uris para crear el arreglo de empresas
    console.log("ini-obtieneURLS: ")
    console.log('uri + i : ' + i + " " + uri)
        // let response = await fetch(uri)
        let response = request(uri)
            .then( res => res.text() )
            .then( body => {

        
                let $ = cheerio.load(body);

                // escribimos por consola lo que trae el objeto $
                // console.log($.html()); 

                $('a.fs11 valignmiddle').each(() => { // clase fs11 de la etiqueta a

                    var webhref = $(this).attr('href'); // atributo href de la etiqueta a

                    if (webhref !== undefined){

                        if (webhref.indexOf('http://www.infocif.es/ficha-empresa/') != -1){
                            webhref = webhref.substring(36); // (extrae from el índice 36 hasta el final, le quito: 'http://www.infocif.es/ficha-empresa/)
                            empresas.push(webhref); //add un elemento al arreglo empresas
                            console.log('webhref: ' + webhref + " typeOf: " + typeof(webhref))
                            // console.log('webhref: ' + webhref + " typeOf: " + typeof(webhref))
                            // sReturn = 1
                        } // indexOf 

                    } // undefined

                    
                }) // each
                
            }) // body  
                
            console.log("fin-obtieneURLS")
            
            return 
} // obtieneURLS
            


init()
