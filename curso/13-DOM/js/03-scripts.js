// selecionar elementos por ID (son unicos)
const formulario = document.getElementById('formulario');
console.log(formulario);

const footer = document.getElementById('footer');
console.log(footer);

// cuando no existe
const noExiste = document.getElementById('no-existe-id');
console.log(noExiste);//retorna null


//si el ID se duplica, va a retornar solo 1 resultado, el primero que encuentre

