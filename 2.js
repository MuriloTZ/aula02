let vidas = 1;
let colidiu = true;

function verificarColisao(colidiu) {
  if (colidiu) {
    vidas--;
    if (vidas <= 0) {
      console.log("Game Over");
    } else {
      console.log("Vidas restantes:", vidas);
    }
  }
}

verificarColisao(colidiu);
