//findIndex para encontra la posicion en un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach((mes ,i) => {
    if(mes === 'Abril') {
        console.log(`Encontrado ${mes} en el indice ${i}`);
    } else {
        console.log(`El mes no fue encontrado ${i}`);
    }
});

//findIndex - encontra el indice de Abril
const indice = meses.findIndex(mes  => mes ===  'Abril');
console.log(indice);

//no puede encontrar
const indexDic = meses.findIndex(mes  => mes ===  'Diciembre');
console.log(indexDic); // retorna -1 porque no existe en el arreglo

//encontra un indice de un arreglo de objestos
const indice2 = carrito.findIndex( ( producto ) =>  producto.precio === 100);
console.log(indice2);



