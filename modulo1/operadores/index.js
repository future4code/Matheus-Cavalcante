// ***********Exercícios de Interpretação***************


/*
// Exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // True

console.log("d. ", typeof resultado) // Boolean


// Exercício 2
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero // O prompt retorna o valor digitado em formato de string, nessa operação está apenas concatenando as variáveis. Para correção, precisaria converter a string para número.

console.log(soma)


// Exercício 3
let primeiroNumero = Number(prompt("Digite um numero!")) // Convertendo para o número, o problema é resolvido!
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero 

console.log(soma)

*/

// *************** Exercícios de Escrita **********************
// Exercício 1

idadeUsuario = Number(prompt("Digite a sua idade"))
idadeAmiga = Number(prompt("Digite a idade da sua pessoa amiga"))
//resposta = idadeUsuario > idadeAmiga       //Pode se usar essas duas linhas ou fazer as operações direto no console para economizar.
//diferenca = idadeUsuario - idadeAmiga

console.log("Sua idade é maior do a da sua pessoa amiga?", idadeUsuario > idadeAmiga)
console.log("A diferença de idade entre você é de ", idadeUsuario - idadeAmiga, "anos!")


// Exercício 2
par = Number(prompt("Digite um número par")) // Ao tentar diversos números pares percebe-se que o resto da divisão é sempre 0.
console.log(par % 2) // Caso tente num número ímpar, retorna o resto de quando se divide um número não par por 2, retorna 1



// Exercício 3
numero1 = Number(prompt("Digite um número"))
numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primero numero é divisivel pelo segundo?", numero1 % numero2 == 0)
console.log("O segundo numero é divisivel pelo primeiro?", numero2 % numero1 == 0)

