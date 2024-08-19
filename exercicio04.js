const prompt = require('prompt-sync')()


/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/


console.log('Escolha uma opção:')
console.log('1 - Opção 1')
console.log('2 - Opção 2')
console.log('3 - Opção 3')

let option = Number(prompt('Digite o número da opção escolhida: '))

switch (option) {
    case 1:
        console.log('Você escolheu a primeira opção')
        break;
    case 2:
        console.log('Você escolheu a segunda opção')
        break;
    case 3:
        console.log('Você escolheu a terceira opção')
        break;
    default:
        console.log('Opção inválida! Escolha uma opção entre 1 e 3')
}