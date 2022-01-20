// Constructores
function Seguros(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    
}

// Realiza la cotizacion con los datos
Seguros.prototype.cotizarSeguro = function() {
    /**
     * 1 = Americano 1.15
     * 2 = Asiatico 1.05
     * 3 = Europeo 1.35
     */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    // Leer el año
    const diferencia = new Date().getFullYear() - this.anio;

    // Cada año de diferencia el costo se reduce un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /**
     * Si el seguro es basico se multiplica por un 30% adicional
     * SI el seguro es completo se multiplica por un 50% adicional
     */

    if (this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI(){

}

// Llenar la opcion de los años
UI.prototype.llenarOpcion = () => {
    const max = new Date().getFullYear(), min = max - 20;
    const selectYear = document.querySelector('#year');

    for(let index = max; index > min; index--){
        let option = document.createElement('option');
        option.value = index;
        option.textContent = index;

        selectYear.appendChild(option);
    }
}

// Muestra alerta en pantalla
UI.prototype.mostrarMensaje = (mesanje, tipo) => {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mesanje;

    // Insertar en el HTML
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 5000 );
}

UI.prototype.mostrarResultado = (seguro, total) => {

    const {marca, anio, tipo} = seguro;

    let infoMarca;
    switch(marca){
        case '1':
            infoMarca = 'Americano';
            break;
        case '2':
            infoMarca = 'Asiatico';
            break;
        case '3':
            infoMarca = 'Europeo';
            break;
        default: 
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Resumen</p>
        <p class="font-bold">Marca <span class="font-normal">${infoMarca}</span></p>
        <p class="font-bold">Año <span class="font-normal">${anio}</span></p>
        <p class="font-bold">Tipo <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total <span class="font-normal">$${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    

    // Mostrar el spiner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 5000 );
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    // Llena el select con los años
    ui.llenarOpcion(); 
});

eventListener();
function eventListener(){
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(event){
    event.preventDefault();
    // Leer la marca
    const marca = document.querySelector('#marca').value;

    // Leer el año
    const anio = document.querySelector('#year').value;

    // Leer la cobertura
    const cobertura = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || anio === '' || cobertura === ''){
        ui.mostrarMensaje('Todos los campos son requeridos', 'error')
        return;
    }

    ui.mostrarMensaje('Cotizando', 'correcto')

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }

    // Instanciando el seguro
    const seguro = new Seguros(marca, anio, cobertura);
    const total = seguro.cotizarSeguro();

    // Usar el protorype para el seguro
    ui.mostrarResultado(seguro, total);
}