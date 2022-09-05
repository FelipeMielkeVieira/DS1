let variavel = [];

for(let i = 0; i < 9; i++) {
    let num = parseInt(prompt("Número " + (i + 1) + ":"));
    if(num >= 1 && num <= 9) {
        variavel[i] = num;
    } else {
        alert("Número Inválido!");
        i--;
    }
}

variavel = variavel.sort((a, b) => a - b);

let resposta = "";
for(let i = 4; i < variavel.length; i++) {
    resposta += variavel[i] + "\n";    
}
alert(resposta)