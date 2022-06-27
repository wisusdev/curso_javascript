function descargarCliente(){
	return new Promise((resolve, reject) => {
		const error = true;

		setTimeout(() => {
			if (!error){
				resolve('El listado de cliente se decargò correctamente');
			} else {
				reject('Error en la conexiòn');
			}
		}, 3000);
	});
}

// Async Await
async function ejecutar(){
	try {
		const respuesta = await descargarCliente();
		console.log(1+1);
		console.log(respuesta);
	} catch (error){
		console.log(error)
	}
}

ejecutar();