// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto01 = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto02 = {
    nombre: 'Celular', 
    precio: 500
}
const producto03 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Para añadir producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto01];
 resultado = [...resultado, producto02];

 // Para añadir al inicio...
 resultado = [producto03, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);