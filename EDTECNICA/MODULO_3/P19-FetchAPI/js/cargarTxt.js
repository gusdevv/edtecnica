//crear los selectores para las constantes
const cargarTxtBtn = document.querySelector('#cargarTxt')

//fetch('direccion')
//catch capturar errores

//definir eventos
cargarTxtBtn.addEventListener('click', obtenerDatos)

//definir funcion obtenerDatos

function obtenerDatos(){
//la ruta donde esta el txt
    const url = 'data/datos.txt'

    fetch(url).then(respuesta =>{
        //console.log(respuesta.status)
        return respuesta.text()
    }).then(datos=>{
        mostrarHTML(datos)
        console.log(datos)
    }).catch(error=>{
        console.log(error)
    })
//status 200: se conecta de forma satisfactorio 
//status 404: not found
}

function mostrarHTML(){
    //en este div se va a mostrar el contenido
    const contenido = document.querySelector('#contenido')
    //variable vacia para el html
    let html = ''

    contenido.innerHTML = html
}