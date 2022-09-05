let variavel = [];

for(let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Número " + (i + 1) + ":"));
    if(num >= 1 && num <= 15) {
        variavel[i] = num;
    } else {
        alert("Número Inválido!");
        i--;
    }
}

let resposta = "";
for(let i = 0; i < variavel.length; i++) {
    resposta += variavel[i] + "\n";    
}
alert(resposta)

variavel.slice(0);

let resposta2 = "";
for(let i = 0; i < variavel.length; i++) {
    resposta2 += variavel[i] + "\n";    
}
alert(resposta2)