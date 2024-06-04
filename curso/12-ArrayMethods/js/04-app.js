//filter - va a crearte un nuevo arreglo basado en el parametro que es evaluado
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;
resultado = carrito.filter( (producto ) => producto.precio > 400 );
resultado = carrito.filter( (producto ) => producto.precio < 600 );//menores a 600
resultado = carrito.filter( (producto ) => producto.nombre !== 'Audifonos' );//trae todo lo que no es audifonos



console.log(resultado);