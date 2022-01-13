// Objet Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

// Objet Constructor
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }
}

const producto02 = new Producto('Laptop', 600);
console.log(producto02);