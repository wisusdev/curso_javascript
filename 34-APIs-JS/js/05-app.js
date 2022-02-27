// Detectar cuando estamos viendo la pagina (pestaña del navegador) actual
document.addEventListener('visibilitychange', () => {
	//console.log(document.visibilityState);
	if (document.visibilityState === 'visible'){
		console.log('Ejecutar funcion para reproducir el video');
	} else {
		console.log('pausar el video');
	}
})