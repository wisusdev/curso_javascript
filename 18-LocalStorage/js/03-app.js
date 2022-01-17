// Eliminar un elemento de localStorage
const nombre = localStorage.removeItem('nombre');

// Actualizar registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Abril');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

// Eliminar todos los items de localStorage
localStorage.clear();