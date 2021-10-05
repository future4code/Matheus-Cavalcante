
//*************Exercício de Interpretação************

/*
// Como o JS lê o código em ordem, será impresso "10, 5 e 10"
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)


// Será impresso 10, 10, 10
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)



// p e t poderiam ser renomeadas para horasDia e salarioDia respectivamente
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


*/

// ************Exercício de Escrita************

// Exercício 1
// A impressão na tela é undefined porque não atribuímos nada as variáveis, elas ainda estão indefinidas
let nome

let idade 

console.log(typeof(nome))
console.log(typeof(idade))

nome = prompt("Qual é o seu nome?")
idade = prompt("Quantos anos você tem?")

// Agora retorna que o tipo é string pelas variáveis terem sido declaradas, idade ainda aparece como string e não int porque a variável recebe do prompt sempre valores do tipo string.
console.log(typeof(nome))
console.log(typeof(idade))

console.log("Olá", nome, "você tem", idade, "anos.")


//Exercício 2
roupaPergunta = "Você gosta de roupas pretas?"

roupaResposta = prompt(roupaPergunta)

musicaPergunta = "Você gosta de rock?"

musicaResposta = prompt(musicaPergunta)

showPergunta = "Você já foi em algum show?"

showResposta = prompt(showPergunta)


console.log(roupaPergunta, "-", roupaResposta)
console.log(musicaPergunta, "-", musicaResposta)
console.log(showPergunta, "-", showResposta)


// Exercício 3
let a = 42
let b = 13

memoria = a

a = b
b = memoria

// Depois de trocados os valores, temos:
console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

// Desafio

numero1 = Number(prompt("Digite um número"))
numero2 = Number(prompt("Digite mais um número"))

console.log(typeof(numero1))
console.log(typeof(numero2))

soma = numero1 + numero2
multiplicacao = numero1 * numero2

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)