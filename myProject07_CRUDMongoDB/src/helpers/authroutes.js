const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){ // función de passport => true, el usuario esta autenticado termina y continua con el código siguiente a la llamada
        return next()   
    }
    // función de passport => false => el usuario no esta autenticado
    // redireccionar al signIn
    req.flash('ko_messages', 'No estas Autorizado')
    res.redirect('/users/signIn')
}

module.exports = helpers