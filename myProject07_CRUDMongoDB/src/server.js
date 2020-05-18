const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')

// Initializations
const app = express() // => ejecución del modulo que retorna un objeto

// Settings

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views')) // => devuelve la dirección de en donde está este archivo
app.engine('.hbs', exphbs({ // => configuramos express-handlebars y lo que queremos que haga
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs') // => ejecutar el motor de plantillas que hemos configurado

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

// Global Variables

// Routes

app.use(require('./routes/index.routes')) //=> cuando se pida una ruta .. la busque en este fichero

app.use(require('./routes/detailsEmpresas.routes')) //=> cuando se pida una ruta /details/add la busque en este fichero


// Static Files

app.use(express.static(path.join(__dirname, 'public')))  // => devuelve la dirección de en donde está este archivo

module.exports = app