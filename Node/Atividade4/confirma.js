let nomeCliente = document.getElementById("nomeCliente");
let cpfCliente = document.getElementById("cpfCliente");
let emailCliente = document.getElementById("emailCliente");
let telefoneCliente = document.getElementById("telefoneCliente");
let formaPagamento = document.getElementById("formaPagamentoCliente");

let dadosPessoais = JSON.parse(localStorage.getItem("DADOSPESSOAIS"));
let formaPagamentoDado = JSON.parse(localStorage.getItem("PAGAMENTO"));

nomeCliente.innerText = dadosPessoais.nome;
cpfCliente.innerText = dadosPessoais.cpf;
emailCliente.innerText = dadosPessoais.email;
telefoneCliente.innerText = dadosPessoais.telefone;
formaPagamento.innerText = formaPagamentoDado.pagamento;

let saboresContainer = document.getElementById("sabores");
let sabores = JSON.parse(localStorage.getItem("SABORES"));
for (let sabor of sabores) {
    saboresContainer.innerHTML += `<li>${sabor.sabor}</li>`;
}

let subtotalContainer = document.getElementById("subtotalSabores");
let subtotal = JSON.parse(localStorage.getItem("TAMANHO"));

subtotalContainer.innerText = getPrecoBRL(subtotal.preco);

let adicionaisContainer = document.getElementById("adicionais");
let adicionais = JSON.parse(localStorage.getItem("ADICIONAIS"));

adicionaisContainer.innerHTML = `<li class="espacoItemLista"><span>${adicionais.adicional}</span><span>${getPrecoBRL(adicionais.preco)}</span></li>`;

let bebidas = JSON.parse(localStorage.getItem("BEBIDAS"));
let precoBebida = 0;
for (let bebida of bebidas) {
    precoBebida += bebida.preco;
    adicionaisContainer.innerHTML += `<li class="espacoItemLista"><span>${bebida.bebida}</span><span>${getPrecoBRL(bebida.preco)}</span></li>`;
}

let entregaContainer = document.getElementById("entrega");
let entrega = JSON.parse(localStorage.getItem("ENTREGA"));

if (entrega.preco == 0) {
    entregaContainer.innerHTML = `<span>Retirada</span><span>${getPrecoBRL(entrega.preco)}</span>`;
} else {
    entregaContainer.innerHTML = `<span>Entrega</span><span>${getPrecoBRL(entrega.preco)}</span>`;
}

let totalPedidoContainer = document.getElementById("totalPedido");
let totalPedido = subtotal.preco + adicionais.preco + entrega.preco + precoBebida;

totalPedidoContainer.innerText = getPrecoBRL(totalPedido);

function cancelarPedido() {
    localStorage.clear();
    alert("Pedido cancelado com sucesso!");
    window.location.href = "/";
}

function confirmarPedido() {
    fetch("/endereco", { method: "POST", body: localStorage.getItem("ENTREGA"), headers: { "Content-Type": "application/json" } }).then((res) => {
        fetch("/cliente", { method: "POST", body: localStorage.getItem("DADOSPESSOAIS"), headers: { "Content-Type": "application/json" } }).then(() => {
            let dadosCliente = JSON.parse(localStorage.getItem("DADOSPESSOAIS"));
            let adicionais = JSON.parse(localStorage.getItem("ADICIONAIS"));
            let bebidas = JSON.parse(localStorage.getItem("BEBIDAS"));
            let entrega = JSON.parse(localStorage.getItem("ENTREGA"));
            let tamanho = JSON.parse(localStorage.getItem("TAMANHO"));
            let sabores = JSON.parse(localStorage.getItem("SABORES"));
            let precoTotal = adicionais.preco + bebidas[0].preco + entrega.preco + tamanho.preco;
            fetch("/pedido", { method: "POST", body: JSON.stringify({ cpf: dadosCliente.cpf, cep: entrega.cep, preco: precoTotal, data: new Date().toISOString().slice(0, 19) }), headers: { "Content-Type": "application/json" } }).then(() => {
                // for (const sabor of sabores) {
                //     fetch("http://localhost:8081/pedido-sabor", { method: "POST", body: JSON.stringify(id: sabor.id), headers: { "Content-Type": "application/json" } }).then(() => {

                //     })
                // }
                localStorage.clear();
                alert("Pedido confirmado com sucesso!");
                window.location.href = "/";
            })
        })
    })
}

function getPrecoBRL(preco) {
    return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}