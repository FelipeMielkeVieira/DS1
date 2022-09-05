let variavel = [];

for(let i = 0; i < 7; i++) {
    variavel[i] = prompt("Número " + (i + 1) + ":");
}

let resposta = "";
for(let i = 0; i < variavel.length; i++) {
    resposta += variavel[i] + "\n";    
}

alert(resposta);
alert(variavel[2]);