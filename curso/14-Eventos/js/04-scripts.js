//eventos en formularios
const form = document.querySelector('#formulario');

form.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();//evita la accion default del formulario (post)
    console.log('enviando desde formulario');
    console.log(e.target.method);
    console.log(e.target.action);
}