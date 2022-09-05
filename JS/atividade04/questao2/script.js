let a = parseFloat(prompt("variável A: "));
let b = parseFloat(prompt("Variável B: "));
let c = parseFloat(prompt("Variável C: "));

let resultado1 = (-b + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
let resultado2 = (-b - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

alert("X1 = " + resultado1 + "\nX2 = " + resultado2);