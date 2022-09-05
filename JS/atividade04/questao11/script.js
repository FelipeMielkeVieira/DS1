let variavel = [];

for(let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Número " + (i + 1) + ":"));
    if(num >= 1 && num <= 10) {
        variavel[i] = num;
    } else {
        alert("Número Inválido!");
        i--;
    }
}

let resposta = "";
for(let i = 4; i < variavel.length; i++) {
    resposta += variavel[i] + "\n";    
}
alert(resposta);

variavel[0] = 2;
variavel[3] = 6;
variavel[variavel.length - 1] = 8;

let resposta2 = "";
for(let i = 4; i < variavel.length; i++) {
    resposta2 += variavel[i] + "\n";    
}
alert(resposta2);