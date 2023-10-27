let vitoria = parseFloat()
let derrota = parseFloat()
var SaldoVitorias = parseFloat()
let nivel = " "

function CalculadoraScore(vitoria, derrota){
    SaldoVitorias = vitoria - derrota
      
if(SaldoVitorias <= 10){
    nivel = "Ferro"
}else if(SaldoVitorias > 10 <=20){
    nivel = "Bronze"
}else if(SaldoVitorias > 20 <= 50){
    nivel = "Prata"
}else if(SaldoVitorias > 50 <= 80){
    nivel = "Ouro"
}else if(SaldoVitorias > 80 <= 90){
    nivel = "Diamante"
}else if (SaldoVitorias > 90 <= 100){
    nivel = "Lendário"
}else if (SaldoVitorias >= 100){
    nivel = "Imortal"
} 

    return console.log("O herói tem saldo de " + SaldoVitorias + " e está no nível de " + nivel )
}

CalculadoraScore(45,30)