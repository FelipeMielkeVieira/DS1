let idade = parseInt(prompt("Idade:"));

if(idade < 16) {
    alert("A - Não Eleitor");
} else if (idade >= 18 && idade <= 65) {
    alert("B - Eleitor Obrigatório");
} else {
    alert("C - Eleitor Facultativo")
}