//Crear los selectores
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Crear los eventos
addEventListeners();
function addEventListeners(){
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    })



}

function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value.trim(); // Usa trim para eliminar espacios en blanco al inicio y al final
    let numeroT = tweet.length; 
    if (numeroT > 0 && numeroT <= 250) {
        //console.log(tweet);
        const tweetObj = {
            id: Date.now(),
            tweet: tweet
        }

        const tweetID=tweetObj.id
        //console.log(tweetID)
        const tweetC = tweetObj.tweet

        tweets = [...tweets, tweetObj]
        //console.log(tweets);

        crearHTML();

        formulario.reset();

        sincronizarTweetsLS(tweetID, tweetC);
    } else if (numeroT === 0) {
        //console.log('El tweet no puede estar vacío.');
        mostrarError('El tweet no puede estar vacío.');
    } else {
        //console.log('Se ha superado el límite de caracteres.');
        mostrarError('Se ha superado el límite de caracteres.');
    }
}

function sincronizarTweetsLS(tweetID, tweetC){
    const tID = ''+ tweetID
    localStorage.setItem(tweetID, tweetC);

}

function crearHTML(){
    limpiarHTML()
    if(tweets.length >0){
    tweets.forEach(tweets=>{
        const li = document.createElement('li');
        const btnEliminar = document.createElement('a');
        btnEliminar.classList.add('borrar-tweet');
        btnEliminar.innerText ='X';

        btnEliminar.onclick = ()=>{
            borrarTweet(tweets.id);
        }

        //console.log(tweets.tweet);
        li.innerText = tweets.tweet;
        li.appendChild(btnEliminar);
        listaTweets.appendChild(li)
    } ) 
    //console.log('ingrese a la funcion crear HTML')
    }
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function borrarTweet(id){
    idS = id.toString()
    //console.log('ingrese a mi funcion borrar tweet', id)
    //tweets = tweets.filter(tweets => tID !== id);
    tweets = tweets.filter(tweets => tweets.id !== id);
    //console.log(tweets);
    localStorage.removeItem(idS)
    crearHTML();
}

function mostrarError(error){
    const mensajeerror = document.createElement('p');
    mensajeerror.innerText = error;
    mensajeerror.classList.add('error');
    //insertar el mensaje de error
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeerror);
    
    //dejar por tiempo corto el mensaje y que no se vayan acumulando los mensajes de error
    setTimeout(()=>
        mensajeerror.remove(),3000
    )
}

