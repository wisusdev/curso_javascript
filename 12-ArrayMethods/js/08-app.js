// Un poco más sobre el rest operator...
// El rest operator es muy útil para crear un nuevo arreglo sin modificar el original...

const meses01 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito01 = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300},
    { producto: 'Audifonos', precio: 200},
    { producto: 'Teclado', precio: 50},
    { producto: 'Celular', precio: 500},
    { producto: 'Bocinas', precio: 300},
    { producto: 'Laptop', precio: 800},
];

let meses02 = [...meses01, 'Julio'];
console.log(meses02);

let producto01 = { producto: 'Disco SSD', precio: 120 };
let carrito02 = [...carrito01, producto01];
console.log(carrito02);