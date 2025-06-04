let escudoAtivo = false;
let vida = 80;

function podeLutarComChefe(escudo, vida) {
  return escudo && vida > 50;
}

if (podeLutarComChefe(escudoAtivo, vida)) {
  console.log("Pode lutar com o chefe final!");
} else {
  console.log("Não pode lutar com o chefe final.");
}
