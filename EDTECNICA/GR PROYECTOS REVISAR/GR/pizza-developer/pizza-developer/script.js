document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularCosto').addEventListener('click', calcularCostoPizza);
});

function calcularCostoPizza() {
    const tamaño = document.getElementById('tamanioPizza').value;
    const ingredientesExtras = Array.from(document.querySelectorAll('#extras:checked')).map(extra => extra.value);
    const costoManoObra = 5; // Costo fijo de mano de obra
    const costoHarinaPorCm = 0.03; // Costo por cada cm de harina

    try {
        const costoPreparacion = calcularCostoPreparacion(tamaño, costoManoObra, costoHarinaPorCm);
        const costoIngredientesExtras = calcularCostoIngredientesExtras(tamaño, ingredientesExtras.length);
        const precioFinal = (costoPreparacion + costoIngredientesExtras) * 1.5;
        
        document.getElementById('resultadoCosto').textContent = `Costo Total: $${precioFinal.toFixed(2)}`;
    } catch (error) {
        document.getElementById('resultadoCosto').textContent = error.message;
    }
}

function calcularCostoPreparacion(tamaño, costoManoObra, costoHarinaPorCm) {
    const diametro = obtenerDiametroPizza(tamaño);
    const radio = diametro / 2;
    const area = Math.PI * radio * radio;
    return costoManoObra + (area * costoHarinaPorCm);
}

function calcularCostoIngredientesExtras(tamaño, cantidadExtras) {
    const costoExtraPequeña = 1;
    let factorMultiplicador;

    switch (tamaño) {
        case 'pequeña':
            factorMultiplicador = 1;
            break;
        case 'mediana':
            factorMultiplicador = 2;
            break;
        case 'grande':
            factorMultiplicador = 4;
            break;
        default:
            throw new Error('Tamaño de pizza inválido');
    }

    return cantidadExtras * costoExtraPequeña * factorMultiplicador;
}

function obtenerDiametroPizza(tamaño) {
    switch (tamaño) {
        case 'pequeña':
            return 10;
        case 'mediana':
            return 14;
        case 'grande':
            return 16;
        default:
            throw new Error('Tamaño de pizza inválido');
    }
}
