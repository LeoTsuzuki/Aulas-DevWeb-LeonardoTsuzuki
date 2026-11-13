const botaoMostrar = document.getElementById("btnMostrar");
const botaoEsconder = document.getElementById("btnEsconder");

function mostrar(){
    document.getElementById("caixa").style.display = 'flex';
}

function esconder(){
    document.getElementById("caixa").style.display = 'none';
}

botaoMostrar.addEventListener("click",mostrar);
botaoEsconder.addEventListener("click",esconder);