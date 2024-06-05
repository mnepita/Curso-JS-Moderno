//eliminar elementos del DOM
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

//eliminar desde el padre
const nav = document.querySelector('nav');
console.log(nav.children);//muestra los hijos y referencia (posicion)
nav.removeChild(nav.children[2]);//se le pasa la ref a eliminar