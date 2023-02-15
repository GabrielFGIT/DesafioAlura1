function replace(){
    
    var textoEntrada = document.querySelector(".areaT").value;

    var textoSalida = textoEntrada.replace(/e/img, "enter");
    var textoSalida = textoSalida.replace(/o/img, "ober");
    var textoSalida = textoSalida.replace(/i/img, "imes");
    var textoSalida = textoSalida.replace(/a/img, "ai");
    var textoSalida = textoSalida.replace(/u/img, "ufat");
    var a =1;
    document.querySelector(".mensajeProcesado").innerHTML= textoSalida;
    
    
    
    if (a == 1){

        document.querySelector(".mensajeProcesado").style.display= "initial";
        document.querySelector(".imagenEspera").style.display= "none";
        document.querySelector(".boton-copiar").style.display= "initial";
        document.querySelector(".ningunMensaje").style.display= "none";
        document.querySelector(".ningunMensajeSub").style.display= "none";
        
    }


}

function replaceBack(){
    var textoEntrada = document.querySelector(".areaT").value;

    var textoSalida = textoEntrada.replace(/enter/img, "e");
    var textoSalida = textoSalida.replace(/ober/img, "o");
    var textoSalida = textoSalida.replace(/imes/img, "i");
    var textoSalida = textoSalida.replace(/ai/img, "a");
    var textoSalida = textoSalida.replace(/ufat/img, "u");
    var a =1;
    document.querySelector(".mensajeProcesado").innerHTML= textoSalida;

    if (a == 1){

        document.querySelector(".mensajeProcesado").style.display= "initial";
        document.querySelector(".imagenEspera").style.display= "none";
        document.querySelector(".boton-copiar").style.display= "initial";
        document.querySelector(".ningunMensaje").style.display= "none";
        document.querySelector(".ningunMensajeSub").style.display= "none";
        
    }

}

function copy(){
    var copiarSalida = document.querySelector(".mensajeProcesado");

    copiarSalida.select();
    document.execCommand("copy");
    alert("Texto copiado con exito! ")
}