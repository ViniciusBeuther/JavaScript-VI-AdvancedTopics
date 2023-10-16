function checkAge(age) {
    return new Promise ((resolve, reject) => {
        if (age){
            resolve(age > 18)
        }
        else{
            reject('An age is required!')
        }
    })
}

function getAge(birthday){
    return new Promise((resolve, reject) => {
        if (birthday){
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('Birthday is required!'))
        }
    })
}

getAge('2002-09-02')
.then((age) => checkAge(age))
.then((isOver18) => {
    if (isOver18){
        console.log('Maior de idade')
    } else{
        console.log('Menor de idade')
    }
})
.catch(error => {
    console.log(error)
})