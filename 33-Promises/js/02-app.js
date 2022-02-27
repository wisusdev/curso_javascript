// Callback Hell
const paises = [];

function nuevoPais(pais, callback){
	paises.push(pais);
	console.log(`Se agrego ${pais}`)
	callback();
}

function mostrarPais(){
	console.log(paises);
}

function iniciarCallbackHell(){
	setTimeout(() => {
		nuevoPais('Belice', mostrarPais);
		setTimeout(() => {
			nuevoPais('Nicaragua', mostrarPais);
			setTimeout(() => {
				nuevoPais('Costa Rica', mostrarPais);
			}, 1000)
		}, 1000)
	}, 1000)
}

iniciarCallbackHell()