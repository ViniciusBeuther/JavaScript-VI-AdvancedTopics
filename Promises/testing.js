function count(array){

    
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < array.length; i++){
                console.log(array[i])
            }
            
        }, 1000)

        setTimeout(() => {
            resolve('Finishing....')
        }, 1000 * 2)

        
    })
}

const array = [1,2,3,4,5]

const contar = count(array)

console.log('Contando...')
console.log('Contando 1...')
console.log('Contando 2...')
console.log('Contando 3...')
console.log('Contando 4...')

count(contar)
console.log(contar)