function ascender(){
    const lampada = document.getElementById("foto");
    lampada.src = "lampada-acesa.png";
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    document.querySelector("p").textContent = "Lampada Acesa";
}

function apagar(){
    const lampada = document.getElementById("foto");
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    lampada.src = "lampada.png";
    document.querySelector("p").textContent = "Lampada apagada";
}

const imagem = document.getElementById("foto");

imagem.addEventListener("onmouseover",ascender);
imagem.addEventListener("onmouseout",apagar);

