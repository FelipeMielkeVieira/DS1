var resposta = "";

for(let i = 1; i < 200; i++) {
    if(i % 4 == 0) {
        resposta += i;
        if(i < 196) {
            resposta += ", "
        }
    }
}
 
alert(resposta)