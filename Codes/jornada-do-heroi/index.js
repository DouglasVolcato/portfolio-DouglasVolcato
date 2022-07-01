const prompt = require("prompt-sync")();
console.clear()
let pontuacao = 0
let mapa = 0
let espada = 0
let capa = 0
let amuleto = 0
let grupo = 0
console.log("A JORNADA DO HERÓI \n=============")
let jogador = prompt("Digite o nome do(a) jogador(a) para começar: ")
while (jogador.length < 3) {
    console.log("\nDigite um nome de, pelo menos, 3 letras.")
    jogador = prompt("Digite o nome do(a) jogador(a) para começar: ")
}
console.log("\nOPÇÕES DE PERSONAGENS: \n[1] Um grande guerreiro, forte e destemido, em busca de uma boa aventura. \n[2] Uma guerreira habilidosa e valente, em busca de sua jornada para se tornar heroína.\n")
let personagem = +prompt("Escolha um personagem. Número [1] ou [2]: ")
while (personagem != 1 && personagem != 2) {
    console.log("\nNÚMERO INVÁLIDO!")
    personagem = +prompt("Escolha um personagem. Número [1] ou [2]: ")
}
console.clear()
let introducao1 = prompt("\nEra uma linda semana de primavera na terra de Blue, as pássaros cantavam, as flores desabrochavam e as pessoas estavam felizem e em paz.... [ENTER]")
if (personagem == 1) {
    let introducao2 = prompt("\nVocê, um conhecido guerreiro forte e destemido, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha... [ENTER]")
} else {
    let introducao2 = prompt("\nVocê, uma guerreira habilidosa e valente, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha... [ENTER]")
}
console.clear()
let introducao3 = prompt("\nDurante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fumaça e destruição em grande parte dela. Você acelera seu cavalo... [ENTER]")
let introducao4 = prompt(`\nAo entrar em sua cidade, um guarda real vêm ao seu encontro e diz: \n'${jogador}, nosso rei precisa de sua presença o mais rápido possível!' [ENTER]`)
console.clear()
let introducao5 = prompt("\nApós uma breve conversa com o rei de Blue, descobre que o ataque à cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder... [ENTER}")
let h = prompt(`\nO rei disse: \n 'Dessa vez conseguimos conter Mordog e seu exército, mas com as almas que ele conseguiu tememos que venha mais forte da próxima vez.' [ENTER]`) 
if (personagem == 1) {
    let i = prompt(`\n'${jogador}, você já fez parte de minha guarda real, é o único guerreiro que pode deter Mordog!'[ENTER]`)
} else {
    let i = prompt(`\n'${jogador}, você já fez parte de minha guarda real, é a única guerreira que pode deter Mordog!'[ENTER]`)
}
console.clear()
console.log("\nVocê aceita a missão de ir atrás do bruxo. Antes de deixar o salão, o rei lhe oferece um mapa de onde possivelmente Mordog se esconde.")
let a = +prompt("Você pega o mapa? 1.[SIM] 2.[NÃO]")
while (a != 1 && a != 2) {
    console.log("\nNÚMERO INVÁLIDO!")
    a = +prompt("Você pega o mapa? 1.[SIM] 2.[NÃO]")
}
if (a == 1) {
    console.log("\nVocê pega o mapa e parte.")
    mapa++
    pontuacao++
} else if ( a== 2) {
    console.log("\nVocê diz: \n'Não preciso de mapas, já sei o caminho!' \n e parte.")
}
console.clear()
console.log("\nVocê vai até sua casa e começa a se aprontar para a missão.")
let b = +prompt("Vai levar sua espada? 1.[SIM] 2.[NÃO]")
while (b != 1 && b != 2) {
    console.log("\nNÚMERO INVÁLIDO!")
    b = +prompt("Vai levar sua espada? 1.[SIM] 2.[NÃO]")
}
if (b == 1) {
    let j = prompt("\nVocê pega sua espada e afia sua lâmina o suficiente para cortar milhares de pães. [ENTER]")
    pontuacao++
    espada++
} else if ( b== 2) {
    let j = prompt("\nVocê confia muito em seus punhos e decide não levar sua espada. [ENTER]")
}
console.clear()
console.log("\nVocê se lembra do alerta que o rei lhe deu sobre os perigosos dragões que compõem o exército de Mordog.")
let c = +prompt("Vai levar sua capa contra fogo? 1.[SIM] 2.[NÃO]")
while (c != 1 && c != 2) {
    console.log("\nNÚMERO INVÁLIDO!")
    c = +prompt("Vai levar sua capa contra fogo? 1.[SIM] 2.[NÃO]")
}
if (c == 1) {
    let k = prompt("\nVocê veste sua linda capa contra fogo. [ENTER]")
    pontuacao++
    capa++
} else if ( c == 2) {
    let k = prompt("\nVocê escolhe priorizar a agilidade e decide deixar sua armadura leve. [ENTER]")
}
console.clear()
console.log("\nApós arrumar todas as coisas, visita seu vizinho elfo, que entende um pouco de magia e abençoa seu caminho.")
console.log("Ele disse, lhe oferecendo um colar: \n'Use esse amuleto em seu pescoço, vai proteger contra os feitiços do bruxo.'")
let d = +prompt("Você leva o amuleto? 1.[SIM] 2.[NÃO]")
while (d != 1 && d != 2) {
    console.log("\nNÚMERO INVÁLIDO!")
    d = +prompt("Você leva o amuleto? 1.[SIM] 2.[NÃO]")
}
if (d == 1) {
    let l = prompt("\nVocê pega o amuleto, agradece pelo presente, e coloca em seu pescoço. [ENTER]")
    pontuacao++
    amuleto++
} else if ( d == 2) {
    let l = prompt("\nVocê agradece pela benção, mas escolhe não levar o amuleto. [ENTER]")
}
console.clear()
if (personagem == 1) {
    console.log("\nPor um breve momento, você pensa em seus amigos que também são guerreiros e moram no mesmo vilarejo. \nVocê pensa que, mesmo com toda sua habilidade e determinação, talvez seja difícil completar a missão sozinho.")
    let e = +prompt("Você convida seus amigos guerreiros? 1.[SIM] 2.[NÃO]")
    while (e != 1 && e != 2) {
     console.log("\nNÚMERO INVÁLIDO!")
     e = +prompt("Você convida seus amigos guerreiros? 1.[SIM] 2.[NÃO]")
}
if (e == 1) {
    let m = prompt("\nVocê decide chamar seus amigos e, juntos, partem em sua jornada. [ENTER]")
    pontuacao++
    grupo++
} else if ( e == 2) {
    let m = prompt("\nVocê decide não chamar seus amigos e parte sozinho em sua jornada. [ENTER]")
}
} else {
    console.log("\nPor um breve momento, você pensa em suas amigas que também são guerreiras e moram no mesmo vilarejo.")
    console.log("Você pensa que, mesmo com toda sua habilidade e determinação, talvez seja difícil completar a missão sozinha.")
    let e = +prompt("Você convida suas amigas guerreiras? 1.[SIM] 2.[NÃO]")
    while (e != 1 && e != 2) {
     console.log("\nNÚMERO INVÁLIDO!")
     e = +prompt("Você convida suas amigas guerreiras? 1.[SIM] 2.[NÃO]")
}
if (e == 1) {
    let m = prompt("\nVocê decide chamar suas amigas e, juntas, partem em sua jornada. [ENTER]")
    pontuacao++
    grupo++
} else if ( e == 2) {
    let m = prompt("\nVocê decide não chamar suas amigas e parte sozinha em sua jornada. [ENTER]")
}
}
console.clear()
if (mapa == 1) {
    let map = prompt("\nApesar de ter sido um caminho longo, foi fácil encontrar o esconderijo do bruxo com o mapa. [ENTER]")
} else {
    let map = prompt("\nFoi difícil encontrar o esconderijo do bruxo sem o mapa, mas você conseguiu. [ENTER]")
}
if (espada == 1) {
    let esp = prompt("\nA espada foi de grande ajuda para derrotar os inimigos. [ENTER]")
} else {
    let esp = prompt("\nDerrotar os inimigos foi muito mais diícil sem sua espada. [ENTER]")
}

