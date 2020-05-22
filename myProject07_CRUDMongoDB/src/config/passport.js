const passport = require("passport")
const localStrategy = require("passport-local").Strategy // => una estrategia de login

const User = require('../models/users')

// => definir una nueva estrategia 
// definir un objeto dentro de la función para con los parámetros a autenticar y que voy a recibir desde el formulario
passport.use(new localStrategy ({
    usernameField: 'useremail',
    passwordField: 'userpasswd'
    // y la función con el callback => (done) que reciba estos datos para validar ó consultar con la db y comparar con los métodos de cifrado
}, async (useremail, userpasswd, done) => {

    // validar que el email esta en la db - match

    const user = await User.findOne({email: useremail}) // consulta en db si existe, guarda el resultado en user
    console.log("user: => " + useremail + " " + user)
    if(!user){ // => no existe un usuario retornamos un error con el callback para que acabe la autenticación y devuelva la vista 
        return done(null, false, {message: 'Usuario no Existe'}) // retorna el null para un error, el usuario no existe (false) y el mensaje de error, 
    } else { // => existe valido las contraseñas
        const match = await user.matchPass(userpasswd)
        console.log("match: => " + match)
        // comparar la contraseña
        if (match){ // coincide la contraseña => no hay error y guarda el usuario en la session
            return done(null, user) // retorna el null para un error y guarda el usuario en la sesion
        }else{
            return done(null, false, {message: 'Contraseña Incorrecta'}) // retorna el null para un error, el usuario no existe (false) y el mensaje de error
        }
    }
}))

//Passport guarda el usuario
//Cuando el usuario se loge => recibe el id del usuario y lo guarda en la sesión
passport.serializeUser((user, done) => {
    done(null, user.id)
})
//comprueba que el id del usuario que esta navegando existe en la db y tiene autorización
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})


// => ó exportar el modulo - en este caso lo definiremos como un middleware
// module.exports{ definiendo el objeto que quiero exportar }

