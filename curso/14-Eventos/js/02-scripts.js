//eventos con el mouse

const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('click', () =>{
    console.log('click en el nav');
});

nav.addEventListener('mouseout', () =>{
    nav.style.backgroundColor = 'transparent';
    console.log('saliendo de la navegacion');
});
nav.addEventListener('mouseenter', () =>{
    nav.style.backgroundColor = 'white';
    console.log('entrando al nav');
});

nav.addEventListener('click', () =>{
    nav.style.backgroundColor = 'red';
    console.log('click al nav');
});

nav.addEventListener('dblclick', () =>{
    nav.style.backgroundColor = 'purple';
    console.log('double click al nav');
});




