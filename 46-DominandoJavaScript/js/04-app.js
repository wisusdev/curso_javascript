// Implicit Binding

// Usamos this para indicarle a javascript de donde puede acceder a la data necesaria
const user = {
    nombre: 'Jesus',
    edad: 26,
    info() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 6,
        info(){
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }
}

user.info();
user.mascota.info();