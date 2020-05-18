const {Router} = require("express") // => requerir la función Router de modulo express

const router = Router() // => ejecutar esta función que devuelve un objeto que me permite definir una url

const { renderIndex, renderAbout } = require('../controllers/index.controllers')// => llamar el archivo controllers e importar lo que voy a requerir

router.get('/', renderIndex) // Cuando el usuario visite está página ("/") utiliza el metodo renderIndex que esta en el index.controllers.js

router.get('/about', renderAbout )   // Cuando el usuario visite está página ("/about")

module.exports = router // =>  router va a ser utilizado por el server.js
