function esBisiesto(bisiesto){
    return (bisiesto % 4 === 0 && bisiesto % 100 !== 0) || (bisiesto % 400 === 0);
        }

function verificarBisiesto(){
var bisiesto = parseInt(document.getElementById("bisiestoInput").value)
var resultado = esBisiesto(bisiesto) 
var mensaje = bisiesto + (resultado ? " es un año bisiesto." : " no es un año bisiesto.");

document.getElementById("resultado").innerText = mensaje;
}

