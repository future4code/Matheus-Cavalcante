/*

//***************** Exercícios de Interpretação *******************
// Exercício 1
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. 0

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

// Exercício 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MARROCOS, 27

*/

//**************Exercícios de Escrita ****************/
// Exercício 1

/*
let nomeUsuario = prompt("Digite seu nome")
let emailUsuario = prompt("Digite seu e-mail")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)
*/

// Exercício 2
var comidas = ['Shimeji', 'Esfiha', 'Macarrão ao Molho Branco', 'Poke', 'Granola']
console.log(comidas)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

/* Não consegui fazer o desafio :(())
let suaComida = prompt("Digite sua comida favorita")

let comidaMisturada = comidas.splice(1, 0, suaComida)
console.log("Aqui está uma mistura entre minhas comidas favoritas e a sua, ", comidaMisturada)
*/

// Exercício 3
listaDeTarefas = [] 

listaDeTarefas[0] = prompt("Digite uma tarefa que precisa realizar hoje")
listaDeTarefas[1] = prompt("Digite mais uma tarefa que precisa realizar hoje")
listaDeTarefas[2] = prompt("Digite a última tarefa que precisa realizar hoje")

console.log(listaDeTarefas)

check = prompt("Qual o indice da tarefa você já realizou?")

listaDeTarefas.splice(check-1, 1)

console.log(listaDeTarefas)


// Desafio 1 (Não consegui fazer sem o split que ainda não foi visto em aula)
frase = prompt("Digite uma frase")
divisao = frase.split(' ')

console.log(divisao)

// Desafio 2 (Também não consegui sem o indexof, mas acho que desafio é pra gente procurar por fora mesmo né rs)
listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(listaFrutas.indexOf("Abacaxi"))