(function (){
	let idCliente;

	const nombreInput = document.querySelector('#nombre');
	const emailInput = document.querySelector('#email');
	const telefonoInput = document.querySelector('#telefono');
	const empresaInput = document.querySelector('#empresa');

	const formulario = document.querySelector('#formulario');

	document.addEventListener('DOMContentLoaded', () => {
		conectarDB();

		// Actualiza el registro
		formulario.addEventListener('submit', actualizarCliente);

		// Verificar el Id de la URL
		const parametroURL = new URLSearchParams(window.location.search);
		idCliente = parametroURL.get('id');

		if (idCliente){
			// Usamos un setTomeout para esperar a realizar la conexion a la bd
			setTimeout(() => {
				obtenerCliente(idCliente);
			}, 100);
		}
	});

	function obtenerCliente(id){
		const transaction = DB.transaction(['crm'], 'readwrite');
		const objectStore = transaction.objectStore('crm');
		const cliente = objectStore.openCursor();
		cliente.onsuccess = function (event) {
			const cursor = event.target.result;
			if (cursor){
				if (cursor.value.id === Number(id)){
					llenarFormulario(cursor.value);
				}
				cursor.continue();
			}
		}
	}

	function actualizarCliente(event){
		event.preventDefault();
		if (nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === ''){
			imprimirAlerta('Todos los campos son requeridos', 'error');
			return;
		}

		// Actualizar cliente
		const clienteActualizado = {
			nombre: nombreInput.value,
			email: emailInput.value,
			telefono: telefonoInput.value,
			empresa: empresaInput.value,
			id: Number(idCliente),
		};

		const transaction = DB.transaction(['crm'], 'readwrite');
		const objectStore = transaction.objectStore('crm');
		objectStore.put(clienteActualizado);

		transaction.onerror = function () {
			imprimirAlerta('Ocurrio un error', 'error');
		}

		transaction.oncomplete = function () {
			imprimirAlerta('Editado Correctamente', 'success');

			setTimeout(() => {
				window.location.href = 'index.html';
			}, 1000)
		}
	}

	function llenarFormulario(datosCliente){
		const {nombre, email, telefono, empresa} = datosCliente;
		nombreInput.value = nombre;
		emailInput.value = email;
		telefonoInput.value = telefono;
		empresaInput.value = empresa;
	}

	function conectarDB() {
		const abrirConexion = window.indexedDB.open('crm', 1);
		abrirConexion.onerror = function () {
			console.log('Ocurrio un error');
		}

		abrirConexion.onsuccess = function () {
			DB = abrirConexion.result;
		}
	}

})();