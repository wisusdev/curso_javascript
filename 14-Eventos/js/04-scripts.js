let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarForm);

function validarForm(event) {
    event.preventDefault(); // Cancela el evento si este es cancelable
    console.log('Buscando...');
    console.log(event);
    console.log(event.target.method);
    console.log(event.target.action);
}