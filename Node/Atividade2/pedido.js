function avancarForms(etapaNum) {
    let informacoes, etapa = "";
    switch (etapaNum) {
        case 1:
            window.location.href = "dadosPessoais";
            break;
        case 2:
            informacoes = buscarDadosPessoais();
            if (dadosPessoaisValidos(informacoes)) {
                etapa = "DADOSPESSOAIS";
                window.location.href = "/tamanho";
            }
            break;
        case 3:
            informacoes = buscarDadosTamanho();
            if (dadosTamanhoValidos(informacoes)) {
                etapa = "TAMANHO";
                window.location.href = "sabores";
            }
            break;
        case 4:
            informacoes = buscarDadosSabores();
            if (dadosSaboresValidos(informacoes)) {
                etapa = "SABORES";
                window.location.href = "adicionais";
            }
            break;
        case 5:
            informacoes = buscarDadosAdicionais();
            if (dadosAdicionaisValidos(informacoes)) {
                etapa = "ADICIONAIS";
                localStorage.setItem(etapa, JSON.stringify(informacoes));
                informacoes = buscarDadosBebidas();
                etapa = "BEBIDAS";
                window.location.href = "entrega";
            }
            break;
        case 6:
            informacoes = buscarDadosEntrega();
            if (dadosEntregaValidos(informacoes)) {
                etapa = "ENTREGA";
                localStorage.setItem(etapa, JSON.stringify(informacoes));
                etapa = "PAGAMENTO";
                informacoes = buscarDadosPagamento();
                if (dadosPagamento(informacoes)) {
                    window.location.href = "confirma";
                }
            }
            break;
        case 7:
            informacoes = buscarDadosConfirma();
            break;
    }

    localStorage.setItem(etapa, JSON.stringify(informacoes));
}

function buscarDadosPessoais() {
    let nome = document.getElementById("nomePessoa").value;
    let cpf = document.getElementById("cpfPessoa").value;
    let email = document.getElementById("emailPessoa").value;
    let telefone = document.getElementById("telefonePessoa").value;

    return { nome, cpf, email, telefone };
}

function throwAlert(message) {
    alert(message);
}

function dadosPessoaisValidos(informacoes) {
    if (informacoes.nome == "" || informacoes.cpf == "" || informacoes.email == "" || informacoes.telefone == "") {
        throwAlert("Insira todos os campos!");
        return false;
    }
    return true;
}

function buscarDadosTamanho() {
    let tamanhoElement = document.querySelector(".selected-tamanho");

    return (tamanhoElement != null ? JSON.parse(tamanhoElement.ariaValueText) : null);
}

function dadosTamanhoValidos(informacoes) {
    if (informacoes)
        return true;
    throwAlert("Selecione um tamanho!");
    return false
}

function buscarDadosSabores() {
    let saboresElements = document.querySelectorAll(".selected-sabor");

    if (saboresElements.length != JSON.parse(localStorage.getItem("TAMANHO")).qtdsabores) {
        return null;
    }

    let sabores = [];
    for (let saborElement of saboresElements) {
        sabores.push(JSON.parse(saborElement.ariaValueText));
    }

    return sabores;
}

function dadosSaboresValidos(informacoes) {
    if (informacoes)
        return true;
    throwAlert("Selecione os sabores!");
    return false
}

function buscarDadosAdicionais() {
    let adicional = document.querySelector(".selected-adicional");

    return adicional ? JSON.parse(adicional.ariaValueText) : null;
}

function dadosAdicionaisValidos(informacoes) {
    if (informacoes)
        return true;
    throwAlert("Selecione um adicional!");
    return false;
}

function buscarDadosBebidas() {
    let bebidaElements = document.querySelectorAll(".selected-bebida");

    let bebidas = [];
    for (let bebida of bebidaElements) {
        bebidas.push(JSON.parse(bebida.ariaValueText));
    }

    return bebidas;
}

function buscarDadosEntrega() {
    let radioBox = document.querySelector("input[name='radioEntrega']:checked");
    if (!radioBox)
        return null;

    let preco = 0;
    if (radioBox.id == "checkboxEntrega") {
        let estado = document.getElementById("estado").value;
        let cpf = document.getElementById("cidade").value;
        let email = document.getElementById("endereco").value;
        let cep = document.getElementById("cep").value;
        let numero = document.getElementById("numero").value;
        let complemento = document.getElementById("complemento").value;
        preco = 5;

        return { preco, estado, cpf, email, cep, numero, complemento };
    } else {
        return { preco };
    }
}

function dadosEntregaValidos(informacoes) {
    if (!informacoes) {
        throwAlert("Selecione uma forma de entrega!");
        return false
    }
    return true;
}

function dadosPagamento(informacoes) {
    if (informacoes)
        return true;
    throwAlert("Selecione uma forma de pagamento!");
    return false;
}

function buscarDadosPagamento() {
    let formaPagamento = document.querySelector(".selected-pagamento");

    return formaPagamento ? JSON.parse(formaPagamento.ariaValueText) : null;
}

function selecionarTamanho(idTamanho) {
    let tamanho = document.getElementById(idTamanho);
    if (tamanho.classList.contains("selected-tamanho")) {
        tamanho.classList.remove("selected-tamanho");
    } else {
        let tamanhoElements = document.querySelectorAll(".tamanho");
        for (let tamanhoElement of tamanhoElements) {
            tamanhoElement.className = "tamanho";
        }
        tamanho.classList.add("selected-tamanho");
    }
}

function selecionarSabor(idSabor) {
    let sabor = document.getElementById(idSabor);
    if (sabor.classList.contains("selected-sabor")) {
        sabor.classList.remove("selected-sabor");
    } else {
        let qtdSabores = JSON.parse(localStorage.getItem("TAMANHO"));
        let saborElementsSelected = document.querySelectorAll(".selected-sabor");
        if (!(saborElementsSelected.length < qtdSabores.qtdsabores)) {
            saborElementsSelected[0].className = "quadradoSabor";
            saborElementsSelected = document.querySelectorAll(".selected-sabor");
        }
        sabor.classList.add("selected-sabor");
    }
}

function selecionarAdicional(idAdicional) {
    let adicional = document.getElementById(idAdicional);
    if (adicional.classList.contains("selected-adicional")) {
        adicional.classList.remove("selected-adicional");
    } else {
        let tamanhoElements = document.querySelectorAll(".quadradoAdicional");
        for (let tamanhoElement of tamanhoElements) {
            tamanhoElement.className = "quadradoAdicional";
        }
        adicional.classList.add("selected-adicional");
    }
}

function selecionarBebida(idBebida) {
    let bebida = document.getElementById(idBebida);
    if (bebida.classList.contains("selected-bebida")) {
        bebida.classList.remove("selected-bebida");
    } else {
        bebida.classList.add("selected-bebida");
    }
}

function selecionarPagamento(idPag) {
    let pagamento = document.getElementById(idPag);
    if (pagamento.classList.contains("selected-pagamento")) {
        pagamento.classList.remove("selected-pagamento");
    } else {
        let pagamentoElements = document.querySelectorAll(".quadradoPagamento");
        for (let pagamentoElement of pagamentoElements) {
            pagamentoElement.className = "quadradoPagamento";
        }
        pagamento.classList.add("selected-pagamento");
    }
}