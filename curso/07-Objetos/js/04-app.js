//asignar valores del objeto a una variable

const producto = {
    nombre: 'Monitor 20 pulgadsas',
    precio: 100,
    disponible: true
}
console.log(producto.nombre);

//asignacion a su propia variable
const nombre1 = producto.nombre;


//ES6 - Object Destructuring - extraer del objeto y crear la variable en un solo paso
const {nombre, precio, disponible,} = producto;
console.log(nombre,precio, disponible);
console.log(noExiste); //extrayendo prop que no existe = Uncaught ReferenceError: noExiste is not defined


