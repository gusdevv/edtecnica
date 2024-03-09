function convertirSegundos() {
    var segundos = parseInt(document.getElementById("segundosInput").value);
    var horas = Math.floor(segundos / 3600);
    var minutosRestantes = segundos % 3600;
    var minutos = Math.floor(minutosRestantes / 60);
    var segundosRestantes = minutosRestantes % 60;
    
    var resultadoTexto = segundos + " segundos son " + horas + " horas, " + minutos + " minutos y " + segundosRestantes + " segundos.";
    
    document.getElementById("resultado").innerText = resultadoTexto;
}