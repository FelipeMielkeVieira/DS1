let num = 1;
let maior = 1;

while(num != 0) {
    num = parseInt(prompt("Digite um número:"));
    if(num > maior) {
        maior = num;
    }
    alert("Maior Número = " + maior)
}