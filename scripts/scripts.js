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
const listCards = {
  parrot1: ["bobrossparrot", "disponivel", 0],
  parrot2: ["explodyparrot", "disponivel", 0],
  parrot3: ["fiestaparrot", "disponivel", 0],
  parrot4: ["metalparrot", "disponivel", 0],
  parrot5: ["revertitparrot", "disponivel", 0],
  parrot6: ["tripletsparrot", "disponivel", 0],
  parrot7: ["unicornparrot", "disponivel", 0],
}


const campo = document.getElementById('campo')

function solicitaCartas() {
  let qtde = 14//prompt('Escolha com quantas cartas quer jogar. Pares de 4 até 14 cartas')
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
  let listagem = []
  while (listagem.length < qtde / 2) {
    let n = aleatorio(1, 8)
    if (listagem.includes(n)) {

    } else {
      listagem.push(n)

    }
  }
  for (i = 0; i < listagem.length; i++) { listagem[i] = "parrot" + listagem[i] }
  imprimeCartas(listagem)
}

function imprimeCartas(listagem) {

  while (campo.querySelectorAll('.card').length < (listagem.length * 2)) {
    let cartinha = listagem[aleatorio(0, (listagem.length))]
    if (listCards[cartinha][2] < 2) {
      listCards[cartinha][2]++
      campo.innerHTML += `<div class="card" onclick="flipCard(this)">
        <div class="card-face back"><img src="./assets/back.png"></div>
        <div class="card-face front"><img src="./assets/${listCards[cartinha][0]}.gif"></div>
      </div>`

    }

  }
  console.log(listCards)
}




function flipCard(carta) {
  carta.classList.toggle('flipCard')
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}