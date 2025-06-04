let teclaT = true;
let pontos = 60;

function ativarModoTurbo(tecla, pontos) {
  return tecla && pontos > 50;
}

if (ativarModoTurbo(teclaT, pontos)) {
  console.log("Modo Turbo ativado!");
} else {
  console.log("Modo Turbo desativado.");
}
