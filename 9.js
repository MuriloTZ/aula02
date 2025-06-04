let vidas = 0;
let tempo = 15;

function deveReiniciar(vidas, tempo) {
  return vidas === 0 || tempo === 0;
}

if (deveReiniciar(vidas, tempo)) {
  console.log("Reiniciando Jogo...");
} else {
  console.log("Jogo em andamento.");
}
