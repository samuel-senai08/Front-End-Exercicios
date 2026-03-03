const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor em Reais para converter para Dólares: ', (base) => {
    rl.question('Digite a taxa de câmbio (1 USD = R$): ', (taxa) => {
        let valorConvertido = Number(base) / Number(taxa);
        console.log("O valor em Dólares é: " + valorConvertido);
    });
    });
