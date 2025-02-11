var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var SetaDireita = window.document.getElementById("seta-dir")
var Setaesquerda = window.document.getElementById("seta-esq")


    function MoveSetaDir(){

        Leonardo.style = "display:none"
        SetaDireita.style = "display:none"
        Bruna.style = "display:flex"
        Setaesquerda.style = "display:flex"

    }
    function MoveSetaEsq(){
        Leonardo.style = "display:flex"
        Bruna.style = "display:none"
        SetaDireita.style = "display:flex"
        Setaesquerda.style = "display:none"

    }