// En este video estaremos viendo every...
// Every es raro, ya que todos los elementos del arreglo deberán cumplir esa condición..

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

// con un foreach seria algo asi...
let resultado01 = true;
carrito.forEach( producto => {
    if(producto.precio > 900) {
        resultado01 = false;
        return
    }
})
console.log(resultado01);


let resultado02 = carrito.every(producto => producto.precio < 1000);
console.log(resultado02);