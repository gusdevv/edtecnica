//selectores
const btnGuardar = document.querySelector('#guardar-cliente');
let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};
const categorias = {
    1: 'Pizzas',
    2: 'Postres',
    3: 'Bebidas',
    4: 'Carnes',
    5: 'Cafés'
};

btnGuardar.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;
    const camposVacios = [mesa, hora].some(campo => campo === '')

    if (camposVacios) {
        //en caso de que los campos estén vacios, mostrar mensaje de error
        const existeAlerta = document.querySelector('.invalido');
        if (!existeAlerta) {
            const alertaError = document.createElement('div');
            alertaError.classList.add('.invalido', 'text-center')
            alertaError.textContent = 'Los campos son obligatorios'

            document.querySelector('.modal-body form').appendChild(alertaError)

            setTimeout(() => {
                alertaError.remove();
            }, 1000);

        }

    } else {
        cliente = { ...cliente, mesa, hora };
        console.log(cliente);

        var modalFormulario = document.querySelector('#formulario');
        var modal = bootstrap.Modal.getInstance(modalFormulario);
        modal.hide();
        mostrarSeccion();
        obtenerMenu();

    }

}

function mostrarSeccion() {
    const secciones = document.querySelectorAll('.d-none');
    //console.log(secciones);
    secciones.forEach(i => {
        i.classList.remove('d-none')
    })
}

function obtenerMenu() {
    const url = 'http://localhost:3000/menu';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarMenu(resultado))
        .catch(error => console.log(error));
}

function mostrarMenu(menu) {
    const contenido = document.querySelector('#menu .contenido')
    menu.forEach(i => {
        const fila = document.createElement('div');
        fila.classList.add('row', 'border-top')

        const nombre = document.createElement('div');
        nombre.textContent = i.nombre;
        nombre.classList.add('col-md-4', 'py-3');

        const categoria = document.createElement('div');
        categoria.textContent = categorias[i.categoria];
        categoria.classList.add('col-md-4', 'py-3');

        const precio = document.createElement('div');
        precio.textContent = i.precio;
        precio.classList.add('col-md-4', 'py-3');


        fila.appendChild(nombre);
        fila.appendChild(precio);
        fila.appendChild(categoria);
        contenido.appendChild(fila);

    })
}