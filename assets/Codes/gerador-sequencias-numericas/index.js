const prompt = require ("prompt-sync")()
function gerarArr(a,b,c = 1) {
    const arr = []
    const var1 = b == undefined ? 1 : a
    const var2 = b == undefined ? a : b
    const absC = Math.abs(c)
    if (var1 < var2) {
        for (let i = var1; i <= var2; i += absC) {
            arr.push(i)
        }
    } else if (var1 > var2) {
        for (let i = var1; i >= var2; i -= absC) {
            arr.push(i)
        }
    }
    console.log(arr)
}
while(true) {
    console.clear()
    console.log("===| GERADOR DE SEQUÊNCIAS NUMÉRICAS|===\n")
    let numeroinicial = +prompt("Número inicial: ")
    let numerofinal = +prompt("Número final: ")
    let razao = +prompt("Razão: ")
    console.log()
    if (Math.abs(numeroinicial) >= 0 && Math.abs(numerofinal) >= 0 && Math.abs(razao) >= 1) {
    gerarArr(numeroinicial, numerofinal, razao)
    console.log(`\nGostaria de gerar outra sequência? [1]SIM [2]NÃO`)
    let continuar = +prompt("Resposta: ")
    while(continuar != 1 && continuar != 2) {
        console.log("\nDIGITE APENAS 1 OU 2!")
        console.log(`Gostaria de gerar outra sequência? [1]SIM [2]NÃO`)
        continuar = +prompt("Resposta: ")
    }
    if (continuar == 2) {break}
    }
}

//Criado por Douglas Volcato
//Github: https://github.com/DouglasVolcato