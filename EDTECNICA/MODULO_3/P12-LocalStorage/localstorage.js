//key: referencia que voy a utilizar para tener acceso al campo value
//value: el valor del campo donde se va a guardar la informaciòn

//sintaxtis para agregar al local storage

localStorage.setItem('nombre', 'Elizabeth'); //agregar un objeto el item tiene que ser un string

//sintaxis para agregar al session storage

sessionStorage.setItem('nombre', 'Gustavo');

//vamos a agregar un objeto en el LS

const producto = {
    nombre: 'telefono',
    precio: '300$'
}

//console.log(typeof producto)

const productoString = JSON.stringify(producto)
//console.log(productoString)

localStorage.setItem('producto', productoString)

//nuevo ejemplo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const mesesString = JSON.stringify(meses)

localStorage.setItem('meses', mesesString)

//Ya ingresamos los datos al LS ahora como los consultamos desde el LS

const nombre = localStorage.getItem('nombre')
//console.log(nombre)

//extraer y consultar un objeto dentro de un LS

const product = localStorage.getItem('producto')
const productObject = JSON.parse(product) //el parse sirve para ver el objeto y no como un string
//console.log(productObject)

//extraer y consultar un arreglo dentro de un LS

const mes = localStorage.getItem('meses')
const mesArray = JSON.parse(mes)
//console.log(mesArray)


