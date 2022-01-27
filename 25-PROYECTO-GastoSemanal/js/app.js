// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const listadoGastos = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', pedirPresupuerto);
    document.addEventListener('submit', agregarGastos);
}

// Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    inserPresupuesto(monto){
        // Obteniendo datos
        const {presupuesto, restante} = monto;

        // Añadiendo datos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // Crear mensaje
        const alertMensaje = document.createElement('div');
        alertMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            alertMensaje.classList.add('alert-danger');
        } else {
            alertMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        alertMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(alertMensaje, formulario);

        // Quitar alerta
        setTimeout(() => {
            alertMensaje.remove();
        }, 3000 );
    }

    mostrarGastos(gastos){
        // Elimina el html previo
        this.limpiarHTML(); 

        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            // Crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; // Agregamos un data-id

            // Agregar HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>`;

            // Boton de borrar
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar el HTML
            listadoGastos.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while(listadoGastos.firstChild){
            listadoGastos.removeChild(listadoGastos.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');


        // Comprobar el 25% restante del presupuesto
        if((presupuesto / 4) > restante){
            console.log((presupuesto / 4), restante);
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } 
        // Comprobar el 50% restante del presupuesto
        else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } 
        // Comprobamos si un gasto es reintegrado
        else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el total es menor o igual a 0
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Instanciar
const ui = new UI();
let presupuesto01;

// Funciones
function pedirPresupuerto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto01 = new Presupuesto(presupuestoUsuario);

    ui.inserPresupuesto(presupuesto01);
}

// Añadir gastos
function agregarGastos(event){
    event.preventDefault();
    
    // Leyendo los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validando campos
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Todos los campos son requeridos', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    const gasto = {nombre, cantidad, id: Date.now()};

    // Añadiendo un nuevo gasto
    presupuesto01.nuevoGasto(gasto);

    // Mensaje de gasto agregado con exito
    ui.imprimirAlerta('El gasto fue agregado correctamente', 'success');

    // Añadir el gasto al listado
    const { gastos, restante } = presupuesto01;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto01);

    // Reiniciamos el formulario
    formulario.reset();
}

function eliminarGasto(id){
    // Elimina los gastos del objeto
    presupuesto01.eliminarGasto(id);

    // Elimina los gastos del HTML
    const {gastos, restante} = presupuesto01;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto01);
}