//crear un selector para la lista de curso, y agregar un listener y asi meter los elementos al carrito

//variables
const carrito = document.querySelector('#carrito');
const cartConteiner = document.querySelector('#lista-carrito tbody');
const btnEmptyCart = document.querySelector('#vaciar-carrito');
const courseList = document.querySelector('#lista-cursos');
let itemsInCart = [];

//agregando EventListeners - registro todos los eventos
loadEventListeners();
function loadEventListeners(){
    //cuando agregar un curso agregando al carrito
    courseList.addEventListener('click', addToCart);
}

//funciones
function addToCart( e ){
        // console.log( e.target.classList);
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const selectCourse = e.target.parentElement.parentElement;
        console.log(e.target);

        readCourseInfo(selectCourse);
    }
}


//leer datos del curso
function readCourseInfo(course) {
    console.log(course);
    
    //crear objeto con el contenido del curso actual
    const infoCourse = {
        img: course.querySelector('img').src,
        titulo: course.querySelector('h4').textContent,
        precio: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        qty: 1
    }

    //revisa si un elemento ya existe
    const existe = itemsInCart.some(course => course.id === infoCourse.id);
    if(existe) {
        //actualizamos la cantidad
        const cursos = itemsInCart.map( course => {
            if(course.id === infoCourse.id){
            course.qty ++;
            return course; //retorna el objeto actualizado
            } else {
                return course;//retorna los objs que no son dups
            }
        })
    } else {
        //agregar elementos al arreglo del carrito
        itemsInCart = [...itemsInCart, infoCourse]
    }

    console.log(infoCourse);
    console.log(itemsInCart);
    HTMLCart();
}


//Muestra carrito de compras en el HTML
function HTMLCart() {
    //limpiar el html
    clearHTML();

    //recorre el carrito y genera el HTML
    itemsInCart.forEach ( course =>{
        const {img, titulo, precio, qty, id} = course;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src = '${img}' width ='100'>
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${qty}
        </td>
        <td>
            <a href="#" class = "borrar-curso" "data-id = ${id} > X </a>
        </td>
        `;
        //agrega html del carrito en el tbody
        cartConteiner.appendChild(row);
    });
}

//elimina los cursos del tbod
function clearHTML() {
    //forma lenta
    // cartConteiner.innerHTML ='';

    while(cartConteiner.firstChild) {
        cartConteiner.removeChild(cartConteiner.firstChild)
    }
}