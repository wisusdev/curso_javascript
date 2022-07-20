// new Binding

function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Kia', 'Gris');
console.log(auto);

// Windows binding
window.color = 'Negro';
function hi(){
    console.log(color);
}

hi();