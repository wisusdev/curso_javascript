const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Primero veamos como seria el ejemplo con un forEach...
meses.forEach((mes, index) => {
    if(mes === 'Abril'){ // Si ponemos diciembre no lo va a encontrar...
        console.log(`Encontrado en el indice ${index}`);
    }
})

// FindIndex te dirá el indice es decir la ubicación del elemento en el arreglo...
let indice = meses.findIndex(mes => mes === 'Abril'); // Cambiar a Diciembre, Tendremos -1 eso quiere decir que no lo encontró
console.log(indice);


// Encontrar in indice de un arreglo de objetos
let indice02 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice02);