const usersCtrl = {} // => crear el objeto

const passport = require('passport') // no para inicializarlo sino para utilizarlo

const User = require("../models/users")

usersCtrl.renderFormSignUp = (req, res) => { // => Formulario de Alta de usuarios =
    res.render("users/signUp")
}

usersCtrl.signUp =  async (req, res) => { // => Alta de usuario
    // console.log(req.body)
    const errors = []
    const {username, useremail, userpasswd, confpasswd} = req.body //=> recibo los datos del formulario a variables
    if(userpasswd != confpasswd){
        errors.push({text: 'Los password deben ser iguales'})
    }
    if(userpasswd.length < 4){
        errors.push({text: 'El password debe tener por lo menos 4 caracteres'})
    }
    if(errors.length > 0){
        res.render('users/signUp', {
            errors, 
            username, 
            useremail
        }) // => al enviar los errores y los datos que ha incluido el usuario al formulario
    }else{
        // res.send('ok alta')
        const emailUser = await User.findOne({email: useremail}) // consulta en db si existe, guarda el resultado en emailUser
        if (emailUser){
            // console.log("------true-emailUser" + emailUser)
            req.flash('ko_messages', 'Este email ya esta en uso')
            // console.log("ko_messages")
            res.redirect('/users/signUp')
        } else { console.log("-------else-emailUser" + emailUser)
                const newUser = new User({name:username, email:useremail, password:userpasswd})
                newUser.password = await newUser.encryptPass(userpasswd) // antes de guardar el usuario en la db - encriptar la password
                await newUser.save()
                req.flash('ok_messages', 'Usuario dado de ALTA correctamente') // => enviar los mensajes
                res.redirect('/users/signIn') // => redireccionar al logIn 
        }
    }
}

usersCtrl.renderFormSignIn = (req, res) => { // => Formulario de Login de usuarios =
    res.render("users/signIn")
}

// usersCtrl.signIn = (req, res) => { // => Valida Login de usuario
//     console.log(req.body)
//     // res.send("signIn")
// }
usersCtrl.signIn = passport.authenticate('local',{
    failureRedirect: '/users/signIn', // => redireccionamos cuando hay error
    successRedirect: '/detailsEmpresas', // => redireccionamos hacia la consulta
    failureFlash: true // utilizar flash para ver el error

}) // => Valida Login de usuario



usersCtrl.logOut = (req, res) => { // => Salir de la app
    req.logout() //=> passport elimina la session del usuario
    req.flash('ok_messages', 'Tu sessiona ha sido CERRADA correctamente')
    res.redirect('/users/signIn')
    // res.send("logOut")
}

module.exports = usersCtrl // => exporto el modulo

/*
  
*/