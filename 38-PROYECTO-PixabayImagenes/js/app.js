const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');
const registrosPorPagina = 40;
let paginaActual = 1;
let totalPaginas;
let iterador;

window.onload = () => {
	formulario.addEventListener('submit', validarFormulario);
};

function validarFormulario(event){
	event.preventDefault();

	const terminosBusqueda = document.querySelector('#termino').value;

	if (terminosBusqueda === ''){
		mostrarMensaje('El campo es requerido');
		return;
	}

	buscarImagenes();
}

function mostrarMensaje(mensaje){
	const alerta = document.querySelector('.bg-red-100');

	if (!alerta){
		// Creamo una alerta
		const alerta = document.createElement('p');
		alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
		alerta.innerHTML = `
			<strong class="font-bold">¡Error!</strong>
			<span class="block">${mensaje}</span>
		`;

		formulario.appendChild(alerta);

		// Eliminar la alerta despues de 5s
		setTimeout(() => {
			alerta.remove();
		}, 5000)
	}
}

function buscarImagenes(){
	const terminosBusqueda = document.querySelector('#termino').value;

	const key = '4799798-e3b06df1c0d84b53f8eaef810';
	const url = `https://pixabay.com/api/?key=${key}&q=${terminosBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;

	fetch(url)
		.then(response => response.json())
		.then(result => {
			totalPaginas = calcularPagina(result.totalHits);
			mostrarImagenes(result.hits)
		}).catch(error => console.log(error));
}

// Generador que registra la cantidad de elementos de acuerdo a la pagina
function *crearPaginador(total){
	for (let index = 1; index <= total; index++ ){
		yield index;
	}
}

function calcularPagina(total){
	return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes){

	while (resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}

	// Iterar sobre el arreglo de imagenes y construir el HTML
	imagenes.forEach( imagen => {
		const { previewURL, likes, views, largeImageURL } = imagen;
		resultado.innerHTML += `
			<div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
				<div class="bg-white">
					<img class="w-full" src="${previewURL}">
					<div class="p-4">
						<p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
						<p class="font-bold">${views} <span class="font-light">Vistas</span></p>
						<a href="${largeImageURL}" target="_blank" rel="noopener noreferrer" class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1">
							Ver imagen
						</a>
					</div>
				</div>
			</div>
		`;
	});

	// Limpiar el paginador previo
	while (paginacionDiv.firstChild){
		paginacionDiv.removeChild(paginacionDiv.firstChild);
	}

	// Generamos un nuevo paginador
	imprimirPaginador();
}

function imprimirPaginador(){
	iterador = crearPaginador(totalPaginas);
	while (true){
		const {value, done} = iterador.next();

		// Si llegamos al final (done) terminamos la ejecucion de la funcion
		if (done){
			return;
		}

		// Caso contrario, generamos un botòn por cada elemento del generador
		const boton = document.createElement('a');
		boton.href = '#';
		boton.dataset.pagina = value;
		boton.textContent = value;
		boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-2', 'mr-2', 'font-bold', 'mb-10', 'rounded');

		boton.onclick = () => {
			paginaActual = value;
			buscarImagenes();
		}

		paginacionDiv.appendChild(boton);
	}
}