import {borrarCita, editCita} from '../funciones.js';
import {contenedorCitas} from '../selectores.js';

// Class UI
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

export default UI;
