function calculaImc() {
    let altura = parseInt(document.querySelector("#altura").value);
    let peso = parseInt(document.querySelector("#peso").value);
    let divImc = document.querySelector("#imc");
    let imc = peso / (altura / 100 * altura / 100)
    divImc.innerText = "IMC Atual: " + imc;

    let divCategoria = document.querySelector("#categoria");
    divCategoria.innerText = "Categoria Atual: "
    if(imc < 18.5) {
        divCategoria.innerText += "Abaixo do Peso";
    } else if (imc < 25) {
        divCategoria.innerText += "Saudável";
    } else if (imc < 30) {
        divCategoria.innerText += "Sobrepeso";
    } else if (imc < 40) {
        divCategoria.innerText += "Obeso";
    } else {
        divCategoria.innerText += "Extremo ou alto risco de obesidade";
    }
}