// test para function and return


init()

function init(){

    var intOne = 0
    var intResultOne = 0
    var intResultTwo
    console.log("intOne: " + intOne)
    console.log("intResultOne: " + intResultOne)
    intResultOne = one(intOne)
    // imprime lo que devuelve la función 
    console.log("intOne: " + intOne)
    console.log("intResultOne: " + intResultOne)
    intResultTwo = two()
    console.log("intResultTwo: " + intResultTwo)


}

function one(intOne){

    // imprime la variable pasada como parametro 
    console.log("intOne: " + intOne)
    // doAnything..  
    intResultOne = intOne + 1
    console.log("intResultOne: " + intResultOne)
    // retorna un resultado a la funcion ppal
    return intResultOne

}

function two(){

        console.log("intResultTwo: " + intResultTwo)
        intResultTwo = intResultOne + 1
        console.log("intResultTwo: " + intResultTwo)

    return 
}




