let pontos = 18;
let velocidade = 100;

function atualizarVelocidade(pontos, velocidadeAtual) {
  if (pontos > 15) {
    return velocidadeAtual + 20;
  }
  return velocidadeAtual;
}

velocidade = atualizarVelocidade(pontos, velocidade);

console.log("Velocidade atual:", velocidade);
