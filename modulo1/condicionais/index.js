//****************Exercícios de Interpretação **********************/
// EXERCÍCIO 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario) 

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

A) O código recolhe um número inserido pelo usuario, essa parte poderia ser reescrita com apenas uma variável usando Number(prompt("......")). Em seguida, ele checa se o resto do número digitado por 2 é precisamente igual a 0. De acordo com essa condição, ele imprime se o número passou ou não no teste. Básicamente, o programa checa se o número é par.

B) Números pares.

C) Números ímpares.


// Exercício 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A) O código serve para dada uma fruta digitada pelo usuario, retornar o preço para ele.

B) O preço da fruta Maçã é R$ 2.25.

C) O preço da fruta Pêra é R$ 5, isso porque sem o break o switch "continua rodando".


// Exercício 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

A) Pedindo para o usuário digitar um número e armazenando esse valor em uma variável, como o retorno do prompt é sempre string já se está convertendo número na mesma linha.

B) Esse número passou no teste e essa mensagem é secreta para 10, caso seja o número -10 dará erro.

C) Sim, como a variável mensagem está dentro do escopo do if, caso a condição seja falsa ela não será definida e fora do bloco if tem um console.log chamando a variavel.
*/





//****************Exercícios de Escrita *************************/
// Exercício 1
idade = Number(prompt("Digite a sua idade"))

if (idade >=18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir")
}

// Exercício 2
turno = prompt("Digite o turno em que você estuda M(Matutino), V(Vespertino) ou N(Noturno)").toUpperCase() // para evitar possíveis falhas caso o usuario digiti minusculo.toUpperCase()

console.log(turno)
if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Você não digitou um turno válido!")
}


//Exercício 3
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Você não digitou um turno válido!")
}

// Exercício 4
/*
genero = prompt("Qual o gênero do filme que vão assistir?").toLowerCase() //o lowercase para evitar possíveis falhas em relação a Fantasia/FANTASIA/fantasia/etc
preco = Number(prompt("Qual o valor do ingresso desse filme"))

if (genero === 'fantasia' && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :( ")
}
*/


// DESAFIO 1
genero = prompt("Qual o gênero do filme que vão assistir?").toLowerCase() //o lowercase para evitar possíveis falhas em relação a Fantasia/FANTASIA/fantasia/etc
preco = Number(prompt("Qual o valor do ingresso desse filme"))

if (genero === 'fantasia' && preco < 15) {
    lanche = prompt("Qual lanchinho você vai comprar?")
    console.log(`Bom filme! Aproveite o seu ${lanche}!!`)
} else {
    console.log("Escolha outro filme :( ")
}



// DESAFIO 2
nome = prompt("Digite seu nome completo")
tipo = prompt("Digite o tipo de jogo que deseja assistir, sendo IN para internacional e DO para doméstico").toUpperCase() // UpperCase para evitar erros
etapa = prompt("Qual a etapa do jogo? Sendo SF para semi-final, DT para decisão de terceiro lugar e FI para final").toUpperCase()
categoria = Number(prompt("Qual a categoria do jogo? 1, 2, 3 ou 4?"))
quantidade = Number(prompt("Qual a quantidade de ingressos que deseja?"))

// if para internacionais
if (tipo == 'IN' && etapa == 'SF'){
    switch(categoria){
        case 1:
            total = quantidade * 1320 * 4.10
            break
        case 2:
            total = quantidade * 880 * 4.10
            break
        case 3:
            total = quantidade * 550 * 4.10
            break
        case 4:
            total = quantidade * 220 * 4.10
    }
} else if (tipo == 'IN' && etapa == 'DT'){
    switch(categoria){
        case 1:
            total = quantidade * 660 * 4.10
            break
        case 2:
            total = quantidade * 440 * 4.10
            break
        case 3:
            total = quantidade * 330 * 4.10
            break
        case 4:
            total = quantidade * 170 * 4.10
    }
} else if (tipo == 'IN' && etapa == 'FI'){
    switch(categoria){
        case 1:
            total = quantidade * 1980 * 4.10
            break
        case 2:
            total = quantidade * 1320 * 4.10
            break
        case 3:
            total = quantidade * 880 * 4.10
            break
        case 4:
            total = quantidade * 330 * 4.10
    }   
}


// if para domésticos
if (tipo == 'DO' && etapa == 'SF'){
    switch(categoria){
        case 1:
            total = quantidade * 1320 
            break
        case 2:
            total = quantidade * 880 
            break
        case 3:
            total = quantidade * 550 
            break
        case 4:
            total = quantidade * 220 
    }
} else if (tipo == 'DO' && etapa == 'DT'){
    switch(categoria){
        case 1:
            total = quantidade * 660 
        case 2:
            total = quantidade * 440 
            break
        case 3:
            total = quantidade * 330 
            break
        case 4:
            total = quantidade * 170 
    }
} else if (tipo == 'DO' && etapa == 'FI'){
    switch(categoria){
        case 1:
            total = quantidade * 1980 
            break
        case 2:
            total = quantidade * 1320 
            break
        case 3:
            total = quantidade * 880 
            break
        case 4:
            total = quantidade * 330 
    }   
}


console.log(`Segue os detalhes do seu ingresso!\n Nome Impresso:\n Tipo do Ingresso: ${tipo}\n Etapa: ${etapa}\n Categoria: ${categoria}\n Quantidade: ${quantidade}\n Valor Total R$: ${total}`)
