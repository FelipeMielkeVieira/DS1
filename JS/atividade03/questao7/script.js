while(true) {
    let senha = prompt("Senha:");

    if(senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!")
    } else {
        break;
    }
}