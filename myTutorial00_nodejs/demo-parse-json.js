// json data
const jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

// '{"persons":[{"name":"John","city":"New York"},
//              {"name":"Phil","city":"Ohio"}
//             ]}';
                        
// parse json
const jsonParsed = JSON.parse(jsonData); // crea un objeto

// access elements
console.log(jsonParsed.persons[0].name);
console.log(jsonParsed.persons[0].city);
console.log(jsonParsed.persons[1].name);
console.log(jsonParsed.persons[1].city);

// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo-parse-json.js

    // se imprime por consola:
    // John
    // New York
    // Phil
    // Ohio

