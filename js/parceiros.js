//Abre/Fecha container de dúvida para virar parceiro
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

//Abre/Fecha container dos restaurantes/parceiros

const btnParceiro = document.querySelector("#container-parceiro-1");
const closeBtnRestaurante = document.querySelector("#closeBtnRestaurante");
const blurCard = document.querySelector(".blur-card");
const cardParceiro = document.querySelector("#card-parceiro-1")

btnParceiro.addEventListener("click", openCard);
blurCard.addEventListener("click", closeCard);
closeBtnRestaurante.addEventListener("click", closeCard);

function openCard(){
    cardParceiro.classList.add("show-container");
    blurCard.classList.add("show-container");
}

function closeCard(){
    cardParceiro.classList.remove("show-container");
    blurCard.classList.remove("show-container");
}







