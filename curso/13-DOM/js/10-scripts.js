//crear html en el dom

//construyendo un nuevo enlace
const enlace = document.createElement('a');
enlace.textContent = 'nuevo enlace';
enlace.href = '#nuevo-enlace';
enlace.target = '_blank';
enlace.classList.add('nueva-clase');
enlace.onclick = miFuncion;
// console.log(enlace);

//seleccionar la navegacion
const nav = document.querySelector('nav');
// console.log(nav.children);

//agregar el enlace al nav
nav.appendChild(enlace);//appenchild lo posiciona al final


//insertBefore da mayor control
nav.insertBefore(enlace,nav.children[1] ); //requiere 2 argumentos, el elem y donde mostrarlo

function miFuncion() {
    alert('diste click')
};

//crear un Card de forma dinamica//

const p1 = document.createElement('p');
p1.textContent = 'Concierto';
p1.classList.add('categoria', 'concierto');

const p2 = document.createElement('p');
p2.textContent = 'Concierto de Rock';
p2.classList.add('titulo');

const p3 = document.createElement('p');
p3.textContent = '$900';
p3.classList.add('precio');

//crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

//  console.log(info);

//crear la imagen
const img = document.createElement('img');
img.atl = 'imagen de referencia';
img.src = 'img/hacer2.jpg';

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(img);

//pasarle la info
card.appendChild(info);


//insertar el card dinamico en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

contenedor.insertBefore(card, contenedor.children[0]);