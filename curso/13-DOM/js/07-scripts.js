//cambiar CSS , agregar o quitar clases 
// const header = document.querySelector('h1');
// console.log(header);

// header.style.backgroundColor = 'red';
// header.style.fontFamily = 'Mono';
// header.style.textTransform = 'Uppercase';

//agregar o quitar clases
let card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
console.log(card.classList);

card.classList.remove('nueva-clase');
console.log(card);

