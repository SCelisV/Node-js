const detailsEmpresas = require('../models/detailsEmpresas') // => importar el modelo que hemos creado de la DB

const detailsEmpresasCtrl = {};   // => creo el objeto detailsEmpresasCtrl

detailsEmpresasCtrl.formEmpresa = (req, res) => { // => renderiza el formulario de las empresas
    // res.send('formEmpresa') // => muestra un mensaje
    res.render('empresas/formEmpresa')
}

detailsEmpresasCtrl.addEmpresa = async (req, res) => { // => crea una nueva empresa
// detailsEmpresasCtrl.addEmpresa = (req, res) => { // => crea una nueva empresa
    // console.log(req.body) // => obtenemos los datos del formulario al servidor
    // console.log(req.body.title) // => obtenemos el valor del campo del formulario al servidor
    // console.log(req.body.description) // => obtenemos el valor del campo del  formulario al servidor
    // const {alternateName, logo, image, foundingDate, foundingLocation, isicV4, numberOfEmployees, taxID, telephone, description, identifier, propertyID, value, founder, jobTitle, worksFor, contactPoint, contactType, areaServed, availableLanguage, url, address, addressLocality, addressRegion, postalCode, streetAddress} = req.body  // => recuperar los datos del formulario en un objeto y a la vez crea constantes
    const {alternateName, logo, image, foundingDate, foundingLocation, isicV4, numberOfEmployees, taxID, description, propertyID, value, founder, jobTitle, worksFor, contactPoint, contactType, areaServed, availableLanguage, url, address, addressLocality, addressRegion, postalCode, streetAddress} = req.body  // => recuperar los datos del formulario en un objeto y a la vez crea constantes
    // => crear el objeto con los datos que recibo del formulario
    // const newDetailsEmpresas = new detailsEmpresas({alternateName, logo, image, foundingDate, foundingLocation, isicV4, numberOfEmployees, taxID, telephone, description, identifier, propertyID, value, founder, jobTitle, worksFor, contactPoint, contactType, areaServed, availableLanguage, url, address, addressLocality, addressRegion, postalCode, streetAddress})
    const newDetailsEmpresas = new detailsEmpresas({alternateName, logo, image, foundingDate, foundingLocation, isicV4, numberOfEmployees, taxID, description, propertyID, value, founder, jobTitle, worksFor, contactPoint, contactType, areaServed, availableLanguage, url, address, addressLocality, addressRegion, postalCode, streetAddress})
    // console.log(req.body)
    console.log(newDetailsEmpresas) // imprime el objeto que va a guardar en la db con el _id
    // const obj = JSON.parse(JSON.stringify(req.body))
    // console.log(obj)
    await newDetailsEmpresas.save()
    res.send('addEmpresa')
}

detailsEmpresasCtrl.listaEmpresas =  async (req, res) => { // => consulta todas las empresas
//     const detailsEmpresas = await detailsEmpresas.find(); // busca las empresas en la db y lo almacena en un arreglo
    // res.send('empresas/listaEmpresas.hbs') // paso el arreglo como objeto al listaEmpresas.hbs
    res.send('listaEmpresas')
}

detailsEmpresasCtrl.consultaEmpresa = (req, res) => { // => Recupera el formulario con los datos de una empresa por el ID ó Identificador Físcal
    res.send('consultaEmpresa')
}

detailsEmpresasCtrl.updateEmpresa = (req, res) => { // => actualiza los datos de una empresa por el ID ó Identificador Físcal
    res.send('updateEmpresa')
}

detailsEmpresasCtrl.deleteEmpresa = (req, res) => { // => Elimina la empresa por el ID ó Identificador Físcal
    res.send('deteleEmpresa')
}

module.exports = detailsEmpresasCtrl // =>  detailsEmpresasCtrl va a ser utilizado por el ../routes/details.routes.js