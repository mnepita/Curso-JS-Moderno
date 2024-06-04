"use strict"

//Destructuring nested obj
const producto = {
    nombre: 'Monitor 20 pulgadsas',
    precio: 100,
    disponible: true
}

producto.imagen = 'imagen.jpg';
producto.disponible = false;

//como hacer que un objeto no sea modificado
// habilitar modo estricto "use strict"
// obect feeze 'congela' un objt para evitar ser alterado

Object.freeze( producto );
producto.disponible = false // tirar error  Uncaught TypeError: Cannot assign to read only property 
console.log(producto);

// nos indica si un obj esta congelado
console.log( Object.isFrozen ( producto ) );