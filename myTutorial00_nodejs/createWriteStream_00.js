// test para escribir un fichero

const fs = require('fs-extra')
const fileOutOk = "empresas_ok_" + Date.now() + '.txt'
const cws = fs.createWriteStream(fileOutOk) 

let strArray = []
for( i=0; i < 10 ; i++ ){
    strArray.push(i)
    console.log( "strArray: " + strArray [i] )
}

cws.on('error', (err_00) => { 
    console.log("WROOOOONG Written to " + fileOutOk +   err_00)
})

strArray.forEach((elem) => { 
    cws.write(elem + '\n'); 
})

cws.end()



