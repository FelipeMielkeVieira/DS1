function buscarAdicionais() {
    fetch(`http://localhost:8081/get-adicionais`, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "default"
    }).then((data) => {
        data.json().then((dados) => {
            adicionarAdicionais(dados);
        })
    })
}

function adicionarAdicionais(dados) {
    for (const dado of dados) {
        let divAdicional = document.createElement('div');
        divAdicional.className = "quadradoAdicional";

        if(dado.tipo == "BORDA") {
            divAdicional.ariaValueText = `{"adicional": "${dado.nome}", "preco": ${dado.preco_adicionar}}`
        } else {
            divAdicional.ariaValueText = `{"bebida": "${dado.nome}", "preco": ${dado.preco_adicionar}}`
        }

        divAdicional.id = dado.id;

        let divInfo = document.createElement("div");
        divInfo.className = "infoAdicional";

        let h5 = document.createElement("h5");
        h5.innerText = dado.nome;

        let span = document.createElement("span");
        span.innerText = "+ " + getPrecoBRL(dado.preco_adicionar);

        if(dado.tipo == "BORDA") {
            document.querySelector("#divBordas").appendChild(divAdicional);
        } else {
            document.querySelector("#divBebidas").appendChild(divAdicional);
        }
        divAdicional.appendChild(divInfo);
        divInfo.appendChild(h5);
        divInfo.appendChild(span);
    }
}

function getPrecoBRL(preco) {
    return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function irCadastro() {
    let modal = document.createElement("div");
    modal.id = "modalCadastro";

    let tituloModal = document.createElement("h3");
    tituloModal.className = "tituloModalCadastro";
    tituloModal.innerText = "Cadastrar";

    let divInput1 = document.createElement("div");
    divInput1.className = "inputCadastroModal";

    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.id = "inputNome";
    inputNome.className = "inputsModalCadastro";

    let labelNome = document.createElement("label");
    labelNome.className = "labelModalCadastro";
    labelNome.htmlFor = inputNome;
    labelNome.innerText = "Nome:"

    let divInput2 = document.createElement("div");
    divInput2.className = "inputCadastroModal";

    let inputPreco = document.createElement("input");
    inputPreco.type = "text";
    inputPreco.id = "inputPreco";
    inputPreco.className = "inputsModalCadastro";

    let labelPreco = document.createElement("label");
    labelPreco.className = "labelModalCadastro";
    labelPreco.htmlFor = inputPreco;
    labelPreco.innerText = "Preço:"

    let divBotoes = document.createElement("div");
    divBotoes.className = "divBotoesCadastro";

    let botaoCancelar = document.createElement("button");
    botaoCancelar.className = "botaoCancelarCadastro";
    botaoCancelar.innerText = "Cancelar";
    botaoCancelar.onclick = () => {
        let modalRemover = document.getElementById("modalCadastro");
        document.body.removeChild(modalRemover);
    }

    let botaoConfirmar = document.createElement("button");
    botaoConfirmar.className = "botaoConfirmarCadastro";
    botaoConfirmar.innerText = "Cadastrar";
    botaoConfirmar.onclick = () => {
        
        let nomeProduto = document.getElementById("inputNome").value;
        let precoProduto = document.getElementById("inputPreco").value;

        let modalRemover = document.getElementById("modalCadastro");
        document.body.removeChild(modalRemover);
    }

    modal.appendChild(tituloModal);
    modal.appendChild(divInput1);
    divInput1.appendChild(labelNome);
    divInput1.appendChild(inputNome);
    modal.appendChild(divInput2);
    divInput2.appendChild(labelPreco);
    divInput2.appendChild(inputPreco);
    modal.appendChild(divBotoes);
    divBotoes.appendChild(botaoCancelar);
    divBotoes.appendChild(botaoConfirmar);
    document.body.appendChild(modal);
}

buscarAdicionais();
