
const fs = require('fs-extra')
const request = require('request')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

fs.readFile('./empresas.txt', 'utf8', (err, data) => { // read file empresas.txt

    if (err) throw err;

    try {

        // console.log("typeof: " + typeof(data))
        
        // Crea un array con el contenido del fichero
        var empresasArray = creaArray(data)
        let long = empresasArray.length
        // console.log('empresasArray.length: ' + long)

        let URLS = empresasArray.map(empresasArray => `http://www.infocif.es/ficha-empresa/${empresasArray}`);

        // for( i = 0; i < long; i++ ){
        //     console.log('i: ' + i + " URLS: " + URLS[i])
        // }

        // console.log("call-procesaArray URLS")

        var sReturn = procesaURLS(URLS) 

        // if (sReturn) { // 1 ok -
        //     console.log('sReturn: ' + sReturn)
        //     console.log('¡¡ Perfect, all is successful !!')
        // } else { // 0 err -
        //     console.log('sReturn: ' + sReturn)
        //     console.log('- OjO - : SomeThing was WRONGGGs')
        // }
        
    } catch (err) {

        console.log('catch: ' +  err)

    }


})


function creaArray(data){

    // console.log("ini-creaArray data")
    let empresas = []
    var resto = data // contiene el fichero
    var indice = resto.indexOf('\n') //almacena la cantidad de caracteres de la línea => desde 1 hasta cuando encuentra el '\n'
    // console.log(indice);    

    while (indice > -1) {// hay caracteres
        let line = resto.substring(0, indice) // se guarda el contenido de la línea
        empresas.push(line)
        resto = resto.substring(indice + 1)
        indice = resto.indexOf('\n') // actualiza el index con la siguiente línea
    }

    long = empresas.length
    // console.log('empresas.length: ' + long)
    // for(let i = 1; i < long; i++){ // imprime el array
    //     console.log('i: ' + i + " " + empresas[i]) 
    // }
    // console.log("fin-creaArray data")
    return empresas

}

async function procesaURLS(URLS){ // Recupera los datos de las url
    
    console.log("ini-procesaURLS: ")
    var otherURLS = []; // array que contiene URLs que no se pueden tratar con el script[type="application/ld+json"]
    jsonArray = []; // arreglo de salida 
    var longwebScriptJSon = 0, okURLS = 0, koURLS = 0 // contadores
    long = URLS.length // longitud de las URLS que se espera poder tratar
    console.log('long: ' + long)

    console.time('i')

    for( i = 0; i < long; i++ ){ // procesa las URls que pueda y crea un arreglo con las que no puede
        // console.log( 'i: ' + i + " URLS: " + URLS[i] )
        let response = await fetch(URLS[i])
            .then( res => res.text() )
            .then( body => {

                const $ = cheerio.load(body)

                // // escribimos por consola lo que trae el objeto $
                // console.log($.html()); 

                // // analizamos el body
                // const webBody = $('body');
                // console.log(webBody.html());
                
                // OJO - no todas las páginas tienen este objeto 'script[type="application/ld+json"]' - por lo que generamos un nuevo arreglo para identificarlas
                // ok - analizamos el script d+json"
                const webScriptJSon = $('script[type="application/ld+json"]').next()
                // console.log('typeof: ' + typeof(webScriptJSon))
                // console.log(webScriptJSon.html())
                longwebScriptJSon = webScriptJSon.length

                // console.log('longwebScriptJSon: ' + longwebScriptJSon)

                if(longwebScriptJSon === 0){
                    otherURLS[koURLS] = URLS[i] // extrae las URLs que no se pueden tratar a otro array
                    koURLS += 1
                } else {
                    jsonArray.push(webScriptJSon.html()) // array de JSON 
                    okURLS += 1
                } 
            })
    }
    
    console.log('okURLS: ' + okURLS + ' koURLS: ' + koURLS);

    if (koURLS !== 0){ // Crea un fichero con las Urls que no ha podido procesar
        
        // crear el fichero empresas_ko.txt
        var sReturn = crearFicheroKo(otherURLS)
    }

        
    if (okURLS !== 0) { // procesa el jsonArray de las Urls que tiene datos
        
        // conecta - DB - Add ó Update ó crea un fichero json
        //(jsonArray)

        var sReturn = crearFicherooK(jsonArray)     

    } else {
        var sReturn = 0 // 0 err -
    }

    console.timeEnd('i')
    
    console.log("fin-procesaURLS")

    return sReturn
    
}

function crearFicheroKo(otherURLS) { // Crea empresas_ko.txt con las Urls que no ha podido procesar


    var fileKo = fs.createWriteStream('empresas_ko.txt'); //  

    fileKo.on('error', (err) => { 
        console.log("WROOOOONG Written to fileKo." +  err)
        return 0 // 0 err -
    });

    otherURLS.forEach((escribe) => { 
        fileKo.write(escribe + '\n'); 
        return 1 // 1 ok -
    });

    fileKo.end();

}

function crearFicherooK(jsonArray) { // Crea el fichero empresas_ok.json con las Urls que ha podido procesar 

    okURLS = jsonArray.length
    let dbData = 'db = db.getSiblingDB("HOKKAIDODB");db.EmpresasDetails.drop();db.EmpresasDetails.insertMany'
    total = dbData + '(['
    // console.log("total: " + total)
    for( i = 0; i < okURLS ; i++){
        line = jsonArray[i] + ',\n'
        total += line 
    }
    total += ']);'

    namefileOk = "empresas_ok_" + Date.now() + '.txt'; 
    // console.log ('namefileOk: ' + namefileOk)

    var fileOk = fs.createWriteStream(namefileOk); // fichero de salida     
    
    fileOk.on('error', function(err) { 
        console.log("WROOOOONG Written to File." +  err); 
        return 0 // 0 err -
    });

    fileOk.write(total)
    fileOk.end()
    console.log("file has been saved successful!!.")
    return 1 // 1 ok -

}

    
    //     console.log('i: ' + i + " " + jsonArray[i] );
    //     var jsonData = jsonArray [i]// json data
    
    // // var jsonData = jsonArray // json data
    
    //     var jsonObj = JSON.parse(jsonData) // parse analiza una cadena JSON, convierte a un valor o objeto JavaScript
    //     console.log('typeof: ' + typeof(jsonObj))
    //     console.log('jsonObj: ' + jsonObj)
    
    //     var jsonContent = JSON.stringify(jsonObj) // stringify convierte un objeto o valor de JavaScript en una cadena JSON
    //     console.log('jsonContent: ' + jsonContent)
    
    // }
    
    // fs.writeFile("empresas_ok.json", jsonContent, 'utf8',  (err) => {
        //     if (err) {
            //         console.log("An error occured while writing JSON Object to File. " + err )
            //     }
            //     console.log("JSON file has been saved successful!!.")
            //     return 1 // 1 ok -
            // });
            
            // }

        // const json = JSON.stringify(jsonArray)
        // fs.writeFile('empresas_ok.json', json, 'utf8', (err) => {
            //     if (err) {
                //         console.log("An error occured while writing JSON Object to File. " + err )
                //         return 0 // 0 err -
                //     }
                //     console.log("JSON file has been saved successful!!.")
                //     return 1 // 1 ok -
                // });