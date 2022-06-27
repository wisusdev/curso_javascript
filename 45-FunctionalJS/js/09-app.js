// Currying and Partials

const suma = (a,b,c) => a + b + c;

const parcial01 = (a) => (b,c) => suma(a,b,c);
const primerNumero = parcial01(5);
const resultado = primerNumero(4,5);
console.log(resultado);

const parcial02 = a => b => c => suma(a,b,c);
const numero01 = parcial02(5);
const numero02 = numero01(4);
const result = numero02(3);
console.log(result);

/* Resumido */
const parcial03 = a => b => c => suma(a,b,c);
const result03 = parcial03(3)(4)(5);
console.log(result03);