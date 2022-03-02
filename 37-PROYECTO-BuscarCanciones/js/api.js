import * as UI from './interfaz.js';

class API {
	constructor(artista, cancion) {
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI(){
		const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
		fetch(url)
			.then(response => response.json())
			.then(result => {
				if (result.lyrics){
					const {lyrics} = result;
					UI.divResultado.textContent = lyrics;
					UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
				} else {
					UI.divMensaje.textContent = 'La canción que intentas buscar no existe, prueba con otra busqueda';
					UI.divMensaje.classList.add('error');

					setTimeout(() => {
						UI.divMensaje.textContent = '';
						UI.divMensaje.classList.remove('error');
					}, 3000)
				}
			})
			.catch(error => console.log(error));
	}
}

export default API;