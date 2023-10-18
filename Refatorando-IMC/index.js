async function calculateIMC(height, weight){
    try{
        if (typeof height !== 'number' || typeof weight !== 'number') {
            return Promise.reject('The input should be a number!')
        } else {
            return verifyIMC(height, weight)
        }
    } catch(err) {
        console.log(err)
    }
}

async function resultIMC(height, weight){
    return weight / (height * height);
}

async function verifyIMC(height, weight){
    try{
        const IMC = await resultIMC(height, weight)
        if(IMC <= 18.5){return console.log(`${IMC.toFixed(2)} | Situacao: Magreza` )}
        else if (IMC > 18.5 && IMC < 24.9){return console.log(`${IMC.toFixed(2)} | Situacao: Normal`)}
        else if (IMC > 24.9 && IMC < 29.9){return console.log(`${IMC.toFixed(2)} | Situacao: Sobrepeso`)}
        else if (IMC > 29.9 && IMC < 39.9){return console.log(`${IMC.toFixed(2)} | Situacao: Obesidade`)}
        else{return console.log(`${IMC.toFixed(2)} | Situacao: Obesidade Grave`)}
    }catch(err){
        console.log(err)
    }
}
calculateIMC(1.80, 80)
