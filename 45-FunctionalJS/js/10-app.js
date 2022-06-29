// Composition

const obtenerNombre = info => ({
	mostrarNombre(){
		console.log(`Nombre: ${info.nombre}`);
	}
});

const guardarEmail = info => ({
	agregarEmail(email){
		console.log(`Guardando email en: ${info.email}`);
		info.email = email;
	}
});

const obtenerEmail = info => ({
	mostrarEmail(){
		console.log(`Correo: ${info.email}`);
	}
});

const obtenerEmpresa = info => ({
	mostrarEmpresa(){
		console.log(`Empresa: ${info.empresa}`);
	}
});

const obtenerPuesto = info => ({
	mostrarPuesto(){
		console.log(`Puesto: ${info.puesto}`);
	}
});

function Cliente(nombre, email, empresa) {
	let info = {
		nombre, email, empresa
	};

	return Object.assign(
		info,
		obtenerNombre(info),
		guardarEmail(info),
		obtenerEmail(info),
		obtenerEmpresa(info),
	);
}

function Empleado(nombre, email, puesto){
	let info = {
		nombre,
		email,
		puesto
	};

	return Object.assign(
		info,
		obtenerNombre(info),
		guardarEmail(info),
		obtenerEmail(info),
		obtenerPuesto(info),
	)
}

const cliente = Cliente('Pablo', 'pablo@mail.com', 'Laptops P');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@mail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('=========================================')

const empleado = Empleado('Pedro', 'pedro@mail.com', 'Dev');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@mail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();