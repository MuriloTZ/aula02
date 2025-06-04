let score = 0;

function jogarFase(pontosGanhos) {
  score += pontosGanhos;
  console.log(`Pontos ganhos nesta fase: ${pontosGanhos}. Total: ${score}`);
}

// Simula 3 fases, ganhando 5 pontos em cada uma
jogarFase(5);
jogarFase(5);
jogarFase(5);

// Verifica se desbloqueou o modo bônus
if (score >= 15) {
  console.log("Modo bônus desbloqueado!");
} else {
  console.log("Modo bônus não desbloqueado.");
}
