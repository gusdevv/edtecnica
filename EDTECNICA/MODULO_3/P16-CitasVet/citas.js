const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector('#nueva-cita');
let editar; //una bandera

//definir la clase
class ui{

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert','col-12');

        if(tipo=='error'){
            divMensaje.classList.add('alert-danger')
        }
        else{
            divMensaje.classList.add('alert-success')
        }

        //el mensaje que va para alerta
        divMensaje.textContent = mensaje;
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'))

        setTimeout(() => {divMensaje.remove();
        
        }, 3000);
    }
//ENVIARLO CON LAS LLAVES PARA QUE LO LLAME
    imprimirCitas({citas}){
//foreach para iterar en el arreglo
        this.limpiarHTML()
        citas.forEach(i=> {

            const {mascota,propietario,telefono, fecha, hora, sintomas, id}= i//sobre la posicion i no sobre el arreglo citas
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3')
            divCita.dataset.id = id; //esto es la creacion de un atributo personalizado para tener los identificadores por id

            const mascotasParrafo = document.createElement('h2')
            mascotasParrafo.classList.add('font-weight-bolder')
            mascotasParrafo.textContent= 'Mascota:' + mascota

            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.classList.add('font-weight-bolder')
            propietarioParrafo.textContent='Propietario: ' + propietario

            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.classList.add('font-weight-bolder')
            telefonoParrafo.textContent='Telefono: ' + telefono

            const fechaParrafo = document.createElement('p')
            fechaParrafo.classList.add('font-weight-bolder')
            fechaParrafo.textContent='Fecha: ' + fecha

            const horaParrafo = document.createElement('p')
            horaParrafo.classList.add('font-weight-bolder')
            horaParrafo.textContent='Hora: ' + hora

            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.classList.add('font-weight-bolder')
            sintomasParrafo.textContent='Sintomas: ' + sintomas

            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            btnEliminar.onclick = ()=> eliminarCita(id)


            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info', 'mr-2')
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            btnEditar.onclick = ()=> cargarEdicion(i)




            divCita.appendChild(mascotasParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita)

            
        });

    }

    limpiarHTML(){

        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}

class citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){

        this.citas = [...this.citas,cita];


        console.log(this.citas);
    }

    eliminarCita(id){

        this.citas = this.citas.filter(i=>i.id !== id)

    }

    editarCita(citaAct){
        this.citas = this.citas.map(i=>i.id=== citaAct.id ? citaAct : i);


        /*
        Sintaxis nueva:
            Esta sintaxis es como un if simplificado

            donde se plantea la condicion ? <= es un entonces, es decir SI SE CUMPLE LA CONDICION ENTONCES y en caso de que no se cumpla : <= VA EL : QUE ES UN Y SI NO y se coloca que va en caso de que no se cumpla

            condicion ? true : false
        */
    }
}

//evento
eventListener();

function eventListener(){
    mascotaInput.addEventListener('input',datosCitas);
    propietarioInput.addEventListener('input',datosCitas);
    telefonoInput.addEventListener('input',datosCitas);
    fechaInput.addEventListener('input',datosCitas);
    horaInput.addEventListener('input',datosCitas);
    sintomasInput.addEventListener('input',datosCitas)
    formulario.addEventListener('submit',nuevaCita)
}

//instanciacion llamar a las clases creadas
const useri = new ui()
const administrarCitas = new citas();

const citasObj = {
    mascota:'',
    propietario:'',
    telefono:'',
    fecha:'',
    hora:'',
    sintomas:'',
}

function datosCitas(e){
    //aqui se guardan los valores dentro del objeto
    //console.log(e.target.name)
    citasObj[e.target.name] = e.target.value;
    //console.log(citasObj)
}

function nuevaCita(e){
    //funcion para validar y agregar una nueva cita
    e.preventDefault();
    //extraer la informacion del objeto cita
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citasObj;

    //validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
       //console.log('todos los campos son obligatorios')
       useri.imprimirAlerta('Todos los campos son obligatorios', 'error')
    
    }

    else if(editar){
        editar = false;
        formulario.querySelector('button[type=submit]').textContent = 'Crear Cita'
        administrarCitas.editarCita({...citasObj})
        useri.imprimirAlerta('Se ha modificado su cita correctamente');


    }
    else{
        //datos estan completos
        //console.log('crear nueva cita')
        citasObj.id = Date.now();
        //console.log(citasObj)
        administrarCitas.agregarCita({...citasObj})
        //PARA IMPRIMIR EL TEXTO HAY QUE LLAMARLO Y con la variable de la instanciacion
        useri.imprimirAlerta('Su cita se ha agregada correctamente')
        
    }

    
formulario.reset();
reiniciarObjeto();
useri.imprimirCitas(administrarCitas)


}

function reiniciarObjeto(){

    citasObj.fecha='';
    citasObj.hora='';
    citasObj.mascota='';
    citasObj.propietario='';
    citasObj.sintomas='';
    citasObj.telefono='';    

}

function eliminarCita(id){
    administrarCitas.eliminarCita(id)
    useri.imprimirAlerta('Ha eliminado la cita correctamente');

    //limpiar el html para quitar la cita imprimiendo las citas nuevamente

    useri.imprimirCitas(administrarCitas);
}

function cargarEdicion(cita){
    const {mascota,propietario,telefono,fecha, hora, sintomas, id}=cita

    //lenar los inputs
    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    //llenar el objeto nuevo
    citasObj.mascota=mascota
    citasObj.propietario=propietario
    citasObj.telefono=telefono
    citasObj.fecha=fecha
    citasObj.hora=hora
    citasObj.sintomas=sintomas
    citasObj.id=id

    editar = true
    
    formulario.querySelector('button[type=submit]').textContent = 'Guardar';
}



