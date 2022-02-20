// Usamos llaves para indicar a las variables que usaremos
import nuevaFunc, {nombreCliente, saldo, mostrarInfo, suSaldo, Client} from "./cliente.js";
import {Empresa} from "./empresa.js";

console.log(nombreCliente);
console.log(saldo);

console.log(mostrarInfo(nombreCliente, saldo));
suSaldo(300);

const cliente = new Client(nombreCliente, saldo);
console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Jesus Avelar', 400, 'Web developer');
console.log(empresa);
console.log(empresa.mostrarInformacion());

nuevaFunc();