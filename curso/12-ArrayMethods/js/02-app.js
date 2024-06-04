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

