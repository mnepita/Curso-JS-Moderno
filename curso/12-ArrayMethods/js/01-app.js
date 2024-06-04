// arreglo con indices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if(mes==='Enero') {
        console.log(`${mes} si existe `);
    }


})

//funciona con arreglos con indice
const resultado = meses.includes('Enero');
console.log(resultado);

//busca en un arreglo de objetos
const existe = carrito.some(producto => producto.nombre ==='Celular');
console.log(existe)

//en un arreglo traficinal con .some
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);