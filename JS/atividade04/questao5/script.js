let numeros = [];

for(let i = 0; i < 3; i++) {
    let num = parseInt(prompt("Número " + (i + 1) + ":"));
    if(num >= 5 && num <= 9) {
        numeros[i + 2] = num;
    } else {
        alert("Número Inválido!");
        i--;
    }
}

for(let i = 0; i < 2; i++) {
    let num = parseInt(prompt("Número " + (i + 1) + ":"));
    if(num >= 1 && num <= 4) {
        numeros[i] = num;
    } else {
        alert("Número Inválido!");
        i--;
    }
}

let resposta = "";
for(let i = 0; i < numeros.length; i++) {
    resposta += numeros[i] + "\n";    
}

alert(resposta);