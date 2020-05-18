const { Router } = require("express") // => requerir la función Router de modulo express

const router = Router() // => ejecutar esta función que devuelve un objeto que me permite definir una url

const { 
    formEmpresa, 
    addEmpresa, 
    listaEmpresas, 
    consultaEmpresa, 
    updateEmpresa, 
    deleteEmpresa 
} = require('../controllers/detailsEmpresas.controllers')

// Create Empresa
router.get('/detailsEmpresas/formEmpresa', formEmpresa) // Cuando me pidan esta dirección => mostrar un formulario de add de empresas
router.post('/detailsEmpresas/addEmpresa', addEmpresa) // Envia el formulario al servidor => mostrar un formulario de add de empresas

// Consultar Empresas
router.get('/detailsEmpresas/', listaEmpresas) // Recupera un listado de las empresas

// Read and Update Empresas
router.get('/detailsEmpresas/update/:ID', consultaEmpresa) // Recupera el formulario con los datos de la Empresa identificada el ID ó Identificador Físcal
router.put('detailsEmpresas/update/:ID', updateEmpresa) // Update los datos de la empresa

// Delete Empresas
router.delete('/detailsEmpresas/delete/:ID', deleteEmpresa) // Eliminar la Empresa identificada el ID ó Identificador Físcal

module.exports = router // =>  router va a ser utilizado por el server.js
