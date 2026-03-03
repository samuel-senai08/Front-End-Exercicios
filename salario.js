const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o salário base: ', (salario) => {

    let salarioBase = Number(salario);
    let salarioComAumento = salarioBase * 1.1;

    console.log("O salário com aumento é: " + salarioComAumento);
    
})
