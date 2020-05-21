const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
// Multiple security issues have come from this behaviour. Details can be found in the npm-security advisories 755, 1164, 1316, 1324 and 1325 and in the blog-article of Mahmoud Gamal.
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const passport = require('passport')


// Initializations
const app = express() // => ejecución del modulo que retorna un objeto
require('./config/passport') // => config/passport.js

// Settings

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views')) // => devuelve la dirección de en donde está este archivo
app.engine('.hbs', exphbs({ // => configuramos express-handlebars y lo que queremos que haga
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    // Multiple security issues have come from this behaviour. Details can be found in the npm-security advisories 755, 1164, 1316, 1324 and 1325 and in the blog-article of Mahmoud Gamal.
    handlebars: allowInsecurePrototypeAccess(Handlebars),   
    extname: '.hbs'
}))


app.set('view engine', '.hbs') // => ejecutar el motor de plantillas que hemos configurado

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method')) // sobreescribir el método POST
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


// Global Variables

app.use((req, res, next) => {
    res.locals.messages_Ok = req.flash('ok_messages') //=> mensajes de finalización correcta
    res.locals.messages_Ko = req.flash('ko_messages') //=> mensajes de finalización erronea
    res.locals.messages_Av = req.flash('av_messages') //=> mensajes de finalización con aviso
    res.locals.error = req.flash('error') //=> mensajes de error de passport
    res.locals.user = req.user || null; //=> variable para guardar el usuario de passport si esta registrado y si no inicializo en null 
    next()
})

// Routes

app.use(require('./routes/index.routes')) // => cuando se pida una ruta .. la busque en este fichero
app.use(require('./routes/detailsEmpresas.routes')) // => cuando se pida una ruta /details/add la busque en este fichero
app.use(require('./routes/users.routes')) // => importar las rutas de los users


// Static Files

app.use(express.static(path.join(__dirname, 'public')))  // => devuelve la dirección de en donde está este archivo

module.exports = app // => exporto el servidor