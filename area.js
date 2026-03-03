const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a base do Retangulo: ', (base) => {
    rl.question('Digite a altura do Retangulo: ', (altura) => {
        let area = Number(base) * Number(altura);
        console.log("A área do Retangulo é: " + area);
    });
});
