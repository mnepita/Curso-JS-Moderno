// Concat - como unir dos arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

//une los dos arreglos
const meses3 = meses.concat(meses2);
console.log(meses3);

//spreadOperator = Rest Operator
const resultado2 = [...meses, ...meses2];
console.log(resultado2);