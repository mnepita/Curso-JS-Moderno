//modificar texto  o imagenes con JS
let header = document.querySelector('h1');
console.log(header);

console.log(header.innerText);//si en el css visibility:hidden no lo encontrara
console.log(header.textContent);// si lo encuentra
console.log(header.innerHTML);//se trae el html

header.textContent = 'Nuevo text Content';
header.innerText = 'Nuevo inner text';

//modificar imagenes
const imagen = document.querySelector('.card img');
imagen.src ='img/hacer2.jpg';