const moveOverlay = () => loginContainer.classList.toggle('move')
document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)
document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)



// CADASTRO 

const nome = [""]
const email = ["a"]
const senha = [""]

const valueInputName = document.querySelector('#name');
const valueInputEmail = document.querySelector('#required-email');
const valueInputSenha = document.querySelector('#senha');

function valueInput(){
    const inputName = valueInputName.value
    const inputEmail = valueInputEmail.value
    const inputSenha = valueInputSenha.value

    console.log(inputEmail, inputName, inputSenha)
}

function info(){

    nome.push(valueInputName.value)
    email.push(valueInputEmail.value)
    senha.push(valueInputSenha.value)

    console.log(nome, email, senha)
}

const emailLogin = document.querySelector('#email-login')
const senhaLogin = document.querySelector('#senha-login')

function login(){
    const inputEmailLogin = emailLogin.value
    const inputSenhaLogin = senhaLogin.value

    const valueInputEmailLogin = email.includes(inputEmailLogin)
    const valueInputSenhaLogin = senha.includes(inputSenhaLogin)

    console.log(valueInputEmailLogin, valueInputSenhaLogin)

    if(valueInputEmailLogin == true && valueInputSenhaLogin == true){
       window.location.href="https://www.google.com.br/?hl=pt-BR"
       document.querySelector('.name-student').innerHTML = `${nome}`
    }else{ 
        document.querySelector(".res"). innerHTML = `Login ou Senha incorreto.`
    }
}

