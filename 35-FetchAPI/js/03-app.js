// Consulta e imprimir los resultados en un Fetch
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
	const url = 'data/empleados.json';
	fetch(url).then(response => response.json()).then(result => mostrarHTML(result)).catch( errors => console.log(errors));
}

function mostrarHTML(data){
	const contenido = document.querySelector('.contenido');
	let html = '';

	data.forEach(empleado => {
		const {id, nombre, empresa, trabajo } = empleado;

		html += `
			<p>Empleado: ${nombre}</p>
			<p>Empleado: ${empresa}</p>
			<p>Empleado: ${trabajo}</p>
			<p>Empleado: ${id}</p>
		`;
	});

	contenido.innerHTML = html;
}