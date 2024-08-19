const prompt = require('prompt-sync')()


/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/


const grade = Number(prompt('Informe a nota (de 0 à 10): '))

if (grade >= 0 && grade < 5) {
    console.log('Reprovado')
} else if (grade >= 5 && grade < 7) {
    console.log('Recuperação')
} else if (grade >= 7 && grade <= 10) {
    console.log('Aprovado')
} else {
    console.log('Nota inválida')
}