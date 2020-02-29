let fetch = require('node-fetch')

async function getCountry(countryName){
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    let country = await response.json()
    console.log(country[0].name)
}


let country = getCountry("Mexico")
console.log(country)