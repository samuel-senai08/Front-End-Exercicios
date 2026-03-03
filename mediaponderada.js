const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Solicite três notas e calcule a média ponderada ', (nota1) => {
rl.question('Digite o peso da primeira nota: ', (peso1) => {
rl.question('Digite a segunda nota: ', (nota2) => {
rl.question('Digite o peso da segunda nota: ', (peso2) => {
rl.question('Digite a terceira nota: ', (nota3) => {
rl.question('Digite o peso da terceira nota: ', (peso3) => {
    let mediaPonderada = (Number(nota1) * Number(peso1) + Number(nota2) * Number(peso2) + Number(nota3) * Number(peso3)) / (Number(peso1) + Number(peso2) + Number(peso3));
    console.log("A média ponderada é: " + mediaPonderada);
                    });
                });
            });
        });
    });
});
