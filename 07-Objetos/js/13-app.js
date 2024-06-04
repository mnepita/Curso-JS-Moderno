//metodos

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 100,
    disponible: true,
}

//comprobar que tenemos valores en el objeto
console.log(Object.keys(producto));//retorna un arreglo con los keys del objeto
console.log(Object.values(producto));//retorna los valores
console.log(Object.entries(producto));//retorna todo en key:value pair