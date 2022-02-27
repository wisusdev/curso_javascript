// Speech Api
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
	const speechRecognition = webkitSpeechRecognition;
	const recognition = new speechRecognition();

	recognition.start();

	recognition.onstart = function () {
		salida.classList.add('mostrar');
		salida.textContent = 'Escuchar...';
	}

	recognition.onspeechend = function (){
		salida.textContent = 'Se dejò de grabajar';
		recognition.stop();
	}

	recognition.onerror = function (){
		console.log('Ocurrio un error');
	}

	recognition.onresult = function (event){
		console.log(event.results[0][0]);

		const { confidence, transcript } = event.results[0][0];
		const speech = document.createElement('p');
		speech.innerHTML = `Grabado: ${transcript}`;

		const certeza = document.createElement('p');
		certeza.innerHTML = `Certeza: ${ parseInt(confidence * 100 ) }`;

		salida.appendChild(speech);
		salida.appendChild(certeza);
	}
}