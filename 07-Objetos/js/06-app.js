const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: "China"
        }
    }
}

let {nombre, informacion: {fabricacion: {pais} } } = producto;
console.log(nombre);
console.log(pais);

