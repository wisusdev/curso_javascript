import {Client} from './cliente.js';

export class Empresa extends Client {
	constructor(nombre, ahorro, categoria) {
		super(nombre, ahorro);
		this.categoria = categoria;
	}

	mostrarInformacion(){
		return `Cliente: ${this.nombre} - Saldo: ${this.ahorro} - Categoria: ${this.categoria}`;
	}
}