// Callbacks
const paises = ['Mexico', 'Guatemala', 'Honduras', 'El Salvador'];

function nuevoPais(pais, callback){
	setTimeout(() => {
		paises.push(pais);
		callback();
	}, 2000);
}

function mostrarPaises(){
	setTimeout(() => {
		paises.forEach(pais => {
			console.log(pais);
		})
	}, 1000);
}

mostrarPaises();

nuevoPais('Nicaragua', mostrarPaises);