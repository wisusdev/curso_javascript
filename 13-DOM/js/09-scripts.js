let enlace = document.querySelector('a');
console.log(enlace);
enlace.remove(); // Sirve para eliminar un elemento

// TODO: eliminar desde el elemto padre
let navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[1]); // Nos permite eliminar el elemento hijo