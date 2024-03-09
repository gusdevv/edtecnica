const Era = document.querySelector('#Era');
const Autor = document.querySelector('#Autor');
const Edicion = document.querySelector('#Edicion');
const Categoria = document.querySelector('#Categoria');
const Episodio = document.querySelector('#Episodio');
const ISBN = document.querySelector('#ISBN');



const max = new Date().getFullYear();
const fechamin = max - 10;

const datoBusqueda = {
    Era: '',
    Autor: '',
    Edicion: '',    
    Categoria: '',
    Episodio: '',
    ISBN: ''

}


document.addEventListener('DOMContentLoaded', ()=>{

    
    mostrarAños();
    mostrarLibros(libros);

})


Era.addEventListener('change', e=>{

    console.log(e.target.value)
    datoBusqueda.Era = e.target.value;

    filtrarLibros();

})


Autor.addEventListener('change', e=>{

    console.log(e.target.value)
    datoBusqueda.Autor = e.target.value;

    filtrarLibros();

})


Edicion.addEventListener('change', e=>{

    console.log(e.target.value)
    datoBusqueda.Edicion = Number (e.target.value);
    
    filtrarLibros();
})


Categoria.addEventListener('change', e=>{

    console.log(e.target.value)
    datoBusqueda.Categoria = e.target.value;

    filtrarLibros();

})

Episodio.addEventListener('change', e=>{

    console.log(e.target.value)
    datoBusqueda.Episodio = e.target.value;

    filtrarLibros();

})

function mostrarAños(){
    for(let i = max; i>= fechamin; i--){
        const opcion = document.createElement('option'); 
        opcion.textContent = i;

        Edicion.appendChild(opcion) 
    }
}

function  mostrarLibros(libros){

    //limpiarHTML();

    for (let i = 0; i < libros.length; i++) {
        const cardId = libros[i].id;
        const card = document.getElementById(cardId);
        card.innerHTML = libros[i].text;

        for (const [attribute, value] of Object.entries(libros[i].attr)) {
            card.setAttribute(attribute, value);
        }

        card.innerHTML = `
        <div class="card-rebellion">
                <div class="card-inner-rebellion">
                  <div class="card-front-rebellion">
                    <img class="portada" id="libro-"${cardId} src="img/Ahsoka.webp">
                  </div>
                  <div class="card-back-rebellion">
                    <p class="info-libro" id="0"></p>
                  </div>
                </div>
            </div>

            <div class="card-rebellion">
                <div class="card-inner-rebellion">
                  <div class="card-front-rebellion">
                    <img class="portada" id="libro-"${cardId} src="img/ascenso rebelde.webp">
                  </div>
                  <div class="card-back-rebellion">
                    <p class="info-libro" id="1"></p>
                  </div>
                </div>
            </div>

            <div class="card-rebellion">
                <div class="card-inner-rebellion">
                  <div class="card-front-rebellion">
                    <img class="portada" id="libro-"${cardId} src="img/ascendencia-del mal menor.jpeg">
                  </div>
                  <div class="card-back-rebellion">
                    <p class="info-libro" id="2"></p>
                  </div>
                </div>
            </div>


            <div class="card-rebellion">
                <div class="card-inner-rebellion">
                  <div class="card-front-rebellion">
                    <img class="portada" id="libro-"${cardId} src="img/ascendencia-del-bien-mayor.png">
                  </div>
                  <div class="card-back-rebellion">
                    <p class="info-libro" id="3"></p>
                  </div>
                </div>
            </div>
        </div>

        `
    }




    }







function filtrarLibros(){
    const resultado = libros.filter(filtrarEra).filter(filtrarAutor).filter(filtrarEdicion).filter(filtrarAño).filter(filtrarCategoria).filter(filtrarEpisodio)
   
    console.log(resultado)
    mostrarLibros(resultado)
}


    function filtrarEra(libro){
    if(datoBusqueda.Era){
        return libro.Era === datoBusqueda.Era

        
    }

    return libro; //en el caso que no ingrese en el if, lo retorna tal cual lo recibio


}


function filtrarEdicion(libro){
    if (datoBusqueda.Edicion){
        return libro.Edicion === datoBusqueda.Edicion
    }

    return libro;
}

function filtrarCategoria(libro){
    if (datoBusqueda.Categoria){
        return libro.Categoria === datoBusqueda.Categoria
    
    }

    return libro;
}


function filtrarCategoria(libro){
    if (datoBusqueda.Episodio){
        return libro.Episodio === datoBusqueda.Episodio
    
    }

    return libro;
}










