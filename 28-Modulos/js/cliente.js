// Usamos export para exportar variables, funciones o clases
export const nombreCliente = 'Jesus';
export const saldo = 57.33;

export function mostrarInfo(nombre, saldo){
	return `Cliente: ${nombre} - Saldo: ${saldo}`;
}

export function suSaldo(saldo){
	if(saldo > 0){
		console.log('Usted tiene saldo disponible');
	} else {
		console.log('Usted no tiene saldo');
	}
}

export class Client {
	constructor(nombre, ahorro) {
		this.nombre = nombre;
		this.ahorro = ahorro;
	}

	mostrarInformacion(){
		return `Cliente: ${this.nombre} - Saldo: ${this.ahorro}`;
	}
}

export default function nuevaFunc(){
	console.log('Desde un export default');
}