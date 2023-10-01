export const validateEmail = (email) => {
    const validFormat = /\w{2}.*@\w{2}.*\.\w+/;
    const emailInput = document.querySelector('#email-input');

    if (email.match(validFormat)){
        emailInput.classList.add('valid-format')
        return 'Email format is good! =)'
    } else {
        emailInput.classList.add('invalid-format')
        throw new Error('Invalid email format! Try again...')
    }
}

export const passwordIsValid = () => {
    const passwordInput = document.querySelector('#password-input')
    const password = passwordInput.value;
    
    const haveUpperCase = password.match(/[A-Z]/)
    const haveLowerCase = password.match(/[a-z]/)
    const haveNumber = password.match(/[0-9]/)
    const haveSpecialCharacter = password.match(/[\!@\#\%\&\*\^~\$\.\,]/)
    const haveEightDigits = password.length
    let invalidCriteria = []

    const list = document.querySelector('#ul-list').children

    console.log(haveEightDigits + ' ----- Debug')

    for (let i = 0; i < list.length; i++){
        if (!haveUpperCase || !haveLowerCase || !haveNumber || !haveSpecialCharacter || haveEightDigits < 8){
            if (!haveUpperCase){
                invalidCriteria.push('missing uppercase character') 
                list[1].style.color = 'red';
            } else {
                list[1].style.color = 'green';
            }
            
            if (!haveLowerCase){
                list[2].style.color = 'red';
                invalidCriteria.push('missing lower case character') 
            } else{
                list[2].style.color = 'green';
            } 
            
            if (!haveNumber){
                invalidCriteria.push('missing number')
                list[3].style.color = 'red';
            } else{
                list[3].style.color = 'green';
            } 
            
            if (!haveSpecialCharacter){
                invalidCriteria.push('missing special character ')
                list[4].style.color = 'red';
            } else{
                list[4].style.color = 'green';
            } 
            
            if (haveEightDigits < 8){
                list[5].style.color = 'red';
                invalidCriteria.push('less then 8 digits ')
            } else{
                list[5].style.color = 'green';
            }
            
        }
    }
    
    if (invalidCriteria.length > 0){
        passwordInput.classList.remove('valid-format')
        passwordInput.classList.add('invalid-format')
        
        throw new Error (`\tINVALID PASSWORD! Your password is: \n\t${invalidCriteria}`)
    } else {
        passwordInput.classList.remove('invalid-format')
        passwordInput.classList.add('valid-format')
        
        for(let i = 1; i <= 5; i++){
            list[i].style.color = 'green'
        }

        return 'Your password is valid!' 
    }
    invalidCriteria = []
}
