// Symbols y sus caracteristicas
const sym01 = Symbol();
const sym02 = Symbol();

// Los Symbol nunca son iguales
if (sym01 === sym02){
	console.log('Son iguales');
} else {
	console.log('Son diferentes');
}

const firstName = Symbol();
const lastName = Symbol();

const peopleObj = {}

// Agregamos fistName y lastName como llaves del objeto
peopleObj[firstName] = 'Karla';
peopleObj[lastName] = 'Gonzalez';
peopleObj.type = 'admin';
peopleObj.posts = 16;

console.log(peopleObj);

// Para acceder a una propiredad con Symbol debemos usar []
console.log(peopleObj[firstName]);

// Las propiedades con Symbol no son iterables (son privadas)
for (let i in peopleObj){
	console.log(i);
}

// Definir una descripcion del Symbol
const clientName = Symbol('Nombre del cliente');
const client = {};
client[clientName] = 'Carlos';

console.log(client);
console.log(clientName);
console.log(client[clientName]);
