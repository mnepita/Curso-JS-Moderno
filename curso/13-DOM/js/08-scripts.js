/* Traversing the DOM - en js todo esta conectado al document, la manera
de moverse es ir recorriendo el mapa del DOM.

*/
let nav = document.querySelector('nav');
// console.log(nav);
// console.log(nav.childNodes);//los espacios en blanco son considerados elementos
// console.log(nav.children);//solo trae elementos reales

console.log(nav.firstChild);
console.log(nav.lastChild);

// console.log(nav.children[1].nodeName);
// console.log(nav.children[1].nodeValue);
// console.log(nav.children[1].nodeType);

// traversing
const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'traversing the dom';
// card.children[0].src = 'img/hacer3.jpg';

// console.log(card.children[1].children[1].textContent);
// console.log(card.children[0]);

//traversing del hijo al padre
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);
// console.log(card.parentElement.parentElement.parentElement);

// console.log(card.nextElementSibling);//selecciona el siguiente pariente

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);








