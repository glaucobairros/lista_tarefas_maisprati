const prompt = require('prompt-sync')()


/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/


const a = Number(prompt('Informe o Lado A do triângulo: '))
const b = Number(prompt('Informe o Lado B do triângulo: '))
const c = Number(prompt('Informe o Lado C do triângulo: '))

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log(`Os lados de triângulo: A = ${a}, B = ${b} e C = ${c} formam um triângulo equilátero`)
    } else if (a !== b && b !== c && c !== a) {
        console.log(`Os lados de triângulo: A = ${a}, B = ${b} e C = ${c} formam um triângulo escaleno`)
    } else if (a === b || a === c || b === c) {
        console.log(`Os lados de triângulo A = ${a}, B = ${b} e C = ${c} formam um triângulo isósceles`)
    }
} else {
    console.log('Os valores de A, B e C fornecidos não formam um triângulo')
}