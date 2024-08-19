const prompt = require('prompt-sync')()


/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/


const num = Number(prompt('Informe o valor: '))
console.log(`** Tabuada do número ${num} **`)

for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}