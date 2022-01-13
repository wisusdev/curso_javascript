let encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor = "Blue";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase";

let card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('segunda-clase');
console.log(card.classList);
