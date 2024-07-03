let parrotCard = `<div class="card" onclick="flipCard(this)">
        <div class="card-face back"><img src="./assets/back.png"></div>
        <div class="card-face front"><img src="./assets/bobrossparrot.gif"></div>
      </div>`
const maxWidth = {
  cards4: ['none', 2],
  cards6: ['none', 3],
  cards8: ['750px', 4],
  cards10: ['900px', 5],
  cards12: ['1050px', 6],
  cards14: ['1200px', 7]
}

const campo = document.getElementById('campo')

function solicitaCartas() {
  let qtde = 8//prompt('Escolha com quantas cartas quer jogar. Pares de 4 até 14 cartas')
  if (qtde > 3 && qtde < 15 && qtde % 2 === 0) {
    carregaCartas(qtde)
    tamanhoCampo(qtde)
  }
  else {
    solicitaCartas()
  }
}
function tamanhoCampo(qtde) {
  const game = `cards${qtde}`
  campo.style.maxWidth = maxWidth[game][0]

}

function carregaCartas(qtde) {
  for (i = 1; i < qtde; i++) {
    campo.innerHTML += parrotCard
  }

}

function flipCard(carta) {
  carta.classList.toggle('flipCard')
}