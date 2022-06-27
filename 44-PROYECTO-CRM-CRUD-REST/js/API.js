const url = "http://localhost:3000/clientes";

// Creando un nuevo cliente
export const nuevoCliente = async (cliente) => {
    try {
        // Hacemos una peticion de tipo POST
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Enviamos al usuario el index una vez se halla creado el usuario
        window.location.href = 'index.html';

    } catch (error){
        console.log(error);
    }
}

// Obteniendo todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url); // Por defecto fetch hace una peticion de tipo GET
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// Elimina un cliente
export const eliminarCliente = async (clienteId) => {
    try {
        await fetch(`${url}/${clienteId}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error)
    }
}

// Obtener un cliente por su ID
export const obtenerCliente = async (clienteId) => {
    try {
        const resultado = await fetch(`${url}/${clienteId}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// Actualiza un registro por su ID
export const actualizaCliente = async (cliente) => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}