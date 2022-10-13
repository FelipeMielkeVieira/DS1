function irParaCadastro() {
  window.location.href = "../cadastro/cadastro.html";
}

function login() {
  let usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
  let usuario = document.querySelector("#usuario").value;
  let senha = document.querySelector("#senha").value;

  if(usuarioSalvo.usuario == usuario && usuarioSalvo.senha == senha) {
    alert("Login Efetuado!");
  } else {
    alert("Login Inválido!");
  }
}
