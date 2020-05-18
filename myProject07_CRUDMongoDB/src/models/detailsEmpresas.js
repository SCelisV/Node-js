const { Schema, model } = require ("mongoose") // => no requiero todo el módulo - utilizar un par de sus características o un par de clases

const detailsEmpresas = new Schema ({ // => define el esquema a utilizar

    // _id: Schema.Types.ObjectId,
    // name: {
    //     firstName: {
    //         type: String,
    //         required: true
    //     },
    // },
    // name: {
    //     type: String,
    //     required: true
    // },
    alternateName: String, 
    logo: String, 
    image: String, 
    foundingDate: String, 
    foundingLocation: String, 
    isicV4: String, 
    numberOfEmployees: String, 
    taxID: String, 
    telephone: String, 
    description: String, 
    identifier: {
        type: Schema.Types.ObjectId, 
        propertyID: String,
        value: String
    },
}, {
    timestamps: true
})

module.exports = model('detailsEmpresas', detailsEmpresas, 'EmpresasDetails') // => Nombre del modelo y Nombre del esquema collection
// module.exports = model('detailsEmpresas', detailsEmpresas, 'nodeEmpresasDetails') // => Nombre del modelo, esquema, collection

// propertyID: String, 
// value: String, 
// founder: { type: Object }, 
// // @type: String, 
// name : String, 
// jobTitle : String, 
// worksFor: { type: Object }, 
// // @type: String, 
// name : String, 
// contactPoint: { type: Object }, 
// // @type: String, 
// // telephone: String, 
// contactType: String, 
// areaServed: String, 
// availableLanguage: String, 
// url: String, 
// address: { type: Object }, 
// // @type: String, 
// addressLocality: String, 
// addressRegion: String, 
// postalCode: String, 
// streetAddress: { type: String }


// var bookSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     title: String,
//     summary: String,
//     isbn: String,
//     thumbnail: Buffer,
//     author: { 
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'Author'
//     },
//     ratings: [
//         {
//             summary: String,
//             detail: String,
//             numberOfStars: Number,
//             created: { 
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     ],
//     created: { 
//         type: Date,
//         default: Date.now
//     }
// });