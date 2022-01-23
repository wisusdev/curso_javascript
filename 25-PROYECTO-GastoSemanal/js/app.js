// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const listadoGastos = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', pedirPresupuerto);
}

// Clases

// Funciones
function pedirPresupuerto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }
}