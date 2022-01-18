// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event listeners
eventListeners();
function eventListeners(){
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', addTweet);

    // Cuando el documento haya cargado
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        
        createHTML()
    });
}

// Funciones
function addTweet(event){
    event.preventDefault();

    // Textarea del formulario
    const tweet = document.querySelector('#tweet').value;
    
    // Validacion
    if (tweet === '') {
        showError('El campo no puede ir vacio');
        return;
    }

    const tweetObj = {
        id : Date.now(),
        body: tweet
    };

    // Añadiendo tweets al arreglo
    tweets = [...tweets, tweetObj];
    
    // Creamos el HTML
    createHTML();

    // Reiniciar formulario
    formulario.reset();
}

// Mostrar mensaje de error
function showError(error){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.classList.add('error');

    // Insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(errorMessage);

    // Elimina el mensaje de alerta
    setTimeout(() => {
        errorMessage.remove();
    }, 3000 );
}

// Muestra un listado de tweets
function createHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            // Boton para eliminar
            const btnDelete = document.createElement('a');
            btnDelete.classList.add('borrar-tweet');
            btnDelete.innerText = 'X';

            // Funciòn para eliminar
            btnDelete.onclick = () => {
                deleteTweet(tweet.id);
            };

            // Crear el HTML
            const li = document.createElement('li');
            li.innerText = tweet.body;

            // Asignar botòn
            li.appendChild(btnDelete);
            
            // insertar en el HTML
            listaTweets.appendChild(li);
        });
    }

    // Almacenar en localStorage
    syncStorage();
}

// Agrega los tweets a localStorage
function syncStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un elemento
function deleteTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    createHTML()
}

// Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    };
}