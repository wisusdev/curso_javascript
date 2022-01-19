const hoy = new Date();

console.log(hoy); // Imprime la fecha actual
console.log(hoy.getFullYear()); // Imprime el año
console.log(hoy.getMonth()); // Imprime el mes
console.log(hoy.getHours()); // Imprime la hora
console.log(hoy.getMinutes()); // Imprime el minuto
console.log(hoy.getTime()); // Imprime el número de milisegundos desde el 1 de enero de 1970

console.log(hoy.toLocaleString());
console.log(hoy.toLocaleDateString());
console.log(hoy.toLocaleTimeString());


console.log(hoy.setFullYear(2010)); // Asignar una fecha con set