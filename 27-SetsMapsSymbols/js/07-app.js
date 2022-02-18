// Generadores es una funcion que retorna una funcion. Los generadores antes del nombre de la funcion lleva un asterisco

// Generador estatico
function *createGenerador(){
	yield 1;
	yield 'Jesus';
	yield 2+2;
	yield true;
}

const iterador = createGenerador();
console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

// Generador para carrito dinamico

function *generadorCarrito(items){
	for (let i = 0; i < items.length; i++){
		yield items[i];
	}
}

const carrito = ['Producto 01', "Producto 02", "Producto 03"];
const iterador02 = generadorCarrito(carrito);
console.log(iterador02.next());
console.log(iterador02.next());
console.log(iterador02.next());
console.log(iterador02.next());