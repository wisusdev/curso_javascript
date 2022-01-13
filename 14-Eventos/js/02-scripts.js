let nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('click', () => {
    console.log('Click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando de nav');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de nav');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mousedown', () => {
    console.log('Mouse Down');
})

nav.addEventListener('mouseup', () => {
    console.log('Mouse Up');
})

nav.addEventListener('dbclick', () => {
    console.log('Doble Click');
})