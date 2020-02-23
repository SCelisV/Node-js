// para poder utilizar este objeto desde otro archivo tengo que 1. definirlo y 2. add propiedades al objeto y 3. exportar el objeto:
// 1. definirlo 
const Math = {};

/**
 * add dos números.
 * Retorna el resultado.
 * @param {int} x1 - The number one.
 * @param {int} x2 - The number two.
 * 
 * @returns A results of add x1 and x2.
 */
function add (x1, x2){
    return x1 + x2;
}

/**
 * substract dos números. 
 * Retorna el resultado.
 * @param {int} x1 - The number one.
 * @param {int} x2 - The number two.
 * 
 * @returns A results of substract x1 and x2.
 */
function substract (x1, x2){
    return x1 - x2;
}

/**
 * multiply dos números. 
 * Retorna el resultado.
 * @param {int} x1 - The number one.
 * @param {int} x2 - The number two.
 * 
 * @returns A results of multiply x1 and x2.
 */
function multiply (x1, x2){
    return x1 * x2;
}

/**
 * divide dos números. 
 * Retorna el resultado.
 * @param {int} x1 - The number one.
 * @param {int} x2 - The number two.
 * 
 * @returns A results of divide x1 and x2.
 */
function divide (x1, x2){
    if (x2 == 0) {
        console.log("No se puede dividir por ZERO 0 ")
        // si no retorno nada me escribe undefined por tanto retorno x2
        return (x2)
    } else {
        return x1 / x2;
    } 
}

// 2. add propiedades al objeto 
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;


// function hello(){
//     console.log('Hola ', name);
// }


// 3. exportar el objeto
module.exports = Math;

// exporto una function
// module.exports = hello;




// para poder utilizar este objeto desde otro archivo lo puedo hacer exportando de las propiedades del objeto:
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

