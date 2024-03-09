//crear los selectores para las constantes
const cargarApiBtn = document.querySelector('#cargarAPI')

//fetch('direccion')
//catch capturar errores

//definir eventos
cargarApiBtn.addEventListener('click', obtenerDatos3)

//definir funcion obtenerDatos

function obtenerDatos3(){
//la ruta donde esta el txt
    const url = 'https://picsum.photos/list'

    fetch(url).then(respuesta =>{
        //console.log(respuesta.status)
        return respuesta.json()
    }).then(datos=>{
        mostrarIMG(datos)
        console.log(datos)
    }).catch(error=>{
        console.log(error)
    })
//status 200: se conecta de forma satisfactorio 
//status 404: not found

}

function mostrarIMG(autores){
    //en este div se va a mostrar el contenido
    const contenido = document.querySelector('#contenido')
    //variable vacia para el html
    let html = ''

    autores.forEach(i => {
      const{author, post_url} = i
    
        html += `
            <p>Autor: ${author}</p>
            <a href=${post_url} target="_blank"> Ver imagen aqui </a>
            
        `
    });

    contenido.innerHTML = html

}
