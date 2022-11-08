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
        divAdicional.onclick = () => {
            if(dado.tipo == "BORDA") {
                let adicional = document.getElementById(dado.id);
                if (adicional.classList.contains("selected-adicional")) {
                    adicional.classList.remove("selected-adicional");
                } else {
                    let tamanhoElements = document.querySelectorAll(".quadradoAdicional");
                    for (let tamanhoElement of tamanhoElements) {
                        tamanhoElement.className = "quadradoAdicional";
                    }
                    adicional.classList.add("selected-adicional");
                }
            } else {
                let bebida = document.getElementById(dado.id);
                if (bebida.classList.contains("selected-bebida")) {
                    bebida.classList.remove("selected-bebida");
                } else {
                    bebida.classList.add("selected-bebida");
                }
            }
        }

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

buscarAdicionais();