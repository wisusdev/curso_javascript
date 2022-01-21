// Class declaretion
class Cliente01 {
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

    showInfo(){
        return `Hola, ${this.name}, tu saldo es de ${this.balance}`;
    }
}

const itsMe = new Cliente01('Jesus', 500);
console.log(itsMe);
console.log(itsMe.showInfo());

// Class expresion
const Client02 = class {

}