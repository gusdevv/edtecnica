const url = 'http://localhost:3000/menu';
//agregar productos nuevos
export const nuevoProducto = async producto => {   
    try {   
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(producto),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
    
   

}
//ver todos los productos
export const obtenerListado = async () =>{
    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

//editar productos
export const editarProducto = async producto => {
    try {
        const resultado = await fetch(`${url}/${producto.id}`, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}
//buscar el id para pasar a editar productos
export const ObtenerProducto = async id => {

    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = await resultado.json();
        return producto;
    } catch (error) {
        console.log(error)
    }

}

//eliminar producto
export const eliminarProducto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}