// this - los valores que existen en el mismo objeto
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 100,
    disponible: true,
    mostrarInfo : function () {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
producto.mostrarInfo();

const producto2 = {
    nombre: 'Tablet',
    precio: 90,
    disponible: true,
    mostrarInfo : function () {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
producto2.mostrarInfo();