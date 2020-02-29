const fetch = require('node-fetch')
const fs = require('fs-extra')

async function getCountry(countryName){
    try{
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        let country = await response.json()
        return country[0]
    } catch (error){
        return "Error al consultar el API"
    }

}
(async function(){
    const country = await getCountry("colombia")
    // console.log(country) // imprime el objeto por pantalla
    // console.log(typeof(country)) // imprime el tipo de "country"

    try{
        fs.appendFile('empresas_out.txt', country, {
 

        })
    } catch (e){
        console.log("ERROR", e)
    }


})()

