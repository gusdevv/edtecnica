//1. selectores

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

//2. array para tweets

let tweets = [];

//3. funciones

addEventListeners();

function addEventListeners(){
    formulario.addEventListener('submit',agregarTweet);
}

function agregarTweet(e){
    e.preventDefault();
    //console.log('Ingreso siuuu')
    const tweet = document.querySelector('#tweet').value;
    //console.log(tweet);
    let numeroTweet = tweet.length; //saber la cantidad de caracteres
    //console.log(numeroTweet)
    if (numeroTweet > 0 && numeroTweet <= 250) {
        //console.log(tweet);
        const tweetObj = {
            id: Date.now(),
            tweet: tweet
        }

        tweets = [...tweets, tweetObj]
        //console.log(tweets);

        crearHTML();

        formulario.reset();

    } else if (numeroT === 0) {
        //console.log('El tweet no puede estar vacío.');
        mostrarError('El tweet no puede estar vacío.');
    } else {
        //console.log('Se ha superado el límite de caracteres.');
        mostrarError('Se ha superado el límite de caracteres.');
    }
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
    //console.log('ingrese a mi funcion borrar tweet', id)
    tweets = tweets.filter(tweets => tweets.id !== id);
    //console.log(tweets);
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

