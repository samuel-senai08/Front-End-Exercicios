const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Calcular o volume de uma caixa:', (base) => {
    rl.question('Digite a altura da caixa: ', (altura) => {
        rl.question('Digite a profundidade da caixa: ', (profundidade) => {
            let volume = Number(base) * Number(altura) * Number(profundidade);
            console.log("O volume da caixa é: " + volume);
        });
    });
});
