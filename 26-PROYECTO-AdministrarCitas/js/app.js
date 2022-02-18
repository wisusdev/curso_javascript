// Campos del formulario
const mascostaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

// Clases
class Citas {
	constructor(){
		this.citas = [];
	}

	agregarCita(cita){
		this.citas = [...this.citas, cita];
	}

    editarCita(citaActualizada){
		this.citas = this.citas.map(cita => cita.id == citaActualizada.id ? citaActualizada : cita);
    }

    aliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
}

class UI {
	mostrarMensaje(mensaje, tipo){
		// Creamos un div
		const divMensaje = document.createElement('div');
		divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

		// Agregar clase dependiendo del tipo
		if (tipo === 'error') {
			divMensaje.classList.add('alert-danger');
		} else {
			divMensaje.classList.add('alert-success');
		}

		// Agregamos el mensaje
		divMensaje.textContent = mensaje;

		// Agregamos al DOM
		document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

		// Quitar la alerta despues de 5s
		setTimeout(()=>{
			divMensaje.remove();
		}, 5000 );
	}

	imprimirCitas({citas}){ // Aplicando desestructuración desde los parametros

		this.limpiarHTML();

		citas.forEach(cita => {
			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
			const divCita = document.createElement('div');
			divCita.classList.add('cita', 'p-3');
			divCita.dataset.id = id;

			// Scripting de los elemtos de la cita
			const mascotaParrafo = document.createElement('h2');
			mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
			mascotaParrafo.textContent = mascota;

			const propietarioParrafo = document.createElement('p');
			propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: ${propietario}</span>`;

			const telefonoParrafo = document.createElement('p');
			telefonoParrafo.innerHTML = `<span class="font-weight-bolder">telefono: ${telefono}</span>`;

			const fechaParrafo = document.createElement('p');
			fechaParrafo.innerHTML = `<span class="font-weight-bolder">fecha: ${fecha}</span>`;

			const horaParrafo = document.createElement('p');
			horaParrafo.innerHTML = `<span class="font-weight-bolder">hora: ${hora}</span>`;

			const sintomasParrafo = document.createElement('p');
			sintomasParrafo.innerHTML = `<span class="font-weight-bolder">sintomas: ${sintomas}</span>`;

            // Botòn de eliminar citas
            const btnRemove = document.createElement('button');
            btnRemove.classList.add('btn', 'btn-danger', 'mr-2');
            btnRemove.innerHTML = 'Eliminar';
            btnRemove.onclick = () => borrarCita(id);

            // Botòn de editar cita
            const btnEdita = document.createElement('button');
            btnEdita.classList.add('btn', 'btn-primary', 'mr-2');
            btnEdita.innerHTML = 'Editar';
            btnEdita.onclick = () => editCita(cita); // Le pasamos todos los datos de la cita

			// Agregar parrafo a divCita
			divCita.appendChild(mascotaParrafo);
			divCita.appendChild(propietarioParrafo);
			divCita.appendChild(telefonoParrafo);
			divCita.appendChild(fechaParrafo);	
			divCita.appendChild(horaParrafo);	
			divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnRemove);
            divCita.appendChild(btnEdita);


			// Agregar las citas al HTML
			contenedorCitas.appendChild(divCita);
		})
	}

	limpiarHTML(){
		while (contenedorCitas.firstChild) {
			contenedorCitas.removeChild(contenedorCitas.firstChild)
		}
	}
}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();
function eventListeners(){
	/*
	* change sirve para cuando dejamos de hacer cambios
	* input sirve para camputar cada caracter en el input mientras se van realizando cambios
	*/
	mascostaInput.addEventListener('change', datosCita);
	propietarioInput.addEventListener('change', datosCita);
	telefonoInput.addEventListener('change', datosCita);
	fechaInput.addEventListener('change', datosCita);
	horaInput.addEventListener('change', datosCita);
	sintomasInput.addEventListener('change', datosCita);

	formulario.addEventListener('submit', nuevaCita);
}

// Objeto con informaciòn de la cita
const citaObj = {
	mascota : '',
	propietario : '',
	telefono : '',
	fecha : '',
	hora : '',
	sintomas : '',
}

// Agrega datos al objeto de cita
function datosCita(event){
	citaObj[event.target.name] = event.target.value;
}

// Se validan y agrega una nueva cita a la clase de citas
function nuevaCita(event){
	event.preventDefault();

	// Extraemos la informacion del objeto de citaObj
	const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

	// Validar campos
	if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
		ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
		return;
	}

    if(editando){
		// Imprimimos un mensaje
		ui.mostrarMensaje('Se editò correctamente', 'success');

		// Pasar el objeto de la cita a edicion
		administrarCitas.editarCita({...citaObj});

		// Cambiar el texto del botòn
		formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';

		editando = false;
    } else {
        // Generar un ID unico
        citaObj.id = Date.now();

        // Creando una nueva cita
        administrarCitas.agregarCita({...citaObj}); // Le pasamos una copia, no el objeto

		// Imprimimos un mensaje
		ui.mostrarMensaje('Se agregò correctamente', 'success');
    }

	// Reiniciamos el objeto para la validacion
	reiniciarObjeto();

	// Reiniciar el formulario
	formulario.reset();

	// Mostrar el HTML
	ui.imprimirCitas(administrarCitas);
}

// Reiniciar objeto
function reiniciarObjeto(){
	citaObj.mascota = '';
	citaObj.propietario = '';
	citaObj.telefono = '';
	citaObj.fecha = '';
	citaObj.hora = '';
	citaObj.sintomas = '';
}

// Eliminar cita
function borrarCita(id){
    // Eliminar cita
    administrarCitas.aliminarCita(id);

    // Mostrar el mensaje
    ui.mostrarMensaje(`La cita ${id} fue eliminada con exito`);

    // Actualizar 
    ui.imprimirCitas(administrarCitas);
}

// Cargar los datos y editar
function editCita(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Llenar los inputs
    mascostaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
	citaObj.propietario = propietario;
	citaObj.telefono = telefono;
	citaObj.fecha = fecha;
	citaObj.hora = hora;
	citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del botòn
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar cita';

    editando = true;
}