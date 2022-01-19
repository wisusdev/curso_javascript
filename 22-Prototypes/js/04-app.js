function Client(name, balance){
    this.name = name;
    this.balance = balance;
};

// Creamos un prototype
Client.prototype.clientType = function(){
    let type;

    if (this.balance > 1000) {
        type = 'Gold';
    } else if(this.balance > 5000) {
        type = 'Pantinum';
    } else {
        type = 'Normal';
    }

    return type;
};

Client.prototype.clientInfo = function(){
    return `El cliente ${this.name} tiene un saldo de ${this.balance} y su categoria es ${this.clientType()}`;
};

Client.prototype.subtractBalance = function(subtract){
    this.balance -= subtract;
};

function People(name, balance, phone){
    Client.call(this, name, balance);
    this.phone = phone;
}

People.prototype = Object.create(Client.prototype);
People.prototype.constructor = Client;

// Instanciaciòn
const itsMe = new People('Jesus', 500, 12345678);
console.log(itsMe);
console.log(itsMe.clientInfo());

People.prototype.showPhone = function() {
    return `El numero de telefono es ${this.phone}`;
}

console.log(itsMe.showPhone());