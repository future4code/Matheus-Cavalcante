// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    resultado = []
    for(let i = array.length-1; i >= 0; i--){
        resultado.push(array[i])
    }
      return resultado
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    resultado = []
    for(let i = 0; i <= array.length-1; i++){
        if(array[i] % 2 == 0){
            resultado.push(array[i])
        }
    }
    return resultado
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    resultado = []
    for(let i = 0; i <= array.length-1; i++){
        if(array[i] % 2 == 0){
            resultado.push(array[i]**2)
        }
    }
    return resultado
}
 

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC){
        return "Equilátero"
    } else if(ladoA != ladoB && ladoA != ladoC && ladoC != ladoB){
        return "Escaleno"
    } else{
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   novoObjeto = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}