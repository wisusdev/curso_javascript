// en este video estaremos viendo FIND.
// fiND te creará un arreglo nuevo en base al primer resultado que sea true...

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
let resultado01 = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado01 = carrito[index];
    }
})

console.log(resultado01);

// con .find seria
let resultado02 = carrito.find(producto => producto.nombre === 'Celular');
console.log(resultado02)