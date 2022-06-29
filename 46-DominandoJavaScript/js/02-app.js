// Hoisting

obtenerCliente('Aquiles');
function obtenerCliente(nombre){
	console.log(`El nombre del cliente es ${nombre}`)
}

const obtenerCliente02 = function (nombre) {
	console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente02('Canelo');
