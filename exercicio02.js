const prompt = require('prompt-sync')()


/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.*/


let age = Number(prompt('Informe a idade: '))

if (age >= 0 && age <= 12) {
    console.log(`Uma pessoa com ${age} anos é classificada como Categoria Criança`)
} else if (age >= 13 && age <= 17) {
    console.log(`Uma pessoa com ${age} anos é classificada como Categoria Adolescente`)
} else if (age >= 18 && age <= 64) {
    console.log(`Uma pessoa com ${age} anos é classificada como Categoria Adulto`)
} else if (age >= 65) {
    console.log(`Uma pessoa com ${age} anos é classificada como Categoria Idoso`)
} else {
    console.log('Idade inválida')
}
