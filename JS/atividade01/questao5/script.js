let pergunta = prompt("1 - Cubo \n2 - Cilindro");

let valor1;
let valor2;

if(pergunta == "1") {
    valor1 = parseFloat(prompt("Medida de um lado:"));
    alert("Volume = " + valor1 * valor1 * valor1);
} else {
    valor1 = parseFloat(prompt("Área da base:"));
    valor2 = parseFloat(prompt("Altura:"));
    alert("Volume = " + valor1 * valor2)
}