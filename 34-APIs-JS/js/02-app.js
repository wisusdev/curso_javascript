// getClientReac sirve para identificar cuando un elementoes visible
// Insersection Observe nos ayuda a saber cuando un elemento es visible o deja de serlo

document.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {
		//console.log(entries[0]);
		if (entries[0].isIntersecting){
			console.log('El elemento es visible');
		} else {
			console.log('El elemento aun no es visible');
		}
	});

	observer.observe(document.querySelector('.premium'));
});