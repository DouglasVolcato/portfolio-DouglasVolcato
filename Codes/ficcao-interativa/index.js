const prompt = require("prompt-sync")();
console.clear()
jogo: while(true) {
    aventura: while(true) {
        let rodada = 0
        let kills = 0
        let dia = 0
        let numeroOponente = 0
        const backupJogador = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 20,
            dinheiro: 20,
            magia: 0,
        }
        const backupReserva = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 20,
            dinheiro: 20,
            magia: 0,
        }
        function backup(a,b){
            if (a == 1){
                backupJogador.nome = b.nome
                backupJogador.nivel = b.nivel
                backupJogador.vida = b.vida
                backupJogador.ataque = b.ataque
                backupJogador.defesa = b.defesa
                backupJogador.dinheiro = b.dinheiro
                backupJogador.magia = b.magia
            }   
            else if (a == 2){
                b.nome = backupJogador.nome 
                b.nivel = backupJogador.nivel 
                b.vida = backupJogador.vida 
                b.ataque = backupJogador.ataque  
                b.defesa = backupJogador.defesa  
                b.dinheiro = backupJogador.dinheiro  
                b.magia = backupJogador.magia  
            }
        }
        function backup2(a,b){
            if (a == 1){
                backupReserva.nome = b.nome
                backupReserva.nivel = b.nivel
                backupReserva.vida = b.vida
                backupReserva.ataque = b.ataque
                backupReserva.defesa = b.defesa
                backupReserva.dinheiro = b.dinheiro
                backupReserva.magia = b.magia
            }   
            else if (a == 2){
                b.nome = backupReserva.nome 
                b.nivel = backupReserva.nivel 
                b.vida = backupReserva.vida 
                b.ataque = backupReserva.ataque  
                b.defesa = backupReserva.defesa  
                b.dinheiro = backupReserva.dinheiro  
                b.magia = backupReserva.magia  
            }
        }
        const statusJogador = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 10,
            dinheiro: 20,
            magia: 0,
            pontuacao: 0,
            mapa: 0,
            espada: 0,
            capa: 0,
            amuleto: 0,
            pocao: 0,
            grupo: 0,
            tempo: 0,
            consultarStatus: function(){
                console.log(`\nSEU STATUS:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            aumentarNivel: function(a = 1){
                this.nivel += a
                this.vida += 100
                this.defesa += 10
                this.ataque += 20
                this.dinheiro += (20 * this.nivel)
                this.magia += 5
                console.log(`\nVOCÊ SUBIU DE NÍVEL!`)
                console.log(`\nSEU STATUS:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel} (+${this.nivel - backupJogador.nivel})`)
                console.log(`Vida: ${this.vida} (+${this.vida - backupJogador.vida})`)
                console.log(`Ataque: ${this.ataque} (+${this.ataque - backupJogador.ataque})`)
                console.log(`Defesa: ${this.defesa} (+${this.defesa - backupJogador.defesa})`)
                console.log(`Dinheiro: ${this.dinheiro} (+${this.dinheiro - backupJogador.dinheiro})`)
                console.log(`Magia: ${this.magia} (+${this.magia - backupJogador.magia})\n`)
                prompt(`[ENTER]`)
                console.log()
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Você defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`Sua vida acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Sua vida diminuiu -${b}.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nSeu ataque aumentou em +${quantidade}.`)
                this.ataque = ((20 * this.nivel) + quantidade)
                prompt("[ENTER]")
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nSua defesa aumentou em +${quantidade}.`)
                this.defesa += quantidade
            },
            aumentarMagia: function(quantidade){
                console.log(`\nSua magia aumentou em +${quantidade}.\n`)
                this.magia += quantidade
                prompt(`[ENTER]`)
            },
            aumentarPontuacao: function(){
                this.pontuacao += 1
            },
            itemMapa: function(){
                this.mapa += 1
            },
            itemEspada: function(){
                this.espada += 1
            },
            itemCapa: function(){
                this.capa += 1
            },
            itemAmuleto: function(){
                this.amuleto += 1
            },
            aumentarGrupo: function(quantidade = 1){
                this.grupo += quantidade
                console.log(`\nSeu grupo aumentou em +${quantidade} membro. \nQuantidade atual: ${this.grupo} membros.\n`)
                prompt(`[ENTER]`)
            },
            aumentarTempo: function(quantidade = 1){
                this.tempo += quantidade
                console.log(`DIA ${this.tempo}`)
            },
            insultar: function(){
                let insultos = [`É só isso que você consegue fazer?`,
                `Vai precisar de uma arma maior que essa para me derrotar`,
                `Quem te ensinou a lutar desse jeito, sua vovózinha?`,
                `Se houvessem mais 5 de você, ainda não conseguiriam me derrotar.`,
                `Quer que eu te dê algumas aulas de luta?`,
                `Se continuarmos, só eu vou sair vivo dessa luta.`,
                `Está sendo um bom aquecimento, quando começamos a luta?.`]
                console.log(`\nVocê disse: \n'${insultos[Math.floor(Math.random() * insultos.length)]}'\n`)
                prompt(`[ENTER]`)
            },
            opcoesDeJogada: function(a) {
                console.log()
                console.log(`Escolha uma das opções: \n[1]Atacar \n[2]Insultar \n[3]Consultar Status`)
                let opcao = +prompt(`Opção: `)
                while (opcao != 1 && opcao != 2 && opcao != 3) {
                    console.log("\nNÚMERO INVÁLIDO!")
                    console.log(`Escolha uma das opções: \n[1]Atacar \n[2]Insultar \n[3]Consultar Status`)
                    opcao = +prompt(`Opção: `)
                }
                if (opcao == 1) {
                    let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                    while (numeroAleatorio < (this.ataque * 0.4)) {
                        numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                    }
                    if (a == "jhonny") {
                        jhonny.dano(numeroAleatorio)
                    } else if (a == 'amanda') {
                        amanda.dano(numeroAleatorio)
                    } else if (a == 'goblin') {
                        goblin.dano(numeroAleatorio)
                    } else if (a == 'elfoDaFloresta') {
                        elfoDaFloresta.dano(numeroAleatorio)
                    } else if (a == 'troll') {
                        troll.dano(numeroAleatorio)
                    } else if (a == 'dragao') {
                        dragao.dano(numeroAleatorio)
                    } else if (a == 'bruxa') {
                        bruxa.dano(numeroAleatorio)
                    } else if (a == 'cavaleiroFantasma') {
                        cavaleiroFantasma.dano(numeroAleatorio)
                    } else if (a == 'mordog') {
                        mordog.dano(numeroAleatorio)
                    } 
                    console.log()
                } else if (opcao == 2){
                    this.insultar()
                } else if (opcao == 3){
                    statusJogador.consultarStatus()
                    if (a == "jhonny") {
                        jhonny.consultarStatus()
                    } else if (a == 'amanda') {
                        amanda.consultarStatus()
                    } else if (a == 'goblin') {
                        goblin.consultarStatus()
                    } else if (a == 'elfoDaFloresta') {
                        elfoDaFloresta.consultarStatus()
                    } else if (a == 'troll') {
                        troll.consultarStatus()
                    } else if (a == 'dragao') {
                        dragao.consultarStatus()
                    } else if (a == 'bruxa') {
                        bruxa.consultarStatus()
                    } else if (a == 'cavaleiroFantasma') {
                        cavaleiroFantasma.consultarStatus()
                    } else if (a == 'mordog') {
                        mordog.consultarStatus()
                    }
                }
            }
        }
        const jhonny = {
            nome: 'Jhonny',
            nivel: 1,
            descricao: 'Seu melhor amigo.',
            vida: 100,
            ataque: 20,
            defesa: 10,
            dinheiro: 20,
            magia: 0,
            consultarStatus: function(){    
                console.log(`\nSTATUS DE JHONNY:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Jhonny defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Jhonny acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Jhonny perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nO ataque de Jhonny aumentou em +${quantidade}.\n`)
                this.ataque += quantidade
                prompt(`[ENTER]`)
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nA defesa de Jhonny aumentou em +${quantidade}.\n`)
                this.defesa += quantidade
                prompt(`[ENTER]`)
            },
            jogada: function() {
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            }
        }
        const amanda = {
            nome: 'Amanda',
            nivel: 1,
            descricao: 'Sua melhor amiga.',
            vida: 100,
            ataque: 20,
            defesa: 10,
            dinheiro: 20,
            magia: 0,
            consultarStatus: function(){    
                console.log(`\nSTATUS DE AMANDA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Amanda defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Amanda acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Amanda perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nO ataque de Amanda aumentou em +${quantidade}.\n`)
                this.ataque += quantidade
                prompt(`[ENTER]`)
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nA defesa de Amanda aumentou em +${quantidade}.\n`)
                this.defesa += quantidade
                prompt(`[ENTER]`)
            },
            jogada: function() {
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            }
        }
        const goblin = {
            nome: 'Goblin',
            nivel: 1,
            descricao: 'Baixinho, musculoso e raivoso',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 23,
            magia: 0,
            ataques: ["Estocada mortal", "Soco agressivo", "Voadora do trovão"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE GOBLIN:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Goblin defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Goblin acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Goblin perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const elfoDaFloresta = {
            nome: 'Elfo da Floresta',
            nivel: 2,
            descricao: 'Lutador de artes marciais, possui extrema conexão com a natureza.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 60,
            magia: 30,
            ataques: ["Ataque da folha", "Golpe de karatê", "Flecha envenenada"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE ELFO DA FLORESTA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Elfo da Floresta defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Elfo da Floresta acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Elfo da Floresta perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const troll = {
            nome: 'Troll',
            nivel: 3,
            descricao: 'O que não possui de inteligência, possui de força bruta.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 82,
            magia: 0,
            ataques:["Mordida raivosa", "Punho giratório", "Cabeçada atordoante"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE TROLL:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Troll defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Troll acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Troll perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const dragao = {
            nome: 'Dragão',
            nivel: 4,
            descricao: 'Ser elegante que voa e gospe fogo.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 0,
            magia: 10,
            ataques:["Bola de fogo", "Ataque aéreo", "Fogo mortal"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE DRAGÃO:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Dragão defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Dragão acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Dragão perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const bruxa = {
            nome: 'Bruxa',
            nivel: 5,
            descricao: 'Feiticeira nata, inteligente e cartomante nas horas vagas.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 320,
            magia: 200,
            ataques: ["Invocação de esqueletos", "Poção explosiva", "Feitiço venenoso"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE BRUXA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Bruxa defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Bruxa acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Bruxa perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const cavaleiroFantasma = {
            nome: 'Cavaleiro Fantasma',
            nivel: 6,
            descricao: 'Guerreiro forte e muito habilidoso com sua espada.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 210,
            magia: 50,
            ataques: ["Espada de fogo", "Lâmina da morte", "Investida rápida"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE CAVALEIRO FANTASMA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Cavaleiro Fantasma defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Cavaleiro Fantasma acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Cavaleiro Fantasma perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const mordog = {
            nome: 'Mordog',
            nivel: 'Infinito(∞)',
            descricao: 'Bruxo com o poder equivalente a 1 milhão de almas.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 1000100,
            magia: 9999999,
            ataques: ["Feitiço venenoso", "Raio elétrico", "Bola de fogo", "Feitiço mortal", "Poção explosiva", "Poção atordoante", "Ataque telecinético"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE MORDOG:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Descrição: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Mordog defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Mordog acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Mordog perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * this.ataques.length)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = statusJogador.vida
                    this.defesa =  statusJogador.defesa
                    this.ataque =  statusJogador.ataque
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        function alteracao(b){
            b.nivel = 1
            b.vida = 100
            b.ataque = 40
            b.defesa = 10 
            b.dinheiro = 0
            b.magia = 0
        }
        console.log("A JORNADA DO HERÓI \nUma Ficção Interativa \n=====================")
        let jogador = prompt("Digite o nome do(a) jogador(a) para começar: ")
        while (jogador.length < 3) {
            console.log("\nDigite um nome de, pelo menos, 3 letras.")
            jogador = prompt("Digite o nome do(a) jogador(a) para começar: ")
        }
        statusJogador.nome = jogador
        console.log("\nOPÇÕES DE PERSONAGENS: \n[1] Um grande guerreiro, forte e destemido, em busca de uma boa aventura. \n[2] Uma guerreira habilidosa e valente, em busca de sua jornada para se tornar heroína.\n")
        let personagem = +prompt("Escolha um personagem. Número [1] ou [2]: ")
        while (personagem != 1 && personagem != 2) {
            console.log("\nNÚMERO INVÁLIDO!")
            personagem = +prompt("Escolha um personagem. Número [1] ou [2]: ")
        }
        console.clear()
        const modosdDeJogo = ["Escolha um modo de jogo:", "[1]MODO HISTÓRIA - Entre em uma aventura épica", "[2]MODO SOBREVIVÊNCIA - Batalhe até se cansar"]
        for (let n of modosdDeJogo){
            console.log(n)
            console.log()
        }
        let escolhaModo = +prompt("Número: ")
        while (escolhaModo != 1 && escolhaModo != 2){
            console.log("\nNÚMERO INVÁLIDO!")
            escolhaModo = +prompt("Número: ")
        }
        dia1: while (escolhaModo == 1) {
            dia++
            statusJogador.consultarStatus()
            console.clear()
            statusJogador.aumentarTempo()
            console.log("======== \nO INÍCIO")
            const intro1 = ["\nEra uma linda semana de primavera na terra de Blue, os pássaros cantavam, as flores desabrochavam e as pessoas estavam felizem e em paz....", "\nVocê, um conhecido guerreiro forte e destemido, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...", "\nDurante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fumaça e destruição em grande parte dela. Você acelera seu cavalo...", `\nAo entrar em sua cidade, um guarda real vêm ao seu encontro e diz: \n'${statusJogador.nome}, nosso rei precisa de sua presença o mais rápido possível!'`, "\nApós uma breve conversa com o rei de Blue, descobre que o ataque à cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder...", `\nO rei disse: \n'Dessa vez conseguimos conter Mordog e seu exército, mas com as almas que ele conseguiu tememos que venha mais forte da próxima vez.'`, `\n'${statusJogador.nome}, você já fez parte de minha guarda real, é o único guerreiro que pode deter Mordog!'`]
            const intro2 = ["\nEra uma linda semana de primavera na terra de Blue, os pássaros cantavam, as flores desabrochavam e as pessoas estavam felizem e em paz....", "\nVocê, uma guerreira habilidosa e valente, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...", "\nDurante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fumaça e destruição em grande parte dela. Você acelera seu cavalo...", `\nAo entrar em sua cidade, um guarda real vêm ao seu encontro e diz: \n'${statusJogador.nome}, nosso rei precisa de sua presença o mais rápido possível!'`, "\nApós uma breve conversa com o rei de Blue, descobre que o ataque à cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder...", `\nO rei disse: \n'Dessa vez conseguimos conter Mordog e seu exército, mas com as almas que ele conseguiu tememos que venha mais forte da próxima vez.'`, `\n'${statusJogador.nome}, você já fez parte de minha guarda real, é a única guerreira que pode deter Mordog!`]
            if (personagem == 1) {
                for (let i of intro1) {
                    console.log(i)
                    prompt("[ENTER]")
                }
            } else {
                for (let i of intro2) {
                    console.log(i)
                    prompt("[ENTER]")
                }
            }
            console.clear()
            console.log("Você aceita a missão de ir atrás do bruxo. Antes de deixar o salão, o rei lhe oferece um mapa de onde possivelmente Mordog se esconde.\n")
            let a = +prompt("Você pega o mapa? 1.[SIM] 2.[NÃO]: ")
            while (a != 1 && a != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                a = +prompt("Você pega o mapa? 1.[SIM] 2.[NÃO]: ")
            }
            if (a == 1) {
                prompt("\nVocê pega o mapa e parte. [ENTER]")
                statusJogador.mapa += 1
                statusJogador.pontuacao += 1
            } else if ( a == 2) {
                prompt("\nVocê diz:\n'Não preciso de mapas, já sei o caminho!' \n e parte. [ENTER]")
            }
            console.clear()
            console.log("Você vai até sua casa e começa a se aprontar para a missão.\n")
            let b = +prompt("Vai levar sua espada? (o jogo ficará mais difícil sem ela) 1.[SIM] 2.[NÃO]: ")
            while (b != 1 && b != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                b = +prompt("Vai levar sua espada? 1.[SIM] 2.[NÃO]: ")
            }
            if (b == 1) {
                prompt("\nVocê pega sua espada. [ENTER]")
                statusJogador.aumentarAtaque(15)
                statusJogador.pontuacao += 1
                statusJogador.espada += 1
            } else if ( b == 2) {
                prompt("\nVocê confia muito em seus punhos e decide não levar sua espada. [ENTER]")
            }
            console.clear()
            console.log("Você se lembra do alerta que o rei lhe deu sobre o perigoso dragão que compõe o exército de Mordog.\n")
            let c = +prompt("Vai levar sua capa contra fogo? 1.[SIM] 2.[NÃO]: ")
            while (c != 1 && c != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                c = +prompt("Vai levar sua capa contra fogo? 1.[SIM] 2.[NÃO]: ")
            }
            if (c == 1) {
                console.log("\nVocê veste sua linda capa contra fogo.\n")
                prompt("Proteção contra fogo adicionada. [ENTER]")
                statusJogador.pontuacao += 1
                statusJogador.capa += 1
            } else if ( c == 2) {
                prompt("\nVocê escolhe priorizar a agilidade e decide deixar sua armadura leve. [ENTER]")
            }
            console.clear()
            console.log()
            prompt("Após arrumar todas as coisas, visita seu vizinho elfo, que entende um pouco de magia e abençoa seu caminho. [ENTER]")
            console.log("\nEle disse, lhe oferecendo um colar e um frasco: \n'Use esse amuleto em seu pescoço, vai proteger contra os feitiços do bruxo.'")
            console.log("'Leve também essa poção de cura, ela pode ser muito útil em algum momento.'\n")
            let d = +prompt("Você leva o amuleto e a poção? 1.[SIM] 2.[NÃO]: ")
            while (d != 1 && d != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                d = +prompt("Você leva o amuleto e as poção? 1.[SIM] 2.[NÃO]: ")
            }
            if (d == 1) {
                prompt("\nVocê agradece pelos presentes, e coloca o amuleto em seu pescoço. [ENTER]")
                statusJogador.aumentarMagia(20)
                statusJogador.pontuacao += 1
                statusJogador.amuleto += 1
                statusJogador.pocao += 1
            } else if ( d == 2) {
                prompt("\nVocê agradece pela benção, mas escolhe não levar os itens. [ENTER]")
            }
            console.clear()
            if (personagem == 1) {
                console.log("\nPor um breve momento você pensa que, mesmo com toda sua habilidade e determinação, talvez seja difícil completar a missão sozinho.")
                console.log("Você pensa em Jhonny, seu amigo que, assim como você, gosta de uma boa aventura e pode ajudar.\n")
                let e = +prompt("Você convida Jhonny? 1.[SIM] 2.[NÃO]: ")
                while (e != 1 && e != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                e = +prompt("Você convida Jhonny? 1.[SIM] 2.[NÃO]: ")
            }
            if (e == 1) {
                prompt("\nVocê decide chamar seu amigo.[ENTER]")
                statusJogador.pontuacao += 1
                statusJogador.grupo += 1
                console.clear()
                console.log("\nJhonny diz que já faz muito tempo que não participa de uma batalha, vocês decidem simular uma luta para testar isso.")
                prompt("[ENTER]")
                console.log("\nVocês se dirigem até uma área aberta e, sem espadas, começam a luta.")
                console.log("Você diz: \n'Me mostre o que você sabe fazer!'")
                prompt("[ENTER]")
                backup(1,statusJogador)
                backup2(1,jhonny)
                alteracao(statusJogador)
                rodada = 0
                while(true){
                    rodada++
                    console.clear()
                    console.log(`RODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log("Jhonny ataca.")
                    jhonny.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${jhonny.nome}: ${jhonny.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue dia1
                        } else {
                        break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('jhonny')
                    if (jhonny.vida <= 50) {
                        break
                    } 
                }
                backup(2,statusJogador)
                backup2(2,jhonny)
                console.clear()
                console.log("'De fato não estou mais tão em forma como antigamente' \nDisse Jhonny.")
                console.log("\nPor conta disso, seu amigo concorda em ajudar na viagem, ficando encarregado de cuidar dos mantimentos, enquanto você cuida dos inimigos.")
                prompt("[ENTER]")
                statusJogador.aumentarGrupo()
                console.log()
                prompt("Vocês partirão no dia seguinte. [ENTER]")
            } else if ( e == 2) {
                prompt("\nVocê decide não chamar seu amigo e se prepara para partir no dia seguinte. [ENTER]")
            }
            } else {
                console.log("\nPor um breve momento, você pensa que, mesmo com toda sua habilidade e determinação, talvez seja difícil completar a missão sozinha.")
                console.log("Você pensa em Amanda, sua amiga que, assim como você, gosta de uma boa aventura e pode ajudar.\n")
                let e = +prompt("Você convida Amanda? 1.[SIM] 2.[NÃO]: ")
                while (e != 1 && e != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                e = +prompt("Você convida Amanda? 1.[SIM] 2.[NÃO]: ")
            }
            if (e == 1) {
                prompt("\nVocê decide chamar sua amiga. [ENTER]")
                statusJogador.pontuacao += 1
                statusJogador.grupo += 1
                console.clear()
                console.log("\nAmanda diz que já faz muito tempo que não participa de uma batalha, vocês decidem simular uma luta para testar isso.")
                prompt("[ENTER]")
                console.log("\nVocês se dirigem até uma área aberta e, sem espadas, começam a luta.")
                console.log("Você diz: \n'Me mostre o que você sabe fazer!'")
                prompt("[ENTER]")
                backup2(1,amanda)
                backup(1,statusJogador)
                alteracao(statusJogador)
                rodada = 0
                while(true){
                    rodada++
                    console.clear()
                    console.log(`RODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log("Amanda ataca.")
                    amanda.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${amanda.nome}: ${amanda.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue dia1
                        } else {
                        break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('amanda')
                    if (amanda.vida <= 50) {
                        break
                    }
                }
                backup(2,statusJogador)
                backup2(1,amanda)
                console.clear()
                console.log("'De fato não estou mais tão em forma como antigamente' \nDisse Amanda.")
                console.log("\nPor conta disso, sua amiga concorda em ajudar na viagem, ficando encarregada de cuidar dos mantimentos, enquanto você cuida dos inimigos.")
                prompt("[ENTER]")
                statusJogador.aumentarGrupo()
                console.log()
                prompt("Vocês partirão no dia seguinte. [ENTER]")
            } else if ( e == 2) {
                prompt("\nVocê decide não chamar sua amiga e se prepara para partir no dia seguinte. [ENTER]")
            }
            }
        break
        }
        dia2: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nA AVENTURA COMEÇA")
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nAo deixar a cidade vocês sabem que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paixão pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Vocês conversam enquanto caminham até seu objetivo:")
                    prompt("[ENTER]")
                    console.log(`\n'Sabe ${statusJogador.nome}, ouvi dizer que o exército de Mordog têm apenas 6 guerreiros, é realmente impressionante como ele consegue causar tanta destruição...'`)
                    console.log("Disse Jhonny.")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVocês encontram facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                } else {
                    console.log("\nAo deixar a cidade você sabe que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paixão pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Você pensa caminham até seu objetivo:")
                    prompt("[ENTER]")
                    console.log("\n'Ouvi dizer que o exército de Mordog têm apenas 6 guerreiros, é realmente impressionante como ele consegue causar tanta destruição...'")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVocês encontra facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                }
            } else {
                if (statusJogador.grupo >= 1) {
                    console.log("\nAo deixar a cidade vocês sabem que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paixão pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Vocês conversam enquanto caminham até seu objetivo:")
                    prompt("[ENTER]")
                    console.log(`\n'Sabe ${statusJogador.nome}, ouvi dizer que o exército de Mordog têm apenas 6 guerreiros, é realmente impressionante como ele consegue causar tanta destruição...'`)
                    console.log("Disse Amanda.")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVocês encontram facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                } else {
                    console.log("\nAo deixar a cidade você sabe que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paixão pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Você pensa caminham até seu objetivo:")
                    prompt("[ENTER]")
                    console.log("\n'Ouvi dizer que o exército de Mordog têm apenas 6 guerreiros, é realmente impressionante como ele consegue causar tanta destruição...'")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVocê encontram facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                }
            }
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("No caminho vocês se deparam com uma ser baixinho e musculoso que os recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do exército de Mordog, vocês jamais passarão por mim!'")
                    prompt("Disse o Goblin se lançando contra vocês de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVocê saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOCÊ MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            while (z != 1 && z != 2) {
                                console.log("\nNÚMERO INVÁLIDO!")
                                z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                } else {
                    prompt("No caminho você se depara com uma ser baixinho e musculoso que o recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do exército de Mordog, você jamais passará por mim!'")
                    prompt("Disse o Goblin se lançando contra você de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVocê saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOCÊ MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            while (z != 1 && z != 2) {
                                console.log("\nNÚMERO INVÁLIDO!")
                                z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("No caminho vocês se deparam com uma ser baixinho e musculoso que as recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do exército de Mordog, vocês jamais passarão por mim!'")
                    prompt("Disse o Goblin se lançando contra vocês de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVocê saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOCÊ MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            while (z != 1 && z != 2) {
                                console.log("\nNÚMERO INVÁLIDO!")
                                z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                } else {
                    prompt("No caminho você se depara com uma ser baixinho e musculoso que a recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do exército de Mordog, você jamais passará por mim!'")
                    prompt("Disse o Goblin se lançando contra você de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVocê saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOCÊ MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            while (z != 1 && z != 2) {
                                console.log("\nNÚMERO INVÁLIDO!")
                                z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                }
            }
            console.clear()
            console.log("'Não consigo acreditar que fui derrotado por um humano...'")
            console.log("Disse o Goblin sem conseguir acreditar que tinha sido derrotado.\n")
            let escolha1 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            while(escolha1 != 1 && escolha1 != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                escolha1 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            }
            if (escolha1 == 1){
                console.log("\nVocê mata o inimigo e segue seu caminho.")
                kills++
            } else if (escolha1 == 2){
                console.clear()
                console.log()
                prompt("'O quê? Você está me poupando?' [ENTER]")
                console.log()
                prompt("'Pois então deixe-me contar um segredo sobre meu mestre...' [ENTER]")
                prompt("'Mordog é extremamente poderoso, mesmo que consiga chegar até ele, é impossível derrotá-lo com todas as almas que ele já possui.' [ENTER]")
                if (statusJogador.grupo >= 1) {
                    console.log("\n'Mas talvez vocês tenham alguma chance enquanto ele se recupera da última batalha, vocês têm apenas 6 dias.'\n")
                } else {
                    console.log("\n'Mas talvez você tenha alguma chance enquanto ele se recupera da última batalha, você têm apenas 6 dias.'\n")
                }
                prompt("O Goblin sai correndo e desaparece na floresta. [ENTER]")
            }
            statusJogador.aumentarNivel()
            break
        }
        dia3: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nPERDIDOS NA FLORESTA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("Após terem derrotado o Goblin, você e Jhonny encontram-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\n'Você ouviu o que o Goblin falou? temos que nos apressar se quisermos derrotar o inimigo.'")
                        prompt("Disse Jhonny. [ENTER]")
                    } else {
                        console.log("\n'Temos que nos apressar se quisermos chegar antes que Mordog se recupere da última batalha.'")
                        prompt("Disse Jhonny. [ENTER]")
                    }
                } else {
                    prompt("Após ter derrotado o Goblin, você encontra-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\nVocê lembra do que o Goblin falou e caminha mais rápido para chegar ao destino o quanto antes.")
                        prompt("[ENTER]")
                    } else {
                        console.log("\nVocê caminha mais rápido para chegar ao destino antes que Mordog se recupere da última batalha.")
                        prompt("[ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("Após terem derrotado o Goblin, você e Amanda encontram-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\n'Você ouviu o que o Goblin falou? temos que nos apressar se quisermos derrotar o inimigo.'")
                        prompt("Disse Amanda. [ENTER]")
                    } else {
                        console.log("\n'Temos que nos apressar se quisermos chegar antes que Mordog se recupere da última batalha.'")
                        prompt("Disse Amanda. [ENTER]")
                    }
                } else {
                    prompt("Após ter derrotado o Goblin, você encontra-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\nVocê lembra do que o Goblin falou e caminha mais rápido para chegar ao destino o quanto antes.")
                        prompt("[ENTER]")
                    } else {
                        console.log("\nVocê caminha mais rápido para chegar ao destino antes que Mordog se recupere da última batalha.")
                        prompt("[ENTER]")
                    }
                }
            }
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("Ao longe vocês avistam um elfo em cima de uma árvore. Ele é magro e está com uma linda roupa feita de folhas e cordas biodegradáveis. [ENTER]")
                    console.log("\n'Que interessante, vocês conseguiram passar pelo meu amigo.'")
                    console.log("'Infelizmente vocês não terão tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da árvore. [ENTER]")
                } else {
                    prompt("Ao longe você avista um elfo em cima de uma árvore. Ele é magro e está com uma linda roupa feita de folhas e cordas biodegradáveis. [ENTER]")
                    console.log("\n'Que interessante, você conseguiu passar pelo meu amigo.'")
                    console.log("'Infelizmente não terá tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da árvore. [ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("Ao longe vocês avistam um elfo em cima de uma árvore. Ele é magro e está com uma linda roupa feita de folhas e cordas biodegradáveis. [ENTER]")
                    console.log("\n'Que interessante, vocês conseguiram passar pelo meu amigo.'")
                    console.log("'Infelizmente vocês não terão tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da árvore. [ENTER]")
                } else {
                    prompt("Ao longe você avista um elfo em cima de uma árvore. Ele é magro e está com uma linda roupa feita de folhas e cordas biodegradáveis. [ENTER]")
                    console.log("\n'Que interessante, você conseguiu passar pelo meu amigo.'")
                    console.log("'Infelizmente não terá tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da árvore. [ENTER]")
                }
            }
            backup(1,statusJogador)
            elfoDaFloresta.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Elfo da Floresta ataca.")
                elfoDaFloresta.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${elfoDaFloresta.nome}: ${elfoDaFloresta.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOCÊ MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    while (z != 1 && z != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    }
                    if (z == 1){
                        continue dia3
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('elfoDaFloresta')
                if (elfoDaFloresta.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            console.log("'Você é mais forte do que eu pensava. Mereceu a vitória!'\n")
            let escolha2 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            while(escolha2 != 1 && escolha2 != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                escolha2 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            }
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    if (escolha2 == 1){
                        console.log("\nVocê tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Vocês são mesmo guerreiros de coração puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agradeço por pouparem minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    }
                } else {
                    if (escolha2 == 1){
                        console.log("\nVocê tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Você é mesmo um guerreiro de coração puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agradeço por poupar minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    if (escolha2 == 1){
                        console.log("\nVocê tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Vocês são mesmo guerreiras de coração puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agradeço por pouparem minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    }
                } else {
                    if (escolha2 == 1){
                        console.log("\nVocê tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Você é mesmo uma guerreira de coração puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agradeço por poupar minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a várias gerações atrás Mordog já foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma reverência e vai embora.")
                    }
                }
            }
            statusJogador.aumentarNivel()
            break
        }
        dia4: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nATAQUE NOTURNO")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Você dormia. Jhonny estava de vigia do lado de fora da barraca.")
                    prompt("Foi então quando um barulho de passos os assustou, passos que faziam tremer o chão abaixo de vocês. [ENTER]")
                    console.log("\nO ser gigante lhes pergunta: ")
                    console.log("'Fiquei sabendo que dois humanos estão passando aqui perto. Eu vim acabar com eles antes que cheguem no meu mestre.'")
                    console.log("'Vocês viram eles?'\n")
                    console.log("O que você responde? \n[1]SOMOS NÓS \n[2]NÃO VIMOS ELES")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        console.log("O que você responde? \n[1]SOMOS NÓS \n[2]NÃO VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupem atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, vocês estão tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei vocês!'")
                        prompt("[ENTER]")
                    }
                } else {
                    prompt("Você dormia. Foi então quando um barulho de passos o acordou, passos que faziam tremer o chão abaixo de você. [ENTER]")
                    console.log("\nO ser gigante lhe pergunta: ")
                    console.log("'Fiquei sabendo que um humano está passando aqui perto. Eu vim acabar com ele antes que chegue no meu mestre.'")
                    console.log("'Você viu ele?'\n")
                    console.log("O que você responde? \n[1]SOU EU \n[2]NÃO VI ELE")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        console.log("O que você responde? \n[1]SOMOS NÓS \n[2]NÃO VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupe atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, você está tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei você!'")
                        prompt("[ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Você dormia. Amanda estava de vigia do lado de fora da barraca.")
                    prompt("Foi então quando um barulho de passos as assustou, passos que faziam tremer o chão abaixo de vocês. [ENTER]")
                    console.log("\nO ser gigante lhes pergunta: ")
                    console.log("'Fiquei sabendo que duas humanas estão passando aqui perto. Eu vim acabar com elas antes que cheguem no meu mestre.'")
                    console.log("'Vocês viram elas?'\n")
                    console.log("O que você responde? \n[1]SOMOS NÓS \n[2]NÃO VIMOS ELAS")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        console.log("O que você responde? \n[1]SOMOS NÓS \n[2]NÃO VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupem atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, vocês estão tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei vocês!'")
                        prompt("[ENTER]")
                    }
                } else {
                    prompt("Você dormia. Foi então quando um barulho de passos a acordou, passos que faziam tremer o chão abaixo de você. [ENTER]")
                    console.log("\nO ser gigante lhe pergunta: ")
                    console.log("'Fiquei sabendo que uma humana está passando aqui perto. Eu vim acabar com ela antes que chegue no meu mestre.'")
                    console.log("'Você viu ela?'\n")
                    console.log("O que você responde? \n[1]SOU EU \n[2]NÃO VI ELA")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        console.log("O que você responde? \n[1]SOMOS NÓS \n[2]NÃO VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupe atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, você está tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei você!'")
                        prompt("[ENTER]")
                    }
                }
            }
            backup(1,statusJogador)
            troll.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Troll ataca.")
                troll.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${troll.nome}: ${troll.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOCÊ MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    while (z != 1 && z != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    }
                    if (z == 1){
                        continue dia4
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('troll')
                if (troll.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("'Como humanos tão pequeninos conseguem me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                } else {
                    console.log("'Como um humano tão pequenino consegue me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("'Como humanas tão pequeninas conseguem me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                } else {
                    console.log("'Como uma humana tão pequenina consegue me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                }
            }
            console.log()
            let escolha3 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            while(escolha3 != 1 && escolha3 != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                escolha3 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            }
            if (escolha3 == 1){
                console.log("\nVocê acaba com o Troll e vai preparar o café da manhã.")
                kills++
            } else if (escolha3 == 2){
                console.clear()
                console.log("O Troll fica perplexo e diz:")
                prompt("'Nunca havia visto tamanha compaixão vinda da raça humana. Obrigado!' [ENTER]")
                console.log("\n'Sei o objetivo de sua missão. Mas saiba que Mordog sempre foi uma pessoa boa, e seu objetivo sempre foi nobre.'")
                prompt("'Por isso eu e os outros 5 guerreiros o seguimos.' [ENTER]")
                console.log("\nO Troll retorna para sua caverna antes que o sol apareça e o transforme em pedra.")
                prompt("[ENTER]")
            }
            statusJogador.aumentarNivel()
            break
        }
        dia5: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nCHAMAS DA DESTRUIÇÃO")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Após serem surpreendidos pelo Troll ontem de madrugada, vocês agora ficam mais atentos.\n")
                    console.log("'Se aquele Troll não fosse tão pesado, talvez nós nem teríamos visto sua chegada.'")
                    prompt("Disse Jhonny. [ENTER]")
                    console.log("\nVocês se alegram por estarem na metade do caminho. A jornada está mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente vocês avistam uma sombra no horizonte voando em sua direção. [ENTER]")
                    console.log("Um Grande Dragão aparece e enche o céu sob vocês de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que você trouxe sua capa contra fogo... [ENTER]")
                    }
                } else {
                    console.log("Após ser surpreendido pelo Troll ontem de madrugada, você agora fica mais atento.\n")
                    console.log("'Se aquele Troll não fosse tão pesado, talvez eu nem teria visto sua chegada.'")
                    prompt("Você pensa. [ENTER]")
                    console.log("\nVocê se alegra por estar na metade do caminho. A jornada está mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente você avista uma sombra no horizonte voando em sua direção. [ENTER]")
                    console.log("Um Grande Dragão aparece e enche o céu sob você de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que você trouxe sua capa contra fogo... [ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Após serem surpreendidas pelo Troll ontem de madrugada, vocês agora ficam mais atentas.\n")
                    console.log("'Se aquele Troll não fosse tão pesado, talvez nós nem teríamos visto sua chegada.'")
                    prompt("Disse Amanda. [ENTER]")
                    console.log("\nVocês se alegram por estarem na metade do caminho. A jornada está mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente vocês avistam uma sombra no horizonte voando em sua direção. [ENTER]")
                    console.log("Um Grande Dragão aparece e enche o céu sob vocês de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que você trouxe sua capa contra fogo... [ENTER]")
                    }
                } else {
                    console.log("Após ser surpreendida pelo Troll ontem de madrugada, você agora fica mais atenta.\n")
                    console.log("'Se aquele Troll não fosse tão pesado, talvez eu nem teria visto sua chegada.'")
                    prompt("Você pensa. [ENTER]")
                    console.log("\nVocê se alegra por estar na metade do caminho. A jornada está mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente você avista uma sombra no horizonte voando em sua direção. [ENTER]")
                    console.log("Um Grande Dragão aparece e enche o céu sob você de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que você trouxe sua capa contra fogo... [ENTER]")
                    }
                }
            }
            backup(1,statusJogador)
            dragao.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Dragão ataca.")
                dragao.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${dragao.nome}: ${dragao.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOCÊ MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    while (z != 1 && z != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    }
                    if (z == 1){
                        continue dia5
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('dragao')
                if (dragao.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (statusJogador.capa == 0) {
                prompt("\nVocê acabou sofrendo queimaduras pelo fogo do dragão. [ENTER]")
            }
            console.log("\nCaído no chão, o Dragão disse:")
            console.log("'Estou mesmo impressionado com sua força a habilidade para desviar de meus ataques.'")
            console.log("'Mas não pense que vai ser o bastante contra o que existe à frente.'")
            prompt("[ENTER]")
            console.log()
            let escolha4 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            while(escolha4 != 1 && escolha4 != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                escolha4 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
                console.log()
            }
            if (escolha4 == 1){
                prompt("Você dá o golpe final no inimigo.")
                kills++
            } else if (escolha4 == 2) {
                console.log("'Esse foi mesmo um lindo gesto.'")
                if(kills >= 2) {
                    console.log("'Gostaria que meus amigos também tivessem sobrevivido.")
                    prompt("[ENTER]")
                }
                console.clear()
                prompt("'Permita que eu conte um segredo antes de minha retirada humilhante...' [ENTER]")
                console.log("\n'Há muito tempo atrás, Mordog era bondoso e feliz.'")
                prompt("'Ele tinha um reino, uma esposa, um filho, e gostava de ajudar a todos.'[ENTER]")
                console.log("\n'Mas certo dia seu reino foi atacado por bandidos saqueadores.'")
                prompt("'Eles colocaram fogo em seu castelo, apenas Mordog sobreviveu.' [ENTER]")
                console.log()
                console.log("O Dragão se levanta e sai voando.")
                prompt("[ENTER]")
                console.clear()
            }
            statusJogador.aumentarNivel()
            break
        }
        dia6: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nUM CAMINHO SEM VOLTA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Mais um dia de caminhada, dessa vez vocês estão cada vez mais próximos do destino.")
                    console.log()
                    console.log("'O Dragão que enfrentamos ontem era muito poderoso, e ele ainda avisou que será mais difícil à frente.'")
                    prompt("Disse Jhonny. [ENTER]")
                    console.log()
                    let resposta1 = +prompt("'Você acha que vamos conseguir?' [1]SIM [2]NÃO: ")
                    while (resposta1 != 1 && resposta1 != 2){
                        console.log("\nNÚMERO INVÁLIDO!")
                        resposta1 = +prompt("'Você acha que vamos conseguir?' [1]SIM [2]NÃO: ")
                    }
                    console.log()
                    if (resposta1 == 1) {
                        prompt("'Acredito que sim, estamos tão perto de conseguirmos.' [ENTER]")
                    } else {
                        prompt("'Mais dificuldades virão, de qualquer modo agora estamos perto de mais para desistirmos.' [ENTER]")
                    }
                    console.clear()
                    prompt("Eis que então vocês se deparam com uma mulher de chapéu pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, preparem-se para enfrentar meu exército!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                } else {
                    console.log("Mais um dia de caminhada, dessa vez você está cada vez mais próximo do destino.")
                    console.log()
                    console.log("'O Dragão que enfrentamei ontem era muito poderoso, e ele ainda avisou que será mais difícil à frente.'")
                    prompt("Você pensa. [ENTER]")
                    console.log()
                    prompt("'Mais dificuldades virão, de qualquer modo agora estou perto de mais para desistir.' [ENTER]")
                    console.clear()
                    prompt("Eis que então você se depara com uma mulher de chapéu pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, prepare-se para enfrentar meu exército!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Mais um dia de caminhada, dessa vez vocês estão cada vez mais próximas do destino.")
                    console.log()
                    console.log("'O Dragão que enfrentamos ontem era muito poderoso, e ele ainda avisou que será mais difícil à frente.'")
                    prompt("Disse Amanda. [ENTER]")
                    console.log()
                    let resposta1 = +prompt("'Você acha que vamos conseguir?' [1]SIM [2]NÃO: ")
                    while (resposta1 != 1 && resposta1 != 2){
                        console.log("\nNÚMERO INVÁLIDO!")
                        resposta1 = +prompt("'Você acha que vamos conseguir?' [1]SIM [2]NÃO: ")
                    }
                    console.log()
                    if (resposta1 == 1) {
                        prompt("'Acredito que sim, estamos tão perto de conseguirmos.' [ENTER]")
                    } else {
                        prompt("'Mais dificuldades virão, de qualquer modo agora estamos perto de mais para desistirmos.' [ENTER]")
                    }
                    console.clear()
                    prompt("Eis que então vocês se deparam com uma mulher de chapéu pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, preparem-se para enfrentar meu exército!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                } else {
                    console.log("Mais um dia de caminhada, dessa vez você está cada vez mais próxima do destino.")
                    console.log()
                    console.log("'O Dragão que enfrentamei ontem era muito poderoso, e ele ainda avisou que será mais difícil à frente.'")
                    prompt("Você pensa. [ENTER]")
                    console.log()
                    prompt("'Mais dificuldades virão, de qualquer modo agora estou perto de mais para desistir.' [ENTER]")
                    console.clear()
                    prompt("Eis que então você se depara com uma mulher de chapéu pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, prepare-se para enfrentar meu exército!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                }
            }
            prompt("[ENTER]")
            backup(1,statusJogador)
            bruxa.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Bruxa ataca.")
                bruxa.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${bruxa.nome}: ${bruxa.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOCÊ MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    while (z != 1 && z != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    }
                    if (z == 1){
                        continue dia6
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('bruxa')
                if (bruxa.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("A Bruxa fala:")
                    console.log("'Você conseguiu derrotar até meu exércio.'")
                    console.log("'És mesmo muito habilidoso em combate, mesmo que seu parceiro não ajude em nada.'")
                    prompt("[ENTER]")
                } else {
                    console.log("A Bruxa fala:")
                    console.log("'Você conseguiu derrotar até meu exércio.'")
                    console.log("'És mesmo muito habilidoso em combate!'")
                    prompt("[ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("A Bruxa fala:")
                    console.log("'Você conseguiu derrotar até meu exércio.'")
                    console.log("'És mesmo muito habilidosa em combate, mesmo que sua parceira não ajude em nada.'")
                    prompt("[ENTER]")
                } else {
                    console.log("A Bruxa fala:")
                    console.log("'Você conseguiu derrotar até meu exércio.'")
                    console.log("'És mesmo muito habilidosa em combate!'")
                    prompt("[ENTER]")
                }
            }
            if (kills >= 3) {
                console.log("'Vai fazer comigo o mesmo que com meus companheiros?'")
            }
            console.log()
            let escolha5 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            while(escolha5 != 1 && escolha5 != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                escolha5 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
                console.log()
            }
            if (escolha5 == 1) {
                console.log("A Bruxa tenta lançar um último feitiço, mas não é rápida o suficiente para parar o inevitável.")
                kills++
            } else if (escolha5 == 2) {
                console.clear()
                console.log("A Bruxa fala:")
                prompt("'Eu tenho uma bola de cristal, já sabia que ficaria viva, muahahaha!'")
                console.clear()
                prompt("'Depois que o reino de Mordog foi saqueado, ele caçou cada um dos criminosos e fez justiça.' [ENTER]")
                console.log()
                prompt("'Desde então ele busca cada vez mais poder para trazer de volta aqueles que ama.' [ENTER]")
                console.log("\n'Alguns de meus companheiros também perderam entes queridos naquele dia, Mordog é a nossa esperança.'")
                if(statusJogador.grupo >= 1) {
                    prompt("'Espero que entendam.' [ENTER]")
                } else {
                    prompt("'Espero que entenda.' [ENTER]")
                }
                console.log("\nA Bruxa monta em sua vassoura e sai voando.")
            }
            prompt(`[ENTER]`)
            statusJogador.aumentarNivel()
            break
        }
        dia7: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nUMA REVELAÇÃO INESPERADA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    if (statusJogador.mapa >= 1) {
                        console.log("Após desarmarem o acampamento e continuarem seguindo o mapa, vocês avistam a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Após desarmarem o acampamento e continuarem a jornada, vocês avistam a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nJhonny fala:")
                    prompt("'Estamos tão perto do objetivo, mas derrotamos apenas 5 guerreiros, ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que os observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente vocês dois não sabiam.'")
                    prompt("'Mordog não está roubando as almas, tudo voltará a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre já conseguiu todo o poder necessário para trazer todos os que amamos de volta.'")
                    console.log("'Não posso deixar que vocês o impeçam de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Vocês devem estar pensando o porquê de eu ser o Cavaleiro Fantasma e não parecer com um fantasma.'")
                    prompt("'Pois saibam que esse é um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Vocês estão se sentindo assustados?' [1]SIM [2]NÃO: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        resposta2 = +prompt("'Vocês estão se sentindo assustados?' [1]SIM [2]NÃO: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois vão se sentir assustados agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Pois vão se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("É melhor se prepararem seus assassinos desgraçados! [ENTER]")
                    }
                } else {
                    if (statusJogador.mapa >= 1) {
                        console.log("Após desarmar o acampamento e continuar seguindo o mapa, você avista a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Após desarmar o acampamento e continuar a jornada, você avista a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nVocê fala para si mesmo:")
                    prompt("'Estou tão perto do objetivo, mas derrotei apenas 5 guerreiros, ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que o observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente você não sabia.'")
                    prompt("'Mordog não está roubando as almas, tudo voltará a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre já conseguiu todo o poder necessário para trazer todos os que amamos de volta.'")
                    console.log("'Não posso deixar que você o impeça de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Você deve estar pensando o porquê de eu ser o Cavaleiro Fantasma e não parecer com um fantasma.'")
                    prompt("'Pois saiba que esse é um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Você está se sentindo assustado?' [1]SIM [2]NÃO: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        resposta2 = +prompt("'Você está se sentindo assustado?' [1]SIM [2]NÃO: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois vai se sentir assustado agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Poi vai se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("É melhor se preparar seu assassino desgraçado! [ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    if (statusJogador.mapa >= 1) {
                        console.log("Após desarmarem o acampamento e continuarem seguindo o mapa, vocês avistam a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Após desarmarem o acampamento e continuarem a jornada, vocês avistam a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nAmanda fala:")
                    prompt("'Estamos tão perto do objetivo, mas derrotamos apenas 5 guerreiros, 'ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que as observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente vocês duas não sabiam.'")
                    prompt("'Mordog não está roubando as almas, tudo voltará a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre já conseguiu todo o poder necessário para trazer todos os que amamos de volta.'")
                    console.log("'Não posso deixar que vocês o impeçam de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Vocês devem estar pensando o porquê de eu ser o Cavaleiro Fantasma e não parecer com um fantasma.'")
                    prompt("'Pois saibam que esse é um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Vocês estão se sentindo assustadas?' [1]SIM [2]NÃO: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        resposta2 = +prompt("'Vocês estão se sentindo assustadas?' [1]SIM [2]NÃO: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois vão se sentir assustadas agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Pois vão se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("É melhor se prepararem suas assassinas desgraçadas! [ENTER]")
                    }
                } else {
                    if (statusJogador.mapa >= 1) {
                        console.log("Após desarmar o acampamento e continuarem seguindo o mapa, você avista a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Após desarmar o acampamento e continuar a jornada, você avista a montanha onde possivelmente está a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nVocê fala para si mesma:")
                    prompt("'Estou tão perto do objetivo, mas derrotei apenas 5 guerreiros, ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que a observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente você não sabia.'")
                    prompt("'Mordog não está roubando as almas, tudo voltará a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre já conseguiu todo o poder necessário para trazer todos os que amamos de volta.'")
                    console.log("'Não posso deixar que você o impeça de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Você deve estar pensando o porquê de eu ser o Cavaleiro Fantasma e não parecer com um fantasma.'")
                    prompt("'Pois saiba que esse é um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Você está se sentindo assustada?' [1]SIM [2]NÃO: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        resposta2 = +prompt("'Você está se sentindo assustada?' [1]SIM [2]NÃO: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois vai se sentir assustada agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Poi vai se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("É melhor se preparar sua assassina desgraçada! [ENTER]")
                    }
                }
            }
            backup(1,statusJogador)
            cavaleiroFantasma.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Cavaleiro Fantasma ataca.")
                cavaleiroFantasma.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${cavaleiroFantasma.nome}: ${cavaleiroFantasma.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOCÊ MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    while (z != 1 && z != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        z = +prompt("Gostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    }
                    if (z == 1){
                        continue dia7
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('cavaleiroFantasma')
                if (cavaleiroFantasma.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            console.log("'Me perdoe mestre, eu falhei em protegê-lo.'")
            prompt("Disse o Cavaleiro caído no chão sem seu elmo. [ENTER]")
            console.log()
            let escolha6 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
            while(escolha6 != 1 && escolha6 != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                escolha6 = +prompt("O que você faz? [1]MATAR [2]POUPAR: ")
                console.log()
            }
            if (escolha6 == 1) {
                if (kills == 5) {
                    prompt("'Não estou nem um pouco surpreso com sua decisão.' [ENTER]")
                    console.log()
                    prompt("Você tira a vida do último inimigo. [ENTER]")
                    kills++
                } else {
                    prompt("Você tira a vida do Cavaleiro Fantasma. [ENTER]")
                    kills++
                }
            } else if (escolha6 == 2) {
                if (kills == 5) {
                    prompt("'Estou surpreso que tenha poupado ao menos uma vida.' [ENTER]")
                } else if (kills == 0) {
                    prompt("'Você possui mesmo um coração muito nobre.' [ENTER]")
                } else {
                    prompt("'Agradeço por poupares minha vida.' [ENTER]")
                }
                console.clear()
                console.log("O Cavaleiro continua:\n")
                if (personagem == 1) {
                    if (statusJogador.grupo >= 1) {
                        prompt("'Mordog ainda não se recuperou completamente da última batalha.' [ENTER]")
                        console.log("\n'Vocês ainda têm uma chance de derrotá-lo.'")
                        prompt("'Mas peço que pensem melhor no que estão fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necessário para trazer todos de volta à vida.'")
                        prompt("'Sei que deve ser difícil para vocês acreditarem.' [ENTER]")
                        console.clear()
                        console.log("\n'Se vocês matarem Mordog estarão destruindo também 1 milhão de almas.'")
                        console.log("'Se confiarem nele podem trazê-las de volta, ou serem mortos depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a vocês.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    } else {
                        prompt("'Mordog ainda não se recuperou completamente da última batalha.' [ENTER]")
                        console.log("\n'Você ainda têm uma chance de derrotá-lo.'")
                        prompt("'Mas peço que pense melhor no que está fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necessário para trazer todos de volta à vida.'")
                        prompt("'Sei que deve ser difícil para você acreditar.' [ENTER]")
                        console.clear()
                        console.log("\n'Se você matar Mordog estará destruindo também 1 milhão de almas.'")
                        console.log("'Se confiar nele pode trazê-las de volta, ou ser morto depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a você.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    }
                } else if (personagem == 2) {
                    if (statusJogador.grupo >= 1) {
                        prompt("'Mordog ainda não se recuperou completamente da última batalha.' [ENTER]")
                        console.log("\n'Vocês ainda têm uma chance de derrotá-lo.'")
                        prompt("'Mas peço que pensem melhor no que estão fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necessário para trazer todos de volta à vida.'")
                        prompt("'Sei que deve ser difícil para vocês acreditarem.' [ENTER]")
                        console.clear()
                        console.log("\n'Se vocês matarem Mordog estarão destruindo também 1 milhão de almas.'")
                        console.log("'Se confiarem nele podem trazê-las de volta, ou serem mortas depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a vocês.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    } else {
                        prompt("'Mordog ainda não se recuperou completamente da última batalha.' [ENTER]")
                        console.log("\n'Você ainda têm uma chance de derrotá-lo.'")
                        prompt("'Mas peço que pense melhor no que está fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necessário para trazer todos de volta à vida.'")
                        prompt("'Sei que deve ser difícil para você acreditar.' [ENTER]")
                        console.clear()
                        console.log("\n'Se você matar Mordog estará destruindo também 1 milhão de almas.'")
                        console.log("'Se confiar nele pode trazê-las de volta, ou ser morta depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a você.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    }
                }
            }
            statusJogador.aumentarNivel()
            break
        }
        dia8: while (escolhaModo == 1) {
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nONDE TUDO TERMINA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Após desmontarem o acampamento, vocês estão agora a poucos quilômetros de distância da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVocês sabem que esse é um dia decisivo na sua missão: vencer ou fracassar.")
                    console.log("Mas será que vencer ou fracassar não pode ser apenas uma questão de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Vocês chegam até a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas não é uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior vocês encontram um salão gigantesco.")
                    console.log("Nesse salão há um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Vocês já sabem quem é esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog então começa a falar:\n")
                    prompt(`'${statusJogador.nome} e Jhonny, estava esperando vocês, sei o que vieram fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que vieram vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para trazê-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficarão livres para voltarem para casa.'")
                    prompt("'Estou tão perto de concluir meu plano, não posso deixar que vocês atrapalhem.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto mágico que está usando não lhe salvará.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Além disso, Vocês mataram todos os meus leais companheiros.'")
                        console.log("'Desse modo é impossível que eu lhes dê piedade.'")
                        prompt("[ENTER]")
                        mordog.alterarAtributos(1)
                    } else {
                        mordog.alterarAtributos()
                    }
                } else {
                    console.log("Após desmontar o acampamento, você está agora a poucos quilômetros de distância da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVocê sabe que esse é um dia decisivo na sua missão: vencer ou fracassar.")
                    console.log("Mas será que vencer ou fracassar não pode ser apenas uma questão de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Você chega até a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas não é uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior você encontra um salão gigantesco.")
                    console.log("Nesse salão há um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Você já sabe quem é esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog então começa a falar:\n")
                    prompt(`'${statusJogador.nome} ,estava esperando você, sei o que veio fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que veio vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para trazê-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficarão livres para voltarem para casa.'")
                    prompt("'Estou tão perto de concluir meu plano, não posso deixar que você atrapalhe.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto mágico que está usando não lhe salvará.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Além disso, Você matou todos os meus leais companheiros.'")
                        console.log("'Desse modo é impossível que eu lhe dê piedade.'")
                        mordog.alterarAtributos(1)
                        prompt("[ENTER]")
                    } else {
                        mordog.alterarAtributos()
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Após desmontarem o acampamento, vocês estão agora a poucos quilômetros de distância da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVocês sabem que esse é um dia decisivo na sua missão: vencer ou fracassar.")
                    console.log("Mas será que vencer ou fracassar não pode ser apenas uma questão de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Vocês chegam até a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas não é uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior vocês encontram um salão gigantesco.")
                    console.log("Nesse salão há um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Vocês já sabem quem é esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog então começa a falar:\n")
                    prompt(`'${statusJogador.nome} e Amanda, estava esperando vocês, sei o que vieram fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que vieram vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para trazê-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficarão livres para voltarem para casa.'")
                    prompt("'Estou tão perto de concluir meu plano, não posso deixar que vocês atrapalhem.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto mágico que está usando não lhe salvará.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Além disso, Vocês mataram todos os meus leais companheiros.'")
                        console.log("'Desse modo é impossível que eu lhes dê piedade.'")
                        mordog.alterarAtributos(1)
                        prompt("[ENTER]")
                    } else {
                        mordog.alterarAtributos()
                    }
                } else {
                    console.log("Após desmontar o acampamento, você está agora a poucos quilômetros de distância da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVocê sabe que esse é um dia decisivo na sua missão: vencer ou fracassar.")
                    console.log("Mas será que vencer ou fracassar não pode ser apenas uma questão de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Você chega até a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas não é uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior você encontra um salão gigantesco.")
                    console.log("Nesse salão há um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Você já sabe quem é esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog então começa a falar:\n")
                    prompt(`'${statusJogador.nome} ,estava esperando você, sei o que veio fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que veio vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para trazê-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficarão livres para voltarem para casa.'")
                    prompt("'Estou tão perto de concluir meu plano, não posso deixar que você atrapalhe.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto mágico que está usando não lhe salvará.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Além disso, Você matou todos os meus leais companheiros.'")
                        console.log("'Desse modo é impossível que eu lhe dê piedade.'")
                        mordog.alterarAtributos(1)
                        prompt("[ENTER]")
                    } else {
                        mordog.alterarAtributos()
                    }
                }
            }
            backup(1,statusJogador)
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Mordog ataca.")
                mordog.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${mordog.nome}: ${mordog.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOCÊ MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("\nGostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    while (z != 1 && z != 2) {
                        console.log("\nNÚMERO INVÁLIDO!")
                        z = +prompt("\nGostaria de jogar o capítulo novamente? [1]SIM [2]NÃO: ")
                    }
                    if (z == 1){
                        continue dia8
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('mordog')
                if (mordog.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("'Vocês conseguiram mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saibam que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu só queria poder ver a minha família de novo.'")
                    prompt("Lágrimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, vocês não vão conseguir me impedir.' [ENTER]")
                } else {
                    prompt("'Você conseguiu mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saiba que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu só queria poder ver a minha família de novo.'")
                    prompt("Lágrimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, você não vai conseguir me impedir.' [ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("'Vocês conseguiram mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saibam que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu só queria poder ver a minha família de novo.'")
                    prompt("Lágrimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, vocês não vão conseguir me impedir.' [ENTER]")
                } else {
                    prompt("'Você conseguiu mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saiba que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu só queria poder ver a minha família de novo.'")
                    prompt("Lágrimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, você não vai conseguir me impedir.' [ENTER]")
                }
            }
            console.clear()
            console.log("Então o corpo inteiro de Mordog começa a brilhar.")
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nJhonny fala:")
                    console.log("'Parece que ele está usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                } else {
                    console.log("\nVocê pensa consigo mesmo:")
                    console.log("'Parece que ele está usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nAmanda fala:")
                    console.log("'Parece que ele está usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                } else {
                    console.log("\nVocê pensa consigo mesma:")
                    console.log("'Parece que ele está usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                }
            }
            console.log("\nAs almas começam a sair de seu corpo como se fossem rápidos feixes de luz se dirigindo à saída da caverna.")
            prompt("[ENTER]")
            console.log("\nE de repente as almas adquiriram forma.")
            console.log("Todos aqueles que estavam aprisionados começavam a reaparecer onde deveriam estar.")
            prompt("[ENTER]")
            console.clear()
            console.log("E ali estavam, abraçados no bruxo, sua esposa e seu filho que haviam retornado.")
            prompt("[ENTER]")
            console.log("\nMas a felicidade não durou muito, Mordog estava tão determinado que usou tudo o que restara de sua energia vital.")
            console.log("Desse modo, ele só poderia aproveitar mais alguns minutos com sua família.")
            prompt("[ENTER]")
            console.clear()
            prompt("E nesse momento você se lembra de tudo o que passou em sua jornada até ali. [ENTER]")
            console.log()
            prompt("Você se lembra das batalhas que aconteceram. [ENTER]")
            console.log()
            prompt("Você se lembra das escolhas que teve de fazer. [ENTER]")
            console.log()
            if(statusJogador.pocao >= 1) {
                console.log("Então você se lembra da poção de cura que seu vizinho elfo lhe deu antes de partir.")
                let final = +prompt("Você entrega a poção para Mordog? [1]SIM [2]NÃO: ")
                while(final != 1 && final != 2) {
                    console.log("\nNÚMERO INVÁLIDO!")
                    final = +prompt("Você entrega a poção para Mordog? [1]SIM [2]NÃO: ")
                }
                console.clear()
                if (final == 1) {
                    prompt("Você entrega a poção para Mordog, ele bebe e é magicamente curado. [ENTER]")
                } else {
                    prompt("Mordog realiza seu desejo de ver sua família, mas acaba não resistindo ao seu próprio feitiço. [ENTER]")
                }
            } else
            prompt("Mordog consegue realizar seu desejo de ver sua família, mas acaba não resistindo ao seu próprio feitiço. [ENTER]")
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nVocê e Jhonny retornam para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parabéns pela aventura!`)
                } else {
                    console.log("\nVocê retorna para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parabéns pela aventura!`)
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nVocê e Amanda retornam para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parabéns pela aventura!`)
                } else {
                    console.log("\nVocê retorna para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parabéns pela aventura!`)
                }
            }
            console.log()
            prompt(`[ENTER]`)
            break
        }
        modoSobrevivência: while (escolhaModo == 2) {
            backup(1,statusJogador)
            rodada = 0
            numeroOponente++
            let selecaoDeOponente = Math.floor(Math.random() * 6)
            if (selecaoDeOponente == 0) {
                goblin.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Goblin nível ${statusJogador.nivel} ataca.`)
                    goblin.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue modoSobrevivência
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('goblin')
                    if (goblin.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 1) {
                elfoDaFloresta.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Elfo da Floresta nível ${statusJogador.nivel} ataca.`)
                    elfoDaFloresta.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${elfoDaFloresta.nome}: ${elfoDaFloresta.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue modoSobrevivência
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('elfoDaFloresta')
                    if (elfoDaFloresta.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 2) {
                troll.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Troll nível ${statusJogador.nivel} ataca.`)
                    troll.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${troll.nome}: ${troll.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue modoSobrevivência
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('troll')
                    if (troll.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 3) {
                dragao.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Dragão nível ${statusJogador.nivel} ataca.`)
                    dragao.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${dragao.nome}: ${dragao.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue modoSobrevivência
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('dragao')
                    if (dragao.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 4) {
                bruxa.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Bruxa nível ${statusJogador.nivel} ataca.`)
                    bruxa.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${bruxa.nome}: ${bruxa.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue modoSobrevivência
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('bruxa')
                    if (bruxa.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 5) {
                cavaleiroFantasma.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Cavaleiro Fantasma nível ${statusJogador.nivel} ataca.`)
                    cavaleiroFantasma.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${cavaleiroFantasma.nome}: ${cavaleiroFantasma.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOCÊ MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        while (z != 1 && z != 2) {
                            console.log("\nNÚMERO INVÁLIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobrevivência? [1]SIM [2]NÃO: ")
                        }
                        if (z == 1){
                            continue modoSobrevivência
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('cavaleiroFantasma')
                    if (cavaleiroFantasma.vida <= 0) {
                        break
                    }
                }
            }
            backup(2,statusJogador)
            console.clear()
            statusJogador.aumentarNivel()
            let saida = +prompt("Gostaria de continuar? 1.[SIM] 2.[NÃO]: ")
            while(saida != 1 && saida != 2) {
                console.log("\nNÚMERO INVÁLIDO!")
                saida = +prompt("Gostaria de continuar? 1.[SIM] 2.[NÃO]: ")
            }
            if (saida == 2) {
                console.clear()
                break modoSobrevivência
            }
        }
        console.clear()
        let final1 = prompt("O jogo acabou. Gostaria de começar novamente? [1]SIM [2]NÃO: ")
        while(final1 != 1 && final1 != 2) {
        console.log("\nNÚMERO INVÁLIDO!")
        final1 = prompt("O jogo acabou. Gostaria de começar novamente? [1]SIM [2]NÃO: ")
        }
        if (final1 == 1) {
            console.clear()
            continue
        } else {
            break jogo
        }
    }
}
console.log("\nFIM DE JOGO.")

////Criado por Douglas Volcato
////Github: https://github.com/DouglasVolcato