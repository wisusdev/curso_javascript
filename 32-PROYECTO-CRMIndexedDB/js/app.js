// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function (){

	let DB;
	const listadoCliente = document.querySelector('#listado-clientes');

	document.addEventListener('DOMContentLoaded', () => {
		createDB();

		if (window.indexedDB.open('crm', 1)){
			obtenerClientes();
		}

		listadoCliente.addEventListener('click', eliminarRegistro);
	})

	// Eliminar registro
	function eliminarRegistro(event){
		if (event.target.classList.contains('eliminar')){
			const idEliminar = Number(event.target.dataset.cliente);
			const confirmar = confirm('¿Deseas eliminar este cliente?');
			if (confirmar){
				const transaction = DB.transaction(['crm'], 'readwrite');
				const objectStore = transaction.objectStore('crm');
				objectStore.delete(idEliminar);

				transaction.onerror = function () {
					console.log('Ocurrio un error');
				}

				transaction.oncomplete = function () {
					console.log('Cliente eliminado')
					event.target.parentElement.parentElement.remove();
				}

			}
		}
	}

	// Crea la base de datos de IndexDB
	function createDB(){
		// Abrimos la coneccion
		let crearDB = window.indexedDB.open('crm', 1);

		// Notificamos si hubo un error
		crearDB.onerror = function () {
			console.log('Ocurrio un error');
		}

		// Si tuvimos exito, asignamos el resultado a la variable DB
		crearDB.onsuccess = function () {
			DB = crearDB.result;
			console.log('La base de datos fue creada');
		}

		// Esta funcion solo se ejecutara una vez (es ideal para crear nuestras tablas)
		crearDB.onupgradeneeded = function (event) {
			const database = event.target.result;

			const objectStore = database.createObjectStore('crm', {
				keyPath: 'id',
				autoIncrement: true,
			});

			objectStore.createIndex('nombre', 'nombre', {unique: false});
			objectStore.createIndex('email', 'email', {unique: true});
			objectStore.createIndex('telefono', 'telefono', {unique: false});
			objectStore.createIndex('empresa', 'empresa', {unique: false});
			objectStore.createIndex('id', 'id', {unique: true});

			console.log('Base de datos lista y creada');

		}
	}

	function obtenerClientes() {
		const abrirConexion = window.indexedDB.open('crm', 1);

		abrirConexion.onerror = function () {
			console.log('Ocurrio un error');
		}

		abrirConexion.onsuccess = function () {
			DB = abrirConexion.result;

			const objectStore = DB.transaction('crm').objectStore('crm');

			objectStore.openCursor().onsuccess = function (event) {
				const cursor = event.target.result;

				// Cursor es en este caso nuestro iterador
				if (cursor){
					const {nombre, email, telefono, empresa, id} = cursor.value;

					listadoCliente.innerHTML += `<tr>
						  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							  <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
							  <p class="text-sm leading-10 text-gray-700"> ${email} </p>
						  </td>
						  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
							  <p class="text-gray-700">${telefono}</p>
						  </td>
						  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
							  <p class="text-gray-600">${empresa}</p>
						  </td>
						  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
							  <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
							  <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
						  </td>
					  </tr>
				  	`;

					// Si existe mas registro, mostrarà el siguiente
					cursor.continue();
				} else {
					console.log('No hay mas registros');
				}
			}


		}
	}
})();