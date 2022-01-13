// createComment sirve para crear un elemento
let enlace = document.createElement('A');

// Creando el enlace
enlace.textContent = 'Nuevo link';
enlace.href = '/new-link';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.onclick = miFuncion;
console.log(enlace);

// Seleccionamos la navegaciòn
let navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

// Añadimos el nuevo enlace
navegacion.appendChild(enlace); // Inserta al final
navegacion.insertBefore(enlace, navegacion.children[1]); // Inserta despues de la posicion proporcionada

// Podemos llamar a una funciòn
function miFuncion(){
    alert('Click en el enlace');
}

// Crear un CARD
let parafo01 = document.createElement('p');
parafo01.textContent = 'Concierto';
parafo01.classList.add('categoria', 'concierto');

let parafo02 = document.createElement('p');
parafo02.textContent = 'Concierto de Rock';
parafo02.classList.add('titulo');

let parafo03 = document.createElement('p');
parafo03.textContent = '$200 por persona';
parafo03.classList.add('precio');

// Crear div con la clase de info
let info = document.createElement('div');
info.classList.add('info');
info.appendChild(parafo01);
info.appendChild(parafo02);
info.appendChild(parafo03);

// Crear imagen
let image = document.createElement('img');
image.src = 'img/hacer2.jpg';
image.alt = 'Texto alternativo';

// Crear CARD
let card = document.createElement('div');
card.classList.add('card');

// Asignar imagen
card.appendChild(image);
card.appendChild(info);

// Insertar en el HTNL
let contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // Inserta al final
contenedor.insertBefore(card, contenedor.children[0]); // Inserta en la posicion proporcionada