//eventBubbling - cuando presionas y se propaga por muchos otros lugares

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', () => {
    e.stopPropagation();//previen el event bubbling
    console.log('click en card');
});

infoDiv.addEventListener('click', () => {
    e.stopPropagation();

    console.log('click en info');
});

titulo.addEventListener('click', () => {
    e.stopPropagation();

    console.log('click en titulo');
});