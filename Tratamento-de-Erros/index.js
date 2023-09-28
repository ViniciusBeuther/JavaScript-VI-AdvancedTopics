const sum = (a, b) => {
    const firstNumber = a
    const secondNumber = b

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error ('An error occured, please review and try again')
    }

    return firstNumber + secondNumber
}

try{
    console.log(sum(1, 2))
    //console.log(sum(undefined, 2))
    console.log(sum(3, 5))
    console.log(sum(1, null))
    //console.log(sum(1, 'Number'))
} catch(error){
    console.log('An error ocurred!')
    console.log(error.message)
} finally {
    console.log('Calculations finished')
}