if (capa == 1) {
    let cap = prompt("\nVocê se protegeu muito bem do fogo dos dragões com sua linda capa. [ENTER]")
} else {
    let cap = prompt("\nVocê acabou sofrendo queimaduras pelo fogo dos dragões. [ENTER]")
}
if (amuleto == 1) {
    let amu = prompt("\nO bruxo ficou surpreso ao perceber que você era imune aos feitiços dele, graças ao seu amuleto mágico. [ENTER]")
} else {
    let amu = prompt("\nVocê teve dificuldades em lutar contra os feitiços do bruxo, ele era mesmo muito poderoso. [ENTER]")
}
if (personagem == 1) {
    if (grupo == 1) {
        let gru = prompt("\nVocê não teria chegado tão longe sem os seus amigos, eles realmente foram de grande ajuda. [ENTER]")
    } else {
        let gru = prompt("\nÉ muito difícil finalizar uma jornda desse tipo sem companhia, mas você estava muito confiante. [ENTER]")
    }
} else {
    if (grupo == 1) {
        let gru = prompt("\nVocê não teria chegado tão longe sem as suas amigas, elas realmente foram de grande ajuda. [ENTER]")
    } else {
        let gru = prompt("\nÉ muito difícil finalizar uma jornda desse tipo sem companhia, mas você estava muito confiante. [ENTER]")
    }
}
if (personagem == 1) {
 if (pontuacao == 0) {
    console.log(`\nVOCÊ NÃO CONSEGUIU CHEGAR NEM PERTO DE DETER MORDOG.`)
 } else if (pontuacao == 1 || pontuacao == 2) {
    console.log(`\nVOCÊ NÃO CONSEGUIU DETER MORDOG.`)
 } else if (pontuacao == 3) {
    console.log(`\nVOCÊ CONSEGUIU DETER MORDOG, MAS INFELIZMENTE NÃO SOBREVIVEU À BATALHA.`)
 } else if (pontuacao == 4) {    
    console.log(`\nAPESAR DE TER SIDO UMA BATALHA DIFÍCIL, VOCÊ CONSEGUIU DETER MORDOG E SE TORNOU UM HERÓI!`)
 } else if (pontuacao == 5) {
    console.log(`\nVOCÊ CONSEGUIU DETER MORDOG, SALVOU SUA CIDADE E SE TORNOU UM HERÓI. SUA HISTÓRIA SERÁ LEMBRADA POR VÁRIAS GERAÇÕES!`)
 }
} else {
  if (pontuacao == 0) {
    console.log(`\nVOCÊ NÃO CONSEGUIU CHEGAR NEM PERTO DE DETER MORDOG.`)
 } else if (pontuacao == 1 || pontuacao == 2) {
    console.log(`\nVOCÊ NÃO CONSEGUIU DETER MORDOG.`)
 } else if (pontuacao == 3) {
    console.log(`\nVOCÊ CONSEGUIU DETER MORDOG, MAS INFELIZMENTE NÃO SOBREVIVEU À BATALHA.`)
 } else if (pontuacao == 4) {    
    console.log(`\nAPESAR DE TER SIDO UMA BATALHA DIFÍCIL, VOCÊ CONSEGUIU DETER MORDOG E SE TORNOU UMA HEROÍNA!`)
 } else if (pontuacao == 5) {
    console.log(`\nVOCÊ CONSEGUIU DETER MORDOG, SALVOU SUA CIDADE E SE TORNOU UMA HEROÍNA. SUA HISTÓRIA SERÁ LEMBRADA POR VÁRIAS GERAÇÕES!`)
 }   
}

////Criado por Douglas Volcato
////Github: https://github.com/DouglasVolcato