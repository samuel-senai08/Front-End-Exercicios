const readline = require('readline')

const rl = readline.createInterface({
    imput: process.stdin,
    output: process.stdout
})
rl.question('Solicite o consumo em KWH:', (consumo) => {
    rl.question(' Digite o calor do KWH ', (valor) => {
        let ValorTotal = Number(consumo) * Number(valor);
        console.log("O valor total a ser pago é: " + ValorTotal);
    }
    );
})
