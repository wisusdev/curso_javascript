// Registrar un valor en local storage
localStorage.setItem('nombre', 'Jesus Navarro');

const product = {
    nombre : "Monitor de 24 pulgadas",
    precio : 300
};

const productString = JSON.stringify(product);
localStorage.setItem('producto', productString);

// Con un array
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));

// Registrar un session storage
sessionStorage.setItem('nombre', 'Jesus Avelar');