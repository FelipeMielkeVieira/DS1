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

let possui5 = false;
for(let i = 0; i < variavel.length; i++) {
    if(variavel[i] == 5) {
        possui5 = true;
    }
}

if(possui5) {
    alert("Número 5 encontrado!");
} else {
    alert("Número 5 não encontrado!");
}