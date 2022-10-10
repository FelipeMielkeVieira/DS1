let listaCadastros = [];


function buscarListaCadastros() {
    listaCadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
}

function criarUsuario() {
    let nome = document.querySelector("#nome").value;
}

function cadastrar() {
    let usuarioNovo = {}
}

function irParaLogin() {
    window.location.href = "../login/login.html";
}

buscarListaCadastros();