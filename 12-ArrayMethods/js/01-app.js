const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach( mes => {
    console.log(mes);
    if(mes === 'Enero'){
        console.log('Enero si existe');
    }
})

// Opciòn mucho mas corta que retorna un bool
let result = meses.includes('Enero');
console.log(result);

// En un arreglo de objetos se utiliza .some
let exist = carrito.some( producto => producto.nombre === 'Celular')
console.log(exist);

// Some en un arreglo tradicional...
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);
