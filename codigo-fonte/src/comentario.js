var exibir = true
function exibirComentario() {
   
    if (exibir) {
        document.getElementById("btn__cometario").style.display = "none";
        exibir = false;
    }
    else {
        document.getElementById("btn__cometario").style.display = "block";
        exibir = true;
    }
    
}