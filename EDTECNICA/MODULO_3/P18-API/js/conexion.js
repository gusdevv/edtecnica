window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

console.log(navigator.onLine);

function actualizarEstado() {

    //TAREA: MOSTRAR MENSAJES CON LA API DE NOTIFICACIONES
    if (navigator.onLine == true) {
        //console.log('tienes conexión');

        new Notification('Tienes conexión!', {
            icon: 'img/senal-wifi.png',
            body: 'Felicidades'
        })
    }else{

        new Notification('No tienes conexión :(', {
            icon: 'img/no-wifi.png',
            body: 'Hora de llorar'
        })

        //console.log('no tienes conexión');
    }
}