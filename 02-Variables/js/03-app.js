//Constantes - no pueden ser re-asignadas 
const producto = 'Monitor';
console.log(producto);

//No se pueden re-asignar
producto = 'Tablet';
console.log(producto);// tira error -> Uncaught TypeError: Assignment to constant variable.


//las constantes siempre necesitan inicializar con un valor 
// tirar error Uncaught SyntaxError: Missing initializer in const declaration (at 03-app.js:11:7)
const myProduct;
