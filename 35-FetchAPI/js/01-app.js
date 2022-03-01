// Fetch API
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', cargarDatos);

function cargarDatos(){
	fetch('data/datos.txt')
		.then( response => {
			console.log(response);
			console.log(response.status);
			console.log(response.statusText);
			console.log(response.url);
			console.log(response.type);

			// Podemos retornar un json o un text
			return response.text();
		})
		// Una vez hemos obtenido la respuesta, la procesamos en el siguiente then()
		.then( data => {
			console.log(data);
		})
		.catch( error => {
			console.log(error);
		});
}