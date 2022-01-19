// Dinamico y reutilizable
function Client(name, balance){
    this.name = name;
    this.balance = balance;
}

const lara = new Client('Lara', 27);

function formatClient(client){
    const {name, balance} = client;
    return `El cliente ${name} tiene un saldo de ${balance}`;
}

console.log(formatClient(lara));


function Business(name, balance, category){
    this.name = name;
    this.balance = balance;
    this.category = category;
}

const wisus = new Business('Wisus', 4000, 'Internet');

function formatBusiness(business){
    const {name, balance, category} = business;
    return `El negocio ${name} tiene un saldo de $${balance} y pertenece a la categoria ${category}`;
}

console.log(formatBusiness(wisus));