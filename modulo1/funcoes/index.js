//******************* Exercício de Escrita*********************
// Exercício 1
/*
//A
    function informacoes(){
        console.log("Eu sou Matheus, tenho 24 anos, moro em São Paulo e sou estudante de matemática")
    }

//informacoes()

// B
infoUsuario = prompt("Digite seu NOME, IDADE, CIDADE E PROFISSAO, nessa ordem e separados por espaço!")

    function frase(arrayInfosUsuario){
        arrayInfosUsuario = infoUsuario.split(" ")
        console.log(`Eu sou ${arrayInfosUsuario[0]}, tenho ${arrayInfosUsuario[1]}, moro em ${arrayInfosUsuario[2]} e sou ${arrayInfosUsuario[3]}`)
    }

//frase()
*/


// Exercício 2
/*
//A
n1 = Number(prompt("Digite um número"))
n2 = Number(prompt("Digite outro número"))

    function soma(resultado){
    resultado = n1 + n2
    console.log(`A soma dos números digitados resulta em ${resultado}`)
    }

soma()


//B
    function comparacao(resultado){
        resultado = n1 >= n2
        console.log(`Is the first number bigger than the second? ${resultado}`)
    }

comparacao()

//B
numero = Number(prompt("Digite um número e descubra se ele é par"))

    function par(resultado){
        resultado = numero % 2 == 0
        console.log({resultado})
    }

par()

//D
mensagem = prompt("Digite uma mensagem")
    function funcaoMensagem(){
        console.log(`O tamanho da sua mensagem é de ${mensagem.length} caracteres e em letras maiúsculas ela fica assim: ` + mensagem.toUpperCase())
    }

funcaoMensagem()
*/

// 3
numero1 = Number(prompt("Digite um número"))
numero2 = Number(prompt("Digite outro número"))

console.log(`Os números inseridos foram ${numero1} e ${numero2}`)

    function soma(resultado){
        resultado = numero1 + numero2
        console.log(`Soma: ${resultado}`)
    }

    function multiplicacao(resultado){
        resultado = numero1 * numero2
        console.log(`Multiplicação: ${resultado}`)
    }

    function diferenca(resultado){
        resultado = numero1 - numero2
        console.log(`Diferença: ${resultado}`)
    }

    function divisao(resultado){
        resultado = numero1 / numero2
        console.log(`Divisao: ${resultado}`)
    }

soma()
multiplicacao()
diferenca()
divisao()