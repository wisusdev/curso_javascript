const carrito = [];

const producto01 = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto02 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto01);
carrito.push(producto02);

const producto03 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto03);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
// carrito.shift();

// // Eliminar el ultimo elemento...
// carrito.pop();


// Ahora supongamos que deseas eliminar del centro...
carrito.splice(1,0); // el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
// carrito.splice(1, 2);



console.log(carrito);