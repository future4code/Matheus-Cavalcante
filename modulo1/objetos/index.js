//***************Escrita de Código*************

//Exercício 1 - A
const pessoa = {
    nome: 'Matheus',
    apelidos: ['Math', 'Cavalcante', 'Tobi']
}

function imprime(recebe){
    const alguem = recebe

    console.log(`Eu sou ${alguem.nome}, mas pode me chamar de: ${alguem.apelidos[0]}, ${alguem.apelidos[1]} ou ${alguem.apelidos[2]}`)

}

imprime(pessoa)

//Exercício 1 - B
const novaPessoa = {
    ...pessoa,
    apelidos: ['Dóbi', 'Tots', 'Tobaus']
}

imprime(novaPessoa)



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercício 2

const individuo = {
    nome: 'Matheus',
    idade: 24,
    profissao: 'Estudante',
}

const individuo2 = {
    nome: 'Mariana',
    idade: 23,
    profissao: 'Programadora'
}

function imprimeArray(objeto) {
    const baseArray = objeto
    array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    console.log(array)
}

imprimeArray(individuo)

imprimeArray(individuo2)

//------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercício 3

var carrinho = []

const fruta1 = {
    nome: 'Pinha',
    disponibilidade: true 
}

const fruta2 = {
    nome: 'Abacate',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Maçã',
    disponibilidade: true
}

function levarParaCarrinho(objeto) {
    const fruta = objeto
    carrinho.push(fruta.nome)
}

levarParaCarrinho(fruta1)
levarParaCarrinho(fruta2)
levarParaCarrinho(fruta3)

console.log(carrinho)
