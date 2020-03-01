// file system module to perform file operations
const fs = require('fs');
 
// json data
const jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
// parse json
const jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
 
// stringify JSON Object
const jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
 
fs.writeFile("output.json", jsonContent, 'utf8', (err) => {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo-writeFile-json-file.js

    // se imprime por consola:
        // {
        //     persons: [
        //         { name: 'John', city: 'New York' },
        //         { name: 'Phil', city: 'Ohio' }
        //     ]
        // }
        
        // {"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}
        // JSON file has been saved.

    // to parse JSON data from a variable or file using JSON.parse() function with the help of example Node.js programs.