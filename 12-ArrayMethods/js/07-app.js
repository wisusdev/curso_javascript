// En este video veremos como unir 2 arreglos, para ello existe un arreay method llamado .concat

const meses01 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses02 = ['Julio', 'Agosto', 'Septiembre', 'Octubre'];
const meses03 = ['Noviembre', 'Diciembre'];

// Unir 2 arreglos con concat...
let result01 = meses01.concat(meses02, meses03, 'Un mes extra');
console.log(result01);

// Spread operator
let result02 = [...meses01, ...meses02, ...meses03, 'Otro mes extra'];
console.log(result02);