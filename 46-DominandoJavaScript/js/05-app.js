// Explicit Binding

function people(p01, p02){
    console.log(`Mi nombre es ${this.nombre} y escucho ${p01} y ${p02}`);
}

const info = {
    nombre: 'Jesus'
}

const favoriteMusic = ['Rock', 'Electronica'];

// El método call() llama a una función con un valor dado this y con argumentos provistos individualmente.
people.call(info, favoriteMusic[0], favoriteMusic[1]);

// El método apply() invoca una función asignando explícitamente el objeto this y un array o similar como parámetros (argumentos) para dicha función.
people.apply(info, favoriteMusic);

// El método bind() crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, 
// con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada. 
const newFunc = people.bind(info, favoriteMusic[0], favoriteMusic[1]);
newFunc();