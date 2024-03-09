function calcularNota() {
    var notaParcial1 = parseFloat(document.getElementById("parcial1").value);
    var notaParcial2 = parseFloat(document.getElementById("parcial2").value);
    var notaQuices = parseFloat(document.getElementById("quices").value);
    var notaProyecto1 = parseFloat(document.getElementById("proyecto1").value);
    var notaProyecto2 = parseFloat(document.getElementById("proyecto2").value);

    if (isNaN(notaParcial1) || isNaN(notaParcial2) || isNaN(notaQuices) || isNaN(notaProyecto1) || isNaN(notaProyecto2)) 
    {
        document.getElementById("resultado").innerText = "Por favor, ingresa todas las notas.";
        return;
    }

    var promedioParciales = (notaParcial1 + notaParcial2) / 2;
    var promedioQuices = notaQuices / 2;
    var promedioProyectos = (notaProyecto1 * 0.1) + (notaProyecto2 * 0.2);
    var notaDefinitiva = (promedioParciales * 0.4) + (promedioQuices * 0.3) + promedioProyectos;

    var resultado = "";

    if (notaDefinitiva >= 9 && notaDefinitiva < 9.5) {
        resultado = " Debe asistir a actividades de recuperación.";
    } else if (notaDefinitiva < 9) {
        resultado = " Reprobado.";
    } else {
        resultado = " Aprobado.";
    }

    document.getElementById("resultado").innerText = "La nota definitiva es: " + notaDefinitiva.toFixed(1) + ". " + resultado;

    }