const express = require("express")
const morgan = require("morgan")
const app = express()


//Setting

app.set('appName', 'What is Exppress..')
app.set('port', '5000')
app.set('view engine', 'ejs')

// lewares = (Manejador de petición que se ejecuta antes de que llegue a su ruta final), Recibe el objeto request body y procesarlo para convertirlo en JSON y llegar a su ruta 

app.use(express.json())     // Middleware que Indica a express que con esto puede entender los objetos json
app.use(morgan('dev'))      // Escribe las rutas solicitas por el usuario en el servidor


// Routes

app.get('/', (req, res) => {   // Cuando el usuario visite está página ("/")
    const data = [{'name':'Sonia'}, {'name': 'EllioT'}, {'name': 'Sami'}] // Tres objetos de una DB almacenados en una constante
    res.render('index.ejs', {people:data})    // pintará por pantalla la index.ejs
})

app.get('/user', (req, res) => {
    res.json({
        username: 'Sonia',
        lastname: 'Celis'
    })                      // Devolver un objeto json => http://localhost:5000/user
})

app.post('/user/:id', (req, res) => {  
    console.log(req.body)
    console.log(req.params)
    res.send('PETICIÓN POST RECIBIDA') 
})                                              // Recibe un objeto json => http://localhost:5000/user/456  

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} ha sido eliminado`)
})                                          // Delete un usuario => http://localhost:5000/user/123


app.put('/user/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send(`User ${req.params.id} ha sido actualizado`)
})                                          // Actualiza un usuario => http://localhost:5000/user/123

// Static => Enviar archivos al FrontEnd => Este Middlewares se va a ejecutar después de pasar por todas las rutas

app.use(express.static('public'))


app.listen(app.get('port'), () => { 
    console.log(app.get('appName'))
    console.log('Serve on port ' , app.get('port'))
})








