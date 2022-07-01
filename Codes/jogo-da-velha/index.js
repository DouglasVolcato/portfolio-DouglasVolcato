const prompt = require ("prompt-sync")()
console.clear()
let computadorNumero = 0
let computadorLetra = []
let computadorLetra1 = 0
let numero = 0
let letra = ""
let pontuacaoJogador = 0
let pontuacaoComputador = 0
let pontuacaoJogador1 = 0
let pontuacaoJogador2 = 0
let XouO = 0
let XouOJog1 = 0
let letraJog1 = "q"
let letraJog2 = "q"
let numeroJog1 = 0
let numeroJog2 = 0
const introducao = prompt("JOGO DA VELHA \n==================== \nPressione [ENTER] para começar...")
jogo0: while (true) {
    console.log()
    let opcoesDeJogo = +prompt("Escolha um modo de jogo [1]Jogador/Máquina [2]Jogador/Jogador: ")
    while (opcoesDeJogo != 1 && opcoesDeJogo != 2) {
        console.log("\nDigite apenas [1] ou [2]!")
        opcoesDeJogo = +prompt("Escolha um modo de jogo [1]Jogador/Máquina [2]Jogador/Jogador: ")
    }
    if (opcoesDeJogo == 1) {
            console.log()
            XouO = +prompt("Escolha seu símbolo para jogar [1]X [2]O: ")
        while (XouO != 1 && XouO != 2) {
            console.log("\nDigite apenas [1] ou [2]!")
            XouO = +prompt("Escolha seu símbolo para jogar [1]X [2]O: ")
        }
        if(XouO == 1) {
            console.log(`\nJogador = X \nMáquina = O\n`)
            prompt("[ENTER]")
        } else {
            console.log(`\nJogador: O \nMáquina: X\n`)
            prompt("[ENTER]")
        }
        console.log()
    } else {
        console.log()
        XouOJog1 = +prompt("Jogador(1), escolha seu símbolo para jogar [1]X [2]O: ")
        while (XouOJog1 != 1 && XouOJog1 != 2) {
            console.log("\nDigite apenas [1] ou [2]!")
            XouOJog1 = +prompt("Jogador(1), escolha seu símbolo para jogar [1]X [2]O: ")
        }
        if(XouOJog1 == 1) {
            console.log(`\nJogador(1) = X \nJogador(2) = O\n`)
            prompt("[ENTER]")
        } else {
            console.log(`\nJogador(1) = O \nJogador(2) = X\n`)
            prompt("[ENTER]")
        }
        console.log()
    }
    jogo1: while (true) {
        coordenadasChecadas = true
        const letras = [0,'A', 'B' , 'C']
        const lista1 = [1,"_","_","_"]
        const lista2 = [2,"_","_","_"]
        const lista3 = [3,"_","_","_"]
        const tabuleiro = []
        function frontEnd(){
            tabuleiro.push(letras)
            tabuleiro.push(lista1)
            tabuleiro.push(lista2)
            tabuleiro.push(lista3)
            console.clear()
            console.log()
            console.log(tabuleiro[0])
            console.log()
            console.log(tabuleiro[1])
            console.log()
            console.log(tabuleiro[2])
            console.log()
            console.log(tabuleiro[3])
            console.log()
        }
        frontEnd()
        jogo2: while (true) {
            function checarEspacos() {
                let coordenadasChecadas = 0
                for (let s = 1; s <= 3; s++) {
                    if (lista1[s] == '_') {
                        coordenadasChecadas++
                    } else  if (lista2[s] == '_') {
                        coordenadasChecadas++
                    } else if (lista3[s] == '_') {
                        coordenadasChecadas++
                    }
                }
                if (coordenadasChecadas >= 1){
                    return false
                } else {
                    return true
                }
            }
            function checarCoordenadas(a,b) {
                let coordenadasChecadas = 0
                if (a == 1 && b == 'a' || a == 1 && b == 'A') {
                    if (lista1[1] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 1 && b == 'b' || a == 1 && b == 'B') {
                    if (lista1[2] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 1 && b == 'c' || a == 1 && b == 'C') {
                    if (lista1[3] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 2 && b == 'a' || a == 2 && b == 'A') {
                    if (lista2[1] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 2 && b == 'b' || a == 2 && b == 'B') {
                    if (lista2[2] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 2 && b == 'c' || a == 2 && b == 'C') {
                    if (lista2[3] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 3 && b == 'a' || a == 3 && b == 'A') {
                    if (lista3[1] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 3 && b == 'b' || a == 3 && b == 'B') {
                    if (lista3[2] != '_') {
                        coordenadasChecadas = 1
                    }
                } else if (a == 3 && b == 'c' || a == 3 && b == 'C') {
                    if (lista3[3] != '_') {
                        coordenadasChecadas = 1
                    }
                }
                if (coordenadasChecadas == 1){
                    return false
                }
            }
            function coordenadasX(a,b) {
                if (a == 1) {
                    if (b == 'a' || b == 'A') {
                        lista1.splice(1,1,'X')
                    } else if (b == 'b' || b == 'B') {
                        lista1.splice(2,1,'X')
                    } else if (b == 'c' || b == 'C') {
                        lista1.splice(3,1,'X')
                    }
                } else if (a == 2) {
                    if (b == 'a' || b == 'A') {
                        lista2.splice(1,1,'X')
                    } else if (b == 'b' || b == 'B') {
                        lista2.splice(2,1,'X')
                    } else if (b == 'c' || b == 'C') {
                        lista2.splice(3,1,'X')
                    }
                } else if (a == 3) {
                    if (b == 'a' || b == 'A') {
                        lista3.splice(1,1,'X')
                    } else if (b == 'b' || b == 'B') {
                        lista3.splice(2,1,'X')
                    } else if (b == 'c' || b == 'C') {
                        lista3.splice(3,1,'X')
                    }
                }
            }
            function coordenadasO(a,b) {
                if (a == 1) {
                    if (b == 'a' || b == 'A') {
                        lista1.splice(1,1,'O')
                    } else if (b == 'b' || b == 'B') {
                        lista1.splice(2,1,'O')
                    } else if (b == 'c' || b == 'C') {
                        lista1.splice(3,1,'O')
                    }
                } else if (a == 2) {
                    if (b == 'a' || b == 'A') {
                        lista2.splice(1,1,'O')
                    } else if (b == 'b' || b == 'B') {
                        lista2.splice(2,1,'O')
                    } else if (b == 'c' || b == 'C') {
                        lista2.splice(3,1,'O')
                    }
                } else if (a == 3) {
                    if (b == 'a' || b == 'A') {
                        lista3.splice(1,1,'O')
                    } else if (b == 'b' || b == 'B') {
                        lista3.splice(2,1,'O')
                    } else if (b == 'c' || b == 'C') {
                        lista3.splice(3,1,'O')
                    }
                }
            }    
            function vencedor() {
                let count = 0
                if (lista1[1] == 'O' && lista1[2] == 'O' && lista1[3] == 'O') {
                    count++
                } else if (lista2[1] == 'O' && lista2[2] == 'O' && lista2[3] == 'O') {
                        count++
                } else if (lista3[1] == 'O' && lista3[2] == 'O' && lista3[3] == 'O') {
                    count++
                } else if (lista1[1] == 'O' && lista2[1] == 'O' && lista3[1] == 'O') {
                    count++
                } else if (lista1[2] == 'O' && lista2[2] == 'O' && lista3[2] == 'O') {
                    count++
                } else if (lista1[3] == 'O' && lista2[3] == 'O' && lista3[3] == 'O') {
                    count++
                } else if (lista1[1] == 'O' && lista2[2] == 'O' && lista3[3] == 'O') {
                    count++
                } else if (lista1[3] == 'O' && lista2[2] == 'O' && lista3[1] == 'O') {
                    count++
                } else if (lista1[1] == 'X' && lista1[2] == 'X' && lista1[3] == 'X') {
                    count += 2
                } else if (lista2[1] == 'X' && lista2[2] == 'X' && lista2[3] == 'X') {
                    count += 2
                } else if (lista3[1] == 'X' && lista3[2] == 'X' && lista3[3] == 'X') {
                    count += 2
                } else if (lista1[1] == 'X' && lista2[1] == 'X' && lista3[1] == 'X') {
                    count += 2
                } else if (lista1[2] == 'X' && lista2[2] == 'X' && lista3[2] == 'X') {
                    count += 2
                } else if (lista1[3] == 'X' && lista2[3] == 'X' && lista3[3] == 'X') {
                    count += 2
                } else if (lista1[1] == 'X' && lista2[2] == 'X' && lista3[3] == 'X') {
                    count += 2
                } else if (lista1[3] == 'X' && lista2[2] == 'X' && lista3[1] == 'X') {
                    count += 2
                }
                if (count == 1) {
                    return 'o'
                } else if (count == 2) {
                    return 'x'
                }
            }
            function cerebroNumero() {
                if (XouO == 1) {
                    if (lista1[2] == 'O' && lista1[3] == 'O' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[1] == 'O' && lista3[1] == 'O' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[2] == 'O' && lista3[3] == 'O' && lista1[1] == '_') {
                        return 1
                    } else if (lista3[2] == 'O' && lista3[3] == 'O' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'O' && lista2[1] == 'O' && lista3[1] == '_') {
                        return 3
                    } else if (lista2[2] == 'O' && lista1[3] == 'O' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'O' && lista1[2] == 'O' && lista1[3] == '_') {
                        return 1
                    } else if (lista2[3] == 'O' && lista3[3] == 'O' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'O' && lista2[2] == 'O' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'O' && lista3[2] == 'O' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[3] == 'O' && lista2[3] == 'O' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[1] == 'O' && lista2[2] == 'O' && lista3[3] == '_') {
                        return 3
                    } else if (lista2[1] == 'O' && lista2[3] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[2] == 'O' && lista3[2] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'O' && lista3[3] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista3[1] == 'O' && lista1[3] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'O' && lista1[3] == 'O' && lista1[2] == '_') {
                        return 1
                    } else if (lista2[2] == 'O' && lista3[2] == 'O' && lista1[2] == '_') {
                        return 1
                    } else if (lista3[1] == 'O' && lista3[3] == 'O' && lista3[2] == '_') {
                        return 3
                    } else if (lista1[2] == 'O' && lista2[2] == 'O' && lista3[2] == '_') {
                        return 3
                    } else if (lista2[2] == 'O' && lista2[3] == 'O' && lista2[1] == '_') {
                        return 2
                    } else if (lista1[1] == 'O' && lista3[1] == 'O' && lista2[1] == '_') {
                        return 2
                    } else if (lista2[1] == 'O' && lista2[2] == 'O' && lista2[3] == '_') {
                        return 2
                    } else if (lista1[3] == 'O' && lista3[3] == 'O' && lista2[3] == '_') {
                        return 2
                    } else if (lista1[2] == 'X' && lista1[3] == 'X' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[1] == 'X' && lista3[1] == 'X' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[2] == 'X' && lista3[3] == 'X' && lista1[1] == '_') {
                        return 1
                    } else if (lista3[2] == 'X' && lista3[3] == 'X' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'X' && lista2[1] == 'X' && lista3[1] == '_') {
                        return 3
                    } else if (lista2[2] == 'X' && lista1[3] == 'X' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'X' && lista1[2] == 'X' && lista1[3] == '_') {
                        return 1
                    } else if (lista2[3] == 'X' && lista3[3] == 'X' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'X' && lista2[2] == 'X' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'X' && lista3[2] == 'X' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[3] == 'X' && lista2[3] == 'X' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[1] == 'X' && lista2[2] == 'X' && lista3[3] == '_') {
                        return 3
                    } else if (lista2[1] == 'X' && lista2[3] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[2] == 'X' && lista3[2] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'X' && lista3[3] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista3[1] == 'X' && lista1[3] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'X' && lista1[3] == 'X' && lista1[2] == '_') {
                        return 1
                    } else if (lista2[2] == 'X' && lista3[2] == 'X' && lista1[2] == '_') {
                        return 1
                    } else if (lista3[1] == 'X' && lista3[3] == 'X' && lista3[2] == '_') {
                        return 3
                    } else if (lista1[2] == 'X' && lista2[2] == 'X' && lista3[2] == '_') {
                        return 3
                    } else if (lista2[2] == 'X' && lista2[3] == 'X' && lista2[1] == '_') {
                        return 2
                    } else if (lista1[1] == 'X' && lista3[1] == 'X' && lista2[1] == '_') {
                        return 2
                    } else if (lista2[1] == 'X' && lista2[2] == 'X' && lista2[3] == '_') {
                        return 2
                    } else if (lista1[3] == 'X' && lista3[3] == 'X' && lista2[3] == '_') {
                        return 2
                    } else {
                        return Math.floor(Math.random() * 3 + 1)
                    }
                } else if (XouO == 2) {
                    if (lista1[2] == 'X' && lista1[3] == 'X' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[1] == 'X' && lista3[1] == 'X' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[2] == 'X' && lista3[3] == 'X' && lista1[1] == '_') {
                        return 1
                    } else if (lista3[2] == 'X' && lista3[3] == 'X' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'X' && lista2[1] == 'X' && lista3[1] == '_') {
                        return 3
                    } else if (lista2[2] == 'X' && lista1[3] == 'X' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'X' && lista1[2] == 'X' && lista1[3] == '_') {
                        return 1
                    } else if (lista2[3] == 'X' && lista3[3] == 'X' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'X' && lista2[2] == 'X' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'X' && lista3[2] == 'X' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[3] == 'X' && lista2[3] == 'X' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[1] == 'X' && lista2[2] == 'X' && lista3[3] == '_') {
                        return 3
                    } else if (lista2[1] == 'X' && lista2[3] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[2] == 'X' && lista3[2] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'X' && lista3[3] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista3[1] == 'X' && lista1[3] == 'X' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'X' && lista1[3] == 'X' && lista1[2] == '_') {
                        return 1
                    } else if (lista2[2] == 'X' && lista3[2] == 'X' && lista1[2] == '_') {
                        return 1
                    } else if (lista3[1] == 'X' && lista3[3] == 'X' && lista3[2] == '_') {
                        return 3
                    } else if (lista1[2] == 'X' && lista2[2] == 'X' && lista3[2] == '_') {
                        return 3
                    } else if (lista2[2] == 'X' && lista2[3] == 'X' && lista2[1] == '_') {
                        return 2
                    } else if (lista1[1] == 'X' && lista3[1] == 'X' && lista2[1] == '_') {
                        return 2
                    } else if (lista2[1] == 'X' && lista2[2] == 'X' && lista2[3] == '_') {
                        return 2
                    } else if (lista1[3] == 'X' && lista3[3] == 'X' && lista2[3] == '_') {
                        return 2
                    } else if (lista1[2] == 'O' && lista1[3] == 'O' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[1] == 'O' && lista3[1] == 'O' && lista1[1] == '_') {
                        return 1
                    } else if (lista2[2] == 'O' && lista3[3] == 'O' && lista1[1] == '_') {
                        return 1
                    } else if (lista3[2] == 'O' && lista3[3] == 'O' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'O' && lista2[1] == 'O' && lista3[1] == '_') {
                        return 3
                    } else if (lista2[2] == 'O' && lista1[3] == 'O' && lista3[1] == '_') {
                        return 3
                    } else if (lista1[1] == 'O' && lista1[2] == 'O' && lista1[3] == '_') {
                        return 1
                    } else if (lista2[3] == 'O' && lista3[3] == 'O' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'O' && lista2[2] == 'O' && lista1[3] == '_') {
                        return 1
                    } else if (lista3[1] == 'O' && lista3[2] == 'O' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[3] == 'O' && lista2[3] == 'O' && lista3[3] == '_') {
                        return 3
                    } else if (lista1[1] == 'O' && lista2[2] == 'O' && lista3[3] == '_') {
                        return 3
                    } else if (lista2[1] == 'O' && lista2[3] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[2] == 'O' && lista3[2] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'O' && lista3[3] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista3[1] == 'O' && lista1[3] == 'O' && lista2[2] == '_') {
                        return 2
                    } else if (lista1[1] == 'O' && lista1[3] == 'O' && lista1[2] == '_') {
                        return 1
                    } else if (lista2[2] == 'O' && lista3[2] == 'O' && lista1[2] == '_') {
                        return 1
                    } else if (lista3[1] == 'O' && lista3[3] == 'O' && lista3[2] == '_') {
                        return 3
                    } else if (lista1[2] == 'O' && lista2[2] == 'O' && lista3[2] == '_') {
                        return 3
                    } else if (lista2[2] == 'O' && lista2[3] == 'O' && lista2[1] == '_') {
                        return 2
                    } else if (lista1[1] == 'O' && lista3[1] == 'O' && lista2[1] == '_') {
                        return 2
                    } else if (lista2[1] == 'O' && lista2[2] == 'O' && lista2[3] == '_') {
                        return 2
                    } else if (lista1[3] == 'O' && lista3[3] == 'O' && lista2[3] == '_') {
                        return 2
                    } else {
                        return Math.floor(Math.random() * 3 + 1)
                    }
                }
            }
            function cerebroLetra() {
                if (XouO == 1) {
                    if (lista1[2] == 'O' && lista1[3] == 'O' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'O' && lista3[1] == 'O' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'O' && lista3[3] == 'O' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista3[2] == 'O' && lista3[3] == 'O' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'O' && lista2[1] == 'O' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'O' && lista1[3] == 'O' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'O' && lista1[2] == 'O' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[3] == 'O' && lista3[3] == 'O' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'O' && lista2[2] == 'O' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'O' && lista3[2] == 'O' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'O' && lista2[3] == 'O' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[1] == 'O' && lista2[2] == 'O' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[1] == 'O' && lista2[3] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'O' && lista3[2] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'O' && lista3[3] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'O' && lista1[3] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'O' && lista1[3] == 'O' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'O' && lista3[2] == 'O' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'O' && lista3[3] == 'O' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'O' && lista2[2] == 'O' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'O' && lista2[3] == 'O' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'O' && lista3[1] == 'O' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'O' && lista2[2] == 'O' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'O' && lista3[3] == 'O' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[2] == 'X' && lista1[3] == 'X' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'X' && lista3[1] == 'X' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'X' && lista3[3] == 'X' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista3[2] == 'X' && lista3[3] == 'X' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'X' && lista2[1] == 'X' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'X' && lista1[3] == 'X' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'X' && lista1[2] == 'X' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[3] == 'X' && lista3[3] == 'X' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'X' && lista2[2] == 'X' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'X' && lista3[2] == 'X' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'X' && lista2[3] == 'X' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[1] == 'X' && lista2[2] == 'X' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[1] == 'X' && lista2[3] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'X' && lista3[2] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'X' && lista3[3] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'X' && lista1[3] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'X' && lista1[3] == 'X' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'X' && lista3[2] == 'X' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'X' && lista3[3] == 'X' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'X' && lista2[2] == 'X' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'X' && lista2[3] == 'X' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'X' && lista3[1] == 'X' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'X' && lista2[2] == 'X' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'X' && lista3[3] == 'X' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else {
                        return computadorLetra[(Math.floor(Math.random() * 3))]
                    }
                } else if (XouO == 2) {
                    if (lista1[2] == 'X' && lista1[3] == 'X' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'X' && lista3[1] == 'X' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'X' && lista3[3] == 'X' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista3[2] == 'X' && lista3[3] == 'X' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'X' && lista2[1] == 'X' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'X' && lista1[3] == 'X' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'X' && lista1[2] == 'X' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[3] == 'X' && lista3[3] == 'X' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'X' && lista2[2] == 'X' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'X' && lista3[2] == 'X' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'X' && lista2[3] == 'X' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[1] == 'X' && lista2[2] == 'X' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[1] == 'X' && lista2[3] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'X' && lista3[2] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'X' && lista3[3] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'X' && lista1[3] == 'X' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'X' && lista1[3] == 'X' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'X' && lista3[2] == 'X' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'X' && lista3[3] == 'X' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'X' && lista2[2] == 'X' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'X' && lista2[3] == 'X' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'X' && lista3[1] == 'X' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'X' && lista2[2] == 'X' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'X' && lista3[3] == 'X' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[2] == 'O' && lista1[3] == 'O' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'O' && lista3[1] == 'O' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'O' && lista3[3] == 'O' && lista1[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista3[2] == 'O' && lista3[3] == 'O' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'O' && lista2[1] == 'O' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[2] == 'O' && lista1[3] == 'O' && lista3[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'O' && lista1[2] == 'O' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[3] == 'O' && lista3[3] == 'O' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'O' && lista2[2] == 'O' && lista1[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista3[1] == 'O' && lista3[2] == 'O' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'O' && lista2[3] == 'O' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[1] == 'O' && lista2[2] == 'O' && lista3[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista2[1] == 'O' && lista2[3] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'O' && lista3[2] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'O' && lista3[3] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'O' && lista1[3] == 'O' && lista2[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[1] == 'O' && lista1[3] == 'O' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'O' && lista3[2] == 'O' && lista1[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista3[1] == 'O' && lista3[3] == 'O' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista1[2] == 'O' && lista2[2] == 'O' && lista3[2] == '_') {
                        return computadorLetra[1]
                    } else if (lista2[2] == 'O' && lista2[3] == 'O' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista1[1] == 'O' && lista3[1] == 'O' && lista2[1] == '_') {
                        return computadorLetra[0]
                    } else if (lista2[1] == 'O' && lista2[2] == 'O' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else if (lista1[3] == 'O' && lista3[3] == 'O' && lista2[3] == '_') {
                        return computadorLetra[2]
                    } else {
                        return computadorLetra[(Math.floor(Math.random() * 3))]
                    }
                }
            }
            if (opcoesDeJogo == 1) {
                jogador: while(true) {
                    vitoria = vencedor()
                    if (vitoria == 'o' || vitoria == 'x') {
                        break
                    }
                    if (checarEspacos() == true) {
                        break
                    }
                    console.log()
                    letra = prompt("Escolha uma letra [A], [B] OU [C]: ")
                    while (letra != 'a' && letra != 'b' && letra != 'c' && letra != 'A' && letra != 'B' && letra != 'C') {
                        console.log()
                        console.log('Resposta inválida, escolha a letra [A], [B] ou [C]!')
                        letra = prompt("Escolha uma letra [A], [B] OU [C]: ") 
                    }
                    numero = +prompt("Escolha um número [1], [2], [3]:  ")
                    while (numero != 1 && numero != 2 && numero != 3) {
                        console.log()
                        console.log("Resposta inválida, escolha o número [1], [2] ou [3]")
                        numero = +prompt("Escolha um número [1], [2], [3]:  ")
                    }
                    if (checarCoordenadas(numero,letra) == false) {
                        console.log("\nEscolha outra jogada!\n")
                        continue jogador
                    } else {
                        break
                    }
                }
                if (XouO == 1) {
                    coordenadasX(numero,letra)
                } else if (XouO == 2) {
                    coordenadasO(numero,letra)
                }
                computadorIneligente: while (true) {   
                    let vitoria = vencedor()
                    if (vitoria == 'o' || vitoria == 'x') {
                        break
                    }
                    if (checarEspacos() == true) {
                        break
                    }
                    computadorLetra = ['A','B', 'C']
                    computadorLetra1 = cerebroLetra()
                    computadorNumero = cerebroNumero()
                    if (checarCoordenadas(computadorNumero,computadorLetra1) == false) {
                    continue computadorIneligente
                    } else {
                        break
                    }
                }
                frontEnd()
                vitoria = vencedor()
                if (vitoria == 'x' && XouO == 1) {
                    pontuacaoJogador++
                    console.log("VOCÊ GANHOU DO COMPUTADOR!")
                    console.log(`Jogador: ${pontuacaoJogador} \nComputador: ${pontuacaoComputador}`)
                    break jogo1
                } else if (vitoria == 'o' && XouO == 2) {
                    pontuacaoJogador++
                    console.log("VOCÊ GANHOU DO COMPUTADOR!")
                    console.log(`Jogador: ${pontuacaoJogador} \nComputador: ${pontuacaoComputador}`)
                    break jogo1
                } else if (vitoria == 'x' && XouO == 2) {
                    pontuacaoComputador++
                    console.log("O COMPUTADOR! GANHOU!")
                    console.log(`Jogador: ${pontuacaoJogador} \nComputador: ${pontuacaoComputador}`)
                    break jogo1
                } else if (vitoria == 'o' && XouO == 1) {
                    pontuacaoComputador++
                    console.log("O COMPUTADOR! GANHOU!")
                    console.log(`Jogador: ${pontuacaoJogador} \nComputador: ${pontuacaoComputador}`)
                    break jogo1
                }
                if (checarEspacos(computadorNumero,computadorLetra1) == true) {
                    console.log("VOCÊ EMPATOU COM O COMPUTADOR!")
                    console.log(`Jogador: ${pontuacaoJogador} \nComputador: ${pontuacaoComputador}`)
                    break jogo1
                }
                if (XouO == 1) {
                    coordenadasO(computadorNumero,computadorLetra1)
                } else if (XouO == 2) {
                    coordenadasX(computadorNumero,computadorLetra1)
                }
                frontEnd()
                console.log(`O computador jogou ${computadorLetra1}${computadorNumero}`)
            } else if (opcoesDeJogo == 2) {
                jogador1: while(true) {
                    vitoria = vencedor()
                    if (vitoria == 'o' || vitoria == 'x') {
                        break jogador1
                    }
                    if (checarEspacos() == true) {
                        break jogador1
                    }
                    console.log()
                    letraJog1 = prompt("Jogador(1), escolha uma letra [A], [B] OU [C]: ")
                    while (letraJog1 != 'a' && letraJog1 != 'b' && letraJog1 != 'c' && letraJog1 != 'A' && letraJog1 != 'B' && letraJog1 != 'C') {
                        console.log()
                        console.log('Resposta inválida, escolha a letra [A], [B] ou [C]!')
                        letraJog1 = prompt("Jogador(1), escolha uma letra [A], [B] OU [C]: ")
                    }
                    numeroJog1 = +prompt("Jogador(1), escolha um número [1], [2], [3]:  ")
                    while (numeroJog1 != 1 && numeroJog1 != 2 && numeroJog1 != 3) {
                        console.log()
                        console.log("Resposta inválida, escolha o número [1], [2] ou [3]")
                        numeroJog1 = +prompt("Jogador(1), escolha um número [1], [2], [3]:  ")
                    }
                    if (checarEspacos() == true) {
                        break
                    }
                    if (checarCoordenadas(numeroJog1,letraJog1) == false) {
                        console.log("\nEscolha outra jogada!\n")
                        continue jogador1
                    } else {
                        break
                    }
                }
                if (XouOJog1 == 1) {
                    coordenadasX(numeroJog1,letraJog1)
                } else if (XouOJog1 == 2) {
                    coordenadasO(numeroJog1,letraJog1)
                }
                frontEnd()
                jogador2: while(true) {
                    vitoria = vencedor()
                    if (vitoria == 'o' || vitoria == 'x') {
                        break jogador2
                    }
                    if (checarEspacos() == true) {
                        break jogador2
                    }
                    console.log()
                    letraJog2 = prompt("Jogador(2), escolha uma letra [A], [B] OU [C]: ")
                    while (letraJog2 != 'a' && letraJog2 != 'b' && letraJog2 != 'c' && letraJog2 != 'A' && letraJog2 != 'B' && letraJog2 != 'C') {
                        console.log()
                        console.log('Resposta inválida, escolha a letra [A], [B] ou [C]!')
                        letraJog2 = prompt("Jogador(2), escolha uma letra [A], [B] OU [C]: ") 
                    }
                    numeroJog2 = +prompt("Jogador(2), escolha um número [1], [2], [3]:  ")
                    while (numeroJog2 != 1 && numeroJog2 != 2 && numeroJog2 != 3) {
                        console.log()
                        console.log("Resposta inválida, escolha o número [1], [2] ou [3]")
                        numeroJog2 = +prompt("Jogador(2), escolha um número [1], [2], [3]:  ")
                    }
                    if (checarEspacos() == true) {
                        break
                    }
                    if (checarCoordenadas(numeroJog2,letraJog2) == false) {
                        console.log("\nEscolha outra jogada!\n")
                        continue jogador2
                    } else {
                        break
                    }
                }
                if (XouOJog1 == 1) {
                    coordenadasO(numeroJog2,letraJog2)
                } else if (XouOJog1 == 2) {
                    coordenadasX(numeroJog2,letraJog2)
                }
                frontEnd()
                vitoria = vencedor()
                if (checarEspacos() == true) {
                    console.log("EMPATE!")
                    console.log(`Jogador(1): ${pontuacaoJogador1} \nJogador(2): ${pontuacaoJogador2}`)
                    break jogo1
                } else if (vitoria == 'x' && XouOJog1 == 1) {
                    pontuacaoJogador1++
                    console.log("O JOGADOR(1) GANHOU!")
                    console.log(`Jogador(1): ${pontuacaoJogador1} \nJogador(2): ${pontuacaoJogador2}`)
                    break jogo1
                } else if (vitoria == 'o' && XouOJog1 == 1) {
                    pontuacaoJogador2++
                    console.log("O JOGADOR(2) GANHOU!")
                    console.log(`Jogador(1): ${pontuacaoJogador1} \nJogador(2): ${pontuacaoJogador2}`)
                    break jogo1
                } else if (vitoria == 'o' && XouOJog1 == 2) {
                    pontuacaoJogador1++
                    console.log("O JOGADOR(1) GANHOU!")
                    console.log(`Jogador(1): ${pontuacaoJogador1} \nJogador(2): ${pontuacaoJogador2}`)
                    break jogo1
                } else if (vitoria == 'x' && XouOJog1 == 2) {
                    pontuacaoJogador2++
                    console.log("O JOGADOR(2) GANHOU!")
                    console.log(`Jogador(1): ${pontuacaoJogador1} \nJogador(2): ${pontuacaoJogador2}`)
                    break jogo1
                }
            }
        }
    }
    console.log()
    let novoJogo = +prompt("O jogo acabou, gostaria de jogar de novo [1]SIM ou [2]NÃO? ")
    while (novoJogo != 1 && novoJogo != 2) {
        console.log("\nEscolha [1] ou [2].")
        novoJogo = +prompt("O jogo acabou, gostaria de jogar de novo [1]SIM ou [2]NÃO? ")
    }
    if (novoJogo == 1) {
        console.clear()
        continue jogo0
    } else if (novoJogo == 2) {
        break jogo0
    }
}

////Criado por Douglas Volcato
////Github: https://github.com/DouglasVolcato