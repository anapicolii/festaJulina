let p = document.querySelector(".numero");
let btn = document.querySelector(".btn-sorteio");
let btnModal = document.querySelector(".okModal");
let modal = document.querySelector(".modal");

btnModal.addEventListener("click", ()=>{
    modal.close()
})

btn.addEventListener("click", ()=>{
    p.textContent = " NÚMERO SORTEADO:"

    let valorMaximo = document.querySelector("#maximo").value

    if(!valorMaximo.trim()){
        modal.showModal();
        return;
    }
    
    let criado = document.createElement("span");
    let sorteio = Math.floor(Math.random() * valorMaximo) + 1;

    criado.textContent = ` ${sorteio}`;
    criado.classList.add("estiloLegal");

    p.append(criado);
})
