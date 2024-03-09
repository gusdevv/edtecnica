//selectores

const microfono = document.querySelector('#microfono');
const salida = document.querySelector('#salida');

//evento

microfono.addEventListener('click', ejecutarSpeechApi);

function ejecutarSpeechApi() {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition;

    /**
     * FASES
     * 1. EJECUTAR EL RECONOCIMIENTO
     * 2. COMENZAR A ESCUCHAR
     * 3. USUARIO TERMINA DE HABLAR
     * 4. MOSTRAR EL RESULTADO FINAL
     */

    recognition.start();

    recognition.onstart = function(){
        //comience a ejecutar
        salida.classList.add('mostrar');
        salida.textContent = 'escuchando...'
    }

    recognition.onspeechend = function(){
        salida.textContent = 'Se dejó de escuchar'
        recognition.stop();
    }

    recognition.onresult = function(e){
        console.log(e.results);

        const {confidence, transcript} = e.results[0][0];
        const speech = document.createElement('p');

        speech.innerHTML = `Lo que escuché: ${transcript}`;
        const confianza = document.createElement('p');
        confianza.innerHTML = `Confianza:  + ${parseInt(confidence*100)}`;

        salida.appendChild(speech);
        salida.appendChild(confianza);

    }

}