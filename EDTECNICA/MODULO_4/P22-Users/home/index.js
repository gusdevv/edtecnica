//Selectores
const formC = document.querySelector('#form-create');
const formL = document.querySelector('#form-login');
const loginInput = document.querySelector('#login-input');
const createInput = document. querySelector('#create-input');
const noti = document. querySelector('.notification');

//Eventos

formC.addEventListener('submit', async e=>{
    e.preventDefault();

    const respuesta = await fetch('http://localhost:3000/users',{method:'GET'});
    const users = await respuesta.json();
    const user = users.find(i=>i.username === createInput.value)


    //primera validación crear usuario

    if (!createInput.value){
        //Si es null, vacio o undefined
        noti.innerHTML= 'El campo usuario no puede estar vacio'
        noti.classList.add('show-notification');
        setTimeout(()=>{
            noti.classList.remove('show-notification')
        },2000)
    }else if(user){
        //si el usuario ya existe
        noti.innerHTML =  'El usuario ya existe';
        noti.classList.add('show-notification');
        setTimeout(()=>{
            noti.classList.remove('show-notification')
        },3000)

    }else{
        //si esta lleno el campo
        await fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            
            body: JSON.stringify({username:createInput.value})
        })

        noti.innerHTML =  'El usuario ha sido creado';
        noti.classList.add('show-notification');
        setTimeout(()=>{
            noti.classList.remove('show-notification')
        },3000)
    }
})

//segunda validacion iniciar sesion

formL.addEventListener('submit', async e=>{
    e.preventDefault();
    const url = 'http://localhost:3000/users'
    const respuesta = await fetch(url, {method:'GET'});
    const users = await respuesta.json();
    const user = users.find(i=>i.username === loginInput.value)

    if (!loginInput.value){
         //Si es null, vacio o undefined
         noti.innerHTML= 'El campo usuario no puede estar vacio'
         noti.classList.add('show-notification');
         setTimeout(()=>{
             noti.classList.remove('show-notification')
         },2000)
    }else if(!user){
        noti.innerHTML =  'El usuario no existe';
        noti.classList.add('show-notification');
        setTimeout(()=>{
            noti.classList.remove('show-notification')
        },3000)
    }else{
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '../tareas/tareas.html';
    }
})


