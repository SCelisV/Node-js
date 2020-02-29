// doc = https://nodejs.org/api/url.html

const url = require('url'); 
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';

// Parse the address: Split a web address into readable parts, 
// and it will return a URL object with each part of the address as properties:

const q = url.parse(adr, true);

// The parse method returns an object containing url properties

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


// to execute:

// 1. soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_splitUrl.js

        // soniacelis@Sonias-MacBook-Pro myTutorial00_nodejs % node demo_splitUrl.js 
        // localhost:8080
        // /default.htm
        // ?year=2017&month=february
        // february


