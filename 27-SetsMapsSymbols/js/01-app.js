/*
	El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
	Los Set tambien tienen sus propios metodos
	Set es sensible a mayusculas y minusculas
*/

const car = new Set();

car.add('Camisa 00');
car.add('Camisa 01');
car.add('Camisa 02');
car.add('camisa 02');

console.log(car);

// Metodo para contar la cantidad de elementos de un Set
console.log(car.size);

// Comprobar si un valor exist en el Set
console.log(car.has('Camisa 00'));

// Eliminar un elemento del Set
car.delete('camisa 02');
console.log(car);

// Tratando de eliminar un elemento que no existe, nos devolverà un boolean
console.log(car.delete('Zapatos 01'));

// Los Sets son iterables pero no cuentan con un indice (index)
car.forEach(item => {
	console.log(item);
});

// Eliminar todos los elementos del Set
car.clear();
console.log(car);

// Ejemplo: eliminar duplicados del siguiente array
const numbers = [10, 20, 30, 40, 50, 20, 10, 30];
const noRepeat = new Set(numbers);
console.log(noRepeat);