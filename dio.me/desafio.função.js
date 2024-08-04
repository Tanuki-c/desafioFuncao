let vitorias =  27
let derrotas = 2
let nivel
let resultado

function resultadoVitoriaDerrota(vitorias,derrotas){

   resultado = vitorias - derrotas
   console.log(resultado)
   return resultado
   
}

resultadoVitoriaDerrota(vitorias,derrotas)

if (resultado < 10){
    console.log("seu rank é ferro")
    nivel = "ferro"
}
else if(resultado > 11 && resultado < 20){
    console.log("seu rank é bronze")
    nivel = "bronze"

}
else if (resultado > 21 && resultado < 50){
 console.log("seu rank é prata")
 nivel = "prata"

}
else if (resultado > 51 && resultado < 80){
    console.log("seu rank é ouro")
    nivel = "ouro"

}
else if (resultado > 81 && resultado < 90){
    console.log("seu rank é diamante")
    nivel = "diamante"

}
else if (resultado > 91 && resultado < 100){
    console.log("seu rank é lendario")
    nivel = "lendario"

}
else if (resultado > 101){
    console.log("seu rank é imortal")
    nivel = "imortal"

}

console.log("O Herói tem de saldo de "  + vitorias ,  " está no nível de " + nivel)