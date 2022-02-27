// Promise y .then y .catch

const aplicarDescuento = new Promise((resolve, reject) => {
	const descuento = true;
	if (descuento){
		resolve('Descuento aplicado');
	} else {
		reject('Este descuento no es valido');
	}
})

aplicarDescuento;
console.log(aplicarDescuento);

/*
* Los Promise pueden tener 3 posibles valores
* fulfilled - El promise se completò
* rejected - El promise no se complio
* pending - No se ha cimplido y tampoco fue rechazado
* */

// Mostrar informacion del Promise
aplicarDescuento
	.then(result => descuento(result))
	.catch(error => console.log(error));

function descuento(mensaje){
	console.log(mensaje);
}