const areaEsquerda = document.getElementById("areaEsquerda");
const areaDireita = document.getElementById("areaDireita");
const btnEsquerdo = document.getElementById("btnEsquerdo");
const btnDireito = document.getElementById("btnDireito");

let areaAtiva = areaEsquerda;
let contadorParagrafos = 0;


function moverElementosPara(destino) {
    const origem = (destino === areaEsquerda) ? areaDireita : areaEsquerda;

    while (origem.firstChild) {
        destino.append(origem.firstChild);
    }
}


btnEsquerdo.addEventListener("click", function () {
    areaAtiva = areaEsquerda;
    btnEsquerdo.className = "btn btn-primary";
    btnDireito.className = "btn btn-outline-primary";
    moverElementosPara(areaEsquerda);
});

btnDireito.addEventListener("click", function () {
    areaAtiva = areaDireita;
    btnDireito.className = "btn btn-primary";
    btnEsquerdo.className = "btn btn-outline-primary";
    moverElementosPara(areaDireita);
});


document.getElementById("btnAddP").addEventListener("click", function () {
    contadorParagrafos++;
    const p = document.createElement("p");
    p.textContent = `#${contadorParagrafos} - Lorem ipsum dolor sit amet, consectetur adipisicing elit.`;
    areaAtiva.append(p);
});

document.getElementById("btnRemPrimeiroP").addEventListener("click", function () {
    const primeiroP = areaAtiva.querySelector("p");
    if (primeiroP) primeiroP.remove();
});

document.getElementById("btnRemUltimoP").addEventListener("click", function () {
    const todosP = areaAtiva.querySelectorAll("p");
    if (todosP.length > 0) {
        todosP[todosP.length - 1].remove();
    }
});


document.getElementById("btnRemTodosP").addEventListener("click", function () {
    document.querySelectorAll("#areaEsquerda p, #areaDireita p").forEach(p => p.remove());
});


document.getElementById("btnAddImg").addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "gatinho.jpg";
    img.alt = "Imagem adicionada";
    img.classList.add("img-item");
    areaAtiva.append(img);
});

document.getElementById("btnRemUmaImg").addEventListener("click", function () {
    const ultimaImg = areaAtiva.querySelector("img:last-of-type");
    if (ultimaImg) ultimaImg.remove();
});


document.getElementById("btnRemTodasImg").addEventListener("click", function () {
    document.querySelectorAll("#areaEsquerda img, #areaDireita img").forEach(img => img.remove());
});