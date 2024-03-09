const user = JSON.parse(localStorage.getItem('user'));
const formulario = document.querySelector('#form-todos');
const lista = document.querySelector('#todos-list');
const inputF = document.querySelector('#form-input');
const cerrarBtn = document.querySelector('#cerrar-btn');

//validacion de si el usuario inició sesion o no
if(!user){
    window.location.href = '../home/index.html'
}

//cerrar sesion

cerrarBtn.addEventListener('click', async e=>{
    localStorage.removeItem('user')
    //e.preventDefault();
    window.location.href = '../home/index.html'
})

const obtenerLista = async ()=>{
    const respuesta = await fetch(' http://localhost:3000/tareas', {method: 'GET'})
    const list = await respuesta.json();

}

formulario.addEventListener('submit', async e=>{
    await fetch
})
)