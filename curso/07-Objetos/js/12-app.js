//Obj Constructor - automatizar la creacion de objetos

//obj literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 100,
    disponible: true,
}


//obj constructor - se define como una funcion
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const newProduct = new Producto('Monitor 4K', 300);
console.log(newProduct);

const newProduct2 = new Producto('Tablet iPad', 150);
console.log(newProduct2);