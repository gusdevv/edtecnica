// notificaciones nativas de js

const notificarBtn = document.querySelector('#notificar');
const verNotificacion = document.querySelector('#verNotificacion');

//evento

notificarBtn.addEventListener('click', ()=>{
    //solicitar permiso al usuario mediante el api de notificaciones de JS

    Notification.requestPermission()
        .then(resultado =>{
            console.log('El resultado es: ', resultado)
        })

});

verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === "granted"){
        const noti = new Notification('Aquí está la notificación', {
            icon: 'img/gmail.png',
            body: 'enviando notificación'
        })

        noti.onclick = function() {
            window.open('https://www.google.co.ve/?hl=es')
        }
    }
})