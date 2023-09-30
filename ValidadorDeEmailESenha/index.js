const validateEmail = (email) => {
    const validFormat = /\w{2}.*@\w{2}.*\.\w+/;

    if (email.match(validFormat)){
        return 'Email format is good! =)'
    }
    else {
        throw new Error('Invalid email format! Try again...')
    }
}

const passwordIsValid = (password) => {
    const haveUpperCase = password.match(/[A-Z]/)
    const haveLowerCase = password.match(/[a-z]/)
    const haveNumber = password.match(/[0-9]/)
    const haveSpecialCharacter = password.match(/[\!@\#\%\&\*\^~\$\.\,]/)
    const haveEightDigits = password.length
    let invalidCriteria = []

    if (!haveUpperCase || !haveLowerCase || !haveNumber || !haveSpecialCharacter || haveEightDigits < 8){
        if (!haveUpperCase){
            invalidCriteria.push('missing uppercase character') 
        } if (!haveLowerCase){
            invalidCriteria.push('missing lower case character') 
        } if (!haveNumber){
            invalidCriteria.push('missing number')
        } if (!haveSpecialCharacter){
            invalidCriteria.push('missing special character ')
        } if (haveEightDigits < 8){
            invalidCriteria.push('less then 8 digits ')
        }
        
        throw new Error (`\tINVALID PASSWORD! Your password is: \n\t${invalidCriteria}`)
    }
    else {
        return 'Your password is valid!' 
    }


    //console.log(haveLowerCase)
    //console.log(haveUpperCase)
    //console.log(haveNumber)
    //console.log(haveSpecialCharacter)
    //console.log(haveEightDigits)
}

try{
    console.log('=-=-=-=-=-=-=RESULT=-=-=-=-=-=-=')
    console.log('\t' + validateEmail('Vinicius15@gmail.com'))
    console.log('\t' + passwordIsValid('Vi123!'))
} catch(error){
    console.log(error.message)
} finally {
    console.log('\n\nFinishing program...')
}

//passwordIsValid('aB23$3#^.~')
