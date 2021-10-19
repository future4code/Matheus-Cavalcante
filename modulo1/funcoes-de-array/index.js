//*********************Exercícios de Interpretação *******************
// Exercício 1
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array) // Serão impressos os elementos do array individualmente e também, o array original inteiro
  })


// Exercício 2
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) // Será impresso apenas o nome de cada um dos usuários


// Exercício 3
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) // Aparecerá apenas os usuários que o apelido é diferente de 'Chijo'

*/




//**********************Exercícios de Escrita*********************************
//Exercício 1
// EX 1 - A)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePets = pets.map((pet, indice, array) => {
    return pet.nome
})

console.log(nomePets)


//Ex 1 - B)
const pegarSalsicha = (pet) => {
    if(pet.raca === 'Salsicha'){
        return true
    } else {
        return false
    }
}
const salsichas = pets.filter(pegarSalsicha)
console.log(salsichas)

//Ex 1 - C)
const pegarPoodle = (cachorro) => {
    return cachorro.raca === 'Poodle'
}

const poodles = pets.filter(pegarPoodle)
console.log(poodles)

const pegarNomesPoodles = (cachorro) => {
    return cachorro.nome
} 

const nomeDosPoodles = poodles.map(pegarNomesPoodles)


const transformarEmMensagem = (nome) => {

     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}`
}

const mensagem = nomeDosPoodles.map(transformarEmMensagem)

console.log(mensagem)


// Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // Ex 2 - A)
 const nomeProdutos = produtos.map((produto, indice, array) => {
    return produto.nome
})

console.log(nomeProdutos)

