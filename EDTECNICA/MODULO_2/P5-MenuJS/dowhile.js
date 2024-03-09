/* SINTAXIS DEL DO-WHILE

    do{
        instrucciones
    }while(condicion)

*/
let i=0;
let numero;

do{
   /* if (i%2==0){
        console.log(i+" es un numero par");
    }else {
        console.log(i+" es un numero impar");
    }

    i++;*/

    numero = parseInt(prompt("Opciones:\n1. Suma\n2. Resta\n3.Salir")); // TODA INFORMACION QUE ENTRE EN EL PROMPT VA A SER UN STRING
    console.log(numero);


}while (numero != 3);