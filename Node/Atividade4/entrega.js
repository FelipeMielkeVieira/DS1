let elementoCEP = document.querySelector("#cep");

const endereco = (dados)=>{
    console.log(dados);
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.uf;
    document.getElementById("endereco").value = dados.logradouro;
    document.getElementById("complemento").value = dados.complemento;
}

elementoCEP.addEventListener("blur", () => {
    let search = cep.value 

    fetch(`https://viacep.com.br/ws/${search}/json/`,{
        method: "GET",
        mode: "cors",
        cache: "default"
    })
    .then(res =>{
        res.json()
        .then(dados =>{
            endereco(dados)
        })
    })
    .catch()
})