const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
	moneda : '',
	criptomoneda : '',
}

// Crear un Promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
	resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
	consultarCriptomonedas();

	formulario.addEventListener('submit', submitFormulario);
	criptomonedasSelect.addEventListener('change', leerValor);
	monedaSelect.addEventListener('change', leerValor);
});

async function consultarCriptomonedas(){
	const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

	/*fetch(url)
		.then( response => response.json() )
		.then( result => obtenerCriptomonedas(result.Data) )
		.then( criptomonedas => selectCriptomonedas(criptomonedas) )
		.catch( error => console.log(error) ); */

	try {
		const response = await fetch(url);
		const result = await response.json();
		const cripto = await obtenerCriptomonedas(result.Data);
		selectCriptomonedas(cripto);
	} catch (error) {
		console.log(error)
	}
}

function selectCriptomonedas(criptomonedas){
	criptomonedas.forEach(cripto => {
		const {FullName, Name} = cripto.CoinInfo;

		const option = document.createElement('option');
		option.value = Name;
		option.text = FullName;

		criptomonedasSelect.appendChild(option);
	});
}

function leerValor(event){
	objBusqueda[event.target.name] = event.target.value;
}

function submitFormulario(event){
	event.preventDefault();

	// Validar formulario
	const {moneda, criptomoneda} = objBusqueda;
	if (moneda === '' || criptomoneda === ''){
		mostrarMensaje('Todos los campos son requeridos');
		return;
	}
	// Consultar el API
	consultarAPI();
}

function mostrarMensaje(mensaje){
	const alerta = document.querySelector('.error');

	if (!alerta){
		// Creamo una alerta
		const alerta = document.createElement('div');
		alerta.classList.add('error');
		alerta.textContent = mensaje;

		formulario.appendChild(alerta);

		// Eliminar la alerta despues de 5s
		setTimeout(() => {
			alerta.remove();
		}, 5000)
	}
}

async function consultarAPI(){
	const {moneda, criptomoneda} = objBusqueda;

	const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

	// Mustra una animacion de carga
	Spinner();

	/*fetch(url)
		.then(response => response.json())
		.then(result => mostrarCotizacionHTML(result.DISPLAY[criptomoneda][moneda]))
		.catch(error => console.log(error));*/

	try {
		const response = await fetch(url);
		const result = await response.json();
		mostrarCotizacionHTML(result.DISPLAY[criptomoneda][moneda]);
	} catch (error) {
		console.log(error)
	}
}

function mostrarCotizacionHTML(cotizacion){
	limpiarHTML();

	const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

	const precio = document.createElement('p');
	precio.classList.add('precio');
	precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

	const precioMasAlto = document.createElement('p');
	precioMasAlto.innerHTML = `El precio mal alto es ${HIGHDAY}`;

	const precioMasBajo = document.createElement('p');
	precioMasBajo.innerHTML = `El precio mas bajo es ${LOWDAY}`;

	const precioUltimashoras = document.createElement('p');
	precioUltimashoras.innerHTML = `Precio las ultimas 24 horas ${CHANGEPCT24HOUR}%`;

	const ultimaActualizacion = document.createElement('p');
	ultimaActualizacion.innerHTML = `La ùltima actualizacion fue ${LASTUPDATE}`;

	resultado.appendChild(precio);
	resultado.appendChild(precioMasAlto);
	resultado.appendChild(precioMasBajo);
	resultado.appendChild(precioUltimashoras);
	resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
	while (resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}
}

function Spinner(){
	limpiarHTML();

	const divSpinner = document.createElement('div');
	divSpinner.classList.add('spinner');
	divSpinner.innerHTML = `
		<div class="bounce1"></div>
  		<div class="bounce2"></div>
  		<div class="bounce3"></div>
	`;

	resultado.appendChild(divSpinner);
}