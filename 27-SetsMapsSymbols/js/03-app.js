// Maps, son listas ordenadas con llave y valor, pueden contener cualquier tipo de dato.

const client = new Map();

client.set('nombre', 'Karla');
client.set('type', 'Premiun');
client.set('credito', 5000);

console.log(client);

// Size nos dice la cantidad de elementos dentro del Map
console.log(client.size);

// Comprobar si un valor exist en el Map
console.log(client.has('nombre'));

// Obteniendo el valor asigando a una llave
console.log(client.get('nombre'));

// Eliminando un elemento del Map
client.delete('credito');

console.log(client);

// Eliminar todos los elementos del Map
client.clear();

console.log(client);

// Iniciar un Map con valores usando el constructor
const user = new Map([ ['nombre', 'Maria'], ['role', 'user'] ]);
user.set('mail', 'mail@mail.com');

// Esto cambiarà el valor
user.set('nombre', 'Doris');

console.log(user);

// Los Maps son iterables
user.forEach(data => {
	console.log(data);
});