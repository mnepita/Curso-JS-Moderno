//Rest  - Spread Operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//agregando un elemento con el rest operator sin modificar el arreglo original
// spread con arreglo de indices
const meses2 = [...meses,'Agosto'];
console.log(meses2);

//arreglo con objetos
const producto = { nombre: 'Disco Duro', precio: 300};
const carritoNuevo = [...carrito, producto];
console.log(carritoNuevo);