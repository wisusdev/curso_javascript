// weakMaps
const weakmap = new WeakMap();

const productObj = {
	id : 10,
};

// Asignamos 'Monior' (valor) a la llave
weakmap.set(productObj, 'Monitor');

console.log(weakmap);

// Comprobar si un objeto exist en el WeakMap
console.log(weakmap.has(productObj));

// Obteniendo data guardad en el weakmap
console.log(weakmap.get(productObj));

// Eliminando un elemento del WeakMap
console.log(weakmap.delete(productObj));

console.log(weakmap);