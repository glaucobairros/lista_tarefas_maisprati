const prompt = require('prompt-sync')()


/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/


const weight = Number(prompt('Informe o peso (Kg): '))
const height = Number(prompt('Informe a altura (m): '))

if (weight <= 0 || height <= 0) {
    console.log('Valores de peso e/ou altura inválidos! Informe valores positivos para peso e altura.')
} else {

    const imc = weight / (height ** 2)

    if (imc < 18.5) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Baixo Peso`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Peso Normal`)
    } else if (imc >= 25 && imc <= 29.9) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Sobrepeso`)
    } else if (imc >= 30) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Obesidade`)
    } else {
        console.log('Erro ao realizar o cálculo do IMC')
    }

}