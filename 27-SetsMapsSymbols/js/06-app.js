// Iteradores 
function newIterador(items) {
	let indice = 0;
	return {
		next: () => {
			const fin = (indice >= items.length);
			const  value = !fin ? items[indice++] : undefined;

			return {
				fin, value
			}
		}
	}
}

const items = ['item 01', 'item 02', "item 03", "item 04"];

// Usando nuestro iterador
const recorrerItems = newIterador(items);

console.log(recorrerItems.next());
console.log(recorrerItems.next());
console.log(recorrerItems.next());
console.log(recorrerItems.next());
console.log(recorrerItems.next());