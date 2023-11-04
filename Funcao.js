let classe = ("")
let resultado = Calcular(20, 3);
function Calcular (vitorias, derrotas) {
    return vitorias - derrotas;

  }
  if (pontuacaoXP <= 10) {
    Classe = "Ferro";
}   
else if (pontuacaoXP <= 20) {
    Classe = "Bronze";
}   
else if (pontuacaoXP <= 50) {
    Classe = "Prata";
} 
else if (pontuacaoXP <= 70) {
    Classe = "Ouro";
} 
else if (pontuacaoXP <= 80) {
    Classe = "Platina";
} 
else if (pontuacaoXP <= 90) {
    Classe = "Ascendente";
}   
else if (pontuacaoXP <= 100) {
    Classe = "Supremo";
} 
else {
    Classe = "Lendario";
}
console.log(`Sua classificação é ${classe}`); 