//seleção de elementos
const clicked = document.querySelector(".btnproj");
const hidded = document.querySelector("#sfew");

const clicked2= document.querySelector(".btnsub");
const hidded2 = document.querySelector(".xp2");

const clicked3 = document.querySelector(".xp4");
const hidded3 = document.querySelector(".experiencias");
const baixarcv = document.querySelector("#cv");

//funções
    clicked.addEventListener("click", ()=>{
        hidded.classList.toggle("escondido")
    });

    clicked2.addEventListener("click",()=>{
        hidded2.classList.toggle("escondido")
        console.log("click");
    });

    clicked3.addEventListener("click",()=>{
    hidded3.classList.toggle("escondido")
    });
