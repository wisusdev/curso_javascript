// Notificaciones API
const notificacionBtn = document.querySelector('#notificar');
notificacionBtn.addEventListener('click', () => {
	Notification.requestPermission().then( resultado => {
		console.log('El resultado es ', resultado)
	});
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
	if (Notification.permission == 'granted'){
		const notificacio = new Notification('Esta es una notificaciòn', {
			icon: 'img/ccj.png',
			body: 'Aprendiendo JS',
		});

		notificacio.onclick = function () {
			window.open('https://wisus.dev');
		}
	}
})