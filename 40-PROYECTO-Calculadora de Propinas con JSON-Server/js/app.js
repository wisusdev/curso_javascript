let cliente = {
	mesa: '',
	hora: '',
	pedido: [],
}

const categorias = {
	1 : 'Comida',
	2 : 'Bebidas',
	3 : 'Postres',
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
	const mesa = document.querySelector('#mesa').value;
	const hora = document.querySelector('#hora').value;

	// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
	const camposVacios = [mesa, hora].some(campo => campo === '');

    if(camposVacios) {
		// verificar si existe una alerta
		const existAlerta = document.querySelector('.invalid-feedback');

		if (!existAlerta){
			const alerta = document.createElement('div');
			alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
			alerta.textContent = 'Todos los campos son obligatorios';
			document.querySelector('.modal-body form').appendChild(alerta);

			setTimeout(() => {
				alerta.remove();
			}, 3000);
		}

		return;

    }

	// Los datos del formulario se asignan a cliente
	cliente = {...cliente, mesa, hora};

	// Ocultar modal
	const modalFormulario = document.querySelector('#formulario');
	const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
	modalBootstrap.hide();

	// Mostrar secciones
	mostrarSecciones();

	// Obtener datos de la API
	obtenerData();
}

function mostrarSecciones(){
	const seccionesOcultas = document.querySelectorAll('.d-none');
	seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerData(){
	const url = 'http://localhost:3000/platillos';
	fetch(url)
		.then(response => response.json())
		.then(result => mostrarData(result))
		.catch(error => console.log(error));
}

function mostrarData(platillos){
	const contenido = document.querySelector('#platillos .contenido');
	platillos.forEach(platillo => {
		const row = document.createElement('div');
		row.classList.add('row', 'py-3', 'border-top');

		const nombre = document.createElement('div');
		nombre.classList.add('col-md-4');
		nombre.textContent = platillo.nombre;

		const precio = document.createElement('div');
		precio.classList.add('col-md-3');
		precio.textContent = '$' + platillo.precio;

		const categoria = document.createElement('div');
		categoria.classList.add('col-md-3');
		categoria.textContent = categorias[platillo.categoria];

		const cantidadInput = document.createElement('input');
		cantidadInput.type = 'number';
		cantidadInput.min = 0;
		cantidadInput.value = 0;
		cantidadInput.id = `producto-${platillo.id}`;
		cantidadInput.classList.add('form-control');

		// Funcion que detecta la cantidad del platillo que se agrega
		cantidadInput.onchange = function () {
			const cantidad = parseInt(cantidadInput.value);
			// Enviamos un objeto y usamos
			agregarPlatillo({...platillo, cantidad});
		};

		const agregar = document.createElement('div');
		agregar.classList.add('col-md-2');
		agregar.appendChild(cantidadInput);

		row.appendChild(nombre);
		row.appendChild(precio);
		row.appendChild(categoria);
		row.appendChild(agregar);
		contenido.appendChild(row);
	});
}

function agregarPlatillo(producto){
	// Extraemos el predido actual
	let {pedido} = cliente;

	// Evaluamos que la cantidad de producto sea mayor a 0
	if (producto.cantidad > 0){
		// Comprueba si el producto existe en el array
		if (pedido.some(articulo => articulo.id === producto.id)){

			// El articulo ya existe, actualizamos la cantidad
			const pedidoActualizado = pedido.map(articulo => {

				if (articulo.id === producto.id){
					articulo.cantidad = producto.cantidad;
				}

				return articulo;
			});

			// Se asigna el nuevo array a cliente.pedido
			cliente.pedido = [...pedidoActualizado];
		} else {
			// El articulo no existe, se agrega al array de pedidos
			cliente.pedido = [...pedido, producto];
		}
	} else {
		// Eliminar elementos cuando la cantidad es igual a 0
		const resultado = pedido.filter(articulo => articulo.id !== producto.id);
		cliente.pedido = [...resultado];
	}

	// Limpiamos el HTML previo
	limpiarHTML();

	if (cliente.pedido.length){
		// Mostramos el resumen
		actualizarResumen();
	} else {
		mensajePedidoVacio();
	}
}

function limpiarHTML(){
	const contenido = document.querySelector('#resumen .contenido');

	while (contenido.firstChild){
		contenido.removeChild(contenido.firstChild);
	}
}

function actualizarResumen(){
	const contenido = document.querySelector('#resumen .contenido');

	const resumen = document.createElement('div');
	resumen.classList.add('col-md-6', 'card', 'px-2');

    // Titulo de la seccion
	const heading = document.createElement('h3');
	heading.textContent = 'Platos consumidos';
	heading.classList.add('my-4', 'text-center');

	// Info de la mesa
	const mesa = document.createElement('p');
	mesa.textContent = 'Mesa: ';
	mesa.classList.add('fw-bold');

	const mesaSpan = document.createElement('span');
	mesaSpan.textContent = cliente.mesa;
	mesaSpan.classList.add('fw-normal');

	mesa.appendChild(mesaSpan);

	// Info de la hora
	const hora = document.createElement('p');
	hora.textContent = 'Hora: ';
	hora.classList.add('fw-bold');

	const horaSpan = document.createElement('span');
	horaSpan.textContent = cliente.hora;
	horaSpan.classList.add('fw-normal');

	hora.appendChild(horaSpan);

	// Iterar sobre el array de pedidos
	const group = document.createElement('ul');
	group.classList.add('list-group');

	const { pedido } = cliente;
	pedido.forEach(articulo => {
		const {nombre, cantidad, precio, id} = articulo;

		const lista = document.createElement('li');
		lista.classList.add('list-group-item');

		const nombreEl = document.createElement('h5');
		nombreEl.classList.add('my-4');
		nombreEl.textContent = nombre;

		// Cantidad del articulo
		const cantidadEl = document.createElement('p');
		cantidadEl.classList.add('fw-bold');
		cantidadEl.textContent = 'Cantidad: ';

		const cantidadValor = document.createElement('span');
		cantidadValor.classList.add('fw-normal');
		cantidadValor.textContent = cantidad;

		// Precio del articulo
		const precioEl = document.createElement('p');
		precioEl.classList.add('fw-bold');
		precioEl.textContent = 'Precio: ';

		const precioValor = document.createElement('span');
		precioValor.classList.add('fw-normal');
		precioValor.textContent = '$' + precio;

		// Subtotal del articulo
		const subtotalEl = document.createElement('p');
		subtotalEl.classList.add('fw-bold');
		subtotalEl.textContent = 'Subtotal: ';

		const subtotalValor = document.createElement('span');
		subtotalValor.classList.add('fw-normal');
		subtotalValor.textContent = calcularSubtotal(precio, cantidad);

		// Boton para eliminar
		const btnEliminar = document.createElement('button');
		btnEliminar.classList.add('btn', 'btn-danger');
		btnEliminar.textContent = 'Eliminar pedido';
		btnEliminar.onclick = function (){
			eliminarProducto(id);
		}

		// Agregar valores a sus contenedores
		cantidadEl.appendChild(cantidadValor);
		precioEl.appendChild(precioValor);
		subtotalEl.appendChild(subtotalValor);

		// Agregar elementos al li
		lista.appendChild(nombreEl);
		lista.appendChild(cantidadEl);
		lista.appendChild(precioEl);
		lista.appendChild(subtotalEl);
		lista.appendChild(btnEliminar);


		// Agregamos lista al grupo
		group.appendChild(lista);
	})

	// Agregando a contenedor padre
	resumen.appendChild(heading);
	resumen.appendChild(mesa);
	resumen.appendChild(hora);
	resumen.appendChild(group);

	contenido.appendChild(resumen);

	// Mostrando el formulario de propinas
	formularioPropinas();
}

function calcularSubtotal(precio, cantidad){
	return `$${precio * cantidad}`;
}

function eliminarProducto(id){
	const {pedido} = cliente;

	// Eliminar elementos cuando la cantidad es igual a 0
	const resultado = pedido.filter(articulo => articulo.id !== id);
	cliente.pedido = [...resultado];

	// Limpiamos el HTML previo
	limpiarHTML();

	if (cliente.pedido.length){
		// Mostramos el resumen
		actualizarResumen();
	} else {
		mensajePedidoVacio();
	}

	// Reiniciamos la cantidad a 0 en el formulario
	const productoEliminado = `#producto-${id}`;
	const inputEliminado = document.querySelector(productoEliminado);
	inputEliminado.value = 0;
}

function mensajePedidoVacio(){
	const contenido = document.querySelector('#resumen .contenido');

	const texto = document.createElement('p');
	texto.classList.add('text-center');
	texto.textContent = 'Añade los elementos del pedido';

	contenido.appendChild(texto);
}

function formularioPropinas(){
	const contenido = document.querySelector('#resumen .contenido');

	const formulario = document.createElement('div');
	formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add( 'card', 'px-2');

	const heading = document.createElement('h3');
	heading.classList.add('my-4', 'text-center');
	heading.textContent = 'Propinas';

    // Radio button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
	radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    // Radio button 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
	radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('div');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    // Radio button 50%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('label');
    radio50Label.textContent = '50%';
	radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('div');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    // Agregar al div principal
	divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

	formulario.appendChild(divFormulario);

	contenido.appendChild(formulario);
}

function calcularPropina(){
	const { pedido } = cliente;
	let subtotal = 0;

	// Calcular el subtotal a pagar
	pedido.forEach(articulo => {
		subtotal += articulo.cantidad * articulo.precio;
	});

	// Seleccionar el Radio button con la propina del cliente
	const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

	// Calcular la propina
	const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

	// Calcular el total a pagar
	const total = subtotal + propina;

	// Mostrar el total al usuario
	mostrarTotalHTML(subtotal, total, propina);
}

function mostrarTotalHTML(subtotal, total, propina){
	const divTotales = document.createElement('div');
	divTotales.classList.add('total-pagar');

	// Subtotal
	const subtotalParrafo = document.createElement('p');
	subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mb-2');
	subtotalParrafo.textContent = 'Subtotal Consumo: ';

	const subtotalSpan = document.createElement('span');
	subtotalSpan.classList.add('fw-noraml');
	subtotalSpan.textContent = `$${subtotal}`;

	// Propina
	const propinaParrafo = document.createElement('p');
	propinaParrafo.classList.add('fs-4', 'fw-bold', 'mb-2');
	propinaParrafo.textContent = 'Propina: ';

	const propinaSpan = document.createElement('span');
	propinaSpan.classList.add('fw-noraml');
	propinaSpan.textContent = `$${propina}`;

	// Total
	const totalParrafo = document.createElement('p');
	totalParrafo.classList.add('fs-4', 'fw-bold', 'mb-2');
	totalParrafo.textContent = 'Total: ';

	const totalSpan = document.createElement('span');
	totalSpan.classList.add('fw-noraml');
	totalSpan.textContent = `$${total}`;

	subtotalParrafo.appendChild(subtotalSpan);
	propinaParrafo.appendChild(propinaSpan);
	totalParrafo.appendChild(totalSpan);

	// Eliminar el ùltimo resultado si existe
	const totalPagarDiv = document.querySelector('.total-pagar');
	if (totalPagarDiv){
		totalPagarDiv.remove();
	}

	divTotales.appendChild(subtotalParrafo);
	divTotales.appendChild(propinaParrafo);
	divTotales.appendChild(totalParrafo);

	const formulario = document.querySelector('.formulario > div');
	formulario.appendChild(divTotales);
}