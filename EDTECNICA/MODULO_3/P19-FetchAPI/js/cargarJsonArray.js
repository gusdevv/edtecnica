//crear los selectores para las constantes
const cargarArrayBtn = document.querySelector('#cargarJSONArray')

//fetch('direccion')
//catch capturar errores

//definir eventos
cargarArrayBtn.addEventListener('click', obtenerDatos2)

//definir funcion obtenerDatos

function obtenerDatos2(){
//la ruta donde esta el txt
    const url = 'data/empleados.json'

    fetch(url).then(respuesta =>{
        //console.log(respuesta.status)
        return respuesta.json()
    }).then(datos=>{
        mostrarHTML(datos)
        //console.log(datos)
    }).catch(error=>{
        console.log(error)
    })
//status 200: se conecta de forma satisfactorio 
//status 404: not found

}

function mostrarHTML(empleados){
    //en este div se va a mostrar el contenido
    const contenido = document.querySelector('#contenido')
    //variable vacia para el html
    let html = ''

    empleados.forEach(i => {
      const{id, nombre, empresa, trabajo} = i
    
        html += `
            <p> ID: ${id}</p>
            <p> Empleado: ${nombre}</p>
            <p> Empresa: ${empresa}</p>
            <p> Cargo: ${trabajo}</p>
            

        `
    });

    contenido.innerHTML = html
}