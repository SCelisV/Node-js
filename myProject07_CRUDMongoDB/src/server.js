const express = require('express')
const path = require('path')

// Initializations
const app = express() // => ejecución del modulo que retorna un objeto

// Settings

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views')) // => devuelve la dirección de en donde está este archivo

// Middlewares

app.use(express.urlencoded({extended: false}))

// Global Variables

// Routes

app.get('/', (req, res) => {   // Cuando el usuario visite está página ("/")
    res.send('Hello World')    // responde con 'Hello World'
})

// Static Files

app.use(express.static(path.join(__dirname, 'public')))  // => devuelve la dirección de en donde está este archivo

module.exports = app