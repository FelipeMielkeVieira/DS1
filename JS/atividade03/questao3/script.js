let nome = prompt("Nome: ");

let primeiraLetra = nome.charAt(0);
let resto = nome.slice(1);

primeiraLetra = primeiraLetra.toUpperCase();
resto = resto.toLowerCase();

alert(primeiraLetra + resto);
