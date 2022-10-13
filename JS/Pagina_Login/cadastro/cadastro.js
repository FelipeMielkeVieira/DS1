let listaCadastros = [];

function buscarListaCadastros() {
  listaCadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
}

function criarUsuario() {
  let nome = document.querySelector("#nome").value;
}

function cadastrar() {
  let nome = document.querySelector("#nome").value;
  let cpf = document.querySelector("#cpf").value;
  let endereco = document.querySelector("#endereco").value;
  let email = document.querySelector("#email").value;
  let telefone = document.querySelector("#telefone").value;
  let usuario = document.querySelector("#usuario").value;
  let senha = document.querySelector("#senha").value;

  let usuarioNovo = {
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    email: email,
    telefone: telefone,
    usuario: usuario,
    senha: senha,
  };
  console.log(usuarioNovo);

  if (validarForm()) {
    localStorage.setItem("usuario", JSON.stringify(usuarioNovo));
    alert("Usuário cadastrado com sucesso!");
  }
}

function validarForm() {
  let nome = document.querySelector("#nome").value;
  let cpf = document.querySelector("#cpf").value;
  let endereco = document.querySelector("#endereco").value;
  let email = document.querySelector("#email").value;
  let telefone = document.querySelector("#telefone").value;
  let usuario = document.querySelector("#usuario").value;
  let senha = document.querySelector("#senha").value;

  if (
    nome == "" ||
    cpf == "" ||
    endereco == "" ||
    email == "" ||
    telefone == "" ||
    usuario == "" ||
    senha == ""
  ) {
    alert("Preencha todos os Campos!");
    return false;
  }

  let contemMaiuscula = false;
  for (let i = 0; i < senha.length; i++) {
    if (senha.charAt(i).toUpperCase() == senha.charAt(i)) {
      contemMaiuscula = true;
    }
  }

  if (!contemMaiuscula) {
    alert("A senha precisa conter pelo menos uma letra maiúscula!")
    return false;
  }

  if (
    !(
      senha.includes("!") ||
      senha.includes("@") ||
      senha.includes("#") ||
      senha.includes("$") ||
      senha.includes("%") ||
      senha.includes("&") ||
      senha.includes("*") ||
      senha.includes("-")
    )
  ) {
    alert("A senha precisa conter pelo menos um caractere especial!")
    return false;
  }

  if (
    !(
      senha.includes("1") ||
      senha.includes("2") ||
      senha.includes("3") ||
      senha.includes("4") ||
      senha.includes("5") ||
      senha.includes("6") ||
      senha.includes("7") ||
      senha.includes("8") ||
      senha.includes("9") ||
      senha.includes("0")
    )
  ) {
    alert("A senha precisa conter pelo menos um número!")
    return false;
  }
  return true;
}

function irParaLogin() {
  window.location.href = "../login/login.html";
}

buscarListaCadastros();
