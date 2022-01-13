// Otro Array Method que quiero mostrarte es filter...
// Filter va a crearte un arreglo basado en un parametro que es evaluado..

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

let resultado01 = carrito.filter(producto => producto.precio > 400);
let resultado02 = carrito.filter(producto => producto.precio < 500);
let resultado03 = carrito.filter(producto => producto.nombre !== 'Audifonos')
let resultado04 = carrito.filter(producto => producto.nombre === 'Audifonos')

console.log(resultado01);
console.log(resultado02);
console.log(resultado03);
console.log(resultado04);