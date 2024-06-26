//querySelector - solo retorna el primero que encuentre,
// si no existre no retorna nada

const card = document.querySelector('.card');
console.log(card);

//multiples selectores - selectore especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el 2do card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log(segundoCard);

//seleccionar con ID
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos HTML
const nav = document.querySelector('nav');
console.log(nav);