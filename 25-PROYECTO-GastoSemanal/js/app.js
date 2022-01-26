// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const listadoGastos = document.querySelector('#gastos ul');
let presupuesto;

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

    agregarGastoListado(gastos){
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
}

// Instanciar
const ui = new UI();

// Funciones
function pedirPresupuerto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.inserPresupuesto(presupuesto);
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
    presupuesto.nuevoGasto(gasto);

    // Mensaje de gasto agregado con exito
    ui.imprimirAlerta('El gasto fue agregado correctamente', 'success');

    // Añadir el gasto al listado
    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    // Reiniciamos el formulario
    formulario.reset();
}