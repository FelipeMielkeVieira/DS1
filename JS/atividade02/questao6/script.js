let salario = parseFloat(prompt("Salário:"));
let prestacao = parseFloat(prompt("Prestação:"));

if(prestacao > (salario * 0.2)) {
    alert("Empréstimo não pode ser concedido!");
} else {
    alert("Empréstimo pode ser concedido!");
}