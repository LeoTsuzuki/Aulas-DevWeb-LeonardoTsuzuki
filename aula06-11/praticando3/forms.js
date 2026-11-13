const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoTelefone = document.querySelector("#telefone");
const campoIdade = document.querySelector("#idade");
const campoObservacoes = document.querySelector("#observacoes");

campoNome.addEventListener("input", () => {
  const valido = campoNome.checkValidity();

  campoNome.classList.toggle("is-valid", valido);
  campoNome.classList.toggle("is-invalid", !valido);
}); 

campoEmail.addEventListener("input", () => {
  const valido = campoEmail.checkValidity();

  campoEmail.classList.toggle("is-valid", valido);
  campoEmail.classList.toggle("is-invalid", !valido);
}); 

campoTelefone.addEventListener("input", () => {
  const valido = campoTelefone.checkValidity();

  campoTelefone.classList.toggle("is-valid", valido);
  campoTelefone.classList.toggle("is-invalid", !valido);
}); 

campoIdade.addEventListener("input", () => {
  const valido = campoIdade.checkValidity();

  campoIdade.classList.toggle("is-valid", valido);
  campoIdade.classList.toggle("is-invalid", !valido);
}); 

campoObservacoes.addEventListener("input", () => {
  const valido = campoObservacoes.checkValidity();

  campoObservacoes.classList.toggle("is-valid", valido);
  campoObservacoes.classList.toggle("is-invalid", !valido);
}); 

