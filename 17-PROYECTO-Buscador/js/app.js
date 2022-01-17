// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para resultados
const resultado = document.querySelector('#resultado');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Creamos un objeto con la bùsqueda
const datoBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Mustra los registros al cargar la pagina
    mostrarAutos(autos);

    // Llena las opcion de años
    llenandoSelect()
})

// Event Listener para los campos de busqueda
marca.addEventListener('change', event => {
    datoBusqueda.marca = event.target.value;
    filtrarAuto();
})

year.addEventListener('change', event => {
    datoBusqueda.year = parseInt(event.target.value);
    filtrarAuto();
})

minimo.addEventListener('change', event => {
    datoBusqueda.minimo = event.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', event => {
    datoBusqueda.maximo = event.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', event => {
    datoBusqueda.puertas = parseInt(event.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', event => {
    datoBusqueda.transmision = event.target.value;
    filtrarAuto();
})

color.addEventListener('change', event => {
    datoBusqueda.color = event.target.value;
    filtrarAuto();
})

// Funciones
function mostrarAutos(autos){

    // Elimina el HTML previo
    clearHTML();

    autos.forEach(item => {
        const {marca, modelo, year, puertas, transmision, precio, color} = item;
        const autoHTM = document.createElement('p');
        autoHTM.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - ${color} - $${precio}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTM);

    });
}

// Limpiar el HTML
function clearHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenandoSelect(){
    for (let item = maxYear; item >= minYear; item--) {
        const opcion = document.createElement('option');
        opcion.value = item;
        opcion.textContent = item;
        year.appendChild(opcion);
    }
}

// Filtra en base a la busqueda
function filtrarAuto(){
    let resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if (resultado.length > 0) {
        mostrarAutos(resultado);
    } else {
        noResult();
    }
}

function noResult(){
    clearHTML();

    const noResult = document.createElement('div');
    noResult.classList.add('alerta', 'error');
    noResult.textContent = 'No se encontraron resultados';

    resultado.appendChild(noResult);
}

function filtrarMarca(auto){
    if (datoBusqueda.marca) {
        return auto.marca === datoBusqueda.marca;
    }

    return auto;
}

function filtrarYear(auto){
    const {year} = datoBusqueda;
    if (year) {
        return auto.year === year;
    }

    return auto;
}

function filtrarMin(auto){
    const {minimo} = datoBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMax(auto){
    const {maximo} = datoBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datoBusqueda;

    if (puertas) {
        return auto.puertas === puertas;
    }

    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datoBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto){
    const {color} = datoBusqueda;

    if (color) {
        return auto.color === color;
    }

    return auto;
}