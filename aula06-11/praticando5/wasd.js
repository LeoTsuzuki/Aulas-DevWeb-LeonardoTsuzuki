const quadrados = document.querySelectorAll(".quadrado");
let quadradoSelecionado = null;
const passo = 20; // Velocidade de movimento em pixels


quadrados.forEach(quad => {
    quad.addEventListener("click", function () {
        // Se clicar no mesmo quadrado selecionado -> reseta posição e desseleciona
        if (quadradoSelecionado === quad) {
            quad.classList.remove("selecionado");
            quad.style.top = "0px";
            quad.style.left = "0px";
            quadradoSelecionado = null;
        } 
        // Se já houver outro selecionado -> avisa e impede
        else if (quadradoSelecionado !== null) {
            alert("Atenção! Já há um quadrado selecionado, desselecione-o antes de selecionar outro.");
        } 
        // Seleciona o quadrado clicado
        else {
            quadradoSelecionado = quad;
            quad.classList.add("selecionado");
        }
    });
});

// 2. Movimentação livre com WASD 
document.addEventListener("keydown", function (event) {
    if (!quadradoSelecionado) return;

    let topoAtual = parseInt(quadradoSelecionado.style.top);
    if (isNaN(topoAtual)) topoAtual = 0;

    let esquerdaAtual = parseInt(quadradoSelecionado.style.left);
    if (isNaN(esquerdaAtual)) esquerdaAtual = 0;

    switch (event.code) {
        case "KeyW": // Cima
            quadradoSelecionado.style.top = (topoAtual - passo) + "px";
            break;
        case "KeyS": // Baixo
            quadradoSelecionado.style.top = (topoAtual + passo) + "px";
            break;
        case "KeyA": // Esquerda
            quadradoSelecionado.style.left = (esquerdaAtual - passo) + "px";
            break;
        case "KeyD": // Direita
            quadradoSelecionado.style.left = (esquerdaAtual + passo) + "px";
            break;
    }
});