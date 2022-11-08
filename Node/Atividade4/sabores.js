let saboresAtuais = 0;

function formatarNumeroSabores() {
    let elemento = document.getElementById("numeroSabores");
    saboresAtuais = document.querySelectorAll(".selected-sabor").length;
    let numeroSabores = JSON.parse(localStorage.getItem("TAMANHO")).qtdsabores;

    elemento.innerText = saboresAtuais + " / " + numeroSabores;

    setTimeout(() => {
        formatarNumeroSabores();
    }, 500)
}

function buscarSabores() {
    fetch(`http://localhost:8081/get-sabores`, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "default"
    }).then((data) => {
        data.json().then((dados) => {
            adicionarSabores(dados);
        })
    })
}

function adicionarSabores(dados) {
    for (const dado of dados) {
        let divSabor = document.createElement('div');
        divSabor.className = 'quadradoSabor';
        divSabor.ariaValueText = `{"sabor": "${dado.nome}"}`
        divSabor.id = dado.id;
        divSabor.onclick = () => {
            let sabor = document.getElementById(dado.id);
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
        };

        let divInfo = document.createElement('div');
        divInfo.className = 'infoSabor';

        let h5 = document.createElement("h5");
        h5.innerText = dado.nome;

        let span = document.createElement('span');
        span.innerText = dado.descricao;

        document.querySelector(".divSabores").appendChild(divSabor);
        divSabor.appendChild(divInfo);
        divInfo.appendChild(h5);
        divInfo.appendChild(span);
    }

    // <div id="1" onclick="selecionarSabor(1)" class="quadradoSabor" aria-valuetext='{"sabor": "Alho e Óleo"}'>
    //     <div class="infoSabor">
    //         <h5>Alho e Óleo</h5>
    //         <span>Mussarela, alho, óleo e orégano</span>
    //     </div>
    //     <img class="imgSabor" src="../imagens/sabores/alhoOlheo.jpg" alt="Pizza de Alho e Óleo">
    // </div>
}

formatarNumeroSabores();
buscarSabores();