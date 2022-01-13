window.addEventListener('scroll', () => {
    let scrolPX = window.scrollY;
    // console.log('scroll ' + scrolPX);

    let premiun = document.querySelector('.premium');
    let ubicacion = premiun.getBoundingClientRect();
    
    // console.log(ubicacion); // Es metodo nos proporciona mucha informaciòn

    if(ubicacion.top < 387){
        console.log('Elemento visible');
    } else {
        console.log('Elemento aun no visible');
    }    
});