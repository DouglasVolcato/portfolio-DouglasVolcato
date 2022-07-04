const prompt = require("prompt-sync")();
console.clear()
let pontuacao = 0
const introducao1 = prompt("JOGO DETETIVE \n============= \nPressione [ENTER] para começar.")
const introducao2 = prompt("\nDe acordo com a polícia, o corpo da vítima foi encontrado em seu quarto com diversos cortes pelo corpo,... \n[ENTER]")
const introducao3 = prompt("\nA cena do crime estava completamente bagunçada e a janela quebrada, indicando que provavelmente houve uma luta corporal e o assassino fugiu pela janela. \n[ENTER]")
const introducao4 = prompt("\nCom essas informações, o detetive encarregado do interrogatório faz as seguintes perguntas: \n[ENTER]")
console.clear()
console.log()
let pergunta1 = prompt("1) Está nervoso(a) com esse interrogatório? 1.[SIM] 2.[NÃO]")
while (pergunta1 != 2 && pergunta1 != 1 && pergunta1 != "s" && pergunta1 != "S" && pergunta1 != "sim" && pergunta1 != "SIM" && pergunta1 != "n" && pergunta1 != "N" && pergunta1 != "NÃO" && pergunta1 != "não" && pergunta1 != "NAO" && pergunta1 != "nao") {
    console.log("\nRESPOSTA INVÁLIDA, opções de resposta: 1.[SIM] 2.[NÃO]")
    pergunta1 = prompt("1) Está nervoso(a) com esse interrogatório? 1.[SIM] 2.[NÃO]")
}
console.clear()
console.log()
let pergunta2 = prompt("2) Você conhecia a vítima? 1.[SIM] 2.[NÃO]")
while (pergunta2 != 2 && pergunta2 != 1 && pergunta2 != "s" && pergunta2 != "S" && pergunta2 != "sim" && pergunta2 != "SIM" && pergunta2 != "n" && pergunta2 != "N" && pergunta2 != "NÃO" && pergunta2 != "não" && pergunta2 != "NAO" && pergunta2 != "nao") {
    console.log("\nRESPOSTA INVÁLIDA, opções de resposta: 1.[SIM] 2.[NÃO]")
    pergunta2 = prompt("2) Você conhecia a vítima? 1.[SIM] 2.[NÃO]")
}
console.clear()
console.log()
let pergunta3 = prompt("3) Caso tenha respondido que sim, sua relação com a vítima era ruim? 1.[SIM] 2.[NÃO]")
while (pergunta3 != 2 && pergunta3 != 1 && pergunta3 != "s" && pergunta3 != "S" && pergunta3 != "sim" && pergunta3 != "SIM" && pergunta3 != "n" && pergunta3 != "N" && pergunta3 != "NÃO" && pergunta3 != "não" && pergunta3 != "NAO" && pergunta3 != "nao") {
    console.log("\nRESPOSTA INVÁLIDA, opções de resposta: 1.[SIM] 2.[NÃO]")
    pergunta3 = prompt("3) Caso tenha respondido que sim, sua relação com a vítima era ruim? 1.[SIM] 2.[NÃO]")
}
console.clear()
console.log()
let pergunta4 = prompt("4) Você viu a vítima no dia do crime? 1.[SIM] 2.[NÃO]")
while (pergunta4 != 2 && pergunta4 != 1 && pergunta4 != "s" && pergunta4 != "S" && pergunta4 != "sim" && pergunta4 != "SIM" && pergunta4 != "n" && pergunta4 != "N" && pergunta4 != "NÃO" && pergunta4 != "não" && pergunta4 != "NAO" && pergunta4 != "nao") {
    console.log("\nRESPOSTA INVÁLIDA, opções de resposta: 1.[SIM] 2.[NÃO]")
    pergunta4 = prompt("4) Você viu a vítima no dia do crime? 1.[SIM] 2.[NÃO]")
}
console.clear()
console.log()
let pergunta5 = prompt("5) Você possui hematomas de briga ou cortes em seu corpo? 1.[SIM] 2.[NÃO]")
while (pergunta5 != 2 && pergunta5 != 1 && pergunta5 != "s" && pergunta5 != "S" && pergunta5 != "sim" && pergunta5 != "SIM" && pergunta5 != "n" && pergunta5 != "N" && pergunta5 != "NÃO" && pergunta5 != "não" && pergunta5 != "NAO" && pergunta5 != "nao") {
    console.log("\nRESPOSTA INVÁLIDA, opções de resposta: 1.[SIM] 2.[NÃO]")
    pergunta5 = prompt("5) Você possui hematomas de briga ou cortes em seu corpo? 1.[SIM] 2.[NÃO]")
}
if (pergunta1 == 1 || pergunta1 == "s" || pergunta1 == "S" || pergunta1 == "sim" || pergunta1 == "SIM") {
    pontuacao++
}
if (pergunta2 == 1 || pergunta2 == "s" || pergunta2 == "S" || pergunta2 == "sim" || pergunta2 == "SIM") {
    pontuacao++
}
if (pergunta3 == 1 || pergunta3 == "s" || pergunta3 == "S" || pergunta3 == "sim" || pergunta3 == "SIM") {
    pontuacao++
}       
if (pergunta4 == 1 || pergunta4 == "s" || pergunta4 == "S" || pergunta4 == "sim" || pergunta4 == "SIM") {
    pontuacao++
}
if (pergunta5 == 1 || pergunta5 == "s" || pergunta5 == "S" || pergunta5 == "sim" || pergunta5 == "SIM") {
    pontuacao++
}
console.clear()
if (pontuacao <= 2) {
    console.log(`\nVocê é INOCENTE!`)
} else if (pontuacao == 3) {
    console.log(`\nVocê é SUSPEITO(A)!`)
} else if (pontuacao >= 4) {
    console.log(`\nVocê é CULPADO(A)!`)
}

////Criado por Douglas Volcato
////Github: https://github.com/DouglasVolcato