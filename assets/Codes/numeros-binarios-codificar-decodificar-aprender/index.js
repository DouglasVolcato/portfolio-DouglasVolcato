const prompt = require ("prompt-sync")()
let acao = 0
let numeroLength = 0
function mostrarNumero(arrNum, ref = 0){
    if (ref == arrNum.length) {
        return []
    } else {
        return(arrNum[ref] + mostrarNumero(arrNum, ref += 1))
    }
}
function numParaBinario(num,ref = 20){
    const potencia = Math.pow(2,ref)
    const subtracao = num - potencia
    if (ref < 0) {
        return [0]
    }
     else if (subtracao < 0) {
        const arr = numParaBinario(num,ref - 1)
        arr.unshift(0)
        return arr
    } else if (subtracao >= 0) {
        const arr = numParaBinario(subtracao,ref - 1)
        arr.unshift(1)
        return arr
    }
}
function codificador(num){
    const arr = numParaBinario(num)
    const numeroBinario = []
    let var1 = 0
    arr.pop()
    for(let i of arr) {
        if (i == 1){
            var1 = arr.indexOf(i)
            break
        }
    }
    for (let i = var1; i < arr.length; i++) {
        numeroBinario.push(arr[i])
    }
    return (mostrarNumero(numeroBinario))
}
function mostrarArr(arr, ref = 0) {
    if (ref == arr.length) {
        return []
    } else {
        return (arr[ref] + mostrarArr(arr,ref+1))
    }
}
function retirarUltimo(palavra) {
    const arr = []
    for (let i of palavra){
        arr.push(i)
    }
    arr.pop()
    return mostrarArr(arr)
}
function numLength(num){
    const numero = num.toString()
    return numero.length
}
function decodificador1(numBinario, ref = 0){
    const numero = numBinario.toString()
    const var1 = numero[numero.length-1]
    const resultado = var1 == '0' ? 0 : Math.pow(2,ref)
    const pop = retirarUltimo(numero)
    if (ref == numeroLength) {
        return []
    } else {
        const arr = decodificador1(pop,ref += 1)
        arr.push(resultado)
        return arr
    }
}
function decodificador2(arr){
    const somarArr = (a,b) => a + b
    return arr.reduce(somarArr)
}
function verificarBinario(num){
    let count = 0
    const numero = num.toString()
    for (let i of numero) {
        if (i != '1' && i != 0){
            count++
        }
    }
    if (count > 0) {return false}
    else {return true}
}
inicio: while(true) {
    console.clear()
    console.log("===| N??MEROS BIN??RIOS |===\n")
    console.log("[1]CODIFICAR \n[2]DECODIFICAR \n[3]APRENDER \n[4]SAIR\n")
    acao = +prompt("Resposta: ")
    codificar: while(acao == 1) {
        console.clear()
        let numero = +prompt("N??mero: ")
        numeroLength = numLength(numero)
        console.log(`N??mero bin??rio: `, codificador(numero))
        console.log("\nGostaria de codificar mais um n??mero? [1]SIM [2]N??O")
        let continuar = +prompt("Resposta: ")
        while (continuar != 1 && continuar != 2) {
            console.log("\nDIGITE APENAS 1 OU 2.")
            continuar = +prompt("Resposta: ")
        }
        if (continuar == 1) {
            continue codificar
        } else {break}
    }
    decodificar: while(acao == 2) {
        console.clear()
        let numero = +prompt("N??mero bin??rio: ")
        if (verificarBinario(numero) == true) {
            numeroLength = numLength(numero)
            console.log(`N??mero: `,decodificador2(decodificador1(numero)))
        } else {
            console.log("O N??MERO DIGITADO N??O ?? BIN??RIO!")
        }
        console.log("\nGostaria de decodificar mais um n??mero? [1]SIM [2]N??O")
        let continuar = +prompt("Resposta: ")
        while (continuar != 1 && continuar != 2) {
            console.log("\nDIGITE APENAS 1 OU 2.")
            continuar = +prompt("Resposta: ")
        }
        if (continuar == 1) {
            continue decodificar
        } else {break}
    }
    aprender: while(acao == 3) {
        console.clear()
        console.log("Imagine a seguinte sequ??ncia de n??meros:")
        console.log([1,2,4,8,16])
        prompt("[ENTER]")
        console.log("\nEssa sequ??ncia representa a pot??ncia do n??mero 2. Agora ao contr??rio:")
        console.log([16,8,4,2,1])
        prompt("[ENTER]")
        console.log("\nSendo os n??meros bin??rios formados apenas por 0 e 1, vamos verificar o n??mero que estamos querendo converter e, utilizando a pot??ncia de 2, verificar se esse n??mero possui (1) ou n??o (0) os n??meros da pot??ncia em sua constitui????o.")
        prompt("[ENTER]")
        console.log("\nPor exemplo: o n??mero 7 em bin??rio seria 111, pois possui em sua constitui????o os seguintes n??meros:")
        console.log([4,2,1])
        prompt("[ENTER]")
        console.log("\nOutro exemplo: o n??mero 50 em bin??rio seria 110010, pois possui em sua constitui????o os seguintes n??meros:")
        console.log([32,16,2])
        prompt("[ENTER]")
        console.log('\nOs d??gitos "0" servem para indicar os n??meros da sequ??ncia que n??o s??o usados(1,4 e 8):')
        console.log([32,16,8,4,2,1])
        console.log([1,1,0,0,1,0])
        prompt("[ENTER]")
        console.clear()
        const conversao = [
            {Bin??rio: 0},
            {Bin??rio: 1},
            {Bin??rio: 10},
            {Bin??rio: 11},
            {Bin??rio: 100},
            {Bin??rio: 101},
            {Bin??rio: 110},
            {Bin??rio: 111},
            {Bin??rio: 1000},
            {Bin??rio: 1001},
            {Bin??rio: 1010}
        ]
        console.log("\nEXEMPLOS:")
        console.table(conversao)
        prompt("[ENTER]")
        console.log("\nGostaria de ler novamente? [1]SIM [2]N??O")
        let continuar = +prompt("Resposta: ")
        while (continuar != 1 && continuar != 2) {
            console.log("\nDIGITE APENAS 1 OU 2.")
            console.log("\nGostaria de ler novamente? [1]SIM [2]N??O")
            continuar = +prompt("Resposta: ")
        }
        if (continuar == 1) {
            continue aprender
        } else {break}
    }
    if(acao == 4) {
        break inicio
    }
}

//Criado por Douglas Volcato
//Github: https://github.com/DouglasVolcato