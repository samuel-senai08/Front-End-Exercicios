const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o peso: ', (valor1) => {
rl.question('Digite a altura:', (valor2) => {

let n1 = Number(valor1);
let n2 = Number(valor2);

console.log("O IMC é: " + (n1 / (n2 * n2)));
})})