/* SINTAXIS DEL SWITCH

    switch(var){
        case var:
            instrucciones
            break;
        case var:
            instrucciones
            break;
        default:
            instrucciones
            break;
    }
*/

let op;
let flag = 2;
let num1;
let num2;

function mostrar() {
    flag = parseInt(prompt('El resultado es: ' + num1 + '\n Desea repetir el proceso?\n1: Si\n2: No'));
}

do {
    num1 = parseInt(prompt('Ingrese el primer numero'));
    num2 = parseInt(prompt('Ingrese el segundo numero'));
    op = parseInt(prompt('Elija la opcion que prefiera:\nOpciones:\n1. Suma\n2. Resta\n3.Multiplicar\n4.Dividir\n5.Salir'));
    switch (op) {
        case 1:
            // SUMAR
            console.log('opcion suma');
            num1 += num2; // num1 = num1 + num2
            //flag = parseInt(prompt('El resultado es: ' + num1 + '\n Desea repetir el proceso?\n1: Si\n2: No'));
            mostrar();
            break;
        case 2:
            // RESTAR
            num1 -= num2; // num1 = num1 + num2
            flag = parseInt(prompt('El resultado es: ' + num1 + '\n Desea repetir el proceso?\n1: Si\n2: No'));
            console.log('opcion resta');
            break;
        case 3:
            // MULTIPLICAR
            num1 *= num2; // num1 = num1 + num2
            flag = parseInt(prompt('El resultado es: ' + num1 + '\n Desea repetir el proceso?\n1: Si\n2: No'));
            console.log('opcion multiplicar');
            break;
        case 4:
            // DIVIDIR
            num1 /= num2; // num1 = num1 + num2
            flag = parseInt(prompt('El resultado es: ' + num1 + '\n Desea repetir el proceso?\n1: Si\n2: No'));
            console.log('opcion dividir');
            break;
        case 5:
            // SALIR
            console.log('opcion salir');
            flag = 2;
            break;
        default:
            console.log('Debe ingresar una opcion valida');
            break;
    }
} while (flag != 2);

