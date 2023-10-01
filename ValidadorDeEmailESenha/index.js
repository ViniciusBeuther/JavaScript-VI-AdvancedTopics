import { validateEmail } from "./validation.js";
import { passwordIsValid } from "./validation.js";
import { togglePassword } from "./togglePassword.js";


const validateButton = document.querySelector('#validate-button');
const hideBtn = document.querySelector('.hide-btn');



validateButton.addEventListener('click', function (){
    const emailInput = document.querySelector('#email-input').value;    

    try {
        validateEmail(emailInput)
        passwordIsValid()
    } catch(error){
        console.log(error.message)
    }
})

hideBtn.addEventListener('click', function(){
    const passwordInput = document.querySelector('#password-input');
    togglePassword(passwordInput)
});