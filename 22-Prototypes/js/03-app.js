function Client(name, balance){
    this.name = name;
    this.balance = balance;
}

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
}

Client.prototype.subtractBalance = function(subtract){
    this.balance -= subtract;
};

// instanciamos
const client = new Client('Jesus', 8000);

// Mandamos a llamar a nuestro prototype
console.log(client.clientType());
console.log(client.clientInfo());

client.subtractBalance(200);
console.log(client.clientInfo());

console.log(client);