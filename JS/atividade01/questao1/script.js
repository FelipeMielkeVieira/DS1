var num = Number(prompt("Digite um número:"))

if(num % 10 == 0) {
    alert("O número é divisível por 10!")
} else if (num % 5 == 0) {
    alert("O número é divisível por 5!")
} else if (num % 2 == 0) {
    alert("O número é divisível por 2!")
} else {
    alert("O número não é divisível por nenhum dos números selecionados!")
}