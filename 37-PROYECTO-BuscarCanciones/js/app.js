import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(event){
	event.preventDefault();

	// Obtener datos del formulario
	const artista = document.querySelector('#artista').value;
	const cancion = document.querySelector('#cancion').value;

	if (artista === '' || cancion === ''){


		UI.divMensaje.textContent = 'Error, todos los campos son requeridos';
		UI.divMensaje.classList.add('error');

		setTimeout(() => {
			UI.divMensaje.textContent = '';
			UI.divMensaje.classList.remove('error');
		}, 3000)
	}

	// Consultar el API
	const busqueda = new API(artista, cancion);
	busqueda.consultarAPI();
}