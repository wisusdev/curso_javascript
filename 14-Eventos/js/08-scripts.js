// Evitar la propagación con contenido creado

// 1er parrafo
const parafo01 = document.createElement('P');
parafo01.textContent = 'Concierto';
parafo01.classList.add('categoria');
parafo01.classList.add('concierto');

// 2do parrafo
const parafo02 = document.createElement('P');
parafo02.textContent = 'Concierto de Rock';
parafo02.classList.add('titulo');

// 3er parrafo
const parafo03 = document.createElement('p');
parafo03.textContent = '$800 por persona';
parafo03.classList.add('precio');
parafo03.onclick = function(){
    nuevaFuncion(1);
};

// crear el div
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parafo01)
info.appendChild(parafo02)
info.appendChild(parafo03);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info



function nuevaFuncion(id){
    console.log('desde nueva funcion', id);
}