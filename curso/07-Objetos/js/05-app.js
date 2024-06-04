//crear objeto dentro del objeto

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
console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.fabricacion.pais);