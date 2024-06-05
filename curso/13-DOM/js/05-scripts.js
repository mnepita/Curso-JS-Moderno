/* querySelectorAll(); - trae todos los elementos que encuentra, retorna un
lista de nodos

*/
const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

//si un elemento no existe - retorna arreglos vacios
const noExiste = document.querySelectorAll('.no-existe');
console.log(noExiste);