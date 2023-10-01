export const togglePassword = (passwordField) => {
    if (passwordField.type == 'text'){
        passwordField.type = 'password'
    } else{
        passwordField.type = 'text'
    }    
}