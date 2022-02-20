import Citas from "./classes/Citas.js";
import UI from "./classes/Ui.js";

import {mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario} from "./selectores.js";

const administrarCitas = new Citas();
const ui = new UI();
let editando = false;

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
export function datosCita(event){
	citaObj[event.target.name] = event.target.value;
}

// Se validan y agrega una nueva cita a la clase de citas
export function nuevaCita(event){
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
export function reiniciarObjeto(){
	citaObj.mascota = '';
	citaObj.propietario = '';
	citaObj.telefono = '';
	citaObj.fecha = '';
	citaObj.hora = '';
	citaObj.sintomas = '';
}

// Eliminar cita
export function borrarCita(id){
	// Eliminar cita
	administrarCitas.aliminarCita(id);

	// Mostrar el mensaje
	ui.mostrarMensaje(`La cita ${id} fue eliminada con exito`);

	// Actualizar
	ui.imprimirCitas(administrarCitas);
}

// Cargar los datos y editar
export function editCita(cita){
	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

	// Llenar los inputs
	mascotaInput.value = mascota;
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