console.log('let i - setTimeout 2000')
for(let i = 1; i < 4; i++){
    console.log('i: ' + i);
    setTimeout(() => {// asyncrono se ejecuta hasta el final
        console.log(i);
    }, 2000);   
}

// console.log('let i - setTimeout 0')
// for(let i = 1; i < 4; i++){
//     console.log('i: ' + i);
//     setTimeout(() => {// asyncrono se ejecuta hasta el final
//         console.log(i);
//     }, 0);   
// }

// console.log('var i - setTimeout 0')
// for(var i = 1; i < 4; i++){
//     console.log('i: ' + i);
//     setTimeout(() => {// asyncrono se ejecuta hasta el final
//         console.log(i);
//     }, 0);   
// }

