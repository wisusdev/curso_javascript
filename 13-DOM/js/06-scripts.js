let encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado);
console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // Si lo va a encontrar
console.log(encabezado.innerHTML); // Traer el html

// TODO: se puede seleccionar de una vez
let encabezadoH2 = document.querySelector('.contenido h2').textContent;
console.log(encabezadoH2);

document.querySelector('.contenido h2').textContent = 'Nuevo header';

let image = document.querySelector('.card img');
console.log(image);

image.src = 'img/hacer2.jpg';