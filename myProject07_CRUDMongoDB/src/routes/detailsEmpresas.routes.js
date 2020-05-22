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

const auth = require('../helpers/authroutes')
const {isAuthenticated} = require('../helpers/authroutes')

// Create Empresa
router.get('/detailsEmpresas/formEmpresa', isAuthenticated, formEmpresa) // Cuando me pidan esta dirección => mostrar un formulario de add de empresas
router.post('/detailsEmpresas/addEmpresa', isAuthenticated, addEmpresa) // Envia el formulario al servidor => mostrar un formulario de add de empresas

// Consultar Empresas
router.get('/detailsEmpresas/', isAuthenticated, listaEmpresas) // Recupera un listado de las empresas

// Read and Update Empresas
router.get('/detailsEmpresas/consulta/:ID', isAuthenticated, consultaEmpresa) // Recupera el formulario con los datos de la Empresa identificada el ID ó Identificador Físcal
router.put('/detailsEmpresas/update/:ID', isAuthenticated, updateEmpresa) // Update los datos de la empresa

// Delete Empresas
router.delete('/detailsEmpresas/delete/:ID', isAuthenticated, deleteEmpresa) // Eliminar la Empresa identificada el ID ó Identificador Físcal

module.exports = router // =>  router va a ser utilizado por el server.js
