// include file system module
const fs = require('fs');
 
// read file sample.json file
fs.readFile('./sample.json',
    // callback function that is called when reading file is done
    (err, data) => {
        // json data
        const jsonData = data;
 
        // parse json
        const jsonParsed = JSON.parse(jsonData);
 
        // access elements
        console.log(jsonParsed.persons[0].name + "'s office phone number is " + jsonParsed.persons[0].phone.office);
        console.log(jsonParsed.persons[1].name + " is from " + jsonParsed.persons[0].city);
});


// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo-readFile-json-file.js

    // se imprime por consola:
    // John's office phone number is 040-528-1258
    // Phil is from Kochi

    // to parse JSON data from a variable or file using JSON.parse() function with the help of example Node.js programs.