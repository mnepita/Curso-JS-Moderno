// seleccionar elementos por su clase
const header = document.getElementsByClassName('header');
console.log( header );

const hero = document.getElementsByClassName('hero');
console.log( hero );

//si las clases existen mas de 1 vez 
const contenedores = document.getElementsByClassName('contenedor');
console.log( contenedores );

//si una clase no existe - retorna arreglo vacio
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);