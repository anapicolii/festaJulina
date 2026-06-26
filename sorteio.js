let p = document.querySelector(".numero");
let btn = document.querySelector(".btn-sorteio");
let btnModal = document.querySelector(".okModal");
let modal = document.querySelector(".modal");

let vetor = [];

btnModal.addEventListener("click", () => {
    modal.close();
});

btn.addEventListener("click", () => {
    let valorMaximo = document.querySelector("#maximo").value;

    if (!valorMaximo.trim()) {
        modal.showModal();
        return;
    }

    valorMaximo = Number(valorMaximo);

    // Limpa o vetor se já houver 3 números
    if (vetor.length === 3) {
        vetor = [];
    }

    let sorteio;

    // Sorteia sem repetir
    do {
        sorteio = Math.floor(Math.random() * valorMaximo) + 1;
    } while (vetor.includes(sorteio));

    vetor.push(sorteio);

    setTimeout(() => {
        p.textContent = "Sorteando.";
    }, 1000);

    setTimeout(() => {
        p.textContent = "Sorteando..";
    }, 2000);

    setTimeout(() => {
        p.textContent = "Sorteando...";
    }, 3000);

    setTimeout(() => {
        p.textContent = sorteio;
    }, 4000);

    // Quando tiver os 3 números, mostra todos
    if (vetor.length === 3) {
        setTimeout(() => {
            p.textContent = "NÚMEROS SORTEADOS:";

            vetor.forEach(numero => {
                let criado = document.createElement("span");
                criado.textContent = ` ${numero}`;
                criado.classList.add("estiloLegal");
                p.append(criado);
            });
        }, 5000);

    }
});