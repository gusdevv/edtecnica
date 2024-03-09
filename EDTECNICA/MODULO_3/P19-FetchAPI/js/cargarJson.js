//crear los selectores para las constantes
const cargarJsonBtn = document.querySelector('#cargarJSON')

//fetch('direccion')
//catch capturar errores

//definir eventos
cargarJsonBtn.addEventListener('click', obtenerDatos1)

//definir funcion obtenerDatos

function obtenerDatos1(){
//la ruta donde esta el txt
    const url = 'data/empleado.json'

    fetch(url).then(respuesta =>{
        console.log(respuesta.status)
        return respuesta.json()
    }).then(datos=>{
        console.log(datos)
    }).catch(error=>{
        console.log(error)
    })
//status 200: se conecta de forma satisfactorio 
//status 404: not found

}