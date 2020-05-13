require('dotenv').config() // => lee el fichero .env de los datos de conexion

const app = require('./server') // => está dentro del mismo proyecto

require('./database') // => conexion a la DB

app.listen(app.get('port'), () => { // => obtener el puerto 
    console.log('Serve on port ' , app.get('port'))
})

