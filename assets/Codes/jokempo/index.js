const prompt = require("prompt-sync")();
console.clear()

let introducao = prompt("JOGO JOKENPÔ \n==================== \nPressione [ENTER] para começar... \n")

let resposta = "s"

const continuacaoDeJogo = ['s','S','SIM','sim',1]
const possibilidadesDeJogada = ['Pedra', 'Papel', 'Tesoura']
const possiveisResultados = ['GANHOU', 'PERDEU', 'EMPATE']

while (resposta == continuacaoDeJogo[1] || resposta == continuacaoDeJogo[2] || resposta == continuacaoDeJogo[3] || resposta == continuacaoDeJogo[4] || resposta == continuacaoDeJogo[0]) {
  console.clear()

  let numero_de_rodadas = prompt("Quantas rodadas serão jogadas? ")
    
  let pontuacao_computador = 0
  let pontuacao_jogador = 0

  for(i = 1; i <= numero_de_rodadas; i++) {
    let jogada_computador = Math.floor(Math.random() * 3+1)
    console.log(`\nRodada ${i}`)
    let jogada = 0
    let jogada_jogador = prompt("Escolha [1]PEDRA [2]PAPEL ou [3]TESOURA: ")

    while (jogada_jogador != 1 && jogada_jogador.toLowerCase() != "pedra" && jogada_jogador != 2 && jogada_jogador.toLowerCase() != "papel" && jogada_jogador != 3 && jogada_jogador.toLowerCase() != "tesoura") {
      console.log("\nRESPOSTA INVÁLIDA!")
      jogada_jogador = prompt("Escolha [1]PEDRA [2]PAPEL ou [3]TESOURA: ")
    }

    if (jogada_jogador == 1 || jogada_jogador.toLowerCase() == "pedra") {
      console.log(`Jogador: ${possibilidadesDeJogada[0]}`)
      jogada = 1
    } else if (jogada_jogador == 2 || jogada_jogador.toLowerCase() == "papel") {
      console.log(`Jogador: ${possibilidadesDeJogada[1]}`)
      jogada = 2
    } else if (jogada_jogador == 3 || jogada_jogador.toLowerCase() == "tesoura") {
      console.log(`Jogador: ${possibilidadesDeJogada[2]}`)
      jogada = 3
    }

    if (jogada_computador == 1) {
      console.log(`Computador: ${possibilidadesDeJogada[0]}`)
    } else if (jogada_computador == 2) {
      console.log(`Computador: ${possibilidadesDeJogada[1]}`)
    } else if (jogada_computador == 3) {
      console.log(`Computador: ${possibilidadesDeJogada[2]}`)
    }

    if (jogada == 1 && jogada_computador == 1) {
      console.log(`${possiveisResultados[2]}`)
    } else if (jogada == 1 && jogada_computador == 2) {
      console.log(`${possiveisResultados[1]}`)
      pontuacao_computador++
    } else if (jogada == 1 && jogada_computador == 3) {
      console.log(`${possiveisResultados[0]}`)
      pontuacao_jogador++
    } else if (jogada == 2 && jogada_computador == 1) {
      console.log(`${possiveisResultados[0]}`)
      pontuacao_jogador++
    } else if (jogada == 2 && jogada_computador == 2) {
      console.log(`${possiveisResultados[2]}`)
    } else if (jogada == 2 && jogada_computador == 3) {
      console.log(`${possiveisResultados[1]}`)
      pontuacao_computador++
    } else if (jogada == 3 && jogada_computador == 1) {
      console.log(`${possiveisResultados[1]}`)
      pontuacao_computador++
    } else if (jogada == 3 && jogada_computador == 2) {
      console.log(`${possiveisResultados[0]}`)
      pontuacao_jogador++
    } else if (jogada == 3 && jogada_computador == 3) {
      console.log(`${possiveisResultados[2]}`)
    }
    }
    console.log()
    const final = prompt("Pressione [ENTER] para ver os resultados.")
    console.clear()

    if (pontuacao_computador > pontuacao_jogador){
      console.log("\nO COMPUTADOR GANHOU")
      console.log(`Você: ${pontuacao_jogador} \nComputador: ${pontuacao_computador}`)
    } else if (pontuacao_computador < pontuacao_jogador){
      console.log("\nVOCÊ É O GRANDE VENCEDOR!")
      console.log(`Você: ${pontuacao_jogador} \nComputador: ${pontuacao_computador}`)
    } else if (pontuacao_computador == pontuacao_jogador){
      console.log("\nEMPATE")
      console.log(`Você: ${pontuacao_jogador} \nComputador: ${pontuacao_computador}`)
  }

  console.log()
  resposta = prompt("Gostaria de jogar de novo? [1]SIM [2]NÃO ")
}
console.log("\nO jogo acabou.")

////Criado por Douglas Volcato
////Github: https://github.com/DouglasVolcato