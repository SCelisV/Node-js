const detailsEmpresas = require('../models/detailsEmpresas') // => importar el modelo que hemos creado de la DB

const detailsEmpresasCtrl = {};   // => creo el objeto detailsEmpresasCtrl

detailsEmpresasCtrl.formEmpresa = (req, res) => { // => renderiza el formulario de las empresas
    // res.send('formEmpresa') // => muestra un mensaje
    res.render('empresas/formEmpresa') // => renderiza el formulario
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
    console.log("ID: => " + req.user.id)
    newDetailsEmpresas.user = req.user.id
    await newDetailsEmpresas.save()
    req.flash('ok_messages', 'Empresa ADICIONADA correctamente')
    res.redirect('/detailsEmpresas/')
}

detailsEmpresasCtrl.listaEmpresas =  async (req, res) => { // => consulta todas las empresas
    // const detailEmpresas = await detailsEmpresas.find() // busca las empresas en la db y lo almacena en un arreglo
    const detailEmpresas = await detailsEmpresas.find({user: req.user.id}) // busca las empresas de un usuario
    res.render('empresas/listaEmpresas', {detailEmpresas}) // paso el arreglo como objeto al listaEmpresas.hbs
}

detailsEmpresasCtrl.consultaEmpresa = async(req, res) => { // => Recupera el formulario con los datos de una empresa por el ID ó Identificador Físcal
    console.log(req.params.ID) // => recuperamos el parametro que nos envian en la petición
    const detailEmpresas = await detailsEmpresas.findById(req.params.ID) // => recuperamos de la DB y lo almacenamos 
        // recupera las detailEmpresas add por usuario
        if(detailEmpresas.user != req.user.id){
            req.flash('ko_messages', 'Usuario no autorizado')
            return res.redirect('/detailsEmpresas/')
        }
    // console.log(detailEmpresas)
    res.render('empresas/editEmpresa', {detailEmpresas}) // paso lo que recupero de la DB a la vista
}

detailsEmpresasCtrl.updateEmpresa = async (req, res) => { // => actualiza los datos de una empresa por el ID ó Identificador Físcal
    // console.log(req.body)
    const {alternateName, logo, image, foundingDate, foundingLocation, isicV4, numberOfEmployees, taxID, description, propertyID, value, founder, jobTitle, worksFor, contactPoint, contactType, areaServed, availableLanguage, url, address, addressLocality, addressRegion, postalCode, streetAddress} = req.body  // => recuperar los datos del formulario en un objeto => destructuring
    await detailsEmpresas.findByIdAndUpdate(req.params.ID, {alternateName, logo, image, foundingDate, foundingLocation, isicV4, numberOfEmployees, taxID, description, propertyID, value, founder, jobTitle, worksFor, contactPoint, contactType, areaServed, availableLanguage, url, address, addressLocality, addressRegion, postalCode, streetAddress})
    req.flash('ok_messages', 'Empresa ACTUALIZADA correctamente')
    res.redirect('/detailsEmpresas/')
}

detailsEmpresasCtrl.deleteEmpresa = async(req, res) => { // => Elimina la empresa por el ID ó Identificador Físcal
    // res.send('deteleEmpresa')
    console.log(req.params.ID) // => recuperamos el parametro que nos envian en la petición
    await detailsEmpresas.findByIdAndDelete(req.params.ID) // => eliminarlo del modelo
    req.flash('ok_messages', 'Empresa ELIMINADA correctamente')
    res.redirect('/detailsEmpresas/')
}

module.exports = detailsEmpresasCtrl // =>  detailsEmpresasCtrl va a ser utilizado por el ../routes/details.routes.js