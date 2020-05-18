const { Schema, model} = require ("mongoose") // => no requiero todo el módulo - utilizar un par de sus características o un par de clases
const bcrypt = require('bcryptjs') // => importar todo el módulo

const usersSchema = new Schema ({ // => define el esquema a utilizar
    name  : { type: String, required: true }, 
    email: { type: String, required: true  }, 
    password: { type: String, required: true  }
}, {
    timestamps: true
})

usersSchema.methods.encryptPass = async password => { // => recibe la contraseña, cifra y almacena
    const salt = await bcrypt.genSalt(10) // => método asyncrono que general el salt, que es el string para crear el cifrado, Cuantas veces voy a ejecutar este algoritmo, defaults to 10 if omitted, cuanto más seguro.. más tarda
    return await bcrypt.hash(password, salt) // => método asyncrono string que se va a cifrar y salt es el string en el que se va a basar para crear el cifrado
}

usersSchema.methods.matchPass = function(password) { // => compara las contraseñas (cifradas) cuando el usuario hace login
    return await bcrypt.compare(password, this.password) // => return true si coinciden y false si non coincide necesita un string y un hash en realidad 
}



model.exports = model('users', usersSchema) // => Nombre del modelo y Nombre del esquema