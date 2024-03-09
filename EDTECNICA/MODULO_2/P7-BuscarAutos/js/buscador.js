// -----CREAR SELECTORES

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

//El dueño del concesionario solo acepta carros con 10 años de antiguedad

const max = new Date().getFullYear();
//console.log(max-10)
const min = max - 10;

//CONSTANTE QUE SE CONECTA CON EL DB.js

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


// -------CREAR EVENTOS

document.addEventListener('DOMContentLoaded', ()=>{
    // Llenar el listado de los años
    llenarSelectY();
    mostrarAutos(autos);
});

//MARCA
marca.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.marca = e.target.value; 
    filtrarAutos(); 
})
//YEAR
year.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.year = Number(e.target.value);//DEBIDO A QUE EL YEAR ES DE TIPO INT, si no agrego el NUMBER o el ParseInt me va a intentar devolver el valor como un string y no hay ningun string
    filtrarAutos();  
})
//PUERTAS
puertas.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.puertas = Number(e.target.value);  
    filtrarAutos(); 
})
//TRANSMISION
transmision.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.transmision = e.target.value;  
    filtrarAutos(); 
})
//COLOR
color.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.color = e.target.value;
    filtrarAutos();   
})
//MINIMO
minimo.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.minimo = Number(e.target.value);
    filtrarAutos();   
})
//MAXIMO
maximo.addEventListener('input', e=>{
    //console.log(e.target.value)
    datosBusqueda.maximo = Number(e.target.value);  
    filtrarAutos(); 
})



function llenarSelectY() {
    for (let i = max; i > min; i--) {
        //console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function mostrarAutos(autos) {
    autos.forEach(a => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = a;
        autoHTML.textContent = `${marca} - ${modelo} - AÑO: ${year} - ${puertas} puertas - Transmisión: ${transmision} - ${precio}$ - ${color}`;

        resultado.appendChild(autoHTML);
    });
}

function filtrarAutos(){
    console.log('FILTRADO')
    const res = autos.filter(filtrarMarcas).filter(filtrarYear).filter(filtrarMinimos).filter(filtrarMaximos).filter(filtrarColor).filter(filtrarTransmision).filter(filtrarPuertas)
    //console.log(res)
//MOSTRAR LOS ELEMENTOS EN EL HTML
    if(res.length){//si existen los elementos
       LimpiarHTML()
        mostrarAutos(res)
    }else{//Si no existen los parametros
        noResultado()
    } 
}

function noResultado(){
    const result = document.createElement('div')
    LimpiarHTML()
    result.textContent = 'No hay resultados disponibles';
    result.classList.add('alerta','error');
    resultado.appendChild(result);
}


function LimpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function filtrarMarcas(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.marca){
        return autos.marca === datosBusqueda.marca;
    }

return autos;

}

function filtrarYear(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.year){
        return autos.year === datosBusqueda.year;
    }

return autos;

}

function filtrarColor(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.color){
        return autos.color === datosBusqueda.color;
    }

return autos;

}

function filtrarTransmision(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.transmision){
        return autos.transmision === datosBusqueda.transmision;
    }

return autos;

}

function filtrarMinimos(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.minimo){
        return autos.precio >= datosBusqueda.minimo;
    }

return autos;

}

function filtrarMaximos(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.maximo){
        return autos.precio <= datosBusqueda.maximo;
    }

return autos;

}

function filtrarPuertas(autos){ //el filter itera solo dentro de un array para generar otro con la data que estoy filtrando dentro del array
    if(datosBusqueda.puertas){
        return autos.puertas === datosBusqueda.puertas;
    }

return autos;

}