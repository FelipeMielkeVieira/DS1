let placa = prompt("Placa: ");

let resposta = placa.slice(0, 4);
let caractere;

switch(placa.charAt(4)) {
    case "1":
        caractere = "B";
        break;
    case "2":
        caractere = "C";
        break;
    case "3":
        caractere = "D";
        break;
    case "4":
        caractere = "E";
        break;
    case "5":
        caractere = "F";
        break;
    case "6":
        caractere = "G";
        break;
    case "7":
        caractere = "H";
        break;
    case "8":
        caractere = "I";
        break;
    case "9":
        caractere = "J";
        break;
    case "0":
        caractere = "A";
        break;
}

resposta += caractere;
resposta += placa.slice(5);

alert(resposta);