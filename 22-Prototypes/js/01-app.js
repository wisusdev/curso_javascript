// Estatico
const client = {
    name : 'Pedro',
    age : 35
}

console.log(client);

// Dinamico y reutilizable
function Client(name, age){
    this.name = name;
    this.age = age;
}

const lara = new Client('Lara', 27);
console.log(lara);