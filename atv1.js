let botao = document.getElementById("botao");

botao.onclick = function() {
  document.body.classList.toggle("dark");
};

const form = document.querySelector(".formulario");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = form[0].value;
  let email = form[1].value;
  let mensagem = form[2].value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha tudo!");
  } else {
    alert("Enviado!");
  }
}); 