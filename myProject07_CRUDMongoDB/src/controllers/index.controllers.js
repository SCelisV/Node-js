const indexCtrl = {};   // => creo el objeto indexCtrl

indexCtrl.renderIndex = (req, res) => { // => funcion que va al renderizar la página index                 
    res.render('index')
}

indexCtrl.renderAbout = (req, res) => { // => funcion que va al renderizar la página about                 
    res.render('about')
}

module.exports = indexCtrl // =>  indexCtrl va a ser utilizado por el ../routes/index.routes.js
