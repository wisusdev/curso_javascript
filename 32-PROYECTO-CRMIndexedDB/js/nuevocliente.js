// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function (){
	const formulario = document.querySelector('#formulario');

	document.addEventListener('DOMContentLoaded', () => {
		conectarDB();

		formulario.addEventListener('submit', validarCliente);
	});

	function validarCliente(event){
		event.preventDefault();

		// Leer todos los inputs
		const nombre = document.querySelector('#nombre').value;
		const email = document.querySelector('#email').value;
		const telefono = document.querySelector('#telefono').value;
		const empresa = document.querySelector('#empresa').value;

		if (nombre === '' || email === '' || telefono === '' || empresa === ''){
			console.log('Todos los campos son requeridos');
			imprimirAlerta('Todos los campos son requerido', 'error');
			return;
		}

		// Crear un objeto con la informacion
		const cliente = {
			nombre,
			email,
			telefono,
			empresa,
		}

		cliente.id = Date.now();

		crearNuevoCliente(cliente);
	}

	function crearNuevoCliente(cliente){
		const transaction = DB.transaction(['crm'], 'readwrite');
		const objectStore = transaction.objectStore('crm');
		objectStore.add(cliente);

		transaction.onerror = () => {
			imprimirAlerta('Ocurrio un error', 'error');
		}

		transaction.oncomplete = () => {
			console.log('Cliente agregado');

			imprimirAlerta('El cliente se agrego correctamente', 'success');

			setTimeout(() => {
				window.location.href = 'index.html';
			}, 1000)
		}
	}

})();