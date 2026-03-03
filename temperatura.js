const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma Temperatura em Graus Celsius: ', (temperatura) => {

    let Celsius = Number(temperatura);

    console.log("Convertendo para Fahrenheit: "+(Celsius * 9/5 + 32));
    
})