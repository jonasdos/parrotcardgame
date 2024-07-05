//variaveis 
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

let img1 = null
let img2 = null
let carta1 = null
let carta2 = null
let rodadas = 0
let viradas = 0
let totaljogo = 0

function solicitaCartas() {
  let qtde = prompt('Escolha com quantas cartas quer jogar. Pares de 4 até 14 cartas')
  totaljogo = qtde
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
    let parrotcard = listagem[aleatorio(0, (listagem.length))]
    if (listCards[parrotcard][2] < 2) {
      listCards[parrotcard][2]++
      campo.innerHTML += `<div class="card">
        <div class="card-face back"><img src="./assets/back.png"></div>
        <div class="card-face front"><img src="./assets/${listCards[parrotcard][0]}.gif"></div>
      </div>`

    }

  }
  iniciaJogo()
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function iniciaJogo() {
  let cartas = campo.querySelectorAll('.card')
  for (i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener('click', seguracard)
  }
  console.log(`jogo iniciado: Quantidade de cartas: ${campo.querySelectorAll('.card').length}`)


}


function seguracard(e) {
  flipCard(this)
}
let bloqueio = false
function flipCard(carta) {
  if (bloqueio) return;
  if (img1 === null) {
    rodadas++
    carta1 = carta
    img1 = carta.querySelector('.front img').src
    carta.classList.toggle('flipCard')
    carta1.removeEventListener('click', seguracard)
  } else {
    bloqueio = true
    rodadas++
    carta2 = carta
    img2 = carta.querySelector('.front img').src
    carta.classList.toggle('flipCard')
    carta2.removeEventListener('click', seguracard)
    comparaCards(img1 === img2)
  }

}

function comparaCards(resultado) {

  if (resultado) {
    img1 = null
    img2 = null
    carta1 = null
    carta2 = null
    viradas += 2

    if ((totaljogo - viradas) === 0) {
      setTimeout(msgvitoria, 500)
    } else {
      continuaJogo()
    }
  } else {
    setTimeout(reiniciacards, 1000)
  }
}

function msgvitoria() {
  alert(`Parabéns! Você venceu o jogo com ${rodadas} rodadas!`)
  location.reload()

}
function continuaJogo() {
  img1 = null
  img2 = null
  carta1 = null
  carta2 = null
  bloqueio = false
}


function reiniciacards() {
  carta1.addEventListener('click', seguracard)
  carta2.addEventListener('click', seguracard)
  carta1.classList.remove('flipCard')
  carta2.classList.remove('flipCard')
  img1 = null
  img2 = null
  carta1 = null
  carta2 = null
  bloqueio = false
}
