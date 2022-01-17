// Obtener datos del local storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const producto = localStorage.getItem('producto');
console.log(JSON.parse(producto));

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);