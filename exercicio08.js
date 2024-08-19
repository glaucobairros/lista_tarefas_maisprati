const prompt = require('prompt-sync')()


/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/


const value1 = Number(prompt('Informe o primeiro valor: '))
const value2 = Number(prompt('Informe o segundo valor (diferente do primeiro valor): '))

if (value1 === value2) {
    console.log('Erro! Os valores informados devem ser diferentes.')
} else {
    if (value1 < value2) {
        console.log(`Valores em ordem crescente: ${value1}, ${value2}`)
    } else {
        console.log(`Valores em ordem crescente: ${value2}, ${value1}`)
    }
}