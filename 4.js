let vidas = 3;
let tempo = 5;

function emPerigo(vidas, tempo) {
  return vidas < 2 || tempo < 10;
}

if (emPerigo(vidas, tempo)) {
  console.log("Perigo!");
} else {
  console.log("Tudo sob controle.");
}
