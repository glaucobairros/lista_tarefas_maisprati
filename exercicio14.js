const prompt = require('prompt-sync')()


/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const num = Number(prompt('Informe o número: '))
let fatorial = 1
let i = num

while (i > 0) {
    fatorial *= i
    i--
}

console.log(`O fatorial do número ${num} é ${fatorial}`)