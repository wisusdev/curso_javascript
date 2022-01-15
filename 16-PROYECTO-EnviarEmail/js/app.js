// VARIABLES 
const btnSend = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
// Expresion regular para evaluar un email
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// VARIABLES PARA CAMPOS
let email = document.querySelector('#email');
let asunto = document.querySelector('#asunto');
let mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners(){
    // Cuando la app inicia
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    mensaje.addEventListener('blur', validarForm);

    // Reinicia el formulario
    btnReset.addEventListener('click', resetFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}

// FUNCIONES
function iniciarApp(){
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarForm(event){

    if(event.target.value.length > 0){
        // Elimina los errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        event.target.classList.remove('border', 'border-red-500');
        event.target.classList.add('border', 'border-green-500');
    } else {
        event.target.classList.remove('border', 'border-green-500');
        event.target.classList.add('border', 'border-red-500');
        showError('Todos los campos son obligatorios');
    }

    if(event.target.type === 'email'){
        if(regex.test(event.target.value)){
            // Elimina los errores
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }

            event.target.classList.remove('border', 'border-red-500');
            event.target.classList.add('border', 'border-green-500');
        } else {
            event.target.classList.remove('border', 'border-green-500');
            event.target.classList.add('border', 'border-red-500');
            showError('El correo no es valido');
        }
    }

    if (regex.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnSend.disabled = false;
        btnSend.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        console.log('Los campos necesitan ser validados');
    }
}

// Mostrar error
function showError(message){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3','mt-3', 'text-center', 'rounded', 'error');
    const errors = document.querySelectorAll('.error');

    if(errors.length === 0){
        formulario.appendChild(errorMessage);
    }
}

// Envia el email
function enviarEmail(event){
    event.preventDefault();
    console.log('Enviando...')
    
    // Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Luego de 3s se oculta el spinner y se muestra el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        // Mensaje
        const message = document.createElement('p');
        message.textContent = 'Tu mensaje fue enviado con exito';
        message.classList.add('text-center', 'my-10', 'p-5', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        // Inserta el mensaje antes del spinner
        formulario.insertBefore(message, spinner);

        setTimeout(() => {
            // Eliminar el mensaje
            message.remove();

            resetFormulario();
        }, 5000);
    }, 3000 );
}

// Resetear formulario
function resetFormulario(){
    formulario.reset();
    iniciarApp();
}