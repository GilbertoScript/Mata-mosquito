// Ajustando as dimensões do palco do jogo
var height = 0
var width = 0

function ajustaTamanhoPalcoJogo() {
    width = window.innerWidth
    height = window.innerHeight

    console.log(width, height)
}

ajustaTamanhoPalcoJogo()

// Criação de posições randômicas

var positionX = Math.floor(Math.random() * width) - 90
var positionY = Math.floor(Math.random() * height) - 90

// Ajuste caso a posição for menor que 0 e não der para ver o elemento randômico
positionX = positionX < 0 ? 0 : positionX
positionY = positionY < 0 ? 0 : positionY

console.log(positionX, positionY)

// Criação do elemento HTML, para utilizar as posições randômicas
var mosquito = document.createElement('img')
mosquito.src = './img/mosquito.png'
mosquito.className = 'mosquito-1'

// Atribuindo ao novo elemenento sua nova
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'

// Transforma a posição do elemento em abosluta, para que possa percorrer o body livremente, sem se basear nas suas próprias limitações
mosquito.style.position = 'absolute'

// Inserir no arquivo html o novo elemento
document.body.appendChild(mosquito)
