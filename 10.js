let vidas = 2;
let pontos = 12;
let coletouChave = true;
let turbo = false;

// 1. Verifica se o jogador pode ganhar uma vida extra (pontos acima de 15)
if (pontos > 15) {
  vidas++;
  console.log("Vida extra concedida! Vidas:", vidas);
} else {
  console.log("Pontuação insuficiente para vida extra.");
}

// 2. Verifica se o turbo pode ser ativado (tem que ter coletado a chave e pontos > 10)
if (coletouChave && pontos > 10) {
  turbo = true;
  console.log("Turbo ativado!");
} else {
  console.log("Turbo indisponível.");
}

// 3. Verifica se o jogo deve terminar (vidas 0 ou menos)
if (vidas <= 0) {
  console.log("Game Over!");
} else {
  console.log("Continue jogando!");
}
