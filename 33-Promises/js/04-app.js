// Pasar Callback Hell a Promise

const paises = [];
const nuevoPais = pais => new Promise(resolve => {
	setTimeout(() => {
		paises.push(pais);
		resolve(`Se agregò ${pais}`);
	}, 2000);
});

nuevoPais('Panamà')
	.then(result => {
		console.log(result);
		console.log(paises);

		return nuevoPais('Colombia');
	})
	.then(result => {
		console.log(result);
		console.log(paises);

		return nuevoPais('Chile');
	})
	.then(result => {
		console.log(result);
		console.log(paises);
	});

