const mudarCor = document.querySelector("#colorMix");
mudarCor.addEventListener("click", function() {
    const conteudo = document.querySelector("body");
    const cores = ["aqua", "aliceblue", "aquamarine", "chartreuse", "chocolate", "cyan", "deepskyblue", "goldenrod", "gold", "greenyellow" , "lawngreen", "magenta", "lime", "mediumspringgreen", "springgreen", "orange", "peru", "yellow"];
    const novaCor = Math.floor(Math.random() * cores.length + 1);
    conteudo.style.color = cores[novaCor];
})