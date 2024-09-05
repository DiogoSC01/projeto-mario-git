const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.tranform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function cliqueinamascara(){
    mascara.style.visibility = "hidden"
    form.style.left = "-300%"
}
    
