const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite 3 notas e calcule a media: ', (nota1) => {
    rl.question('Digite a segunda nota: ', (nota2) => {
        rl.question('Digite a terceira nota: ', (nota3) => {
            let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
            console.log("A média das notas é: " + media);
        });
    });
});
