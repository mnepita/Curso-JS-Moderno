//eventos con el scroll - sucede en la ventana global window
window.addEventListener('scroll', ()=> {
    console.log('scrolling...');
    const scrollPXX = window.scrollX;
    const scrollPXY = window.scrollY;
    console.log(scrollPXY,scrollPXX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 780) {
        console.log('elemento visible');
    } else {
        console.log('elemento no visible aun, da mas scroll');
    }
});

