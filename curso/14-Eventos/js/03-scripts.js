//eventos con el teclado
const busqueda = document.querySelector('.busqueda');
let keys =[];

busqueda.addEventListener('keydown', () => {
    console.log('escribiendo..');
});

busqueda.addEventListener('copy', () => {
    console.log('texto copia con CTRL C..');
});

busqueda.addEventListener('paste', () => {
    console.log('CTRL V..pegando..');
});


//todo en uno
busqueda.addEventListener('input', ( e ) => {
    if(e.target.value === '') {
        console.log('fallo la validacion');
    }
});

console.log(keys);