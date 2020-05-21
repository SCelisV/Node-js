const { Router } = require('express') // => requiero

const router = Router() // => ejecuto

const { 
    renderFormSignUp, 
    signUp, 
    renderFormSignIn, 
    signIn, 
    logOut 
} = require('../controllers/users.controllers')

router.get('/users/signUp', renderFormSignUp)
router.post('/users/signUp', signUp)

router.get('/users/signIn', renderFormSignIn)
router.post('/users/signIn', signIn)

router.get('/users/logOut', logOut)



module.exports = router // => exporto el modulo
