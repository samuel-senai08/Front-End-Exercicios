const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor do produto: ', (valor) => {
    rl.question('Digite o percentual de desconto: ', (percentual) => {
        let desconto = Number(valor) * (Number(percentual) / 100);
        let valorFinal = Number(valor) - desconto;
        console.log("O valor final com desconto é: " + valorFinal);
    });
});
