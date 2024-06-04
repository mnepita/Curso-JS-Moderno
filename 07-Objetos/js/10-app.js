// unir dos objetos

const producto = {
    nombre: 'Monitor 20 pulgadsas',
    precio: 100,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 m',
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

//spread o rest operator
const resultado2 = { ...producto, ...medidas }

console.log(resultado2);

