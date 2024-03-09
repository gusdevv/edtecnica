// -----CREAR SELECTORES

const isbn = document.querySelector('#isbn');
const nombreLibro = document.querySelector('#nombreLibro');
const autor = document.querySelector('#autor');
const edicion = document.querySelector('#edicion');
const categoria = document.querySelector('#categoria');
const resultado = document.querySelector('#resultado');

//CONSTANTE QUE SE CONECTA CON EL DB.js

const datosBusqueda = {
    isbn: '',
    nombreDelLibro: '',
    autor: '',
    edicion: '',
    categoria: ''
}

// -------CREAR EVENTOS

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarLibros(libros);
});

//ISBN
isbn.addEventListener('input', e=>{
    datosBusqueda.isbn = e.target.value; 
    filtrarLibros(); 
})
//Nombre del Libro
nombreLibro.addEventListener('input', e=>{
    datosBusqueda.nombreDelLibro = e.target.value;
    filtrarLibros();  
})
//Autor
autor.addEventListener('input', e=>{
    datosBusqueda.autor = e.target.value;  
    filtrarLibros(); 
})
//Edición
edicion.addEventListener('input', e=>{
    datosBusqueda.edicion = e.target.value;  
    filtrarLibros(); 
})
//Categoría
categoria.addEventListener('input', e=>{
    datosBusqueda.categoria = e.target.value;
    filtrarLibros();   
})

function mostrarLibros(libros) {
    libros.forEach(libro => {
        const libroHTML = document.createElement('p');
        const {ISBN, nombreDelLibro, autor, edicion, categoria} = libro;
        libroHTML.textContent = `${ISBN} - ${nombreDelLibro} - Autor: ${autor} - ${edicion} - Categoría: ${categoria}`;

        resultado.appendChild(libroHTML);
    });
}

function filtrarLibros(){
    const res = libros.filter(filtrarISBN).filter(filtrarNombre).filter(filtrarAutor).filter(filtrarEdicion).filter(filtrarCategoria);

    if(res.length){
       LimpiarHTML()
        mostrarLibros(res)
    }else{
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

function filtrarISBN(libro){ 
    //console.log("Comparando: ", libro.ISBN, " con ", datosBusqueda.isbn);
    if(datosBusqueda.isbn){
        return libro.ISBN.includes(datosBusqueda.isbn);
    }
    return libro;
}

function filtrarNombre(libro){ 
    if(datosBusqueda.nombreDelLibro){
        return libro.nombreDelLibro.toLowerCase().includes(datosBusqueda.nombreDelLibro.toLowerCase());
    }
    return libro;
}

function filtrarAutor(libro){ 
    if(datosBusqueda.autor){
        return libro.autor.toLowerCase().includes(datosBusqueda.autor.toLowerCase());
    }
    return libro;
}

function filtrarEdicion(libro){ 
    if(datosBusqueda.edicion){
        return libro.edicion === datosBusqueda.edicion;
    }
    return libro;
}

function filtrarCategoria(libro){ 
    if(datosBusqueda.categoria){
        return libro.categoria === datosBusqueda.categoria;
    }
    return libro;
}


/*









*/
