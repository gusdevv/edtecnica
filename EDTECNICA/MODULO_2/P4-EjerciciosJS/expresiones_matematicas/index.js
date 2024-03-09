//EXPRESION 1
function expresion1() {

    var x = parseInt(document.getElementById("xinput").value);
    var y = parseInt(document.getElementById("yinput").value);
    var a = parseInt(document.getElementById("ainput").value);
    var b = parseInt(document.getElementById("binput").value);
    var r = parseInt(document.getElementById("rinput").value);

    var resultado = calcularExpresion(x, y, a, b, r);


    document.getElementById("resultado").innerText = "El resultado de la expresión es: " + resultado;
}

function calcularExpresion(x, y, a, b, r) {
    var resultado = Math.pow(x, 2) + Math.pow(y, 2) - 2 * a * x - 2 * b * y + Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(r, 2);
    return resultado;
}

//EXPRESION 2
function expresion2() {

    var x = parseFloat(document.getElementById("x2input").value);
    var y = parseFloat(document.getElementById("y2input").value);
    var c = parseFloat(document.getElementById("cinput").value);
    var a = parseFloat(document.getElementById("a2input").value);

    var resultado1 = calcularExpresion2(x, y, c, a);

    document.getElementById("resultado2").innerText = "El resultado de la expresión es: " + resultado1;
}

function calcularExpresion2(x, y, c, a) {
    var parte1 = Math.sqrt(Math.pow((x + c), 2) + Math.pow(y, 2));
    var parte2 = Math.sqrt(Math.pow((x - c), 2) + Math.pow(y, 2));
    var resultado1 = (parte1 + parte2) / (2 * a);
    return resultado1;
}

//EXPRESION 3
function expresion3() {
    var x = parseInt(document.getElementById("x3input").value);
    var y = parseInt(document.getElementById("y3input").value);
    var p = parseInt(document.getElementById("pinput").value);
    var q = parseInt(document.getElementById("qinput").value);
    var a = parseInt(document.getElementById("a3input").value);
    var b = parseInt(document.getElementById("b3input").value);

    var resultado3 = calcularExpresion3(x, y, p, q, a, b);

    document.getElementById("resultado3").innerText = "El resultado de la expresión es: " + resultado3;
}

function calcularExpresion3(x, y, p, q, a, b) {
    var parteA = Math.pow((x - p), 2);
    var parteAdiv = parteA / Math.pow(a, 2);
    var parteB = Math.pow((y - q), 2);
    var parteBdiv = parteB / Math.pow(b, 2);
    var resultado3 = (parteAdiv + parteBdiv) / 1;
    return resultado3;
}

//EXPRESION 4
function expresion4() {
    var ba1 = parseInt(document.getElementById("ba1input").value);
    var ba2 = parseInt(document.getElementById("ba2input").value);
    var h = parseInt(document.getElementById("hinput").value);

    var resultado4 = calcularExpresion3(ba1, ba2, h);

    document.getElementById("resultado4").innerText = "El resultado de A es: " + resultado4;
}

function calcularExpresion3(ba1, ba2, h) {
    var sumaB = (ba1 + ba2);
    var divB = (sumaB/2);
    var resultado4 = (divB * h);
    return resultado4;
}

