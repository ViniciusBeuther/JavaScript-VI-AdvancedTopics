const sum = (a, b) => {
    const firstNumber = a
    const secondNumber = b

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error ('An error occured, please review and try again')
    }

    return firstNumber + secondNumber
}

const multiply = (a, b) => {
    if(isNaN(a) || isNaN(b)){
        throw new Error('Error in multiply...')
    }

    return a * b
}

try{
    console.log(sum(1, 2))
    //console.log(sum(undefined, 2))
    console.log(sum(3, 5))
    console.log(sum(1, null))
    console.log(multiply(1, undefined))

} catch(error){
    console.log(error.message)
} finally {
    console.log('Finishing...')
}