let num = 0;

while(num < 1 || num > 6) {
    num = parseInt(prompt("Digite um número:"));
    if(num < 1 || num > 6) {
        alert("O número digitado está incorreto!")
    } else {
        alert(num);
    }
}