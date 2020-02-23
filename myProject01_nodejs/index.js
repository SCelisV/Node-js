// const => constante donde voy a guardar todos lo que tenga el fichero math
// require => importar los ficheros que necesitamos del sistema operativo
// ./ -> esta en la misma carpeta

const math = require('./math.js');

// importo un objeto con las siguientes propiedades
// {
//     add: [Function: add],
//     substract: [Function: substract],
//     multiply: [Function: multiply],
//     divide: [Function: divide]
//  }
// console.log(math);

// para utilizar la function divide que esta en el fichero math => math.divide
console.log(math.add(1,2));
console.log(math.substract(2,1));
console.log(math.multiply(1,0));
console.log(math.divide(1,0));
console.log(math.divide(1,2));



