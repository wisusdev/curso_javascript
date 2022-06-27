// Separar los datos de las funciones
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

const resultado = carrito.filter(producto => {
    return producto.precio > 400;
});

console.log(resultado);

/**
 *  Una función de orden mayor (higher order functions) se denomina a cualquier función que reciba una función como parámetro o cualquier función que retorne otra función.
*/
const mayor400 = producto => {
    return producto.precio > 400;
}

const result = carrito.filter(mayor400);
console.log(result);
