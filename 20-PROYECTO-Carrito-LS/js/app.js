// Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito =  document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    // Cuando agregas un curso presionando en "Agregar al carrito"
    listaCursos.addEventListener('click', agregarItem);

    // Eliminar item del carrito
    carrito.addEventListener('click', eliminarItem);

    // Cargar los items de localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    // Vaciar carrito
    vaciarCarrito.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Reseteamos el arreglo
        articulosCarrito = []; 

        // Eliminamos todo el HTML
        clearHTML(); 
    });
}

// Funciones
function agregarItem(event){
    event.preventDefault();
    if(event.target.classList.contains('agregar-carrito')){
        let currentItem = event.target.parentElement.parentElement;
        leerDatosItem(currentItem);
    }
}

// Eliminar item del carrito
function eliminarItem(event){
    if(event.target.classList.contains('borrar-curso')){
        let itemId = event.target.getAttribute('data-id');

        // Eliminar del arreglo del articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(item => item.id !== itemId );

        // Iterar sobre el carrito y mostrar el HTML
        carritoHTML();
    }
}

// Leer el contenido del HTML del Item y extraer la informacòn
function leerDatosItem(item){

    // Crear un objeto con el contenido del item
    let infoItem = {
        id      : item.querySelector('a').getAttribute('data-id'),
        titulo  : item.querySelector('h4').textContent,
        imagen  : item.querySelector('img').src,
        precio  : item.querySelector('.precio span').textContent,
        cantidad : 1
    };

    // Revisando si un item ya existe en el carrito
    let existe = articulosCarrito.some(item => item.id === infoItem.id);

    if(existe){
        // Actualizamos la cantidad
        const items = articulosCarrito.map( item => {
            if(item.id === infoItem.id){
                item.cantidad++;
                return item; // Retorna el objeto actualizado
            } else {
                return item; // Retorna los objetos no son duplicados
            }
        });

        articulosCarrito = [...items];

    } else {
        // Agregando elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoItem];
    }


    carritoHTML();
}

// Mustra el carrito de compras en el HTML
function carritoHTML(){
    // limpiar el HTML
    clearHTML()

    // Recorrer los articulos y generar el HTML
    articulosCarrito.forEach(item => {
        const {imagen, titulo, precio, cantidad, id} = item;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" alt="${titulo}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;

        // Agrega el HTML del carrito en tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar elementos del carrito a Storage
    syncStorage();
}

function syncStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina items de tbody
function clearHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}