import {mostrarAlerta, validar} from './funciones.js';
import { nuevoCliente } from './API.js';

// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function () {
	const formulario = document.querySelector('#formulario');
	formulario.addEventListener('submit', validarFormulario);

	function validarFormulario(event){
		event.preventDefault();

		const nombre = document.querySelector('#nombre').value;
		const email = document.querySelector('#email').value;
		const telefono = document.querySelector('#telefono').value;
		const empresa = document.querySelector('#empresa').value;

		const cliente = {
			nombre,
			email,
			telefono,
			empresa
		}

		if(validar(cliente)){
			// Mostrar mensaje
			mostrarAlerta('Todos los campos son obligatorios');
			return;
		};

		nuevoCliente(cliente);
	}
})();