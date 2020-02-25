const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// as per https://www.theguardian.com/culture/gallery/2013/may/12/the-10-best-physicists
let names = [
  `Niels Bohr`,
  `Marie Curie`,
  `Albert Einstein`,
  `Isaac Newton`,
  `Galileo Galilei`,
  `James Clerk Maxwell`,
  `Michael Faraday`,
  `Richard Feynman`,
  `Ernest Rutherford`,
  `Paul Dirac`
];

let URLS = names.map(name => `https://es.wikipedia.org/wiki/${name.replace(/ /gi, "_")}`);
let scientists = [];

function findYear(idx, data) {
  data(".infobox.biography.vcard tr").each((index, val) => {
    let row = cheerio.load(val);
    console.log('row: ', row);
    if (row.html().indexOf("Fallecimiento") > -1) {
      let agePosition = row.html().search(/\([1-9][0-9]/g);
      scientists[idx] = {
        name: names[idx],
        year: row.html().substring(agePosition + 1, agePosition + 3)
      };
    }
  });

  return scientists[idx];
}

Promise.all(URLS.map(URL => axios.get(URL))).then(pagesPayload => {
  pagesPayload.forEach((URL, idx) => {
    findYear(idx, cheerio.load(pagesPayload[idx].data));
  });

  scientists.sort((a, b) => a.year < b.year);

  let output = scientists.reduce((ac, cu) => {
    return ac + "<li>" + cu.name + " " + cu.year + "</li>";
  }, "");

  fs.writeFile("out.html", `<ul>${output}</ul>`, function(err, data) {
    console.log("done");
  });
});
