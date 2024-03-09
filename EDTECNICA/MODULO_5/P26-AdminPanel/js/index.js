import {obtenerListado, eliminarProducto} from "./api.js";

const listado = document.querySelector('#listado-Productos');

document.addEventListener('DOMContentLoaded', mostrarProductos);
listado.addEventListener('click', confirmarEliminar)

async function mostrarProductos(){
    const productos = await obtenerListado();
    //console.log(productos);
    productos.forEach(i => {

        const{id,nombre,precio,categoria} = i;
        const row = document.createElement('tr');
        row.innerHTML +=  `
            <td class = "px-6 py-6 border-b border-gray-200">
                <p class="font-bold font-medium text-gray-700">
                    ${nombre}
                </p>
            </td>
            <td class = "px-6 py-6 border-b border-gray-200"> 
                <p class="font-bold font-medium text-gray-700">
                    ${precio}
                </p>
            </td>
            <td class = "px-6 py-6 border-b border-gray-200">
                <p class="font-bold font-medium text-gray-700">
                    ${categoria}
                </p>
            </td>
            <td class = "px-6 py-6 border-b border-gray-200">
                <a href = "editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href = "#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `

        listado.appendChild(row);
    });
}

async function confirmarEliminar(e){
    if(e.target.classList.contains('eliminar')){
       const productoId = parseInt(e.target.dataset.producto) 
       
       const confirmar = confirm('Quieres eliminar este producto?')

       if(confirmar){
            await eliminarProducto(productoId)
       }
    }
}

