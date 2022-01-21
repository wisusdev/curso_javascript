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

// Herencia de clase
class Business extends Cliente {
    constructor(name, balance, phone, category){
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }

    // Reescribir un mètodo
    static welcome(){
        return 'Bienvenido al cajero de la empresa :)';
    }
}

const itsMe = new Cliente('Jesus', 500);
console.log(itsMe);
console.log(Cliente.welcome());

const business = new Business('Goole', 7000, 12345678, 'Internet');
console.log(business);
console.log(Business.welcome());