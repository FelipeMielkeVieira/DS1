let resposta = "";

for(let i = 99; i > 0; i--) {
    if(i % 3 == 0) {
        resposta += i;
        if(i != 3) {
            resposta += ", "
        }
    }
}
 
alert(resposta)