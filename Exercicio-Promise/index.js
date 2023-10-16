function calculateIMC(height, weight){
    return new Promise((resolve, reject) => {
        if (typeof height !== 'number' || typeof weight !== 'number'){
            reject('Invalid input, contains characters...')
        }
        else{
            
            resolve(`Valid input. IMC = ${verifyIMC(height, weight)}`)
        }
    })
    
}

function verifyIMC(height, weight){
    const IMC = weight / (height * height);
    if (IMC <= 18.5){
        return `${IMC.toFixed(2)} | Situacao: Magreza`
    } else if (IMC > 18.5 && IMC < 24.9){
        return `${IMC.toFixed(2)} | Situacao: Normal`
    } else if (IMC > 24.9 && IMC < 29.9){
        return `${IMC.toFixed(2)} | Situacao: Sobrepeso`
    } else if (IMC > 29.9 && IMC < 39.9){
        return `${IMC.toFixed(2)} | Situacao: Obesidade`
    } else{
        return `${IMC.toFixed(2)} | Situacao: Obesidade Grave`
    }
}

calculateIMC(1.8, 80).then((resolved) => {
    console.log(resolved)
}).catch((error) => {
    console.log(error)
})