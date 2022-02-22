let DB;

document.addEventListener('DOMContentLoaded', () => {
	crmDB();

	setTimeout(() => {
		crearCliente();
	});
});

function crmDB(){
	// Crear BD V1.0
	let crmDB = window.indexedDB.open('crm', 1);

	// Si existe un error
	crmDB.onerror = function () {
		console.log('Ocurrio un error al crear la BD');
	}

	// Si se creo con exito
	crmDB.onsuccess = function () {
		console.log('La base de datos fue creada');
		DB = crmDB.result;
	}

	// Configuracion de la BD
	crmDB.onupgradeneeded = function (event) {
		const db = event.target.result;
		const objectStore = db.createObjectStore('crm', {
			keyPath: 'crm',
			autoIncrement: true,
		});

		// Definir las columnas
		objectStore.createIndex('nombre', 'nombre', {unique: false});
		objectStore.createIndex('email', 'email', {unique: true});
		objectStore.createIndex('telefono', 'telefono', {unique: false});

		console.log('Columnas creadas con exito');
	}
}

function crearCliente(){
	let transaction = DB.transaction(['crm'], 'readwrite');

	transaction.oncomplete = function () {
		console.log('Transacciòn completada');
	}

	transaction.onerror = function () {
		console.log('Hubo un error en la transacciòn');
	}

	const objectStore = transaction.objectStore('crm');

	const nuevoCliente = {
		telefono: 12345678,
		nombre: 'Jesus',
		email: 'jesus@mail.com'
	}

	const peticion = objectStore.add(nuevoCliente);
	console.log(peticion);
}