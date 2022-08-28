var resposta = "";

for(let i = 15; i <= 200; i++) {
    resposta += i + " * " + i + " = " + (i * i) + "\n"
    if(i % 10 == 0) {
        alert(resposta);
        resposta = "";
    }
}