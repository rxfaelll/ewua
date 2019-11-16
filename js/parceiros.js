//Abre container de dúvida para virar parceiro
const containerParceria = document.querySelector(".container-parceria-help");
const closeBtn = document.querySelector("#closeBtn");
const blur = document.querySelector(".blur-parceria-help");
const headerHelpBtn = document.querySelector("#header-help-btn");

headerHelpBtn.addEventListener("click", openParceriaHelp);
blur.addEventListener("click", closeParceriaHelp);
closeBtn.addEventListener("click", closeParceriaHelp);

function openParceriaHelp(){
    containerParceria.classList.add("show-container");
    blur.classList.add("show-container");
}

function closeParceriaHelp(){
    containerParceria.classList.remove("show-container");
    blur.classList.remove("show-container");
}

//Abre container dos restaurantes/parceiros
