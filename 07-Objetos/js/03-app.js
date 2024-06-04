//agregar y remover propiedades

const producto = {
    nombre: 'Monitor 20 pulgadsas',
    precio: 100,
    disponible: true
}
console.log(producto);

//agregar  nuevas propieades al objeto
producto.imagen = 'imagen.jpg'
console.log(producto);

//eliminar llave
delete producto.disponible
console.log(producto);

