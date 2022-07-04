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
    console.log("===| NÚMEROS BINÁRIOS |===\n")
    console.log("[1]CODIFICAR \n[2]DECODIFICAR \n[3]APRENDER \n[4]SAIR\n")
    acao = +prompt("Resposta: ")
    codificar: while(acao == 1) {
        console.clear()
        let numero = +prompt("Número: ")
        numeroLength = numLength(numero)
        console.log(`Número binário: `, codificador(numero))
        console.log("\nGostaria de codificar mais um número? [1]SIM [2]NÃO")
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
        let numero = +prompt("Número binário: ")
        if (verificarBinario(numero) == true) {
            numeroLength = numLength(numero)
            console.log(`Número: `,decodificador2(decodificador1(numero)))
        } else {
            console.log("O NÚMERO DIGITADO NÃO É BINÁRIO!")
        }
        console.log("\nGostaria de decodificar mais um número? [1]SIM [2]NÃO")
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
        console.log("Imagine a seguinte sequência de números:")
        console.log([1,2,4,8,16])
        prompt("[ENTER]")
        console.log("\nEssa sequência representa a potência do número 2. Agora ao contrário:")
        console.log([16,8,4,2,1])
        prompt("[ENTER]")
        console.log("\nSendo os números binários formados apenas por 0 e 1, vamos verificar o número que estamos querendo converter e, utilizando a potência de 2, verificar se esse número possui (1) ou não (0) os números da potência em sua constituição.")
        prompt("[ENTER]")
        console.log("\nPor exemplo: o número 7 em binário seria 111, pois possui em sua constituição os seguintes números:")
        console.log([4,2,1])
        prompt("[ENTER]")
        console.log("\nOutro exemplo: o número 50 em binário seria 110010, pois possui em sua constituição os seguintes números:")
        console.log([32,16,2])
        prompt("[ENTER]")
        console.log('\nOs dígitos "0" servem para indicar os números da sequência que não são usados(1,4 e 8):')
        console.log([32,16,8,4,2,1])
        console.log([1,1,0,0,1,0])
        prompt("[ENTER]")
        console.clear()
        const conversao = [
            {Binário: 0},
            {Binário: 1},
            {Binário: 10},
            {Binário: 11},
            {Binário: 100},
            {Binário: 101},
            {Binário: 110},
            {Binário: 111},
            {Binário: 1000},
            {Binário: 1001},
            {Binário: 1010}
        ]
        console.log("\nEXEMPLOS:")
        console.table(conversao)
        prompt("[ENTER]")
        console.log("\nGostaria de ler novamente? [1]SIM [2]NÃO")
        let continuar = +prompt("Resposta: ")
        while (continuar != 1 && continuar != 2) {
            console.log("\nDIGITE APENAS 1 OU 2.")
            console.log("\nGostaria de ler novamente? [1]SIM [2]NÃO")
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