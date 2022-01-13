let busqueda = document.querySelector('.busqueda');

/*
busqueda.addEventListener('keydown', () => {
    console.log('Precionando en el teclado');
});

busqueda.addEventListener('keyup', () => {
    console.log('Dejando de precionar en el teclado');
});

busqueda.addEventListener('blur', () => {
    console.log('Saliendo del input');
});

busqueda.addEventListener('copy', () => {
    console.log('Copiando texto');
});

busqueda.addEventListener('paste', () => {
    console.log('Pegando texto');
});

busqueda.addEventListener('cute', () => {
    console.log('Cortando texto');
});
*/

// Escuchando todos los eventos, excepto blur
busqueda.addEventListener('input', (event) => {
    //console.log(event.type);
    //console.log(event.target);
    //console.log(event.target.value);
    if(event.target.value === ''){
        console.log('Fallò la validaciòn');
    }
});