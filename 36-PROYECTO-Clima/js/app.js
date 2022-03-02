const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
	formulario.addEventListener('submit', buscarClima);
});

function buscarClima(event){
	event.preventDefault();

	// Validar informacion
	const ciudad = document.querySelector('#ciudad').value;
	const pais = document.querySelector('#pais').value;

	if (ciudad === '' || pais === ''){
		// Los campos son requeridos
		mostrarMensaje('Todos los campos son obligatorios', 'error');

		return;
	}

	// Consultar la API
	consultarAPI(ciudad, pais);
}

function mostrarMensaje(mensaje, tipo){
	const alerta = document.querySelector('.bg-red-100');

	if (!alerta){
		// Creamo una alerta
		const alerta = document.createElement('div');
		alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md-', 'mx-auto', 'mt-6', 'text-center');
		alerta.innerHTML = `
			<strong class="font-bold">¡Error!</strong>
			<span class="block">${mensaje}</span>
		`;

		container.appendChild(alerta);

		// Eliminar la alerta despues de 5s
		setTimeout(() => {
			alerta.remove();
		}, 5000)
	}
}

function consultarAPI(ciudad, pais){
	const appId = '679c570e0f793bdca6e94346f1f46f01';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

	// Mustra una animacion de carga
	Spinner();

	fetch(url)
		.then(response => response.json())
		.then(result => {
			console.log(result);

			// limpiar el html previo
			limpiarHTML();

			if (result.cod === '404'){
				mostrarMensaje('Ciudad no encontrada');
				return;
			}

			// Mostrar los datos del la respuesta
			mostrarClima(result);
		}).catch(error => console.log(error));
}

function mostrarClima(data){
	const {name, main: { temp, temp_max, temp_min }} = data;
	const centigrados = kevinCentigrado(temp);
	const max = kevinCentigrado(temp_max);
	const min = kevinCentigrado(temp_min);

	const nombreCiudad = document.createElement('p');
	nombreCiudad.innerHTML = `Clima en ${name}`;
	nombreCiudad.classList.add('fond-bold', 'text-2xl');

	const climaActual = document.createElement('p');
	climaActual.innerHTML = `${centigrados} &#8451;`;
	climaActual.classList.add('text-bold', 'text-6xl');

	const tempMax = document.createElement('p');
	tempMax.innerHTML = `Maxima ${max} &#8451;`;
	tempMax.classList.add('text-xl');

	const tempMin = document.createElement('p');
	tempMin.innerHTML = `Minima ${min} &#8451;`;
	tempMin.classList.add('text-xl');

	const resultadoDiv = document.createElement('div');
	resultadoDiv.classList.add('text-center', 'text-white');
	resultadoDiv.appendChild(nombreCiudad);
	resultadoDiv.appendChild(climaActual);
	resultadoDiv.appendChild(tempMax);
	resultadoDiv.appendChild(tempMin);

	resultado.appendChild(resultadoDiv);
}

const kevinCentigrado = grados => parseInt(grados - 273.15);

function limpiarHTML(){
	while (resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}
}

function Spinner(){
	limpiarHTML();

	const divSpinner = document.createElement('div');
	divSpinner.classList.add('sk-fading-circle');
	divSpinner.innerHTML = `
		<div class="sk-circle1 sk-circle"></div>
	  	<div class="sk-circle2 sk-circle"></div>
	  	<div class="sk-circle3 sk-circle"></div>
	  	<div class="sk-circle4 sk-circle"></div>
	  	<div class="sk-circle5 sk-circle"></div>
	  	<div class="sk-circle6 sk-circle"></div>
	  	<div class="sk-circle7 sk-circle"></div>
	  	<div class="sk-circle8 sk-circle"></div>
	  	<div class="sk-circle9 sk-circle"></div>
	  	<div class="sk-circle10 sk-circle"></div>
	  	<div class="sk-circle11 sk-circle"></div>
	  	<div class="sk-circle12 sk-circle"></div>
	`;

	resultado.appendChild(divSpinner);
}