//Destructuring nested obj
const producto = {
    nombre: 'Monitor 20 pulgadsas',
    precio: 100,
    disponible: true,
    informacion: {
        medidas: {
            peso:'1kg',
            medida: '1m'
        },
    fabricacion:{
            pais:'china'
        },
    }
}
const {nombre,informacion, informacion: {fabricacion, fabricacion:{pais}}} = producto;
console.log(nombre);
console.log(pais);