"use strict"

const producto = {
    nombre: 'Monitor 20 pulgadsas',
    precio: 100,
    disponible: true
}
console.log( producto );

// seal - no se pueden agregar ni elminar props, solo modificar las existentes
Object.seal ( producto );

producto.disponible = false;
console.log( producto );


console.log( Object.isSealed ( producto ));