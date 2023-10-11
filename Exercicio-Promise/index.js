function calculateIMC(height, weight){
    return new Promise((resolve, reject) => {
        const testRegex = /[A-Za-z]/
        if (height in testRegex){
            reject('Invalid input, contains characters...')
        }
        else{
            
            resolve(`Valid input. IMC = ${verifyIMC(height, weight)}`)
        }
    })
    
}

function verifyIMC(height, weight){
    const IMC = weight / (height ^ 2);
    if (IMC <= 18.5){
        return `${IMC}| Situacao: Magreza`
    } else if (IMC > 18.5 && IMC < 24.9){
        return `${IMC}| Situacao: Normal`
    } else if (IMC > 24.9 && IMC < 29.9){
        return `${IMC}| Situacao: Sobrepeso`
    } else if (IMC > 29.9 && IMC < 39.9){
        return `${IMC}| Situacao: Obesidade`
    } else{
        return `${IMC}| Situacao: Obesidade Grave`
    }
}

calculateIMC(1.8, 80).then((resolved) => {
    console.log(resolved)
})