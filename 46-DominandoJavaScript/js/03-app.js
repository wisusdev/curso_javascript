// Coercion de un tito de dato a otro
const num01 = 20;
const num02 = '10';

console.log(num01 + num02); // Coercion implicita

console.log(Number(num02)); // Coercion explicita

console.log(num01.toString()); // Coercion explicita

const pedido = [1,2,3,4];
console.log(pedido.toString()); // Coercion explicita
console.log(JSON.stringify(pedido));