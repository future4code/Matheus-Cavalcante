// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do seu triangulo"))
  const largura = Number(prompt("Digite a largura do seu triangulo"))
  area = altura * largura
  console.log(area)
}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("Digite o ano atual"))
  anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (altura * altura)
  return imc
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Digite seu nome")
  idade = prompt("Digite sua idade")
  email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt("Digite sua cor favorita")
  cor2 = prompt("Digite mais uma de suas cores favoritas")
  cor3 = prompt("Digite outra de suas cores favoritas")
  array = [cor1, cor2, cor3]
  console.log(array)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  console.log(string)
  return string
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length
}
checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}
retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  memoria = array[0]
  array.splice(0, 1, array[array.length-1])
  array.splice(array.length-1, 1, memoria)
  return array
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase()
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  anoAtual = Number(prompt("Digite o ano atual"))
  anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  anoEmissaoCarteira = Number(prompt("Digite o ano em que fez a sua carteira"))

  console.log(((anoAtual - anoNascimento) <= 20 && ((anoAtual - anoEmissaoCarteira) >= 5)) || ((anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoEmissaoCarteira >= 10)) || ((anoAtual - anoNascimento) > 50 && (anoAtual - anoEmissaoCarteira >=15)))
}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}