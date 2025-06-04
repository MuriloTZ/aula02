let temChave = true;
let pontos = 25;

function podeAbrirPorta(chave, pontos) {
  return chave && pontos > 20;
}

if (podeAbrirPorta(temChave, pontos)) {
  console.log("Porta do Boss aberta!");
} else {
  console.log("Acesso negado à porta do Boss.");
}
