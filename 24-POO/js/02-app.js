// Class declaretion
class Cliente {
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

    showInfo(){
        return `Hola, ${this.name}, tu saldo es de ${this.balance}`;
    }

    // Los métodos estáticos son llamados sin instanciar su clase.
    static welcome(){
        return 'Hola usuario';
    }
}

const itsMe = new Cliente('Jesus', 500);
console.log(itsMe);
console.log(itsMe.showInfo());

// Mandamos a llamar el metodo estatico de la siguiente manera
console.log(Cliente.welcome());