// Consultar e imprimir resultados de peticion a una API
const cargarApiBtn = document.querySelector('#cargarAPI');
cargarApiBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
	const url = 'https://picsum.photos/list';
	fetch(url).then(response => response.json()).then(result => mostrarHTML(result)).catch(error => console.log(error));
}

function mostrarHTML(data){
	const contenido = document.querySelector('.contenido');
	let html = '';

	data.forEach(perfil => {
		const {author, author_url} = perfil;
		html += `
			<p>Autor: ${author}</p>
			<a href="${author_url}" target="_blank">Ver imagen</a>
		`;
	});

	contenido.innerHTML = html;
}