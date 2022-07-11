const mudarCor = document.querySelector("#colorMix");

mudarCor.addEventListener("click", function() {

    const conteudo = document.querySelector("body");
    const conteudo2 = document.querySelectorAll(".itemNavegacao");
    const conteudo3 = document.querySelectorAll(".summaryMin");

    const cores = ["aqua", "aliceblue", "aquamarine", "chartreuse", "chocolate", "cyan", "deepskyblue", "goldenrod", "gold", "greenyellow" , "lawngreen", "magenta", "lime", "mediumspringgreen", "springgreen", "orange", "peru", "yellow"];
    const novaCor = Math.floor(Math.random() * cores.length + 1);
    conteudo.style.color = cores[novaCor];

    for (let n of conteudo2){
        n.style.color = cores[novaCor];
    };
    for (let n of conteudo3){
        n.style.color = cores[novaCor];
    };

    if (novaCor <= 7){
        conteudo.style.backgroundImage = "url('https://raw.githubusercontent.com/DouglasVolcato/portfolio-DouglasVolcato/main/assets/images/fundo2.jpg')";
    } else if (novaCor <= 14){
        conteudo.style.backgroundImage = "url('https://github.com/DouglasVolcato/portfolio-DouglasVolcato/blob/main/assets/images/fundo3.jpg?raw=true')";
    } else {
        conteudo.style.backgroundImage = "url('https://raw.githubusercontent.com/DouglasVolcato/portfolio-DouglasVolcato/main/assets/images/fundo.jpg')";
    };

})
