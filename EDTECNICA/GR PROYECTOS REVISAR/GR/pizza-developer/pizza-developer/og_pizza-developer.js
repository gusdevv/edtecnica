const costoFijo = 5; //costo fijo de mano de obra 
const harina = 0.03 //costo por cada centimetro de harina
const extraPequeña = 1 //costo ingredientes extras para pizza pequeña
const extraMediana= extraPequeña * 2; //el costo de extras de la mediana equivale al costo de la pequeña por dos
const extraGrande = extraPequeña * 4; //lo mismo que el anterior pero el duplicado de la mediana
const PI = 3.14159; //constante matematica

//calcular el area de un circulo 

function calcularArea (diametro){
    var radio = diametro / 2;
    return PI * radio * radio;
}


//calcular el costo de la preparacion de una  pizza


function calcularPreparacion(tamaño, manoDeobra, harinaCosto, extraCosto){
    var area = calcularArea(tamaño);
    var harinaTotal = area * harinaCosto;
    var extraTotal = 0;


    //switch es una sentencia que sirve para elaborar varios bloques y que si uno cumple con la codicional se cumpla solo esa parte
    
    switch (tamaño){

        case "pequeña":
            extraTotal = extraCosto;
            break;

        case "mediana":
            
        extraTotal = extraCosto * 2;
        break;


        case "grande":

        extraTotal = extraCosto * 4;
        break;

        default:
            throw new Error("Tamaño de pizza invalido");
    }

    return manoDeobra + harinaTotal + extraTotal;
}

//calcular el precio final de una pizza 

function calcularPrecioFinal(preparacionCosto){
    return preparacionCosto * 1.5; //precio final es de 1,5 veces el costo de preparacion

}


// funcion principal

function calcularPrecioPizza (tamaño, manoDeobra, harinaCosto, extraCosto, ingredientes){
    //Validaciones 

    if (tamaño !== "pequeña" && tamaño !== "mediana" &&  tamaño !== "grande"){
        throw new Error("Tamaño de pizza invalido");
    }

    if (manoDeobra < 0){
        throw new Error("costo de mano de obra invalido");
    }

    if ( extraCosto < 0 ){
        throw new Error("costo extra invalido");
    }

    if (!Array.isArray(ingredientes)) {
        throw new Error("Ingredientes invalidos");
      }
    
      if (ingredientes.some(ingrediente => typeof ingrediente !== "string")) {
        throw new Error("Ingredientes invalidos");
      }
    }

    // calcular el costo de la preparacion 

    var preparacionCosto = calcularPreparacionCosto(tamaño, manoDeobra, harina, extraCosto);


    //calcular el precio final 

    var precioFinal = calcularPrecioFinal(preparacionCosto);

    return precioFinal;

   