// WeakSet solo aceptan objetos, ningun otro valor, no son iterables
const weakSet = new WeakSet();

const clientObj = {
	nombre : 'Pedro',
	saldo : 300
};

weakSet.add(clientObj);

// Comprobamos si un valor existe en el WeakSet
console.log(weakSet.has(clientObj));

// Eliminando un elemento
//weakSet.delete(clientObj);

console.log(weakSet);

// pi no es un objeto, esto nos arrojarà un error
const pi = 3.1416;
//weakSet.add(pi);
