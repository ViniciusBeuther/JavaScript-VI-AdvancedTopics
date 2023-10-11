function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise esta sendo executada...')
        setTimeout(() => {
            if(true) {
                reject('A promise foi rejeitada')
            }
            else{
                console.log('Resolvendo a promise....')
                resolve('Resultado')
            }
            
        }, 1000 * 2)
    })
}

execute().then((result) => {
    console.log(`A promise foi resolvida, o resultado foi: ${result}`)
}).catch((error) => {
    console.log(`A promise foi rejeitada pelo motivo: ${error}`)
}).finally((finished) => {
    console.log(`A promise esta sendo finalizada....`)
})
