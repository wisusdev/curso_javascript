let cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (event) => {
    //console.log(event.target); // Identificamos a que le estamos dando click
    // console.log(event.target.classList);

    if(event.target.classList.contains('titulo')){
        console.log('Click en titulo');
    }

    if(event.target.classList.contains('precio')){
        console.log('Click en precio');
    }

    if(event.target.classList.contains('card')){
        console.log('Click en card');
    }
});