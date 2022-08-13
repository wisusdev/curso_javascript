if ('serviceWorker' in navigator){
	navigator.serviceWorker.register('./sw.js')
		.then(register => console.log('Se instalo correctamente', register))
		.catch(error => console.log('Fallò la instalaciòn', error));
} else {
	console.log('Service Worker no soportado');
}