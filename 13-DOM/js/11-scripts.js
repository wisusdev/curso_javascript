let btnFlotante = document.querySelector('.btn-flotante');
let footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', showAndHiddenFooter);

function showAndHiddenFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}