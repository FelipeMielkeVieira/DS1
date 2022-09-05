let nome = prompt("Nome:");

let vogais = 0;
for (let i = 0; i < nome.length; i++) {
  if (
    nome.charAt(i).toLowerCase() == "a" ||
    nome.charAt(i).toLowerCase() == "e" ||
    nome.charAt(i).toLowerCase() == "i" ||
    nome.charAt(i).toLowerCase() == "o" ||
    nome.charAt(i).toLowerCase() == "u"
  ) {
    vogais++;
  }
}

alert("Caracteres: " + nome.length + "\nVogais: " + vogais);
