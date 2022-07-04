const prompt = require ("prompt-sync")()
console.clear()
const listaTelefonica = []
let acao = 0
function mostrarLista(){
    listaTelefonica.sort((a,b) => {
        if (a.nome > b.nome) return 1
        if (b.nome > a.nome) return -1
        else return 0
    })
    console.clear()
    console.log("===| LISTA TELEFONICA |===\n")
    for (let n of listaTelefonica) {
        console.log(`Nome: ${n.nome} === Número: ${n.numero}`)
    }
}
acao: while(true) {
    mostrarLista()
    console.log("\nO que gostaria de fazer? \n[1]ADICIONAR CONTATO \n[2]REMOVER CONTATO \n[3]SAIR\n")
    acao = +prompt("Resposta: ")
    while(acao != 1 && acao != 2 && acao != 3) {
        console.log("\nDigite apenas 1,2 ou 3!\n")
        console.log("O que gostaria de fazer? \n[1]ADICIONAR CONTATO \n[2]REMOVER CONTATO \n[3]SAIR\n")
        acao = +prompt("Resposta: ")
    }
    adicionar: while(acao == 1){
        mostrarLista()
        console.log("\nNOVO CONTATO:")
        const obj = {
            nome: prompt("Nome: "),
            numero: +prompt("Número: ")
        }
        listaTelefonica.push(obj)
        console.log("\nCONTATO ADICIONADO!\n")
        let continuar = +prompt("Gostaria de adicionar mais um contato [1]SIM [2]NÃO? ")
        while(continuar != 1 && continuar != 2) {
            console.log("\nDigite apenas 1 ou 2!\n")
            continuar = +prompt("Gostaria de adicionar mais um contato [1]SIM [2]NÃO? ")
        }
        if (continuar == 1) {continue adicionar}
        else {break adicionar}
    }
    remover: while(acao == 2){
        mostrarLista()
        console.log("\nREMOVER CONTATO:")
        console.log("Digite o nome do contato para remover.")
        let removerContato = prompt("Nome: ")

        const getNome = n => n.nome
        const listaNomes = listaTelefonica.map(getNome)
        listaNomes.indexOf(removerContato)

        if (listaNomes.indexOf(removerContato) == -1) {
            console.log("\nCONTATO NÃO ENCONTRADO!\n")
        } else {
            listaTelefonica.splice(listaNomes.indexOf(removerContato),1)
            console.log("\nCONTATO REMOVIDO!\n")
        }
        let continuar = +prompt("Gostaria de remover mais um contato [1]SIM [2]NÃO? ")
        if (continuar == 1) {continue remover}
        else {break remover}
    }
    if (acao == 3) {break acao}
}
mostrarLista()
console.log()

//Criado por Douglas Volcato
//Github: https://github.com/DouglasVolcato