let nomes = [];
let numeros = [];

for(let i = 0; i < 4; i++) {
    nomes[i] = prompt("Nome " + (i + 1) + ":");
}

for(let i = 0; i < 4; i++) {
    numeros[i] = parseInt(prompt("Número " + (i + 1) + ":"));
}

let variavel = nomes.concat(numeros);

let resposta = "";
for(let i = 0; i < variavel.length; i++) {
    resposta += variavel[i] + "\n";
}

alert(resposta);