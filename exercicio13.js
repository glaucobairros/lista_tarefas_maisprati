const prompt = require('prompt-sync')()


/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

let sum = 0
let count = 0
let number

do {
    number = Number(prompt('Informe o número: '))

    if (number !== 0) {
        sum += number
        count++
    }
} while (number !== 0)

if (count === 0) {
    console.log('Não foi possível realizar a média aritmética, pois nenhum número diferente de zero foi informado!')
} else {
    const avg = sum / count
    console.log(`A média aritmética dos números informados é igual à: ${avg.toFixed(2)}`)
}

