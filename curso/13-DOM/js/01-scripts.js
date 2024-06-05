/* El DOM - Document Oject Model - todo el HTMl reside en el DOM. Sirve para tener control del documento.

       Document - objeto principal
               Root (html)         
elemento: <head>        elemento: <body>
        |                       |
elemento: <title>        <nav>       <h1>   <a>
        |                  |           |
texto:'mi pagina web'     <a>    'nuevo encabezado'

#document - es todo el html
*/

//acceder a los elems del HTML con document
let elemento;

elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[6];
elemento = document.links[6].classList;
elemento = document.links[6].classNames;

elemento = document.images;
elemento = document.scripts;







console.log(elemento);//retorna algo similar a los arreglos , html collections