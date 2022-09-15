function registrar() {
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let peso = document.querySelector("#peso").value;

    let alimentado = document.querySelector("#alimentado").checked;
    let resfriado = document.querySelector("#resfriado").checked;

    let textoApto = "Voluntário Apto"
    if(idade < 16 || idade > 69) {
        textoApto = "Voluntário Não Apto";
    }
    if(peso < 50) {
        textoApto = "Voluntário Não Apto";
    }
    if(!alimentado) {
        textoApto = "Voluntário Não Apto";
    }
    if(resfriado) {
        textoApto = "Voluntário Não Apto";
    }

    let spanNome = document.querySelector("#nomeSpan");
    spanNome.innerText = "Nome: " + nome;

    let aptidao = document.querySelector("#aptidao");
    aptidao.innerText = textoApto;
}