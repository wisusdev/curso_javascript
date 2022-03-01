// Consulta un Json
const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
	fetch('data/empleado.json')
		.then(respnse => {
			console.log(respnse);

			return respnse.json();
		}).then(data => {
			mostrarHtml(data)
		}).catch( error => {
			console.log(error);
		});
}

function mostrarHtml({empresa, id, nombre, trabajo}){
	const contenido = document.querySelector('.contenido');
	contenido.innerHTML = `
		<p>Empleado: ${nombre}</p>
		<p>Empleado: ${empresa}</p>
		<p>Empleado: ${trabajo}</p>
		<p>Empleado: ${id}</p>

	`;
}
