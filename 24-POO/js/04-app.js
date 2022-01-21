// Class declaretion
class Cliente {

    // Esta propiedad es privada y solo se puede acceder desde la clase
    #name;

    constructor(name, balance){
        this.#name = name;
        this.balance = balance;
    }

    showInfo(){
        return `Hola, ${this.#name}, tu saldo es de ${this.balance}`;
    }

    // Los métodos estáticos son llamados sin instanciar su clase.
    static welcome(){
        return 'Hola usuario';
    }
}

const itsMe = new Cliente('Jesus', 300);
console.log(itsMe);
console.log(itsMe.showInfo());