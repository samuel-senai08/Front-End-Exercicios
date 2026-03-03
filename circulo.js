const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o raio do circulo e calcule o perimetro: ', (raio) => {
    let perimetro = 2 * Math.PI * Number(raio);
    console.log("O perímetro do círculo é: " + perimetro);
});
