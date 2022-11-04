let cep = document.querySelector("#cep");

const endereco = (dados)=>{
    console.log(dados);
    for(let x in dados){
        if(document.querySelector("#" + x)){
            document.querySelector("#" + x).value = dados[x]
        }
    }
}

cep.addEventListener("blur", ()=>{
    
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