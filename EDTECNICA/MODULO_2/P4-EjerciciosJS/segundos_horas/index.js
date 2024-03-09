function convertirDias() {
    var segundos = parseInt(document.getElementById("segundosInput").value);

    var dias = Math.floor(segundos/(3600*24));
    var horas = Math.floor((segundos % (3600*24))/3600);
    var minutos = Math.floor((segundos%3600/60));
    var seg = seg % 60; 

    
    var resultadoTexto = segundos + " segundos son: " + dias + " dias," +horas + " horas, " + minutos + " minutos y " + seg + " segundos.";
    
    document.getElementById("resultado").innerText = resultadoTexto;
}