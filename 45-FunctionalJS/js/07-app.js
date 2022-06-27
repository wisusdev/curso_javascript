// Función que retorna otra función
const obtenerCliente = () => () => console.log('Jesús Avelar');

const fn = obtenerCliente();

fn();