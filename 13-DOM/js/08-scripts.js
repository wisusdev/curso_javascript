let navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.firstElementChild); // Selecciona el primer elemento
console.log(navegacion.lastElementChild); // Selecciona el ultimo elemento
console.log(navegacion.childNodes); // Los espacios en blanco son considerados como elementos
console.log(navegacion.children); // Los espacios en blanco no son considerados como elementos
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);

let card = document.querySelector('.card');
console.log(card.children);
console.log(card.children[1].children);
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'Nuevo heading desde traverding the dom';
card.children[0].src = 'img/hacer2.jpg';

// Traverding the hijo al padre
console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.parentElement.parentElement);

console.log(card.nextElementSibling); // selecciona el siguiente elemento
console.log(card.nextElementSibling.nextElementSibling);

let lastCard = document.querySelector('.card:nth-child(4)');
console.log(lastCard);
console.log(lastCard.previousElementSibling); // Selecciona el elemento anterior/previo