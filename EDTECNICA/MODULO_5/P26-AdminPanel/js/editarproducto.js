import { ObtenerProducto, editarProducto } from "./api.js";
import { mostrarAlerta, validacion } from "./funciones.js";    

const nombreInput = document.querySelector('#nombre')
const precioInput = document.querySelector('#precio')
const categoriaInput = document.querySelector('#categoria')
const idInput = document.querySelector('#id')



document.addEventListener('DOMContentLoaded', async () => {
    // verificar que el producto existe
    const parametroURL = new URLSearchParams(window.location.search);
    //console.log(window.location.search);
    const idProducto = parseInt(parametroURL.get('id'))
    //console.log(idProducto)

    const producto = await ObtenerProducto(idProducto)
    mostrarProducto(producto)
    //console.log(producto)

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarProducto);
});

function mostrarProducto(producto){
    const {nombre, precio, categoria, id} = producto;

    nombreInput.value = nombre;
    precioInput.value = precio;
    categoriaInput.value = categoria;
    idInput.value = id;
}

async function validarProducto(e){
    e.preventDefault();

    const producto = {
        nombre: nombreInput.value,
        precio: precioInput.value,
        categoria: categoriaInput.value,
        id: parseInt(idInput.value)
    }

    if(validacion(producto)){
        //console.log('todos los campos son obligatorios')   
        mostrarAlerta('todos los campos son obligartorios');
        return;
    }else{
        await editarProducto(producto);
        window.location.href = 'index.html';
    }

}

