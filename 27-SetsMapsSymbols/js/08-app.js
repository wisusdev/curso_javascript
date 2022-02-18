// Iteradores
const ciudades = ['CD Mexico', 'San Salvador', 'Tegusigalpa', 'Antigua Guatemala'];
const ordenes = new Set([123, 432, 512, 325]);
const datos = new Map();

datos.set('nombre', 'Jesus');
datos.set('profesion', 'Programador');

// Entries Iterator
for (let entry of ciudades.entries()){
	console.log(entry);
}

for (let entry of ordenes.entries()){
	console.log(entry);
}

for (let entry of datos.entries()){
	console.log(entry);
}

// Values Iterator
for(let value of ciudades.values()){
	console.log(value);
}

for(let value of ordenes.values()){
	console.log(value);
}

for(let value of datos.values()){
	console.log(value);
}

// Keys Iterator
for(let value of ciudades.keys()){
	console.log(value);
}

for(let value of ordenes.keys()){
	console.log(value);
}

for(let value of datos.keys()){
	console.log(value);
}

// Default
for(let ciudad of ciudades){
	console.log(ciudad);
}

for(let orden of ordenes){
	console.log(orden);
}

for(let dato of datos){
	console.log(dato);
}