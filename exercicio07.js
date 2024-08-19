const prompt = require('prompt-sync')()


/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/


const appleQuantity = Number(prompt('Informe a quantidade de maçãs compradas: '))
let totalPrice = 0

if (appleQuantity < 12) {
    totalPrice = appleQuantity * 0.3
} else {
    totalPrice = appleQuantity * 0.25
}

console.log(`Valor total da compra: R$${totalPrice.toFixed(2)}`)