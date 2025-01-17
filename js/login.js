const formRegister = document.getElementById('form-register') //Formulário registro
const loginContainer = document.getElementById('login-container') //Container
const requiredAlert = document.getElementById('required-alert'); //Alerta do input e-mail
const emailInput = document.querySelector('#required-email'); //O input e-mail
const btnLogin = document.querySelector('.form-btn') //Botão login
const inputLogin = document.querySelectorAll('.required-login'); //Todos os outros inputs login
const btnRegister = document.querySelector('.btn-register') //Botão registro 
const inputRegister = document.querySelectorAll('.required-register'); //Todos os outros inputs registro


//VALIDANDO INPUTS

btnLogin.addEventListener('click', (event) =>{
    event.preventDefault()

    inputLogin.forEach((item) => {

        if (item.value !== "") {
            item.classList.remove("mandatory");
            item.classList.add("filled");
            item.nextElementSibling.classList.remove("appears")
        } else{
            item.classList.remove("filled");
            item.classList.add("mandatory");
            item.nextElementSibling.classList.add("appears")
        }
    });
});

btnRegister.addEventListener('click', (event) =>{
    event.preventDefault()

    inputRegister.forEach((item) => {

        if (item.value !== "") {
            item.classList.remove("mandatory");
            item.classList.add("filled");
            item.nextElementSibling.classList.remove("appears")
        } else{
            item.classList.remove("filled");
            item.classList.add("mandatory");
            item.nextElementSibling.classList.add("appears")
        }
    });
});

//VALIDAÇÃO INPUT E-MAIL

formRegister.addEventListener("click",  function(event){
    event.preventDefault();

    const email = emailInput.value;

    const isValid = validateEmail(email);
    if(isValid){
        requiredAlert.textContent = 'E-mail Válido'
        requiredAlert.style.color = ' #3CCC87'
        emailInput.style.border = '2px solid #3CCC87'
    }else{
        requiredAlert.textContent = 'E-mail inválido'
        requiredAlert.style.color = ' #ff3131'
        emailInput.style.border = '2px solid #ff3131'
    }
})

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
}


