//seleção de elementos
const clicked = document.querySelector(".btnproj");
const hidded = document.querySelector("#sfew");
const clicked2 = document.querySelector(".botaoxp");
const hidded2 = document.querySelector(".experiencias");
const baixarcv = document.querySelector("#cv");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");



//funções
    clicked.addEventListener("click", ()=>{
        hidded.classList.toggle("escondido")
    });

    clicked2.addEventListener("click",()=>{
        hidded2.classList.toggle("escondido")
    });

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
