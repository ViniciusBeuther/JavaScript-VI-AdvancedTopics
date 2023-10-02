console.log('Programa')

//const settimeoutId = setTimeout (() => {
//    console.log('3 segundos se passaram desde que o programa foi iniciado')
//}, 1000 * 3)

//clearTimeout(settimeoutId)

//Usando SetInterval
let seconds = 0;
const setintervalId = setInterval(() =>{
    seconds += 1;
    console.log(`Se passaram ${seconds} segundos`)
}, 1000 * 1)