let parrotCard = `<div onclick="showCard(this)"><img src="./assets/back.png"></div>`
const maxWidth = {
  cards4: 'none',
  cards6: 'none',
  cards8: '750px',
  cards10: '900px',
  cards12: '1050px',
  cards14: '1200px'
}
const campo = document.getElementById('campo')

function solicitaCartas() {
  let qtde = prompt('Escolha com quantas cartas quer jogar. Pares de 4 até 14 cartas')
  if (qtde > 3 && qtde < 15 && qtde % 2 === 0) {
    carregaCartas(qtde)
    tamanhoCampo(qtde)
  }
  else {
    solicitaCartas()
  }
}
function tamanhoCampo(qtde) {
  const chave = `cards${qtde}`
  campo.style.maxWidth = maxWidth[chave]
}

function carregaCartas(qtde) {
  for (i = 1; i < qtde; i++) {
    campo.innerHTML += parrotCard
  }

}

function showCard(el) {
  console.log(el)
}