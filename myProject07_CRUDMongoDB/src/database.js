const mongoose = require("mongoose")

const {HOKKAIDO_MONGODB_HOST, HOKKAIDO_MONGODB_DB, HOKKAIDO_MONGODB_USER, HOKKAIDO_MONGODB_PASS} = process.env

MONGODB_URI = `mongodb+srv://${HOKKAIDO_MONGODB_HOST}/${HOKKAIDO_MONGODB_DB}--username${HOKKAIDO_MONGODB_USER}--password${HOKKAIDO_MONGODB_PASS}`

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(db => console.log('Database connect'))
    .catch(err => console.log(err))             