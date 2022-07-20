// Self
window.onload = () => {
    console.log('Ventana lista');
}

window.nombre = 'Monitor de 20 Pul';

const product = {
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        return `El producto: ${self.nombre}`;
    }
};

console.log(product.mostrarInfo());