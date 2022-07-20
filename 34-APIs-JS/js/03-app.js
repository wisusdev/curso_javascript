// Detectar si hay conexion a internet o no
window.addEventListener('online', actualizarStatus);
window.addEventListener('offline', actualizarStatus);

function actualizarStatus(){
	if (navigator.onLine){
		console.log('Usted tiene conexion a internet');
	} else {
		console.log('usted no tiene conexion a internet');
	}
}