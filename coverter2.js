const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor em Dolares para converter para Reais: ', (base) => {
    rl.question('Digite a taxa de câmbio: ', (taxa) => {
        let valorConvertido = Number(base) * Number(taxa);
        console.log("O valor em Reais é: " + valorConvertido);
    });
});
