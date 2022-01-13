// Event Bubbling
let cardDiv = document.querySelector('.card');
let cardInfo = document.querySelector('.info');
let cardTtitulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Click en card');
})

cardInfo.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Click en info');
})

cardTtitulo.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Click en titulo');
})