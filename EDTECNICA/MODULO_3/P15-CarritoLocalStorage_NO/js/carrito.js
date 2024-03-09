//Definir las variables o selectores (los elementos con los que interactuo)
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

//console.log(carrito);

//Estructura para guardar (array de los elementos del carrito)

let articulosCarrito = [];

//Definir los eventos

cargarEventos();

function cargarEventos(){
    //al hacer clic al boton de agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);

    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito=[];
        limpiarHTML();
    })

    carrito.addEventListener('click', eliminarCurso)
}

function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
    //console.log('ELIMINADO')
    const cursoId = e.target.getAttribute('data-id');
   // console.log(cursoId);

   const existe = articulosCarrito.some(cursos=>cursos.id === cursoId);
   if(existe){
    const cursos = articulosCarrito.map(cursos=>{
        if(cursos.id === cursoId){
            if(cursos.cantidad>1){
                cursos.cantidad--;
            }else{
//el filter sirve para iterar ante una condicion establecida y almacena el arreglo
                articulosCarrito = articulosCarrito.filter(cursos=> cursos.id !== cursoId)
            }
            carritoHTML();
        }else{
            return cursos;
        }
    })
}}}

function agregarCurso(e){
    e.preventDefault();
    //console.log('¡ FUNCIONA!'); //VALIDACION
    //console.log(e.target.classList.contains('agregar-carrito')); ENCONTRAR EL BOTON AGREGAR AL CARRITO
    if (e.target.classList.contains('agregar-carrito')){
        //console.log('SIUUU')
        const curso = e.target.parentElement.parentElement;
        //console.log(curso);
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso){

    //console.log('LEER CURSO');

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

//console.log(infoCurso)

//Some itera en el array y devuelve un boolean 

    if (articulosCarrito.some(curso => curso.id === infoCurso.id)) {

//map itera en el array y te devuelve un array 

        const curso = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        })
// los ... hace un duplicado de la estructura a la que estoy llamando
        articulosCarrito = [...curso]
    }

    else{

        articulosCarrito = [...articulosCarrito,infoCurso]
    }

    carritoHTML();
   
    //console.log(articulosCarrito);
}

function carritoHTML(){
    limpiarHTML()
//el foreach no necesita definir la longitud del array
//arrow function => es un apuntador para indicar que necesito que recorra esa funcion
    articulosCarrito.forEach(curso =>{ 
//tr es table row es para agregar filas dentro de una tabla <tbody> <tr></tr> </tbody>

//td es table data que sirve para agregar contenido dentro de una table row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width=100>
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
            <td>
                <a href= "#" class= "borrar-curso" data-id="${curso.id}">X</a>
            </td>

        `
    
        contenedorCarrito.appendChild(row);
    })

}

function limpiarHTML(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}




