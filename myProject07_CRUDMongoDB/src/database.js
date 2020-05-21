const mongoose = require("mongoose")

const {HOKKAIDO_MONGODB_HOST, HOKKAIDO_MONGODB_DB, HOKKAIDO_MONGODB_USER, HOKKAIDO_MONGODB_PASS} = process.env

MONGODB_URI = `mongodb+srv://${HOKKAIDO_MONGODB_USER}:${HOKKAIDO_MONGODB_PASS}@${HOKKAIDO_MONGODB_HOST}/${HOKKAIDO_MONGODB_DB}`

console.log(MONGODB_URI)
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        createIndex: true
    }) 
    .then(db => console.log('Database connect: ' + MONGODB_URI))
    .catch(err => console.log(err))             
