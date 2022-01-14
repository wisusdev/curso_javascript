// VARIABLES 
let btnSend = document.querySelector('#enviar');


eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

// FUNCIONES
function iniciarApp(){
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacity-50');
    console.log('Iniciando');
}